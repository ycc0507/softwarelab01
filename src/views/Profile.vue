<template>
  <div class="profile-settings">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>个人设置</span>
      </div>
      <el-form :model="form" label-width="100px" :rules="rules" ref="profileForm">
        <el-form-item label="账号" prop="username">
          <el-input v-model="form.username" disabled></el-input>
        </el-form-item>
        <el-form-item label="用户名" prop="name">
          <el-input v-model="form.name" ></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">保存</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { getUserInfo, update } from "@/api/users";

export default {
  data() {
    return {
      form: {},
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],

      }
    };
  },
  mounted() {
    const user = JSON.parse(localStorage.getItem('user'));
    getUserInfo(user).then(res=>{
      // console.log(res.data)
      this.form = res.data.data
    })
  },
  methods: {
    onSubmit() {
      this.$refs.profileForm.validate((valid) => {
        if (valid) {
          update(this.form).then(res => {
            if(res.data.code == 0){
              alert('修改成功');
            }
            else{
              alert('修改失败');
            }
          })
        } else {
          return false;
        }
      });
    },
  }
};
</script>

<style scoped>
.profile-settings {
  padding: 20px;
}
</style>

