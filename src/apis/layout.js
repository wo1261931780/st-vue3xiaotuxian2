import http from '@/utils/http.js'

export function getCategoryApi() {
	return http({
		url: '/api/category',
		method: 'get'
	})
}
