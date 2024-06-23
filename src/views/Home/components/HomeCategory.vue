<script setup>
import {useCategory} from '@/stores/Category.ts'

const categoryStore = useCategory()
</script>

<template>
	<div class = "home-category">
		<ul class = "menu">
			<li v-for = "item in categoryStore.categoryList" :key = "item.id">
				<RouterLink to = "/">{{ item.name }}</RouterLink>
				<RouterLink v-for = "i in item.children.slice(0,2)" :key = "i" to = "/">{{ i.name }}</RouterLink>
				<!-- 弹层layer位置 -->
				<div class = "layer">
					<h4>分类推荐 <small>根据您的购买或浏览记录推荐</small></h4>
					<ul>
						<li v-for = "i in item.goods" :key = "i.id">
							<RouterLink to = "/">
								<img alt = "i.picture"/>
								<div class = "info">
									<p class = "name ellipsis-2">
										{{ i.name }}
									</p>
									<p class = "desc ellipsis">{{ i.desc }}</p>
									<p class = "price"><i>¥</i>{{ i.price }}</p>
								</div>
							</RouterLink>
						</li>
					</ul>
				</div>
			</li>
		</ul>
	</div>
</template>


<style lang = "scss" scoped>
.home-category {
	background: rgba(0, 0, 0, 0.8);
	height: 500px;
	position: relative;
	width: 250px;
	z-index: 99;
	
	.menu {
		li {
			height: 55px;
			line-height: 55px;
			padding-left: 40px;
			
			&:hover {
				background: $xtxColor;
			}
			
			a {
				color: #fff;
				margin-right: 4px;
				
				&:first-child {
					font-size: 16px;
				}
			}
			
			.layer {
				background: rgba(255, 255, 255, 0.8);
				display: none;
				height: 500px;
				left: 250px;
				padding: 0 15px;
				position: absolute;
				top: 0;
				width: 990px;
				
				h4 {
					font-size: 20px;
					font-weight: normal;
					line-height: 80px;
					
					small {
						color: #666;
						font-size: 16px;
					}
				}
				
				ul {
					display: flex;
					flex-wrap: wrap;
					
					li {
						background: #fff;
						border: 1px solid #eee;
						border-radius: 4px;
						height: 120px;
						margin-bottom: 15px;
						margin-right: 15px;
						width: 310px;
						
						&:nth-child(3n) {
							margin-right: 0;
						}
						
						a {
							align-items: center;
							display: flex;
							height: 100%;
							padding: 10px;
							width: 100%;
							
							&:hover {
								background: #e3f9f4;
							}
							
							img {
								height: 95px;
								width: 95px;
							}
							
							.info {
								line-height: 24px;
								overflow: hidden;
								padding-left: 10px;
								
								.name {
									color: #666;
									font-size: 16px;
								}
								
								.desc {
									color: #999;
								}
								
								.price {
									color: $priceColor;
									font-size: 22px;
									
									i {
										font-size: 16px;
									}
								}
							}
						}
					}
				}
			}
			
			// 关键样式  hover状态下的layer盒子变成block
			&:hover {
				.layer {
					display: block;
				}
			}
		}
	}
}
</style>
