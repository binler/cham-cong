<template>
<el-form ref="form" :model="form" label-width="120px">
  <el-form-item label="Tên">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="Lương theo ngày">
    <el-input type="number" v-model="form.money"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="createMember">Create</el-button>
    <el-button>Cancel</el-button>
  </el-form-item>
</el-form>
</template>
<script>
import {
  db
} from '../firebase'
export default {
  data() {
    return {
      form: {
        name: '',
        money: 300000,
      }
    }
  },
  firebase: {
    members: db.ref('members')
  },
  methods: {
    createMember() {
      if (this.form.name != '') {
        let member = {
          name: this.form.name,
          money: this.form.money,
          date: this.currentDate()
        }
        this.$firebaseRefs.members.push(member);
        this.form.name = '';
      }
    },
    currentDate() {
        var date = new Date();
        return date.getFullYear() + '/' + date.getDate() + '/' + (date.getMonth() + 1);
    }
  }
}
</script>
