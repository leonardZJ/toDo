<template>
	<div>
		<li class="todoItem" @mouseenter="isEnter(true)" @mouseleave="isEnter(false)" :key="index">
			<label>
				<input type="checkbox" v-model="todo.complete">
				<span>{{ todo.content }}</span>
			</label>
			<button class="btn" v-show="isShow" @click="deletetodo(index)">删除</button>
		</li>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isShow: false
			}
		},
		props: {
			todo: Object,
			index: Number
		},
		methods: {
			isEnter: function(value) {
				this.isShow = value
			},
			deletetodo: function(index) {
				this.$store.dispatch('deletetodo',index)
			}
		}
	}
</script>

<style>
	.todoItem {
		border-bottom: 1px solid #000;
		border-left: 1px solid #000;
		border-right: 1px solid #000;
		line-height: 35px;
		margin: 0 auto;
		position: relative;
	}
	.todoItem:hover {
		background-color: #eee;
	}
	.btn {
		float: right;
	}
</style>