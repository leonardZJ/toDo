import storageUitl from '../uitl/storageUitl'

export default {
	addtodo: function({commit},todo) {
		commit('ADDTODO',todo)
	},
	deletetodo: function({commit,state},index) {
		if(window.confirm(`确定删除事项: ${state.todos[index].content} 吗？`))
		commit('DELETETODO',index)
	},
	deleteCompleteTodo: function({commit}) {
		commit('DELETECOMPLETETODO')
	},
	reqTodos: function({commit}) {
		setTimeout(() => {
			const todos = JSON.parse(storageUitl.getItem())
			commit('RECEIVE_TODOS',todos)
		},1000)
	}
}