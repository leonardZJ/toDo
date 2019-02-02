<template>
		<input type="text" class="todoHeader" placeholder="请输入你的任务名称，按回车键确认" v-model="content" @keyup.enter="addtodo">
</template>

<script>
	export default {
		data() {
			return {
				content: ''
			}
		},
		methods: {
			addtodo: function() {
				//判断输入是否为空
				const inputTodo = this.content.trim()
				if(!inputTodo) {
					return
				}
				//根据输入封装todo对象
				const todo = {
					complete: false,
					content:inputTodo
				}
				//添加到todos
				this.$store.dispatch('addtodo',todo)
				//清除输入框
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