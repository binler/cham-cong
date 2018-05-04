<template>
<el-form ref="form" :model="form" label-width="120px">
  <el-form-item>
    <el-date-picker v-model="form.date" type="date" placeholder="Chọn ngày" format="yyyy/MM/dd">
    </el-date-picker>
  </el-form-item>
  <el-form-item v-for="(member, index) in members" :label="member.name" :key="index">
    <el-radio-group v-model="form.timeWork">
      <el-radio-button label="1">1 ngày</el-radio-button>
      <el-radio-button label="0.5">0.5 ngày</el-radio-button>
      <el-radio-button label="0">Không làm</el-radio-button>
    </el-radio-group>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="handleChamCong">Submit</el-button>
    <el-button>Cancel</el-button>
  </el-form-item>
</el-form>
</template>

<script>
import {
  db
} from '../firebase'
export default {
  data () {
    return {
      form: {
        listMember: [],
        date: this.currentDate(),
        title: 'Chấm công',
        timeWork: []
      }
    }
  },
  firebase: {
    members: db.ref('members'),
    timeKeepings: db.ref('timekeepings')
  },
  methods: {
    handleChamCong () {
      console.log(this.form)
    },
    currentDate () {
      var date = new Date()
      return date.getFullYear() + '/' + date.getDate() + '/' + (date.getMonth() + 1)
    }
  }
}
</script>
