<script setup>
// import LayoutHeaderUl from './LayoutHeaderUl.vue'
// import HeaderCart from './HeaderCart.vue'

import {getCategoryApi} from '@/apis/layout.js'

const getCategory = async () => {
	const res = await getCategoryApi()
	console.log(res)
}
onMounted(() => {
	getCategory()
})
</script>

<template>
	<header class = "app-header">
		<div class = "container">
			<h1 class = "logo">
				<RouterLink to = "/">小兔鲜</RouterLink>
			</h1>
			<!--			<LayoutHeaderUl/>-->
			<div class = "search">
				<i class = "iconfont icon-search"></i>
				<input placeholder = "搜一搜" type = "text">
			</div>
			<!-- 头部购物车 -->
			<!--			<HeaderCart/>-->
		</div>
	</header>
</template>


<style lang = "scss" scoped>
.app-header {
	background: #fff;
	
	.container {
		align-items: center;
		display: flex;
	}
	
	.logo {
		width: 200px;
		
		a {
			background: url('@/assets/logo.svg') no-repeat center 18px / contain;
			display: block;
			height: 132px;
			text-indent: -9999px;
			width: 100%;
		}
	}
	
	
	.search {
		border-bottom: 1px solid #e7e7e7;
		height: 32px;
		line-height: 32px;
		position: relative;
		width: 170px;
		
		.icon-search {
			font-size: 18px;
			margin-left: 5px;
		}
		
		input {
			color: #666;
			padding-left: 5px;
			width: 140px;
		}
	}
	
	.cart {
		width: 50px;
		
		.curr {
			display: block;
			height: 32px;
			line-height: 32px;
			position: relative;
			text-align: center;
			
			.icon-cart {
				font-size: 22px;
			}
			
			em {
				background: $helpColor;
				border-radius: 10px;
				color: #fff;
				font-family: Arial;
				font-size: 12px;
				font-style: normal;
				line-height: 1;
				padding: 1px 6px;
				position: absolute;
				right: 0;
				top: 0;
			}
		}
	}
}
</style>
