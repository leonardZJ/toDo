<template>
		<li class="todoItem" @mouseenter="isEnter(true)" @mouseleave="isEnter(false)" :style="{ backgroundColor: bgc}">
			<label>
				<input type="checkbox" v-model="item.complete">
				<span>{{ item.content }}</span>
			</label>
			<button class="btn" v-show="isShow" @click="deleteItem(index)">删除</button>
		</li>
</template>

<script>
	export default {
		data() {
			return {
				isShow: false,
				bgc: '#fff'
			}
		},
		props: {
			index: Number,
			item: Object,
			items: Array,
			deleteitem: Function
		},
		methods: {
			isEnter: function(value) {
				if(value) {
					this.isShow = true
					this.bgc = '#eee'
				} else {
					this.isShow = false
					this.bgc = '#fff'
				}
			},
			deleteItem: function(index) {
				this.deleteitem(index)
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
	.btn {
		float: right;
	}
</style>