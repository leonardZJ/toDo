export default {
	ADDTODO: function(state,todo) {
		state.todos.push(todo)
	},
	DELETETODO: function(state,index) {
		state.todos.splice(index,1)
	},
	DELETECOMPLETETODO: function(state) {
		state.todos = state.todos.filter(todo => !todo.complete)
	},
	RECEIVE_TODOS: function(state,todos) {
		state.todos = todos
	}
}