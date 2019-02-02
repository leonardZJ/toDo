<template>
	<ul class="todoList">
		<todoitem v-for="(todo,index) in todos" :key="index" :todo="todo" :index="index"/>
	</ul>
</template>

<script>
	import {mapState} from 'vuex'
	import todoitem from './todoitem.vue'
	import storageUitl from '../uitl/storageUitl'

	export default {
		computed: {
			...mapState(['todos'])
		},
		components: {
			todoitem
		},
		watch: {
			todos: {
				deep: true,
				handler: function(value) {
					storageUitl.saveItem(value)
				}
			}
		}
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