<template>
	<div class="app">
		<todoHeader :additem="additem"/>
		<todoList :items="items" :deleteitem="deleteitem"/>
		<todoFooter :items="items" :deleteCompleteItem="deleteCompleteItem" :selectAll="selectAll"/>
	</div>
</template>

<script>
	import todoHeader from './components/todoHeader.vue'
	import todoList from './components/todoList.vue'
	import todoFooter from './components/todoFooter.vue'

	export default {
		data() {
			return {
				items: [
					{
						content: 'xxxx',
						complete: false
					},
					{
						content: 'yyyy',
						complete: false
					},
					{
						content: 'zzzz',
						complete: false
					}
				]
			}
		},
		components: {
			todoHeader,
			todoList,
			todoFooter
		},
		methods: {
			additem(item) {
				this.items.unshift(item)
			},
			deleteitem(index) {
				if(window.confirm(`确定删除事项：${this.items[index].content} 吗？`))
				this.items.splice(index,1)
			},
			deleteCompleteItem: function() {
				this.items = this.items.filter(item => !item.complete)
				console.log(this.items)
			},
			selectAll: function(value) {
				this.items.forEach(item => item.complete = value)
			}
		}
	}
</script>

<style>
	.app {
		width: 800px;
		border: 1px solid #000;
		border-radius: 5px;
		margin: 0 auto;
	}
</style>