import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
// 配置 element-plus
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		vueJsx(),
		vueDevTools(),
		AutoImport({
			resolvers: [ElementPlusResolver()],
		}),
		Components({
			// resolvers: [ElementPlusResolver()],
			// 使用我们制定的样式
			resolvers: [ElementPlusResolver({importStyle: 'sass'})],
		}),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	},
	// 下面也是重写样式表的一部分
	css: {
		preprocessorOptions: {
			scss: {
				// 导入自定义样式表进行覆盖
				additionalData: `
@use "@/styles/element/index.scss" as *;
@use "@/styles/var.scss" as *;
        `
			}
		}
	}
})
