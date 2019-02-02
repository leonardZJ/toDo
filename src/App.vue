<template>
	<div class="app">
		<todoHeader/>
		<todoList/>
		<todoFooter/>
	</div>
</template>

<script>
	import todoHeader from './components/todoHeader.vue'
	import todoList from './components/todoList.vue'
	import todoFooter from './components/todoFooter.vue'
	import storageUitl from './uitl/storageUitl'

	export default {
		components: {
			todoHeader,
			todoList,
			todoFooter
		},
		mounted: function() {
			this.$store.dispatch('reqTodos')
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