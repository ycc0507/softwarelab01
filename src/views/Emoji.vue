<template>
    <div class="emojis-container">
        <el-card class="box-card">
        <div slot="header" class="header">
          <span class="header-title">旅游景点管理</span>
          <div class="header-controls">
            <el-input v-model="searchTitle" placeholder="输入标题进行搜索" class="search-input"></el-input>
            <el-button type="primary" @click="fetchData">搜索</el-button>
            <el-button type="success" @click="handleAddTour">添加景点</el-button>
          </div>
        </div>

        <el-table :data="emojis" style="width: 100%">
          <el-table-column label="表情" width="120">
            <template slot-scope="scope">
              <el-image
                  :src="getImgUrl(scope.row.id)"
                  class="img"
                  :alt="scope.row.title"
                  fit="cover"
                  lazy
              />
            </template>
          </el-table-column>
          <el-table-column prop="emoji" label="表情名称" min-width="180"></el-table-column>
          <el-table-column prop="username" label="发送人" min-width="100"></el-table-column>
          <el-table-column prop="date" label="发送时间" min-width="100"></el-table-column>
          <el-table-column label="操作" min-width="180">
            <template slot-scope="scope">
              <el-button @click="handleEditTour(scope.row)" type="text" size="small">编辑</el-button>
              <el-button @click="handleDeleteTour(scope.row)" type="text" size="small">删除</el-button>
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

  
      <el-dialog title="编辑景点" :visible.sync="dialogVisible">
        <el-form :model="form">
          <el-form-item label="景点名称" :label-width="formLabelWidth">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="别名" :label-width="formLabelWidth">
            <el-input v-model="form.alias"></el-input>
          </el-form-item>
          <el-form-item label="评论数" :label-width="formLabelWidth">
            <el-input v-model="form.reviewCount" type="number"></el-input>
          </el-form-item>
          <el-form-item label="评分" :label-width="formLabelWidth">
            <el-input v-model="form.rating" type="number"></el-input>
          </el-form-item>
          <el-form-item label="精选评论" :label-width="formLabelWidth">
            <el-input v-model="form.featuredReview"></el-input>
          </el-form-item>
          <el-form-item label="国家" :label-width="formLabelWidth">
            <el-input v-model="form.country"></el-input>
          </el-form-item>
          <el-form-item label="城市" :label-width="formLabelWidth">
            <el-input v-model="form.city"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleSaveTour">保存</el-button>
        </div>
      </el-dialog>
    </div>
  </template>
  
  <script>
  import { emojipage } from '@/api/emoji';
  export default {
    data() {
    return {
      searchTitle: '',
      emojis: [],
/*        emojis: [
         { id: "0001", emoji: '呵呵', username: '张三', date: '2021-01-01' },
         { id: "0002", emoji: '嘿嘿', username: '李四', date: '2021-01-02' },
         { id: "0003", emoji: '笑哭了', username: '王五', date: '2021-01-03' },
         { id: "0004", emoji: '吐舌', username: '赵六', date: '2021-01-04' },
         { id: "0005", emoji: '翻白眼', username: '钱七', date: '2021-01-05' },
         { id: "0006", emoji: '脸发烧', username: '孙八', date: '2021-01-06' },
         { id: "0007", emoji: '害怕', username: '周九', date: '2021-01-07' },
         { id: "0008", emoji: '怒火中烧', username: '吴十', date: '2021-01-08' },
         { id: "0009", emoji: '睡着了', username: '郑十一', date: '2021-01-09' },
         { id: "0010", emoji: '放声大哭', username: '王十二', date: '2021-01-10' },
       ], */
      dialogVisible: false,
      form: {},
      formLabelWidth: '100px',
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
    getImgUrl(id) {
      return require('@/assets/'+ id + '.png');
    },
    fetchData() {
      this.loadData()
    },
    //加载数据
    loadData() {
        emojipage(this.searchTitle, this.currentPage, this.pageSize).then(res => {
          console.log(res.data.data.records);
          this.emojis = res.data.data.records
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
}

  };
  </script>
  
  <style scoped>
  .tours-container {
    padding: 20px;
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .dialog-footer {
    text-align: right;
  }
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
  
  