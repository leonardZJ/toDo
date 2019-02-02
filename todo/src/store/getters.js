export default {
	isDone: function(state) {
		return state.todos.reduce((preTotal,todo) => preTotal + (todo.complete? 1: 0),0)
	},
}