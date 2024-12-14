<template>
  <div class="users-container">
    <el-card class="box-card">
      <div slot="header" class="header">
        <span class="header-title">用户管理</span>
        <div class="header-controls">
          <el-input v-model="searchParam" placeholder="输入标题进行搜索" class="search-input"></el-input>
          <el-button type="primary" @click="fetchData">搜索</el-button>
        </div>
      </div>
      <el-table :data="users" style="width: 100%">
        <el-table-column prop="username" label="账号" min-width="180"></el-table-column>
        <el-table-column prop="name" label="用户名" min-width="180"></el-table-column>
        <el-table-column prop="email" label="邮箱" min-width="180"></el-table-column>
<!--        <el-table-column prop="intro" label="签名" min-width="180"></el-table-column>-->
        <el-table-column prop="state"label="有/无管理员权限" width="180">
          <template slot-scope="scope">
           <el-switch
                v-model="scope.row.state"
                active-color="#13ce66"
                inactive-color="#ff4949"
                :active-value="1"
                :inactive-value="2"
                @click="handleSwitch( $event, scope.row, scope.row.$username)"
            />
          </template>
        </el-table-column>
      </el-table>

      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="pageSize"
          :total="totalItems"
          layout="total, sizes, prev, pager, next, jumper"
      />
    </el-card>

  </div>
</template>

<script>
import { permisson } from '@/api/users';
import { userPage } from '@/api/users';
export default {
  data() {
    return {
      dialogTitle: '',
      searchParam: '',
      users: [],
      users:[
        { username: 'admin', name: '管理员', email: '111', state: 1},
        { username: 'user', name: '用户', email: '222', state: 2},
      ],
      form: {},
      formLabelWidth: '80px',
      totalItems: 0,
      currentPage: 1,
      pageSize: 10,
    };
  },
  mounted() {
    this.currentPage = 1
    this.loadData()
  },
  methods: {
    fetchData() {
      this.loadData()
    },
    //加载数据
    loadData() {
      userPage(this.searchParam, this.currentPage, this.pageSize).then(res => {
        this.records = res.data.data.records
        this.totalItems = res.data.data.total
      })
    },
    handleCurrentChange(page) {
      this.currentPage = page;
      this.loadData();
    },
    handleSizeChange(size) {
      this.pageSize = size;
      this.loadData();
    },
    handleSwitch(data, row, username) {
      console.log(data, row, username);
      permisson(data, row, username).then(res => {
        if (res.data.code == 0) {
          alert('操作成功');
        } else {
          alert('操作失败');
        }
      });
    }
},
}
</script>

<style scoped>
.tours-container {
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}

.dialog-footer {
  text-align: right;
}

.header-title {
  font-size: 18px;
  font-weight: bold;
}

.header-controls {
  display: flex;
  align-items: center;
}

.search-input {
  width: 300px;
  margin-right: 10px; /* Adjust spacing between input and buttons */
}
</style>

