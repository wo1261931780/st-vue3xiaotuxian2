import axios from 'axios';

const http = axios.create({
	// baseURL: process.env.REACT_APP_API_URL,
	baseURL: "http://localhost:8080/api/list",
	// 基础地址就是发送的请求的地址
	// 相同的部分使用变量代替，简化代码
	timeout: 5000, // 超时时间
});
// 请求拦截
http.interceptors.request.use(
	config => {
		// 在发送请求之前做一些处理
		return config
	}, e => Promise.reject(e)
)
// 响应拦截
http.interceptors.response.use(
	res => {
		res.data, e => {
			return Promise.reject(e)
		}
	}
)
// 创建完了实例以后，直接导出
export default http;
