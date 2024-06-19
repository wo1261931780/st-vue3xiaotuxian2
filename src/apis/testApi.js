import http from '@/utils/http.js'

export function getCategory() {
	return http({
		url: '/api/category',
		method: 'get'
	})
}

// 上面的结构：
// 定义了一个函数，然后导出这个函数
// 函数调用以后，返回一个loader，loader会发送一个请求，请求的url是/api/category，请求的方法是get。
