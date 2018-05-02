<template>
<el-form ref="form" :model="form" label-width="120px">
  <el-date-picker v-model="timeWork" type="date" placeholder="Pick a day">
  </el-date-picker>
  <el-form-item>
      <el-checkbox v-for="member in members" v-model="listMember" label="member.name" border></el-checkbox>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="handleChamCong">Create</el-button>
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
      createTimeKeepings: [],
      listMember: []
    }
  },
  firebase: {
    members: db.ref('members'),
    timeKeepings: db.ref('timekeepings')
  },
  methods: {
    handleChamCong() {

    }
  }
}
</script>
