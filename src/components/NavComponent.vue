<template>
<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :router="true">
  <el-menu-item :route="{name: 'HomeComponent'}" index="1">Trang chủ</el-menu-item>
  <el-menu-item :route="{name: 'MemberComponent'}" index="2">Nhân viên</el-menu-item>
  <el-menu-item :route="{name: 'ChamCongComponent'}" index="3">Chấm công</el-menu-item>
</el-menu>
</template>
<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  }
}
</script>
