<template>
	<div class="row at-row flex-center">
		<div class="col-md-24">
			<ul>
			<li v-for="member in members" v-bind:key="member['.key']">{{member.name}}</li>
		</ul>
		</div>
		<div class="col-md-4">
			<at-input v-model="inputMember" placeholder="Member"></at-input>
		</div>
		<at-button type="primary" @click="createMember">Submit</at-button>
	</div>	
</template>
<script>
import {db} from '../firebase'
	export default {
		data () {
			return {
			  inputMember: ''
			}
		},
		firebase: {
			members: db.ref('members')
		},
		methods: {
			createMember() {
				if(this.inputMember != '') {
					let member = {
						name: this.inputMember,
						money: 300000
					}
					this.$firebaseRefs.members.push(member);
					this.inputMember = '';
				}
			}
		}
	}
</script>