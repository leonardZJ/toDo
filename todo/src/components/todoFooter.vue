<template>
	<div class="todoFooter">
		<input type="checkbox" v-model="isAllcheck">
		<span>已完成{{ isDone }}/全部{{ todos.length }}</span>
		<button class="btn" v-show="isDone" @click="deleteCompleteTodo">清除已完成任务</button>
	</div>
</template>

<script>
	import {mapState,mapGetters,mapActions} from 'vuex'

	export default {
		computed: {
			...mapState(['todos']),
			...mapGetters(['isDone']),
			isAllcheck: {
				get () {
					return this.isDone === this.todos.length && this.todos.length > 0
				},
				set (value) { //value为当前checkbox传回来的最新值
					this.todos.forEach(todo => todo.complete = value)
				}
			}
		},
		methods: {
			...mapActions(['deleteCompleteTodo'])
		}
	}
</script>

<style>
	.todoFooter {
		width: 90%;
		height: 36px;
		line-height: 36px;
		margin: 20px 5%;
		position: relative;
	}
	.btn {
		position: absolute;
		right: 20px;
		top: 6px;
	}
</style>