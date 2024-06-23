<script setup>
// vueUse
import {useScroll} from '@vueuse/core'
import {useCategory} from '@/stores/Category.ts'

const category = useCategory()
// 相当于，把请求统一放到上面管理
const {y} = useScroll(window) //基于 Windows 系统的滚动条
// vueuse就是基于组合式 api，官方帮助我们封装好了很多函数

</script>

<template>
	<div :class = "{ show: y > 78 }" class = "app-header-sticky">
		<div class = "container">
			<RouterLink class = "logo" to = "/"/>
			<!-- 导航区域 -->
			
			<!--			<LayoutHeaderUl/>-->
			<ul class = "app-header-nav">
				<li class = "home">
					<RouterLink to = "/">首页</RouterLink>
				</li>
				<li v-for = "(item) in category.categoryList" :key = "item.id" class = "home">
					<RouterView to = "/">{{ item.name }}</RouterView>
				</li>
			</ul>
			<div class = "right">
				<RouterLink to = "/">品牌</RouterLink>
				<RouterLink to = "/">专题</RouterLink>
			</div>
		</div>
	</div>
</template>


<style lang = "scss" scoped>
.app-header-sticky {
	background-color: #fff;
	border-bottom: 1px solid #e4e4e4;
	height: 80px;
	left: 0;
	opacity: 0;
	position: fixed;
	top: 0;
	transform: translateY(-100%);
	// 此处为关键样式!!!
	// 状态一：往上平移自身高度 + 完全透明
	width: 100%;
	z-index: 999;
	
	// 状态二：移除平移 + 完全不透明
	&.show {
		opacity: 1;
		transform: none;
		transition: all 0.3s linear;
	}
	
	.container {
		align-items: center;
		display: flex;
	}
	
	.logo {
		background: url("@/assets/images/logo.png") no-repeat right 2px;
		background-size: 160px auto;
		height: 80px;
		width: 200px;
	}
	
	.right {
		border-left: 2px solid $xtxColor;
		display: flex;
		padding-left: 40px;
		text-align: center;
		width: 220px;
		
		a {
			font-size: 16px;
			line-height: 1;
			margin-right: 40px;
			width: 38px;
			
			&:hover {
				color: $xtxColor;
			}
		}
	}
}
</style>
