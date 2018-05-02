<template>
<div>
    <CreateMember></CreateMember>
    <el-table :data="members" style="width: 100%">
      <el-table-column label="Thời gian" width="180">
        <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
              </template>
      </el-table-column>
      <el-table-column label="Nhân viên" width="180">
        <template slot-scope="scope">
                <el-popover trigger="hover" placement="top">
                  <p>Tiền: {{ scope.row.money }}</p>
                  <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                  </div>
                </el-popover>
              </template>
      </el-table-column>
      <el-table-column label="Operations">
        <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="danger"
                  @click="removeMember(scope.row)">Delete</el-button>
              </template>
      </el-table-column>
    </el-table>
</div>
</template>
<script>
import {
  db
} from '../firebase'
import CreateMember from '@/components/CreateMember'
export default {
  firebase: {
    members: db.ref('members')
  },
  components: {
    CreateMember
  },
  methods: {
    removeMember(member) {
      this.$firebaseRefs.members.child(member['.key']).remove();
    }
  }
}
</script>
