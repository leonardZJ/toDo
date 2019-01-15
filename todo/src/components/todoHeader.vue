<template>
		<input type="text" class="todoHeader" placeholder="请输入你的任务名称，按回车键确认" v-model="content" @keyup.enter="add">
</template>

<script>
	export default {
		data() {
			return {
				content: ''
			}
		},
		props: {
			additem: Function
		},
		methods: {
			add: function() {
				const {content,additem} = this
				let item = {
					content,
					complete: false
				}
				additem(item)
				this.content = ''
			}
		}
	}
</script>

<style>
	.todoHeader {
		width: 90%;
		height: 30px;
		margin: 20px 5% 20px 5%;
		border-radius: 5px;
	}
</style>