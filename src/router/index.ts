import {createRouter, createWebHistory} from 'vue-router'
import Layout from '@/views/Layout/index.vue'
import login from '@/views/Login/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	// 配置 path 和 components 对应关系的位置
	routes: [
		{
			path: '/',
			component: Layout,
			// 里面的子类就是二级路由
			children: [
				{path: 'category', component: Category},
				{path: '/', component: Home}
			]
		},
		{path: '/login', component: login},
		// {
		//   path: '/',
		//   name: 'home',
		//   components: HomeView
		// },
		// {
		//   path: '/about',
		//   name: 'about',
		//   // route level code-splitting
		//   // this generates a separate chunk (About.[hash].js) for this route
		//   // which is lazy-loaded when the route is visited.
		//   components: () => import('../views/AboutView.vue')
		// }
	]
})

export default router
