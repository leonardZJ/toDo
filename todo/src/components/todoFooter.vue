<template>
	<div class="todoFooter">
		<input type="checkbox" v-model="isAllcheck">
		<span>已完成{{ isDone }}/全部{{ items.length }}</span>
		<button class="btn" v-show="isDone" @click="deleteCompleteItem">清除已完成任务</button>
	</div>
</template>

<script>
	export default {
		props: {
			items: Array,
			deleteCompleteItem: Function,
			selectAll: Function
		},
		computed: {
			isDone: function() {
				return this.items.reduce((preTotal,items) => preTotal + (items.complete? 1: 0),0)
			},
			isAllcheck: {
				get () {
					return this.isDone === this.items.length && this.items.length > 0
				},
				set (value) { //value为当前checkbox传回来的最新值
					this.selectAll(value)
				}
			}
		},
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