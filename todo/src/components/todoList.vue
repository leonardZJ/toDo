<template>
	<ul class="todoList">
		<todoitem v-for="(item,index) in items" :key="index" :item="item" :index="index" :deleteitem="deleteitem"/>
	</ul>
</template>

<script>
	import todoitem from './todoitem.vue'

	export default {
		components: {
			todoitem
		},
		props: {
			deleteitem: Function,
			items: Array
		},
		
	}
</script>

<style>
	.todoList {
		width: 90%;
		border-top: 1px solid #000;
		list-style: none;
		padding: 0;
		margin: 1px 5% 0 5%;
	}
	
</style>