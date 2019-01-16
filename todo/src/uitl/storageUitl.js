/*
抽取存储事项的方法作为工具模块
*/
export default {
	saveItem(value) {
		window.localStorage.setItem('items_key',JSON.stringify(value))
	},
	getItem() {
		return window.localStorage.getItem('items_key') || '[]'
	}
}