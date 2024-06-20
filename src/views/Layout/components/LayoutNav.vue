<script setup>
import {useCounterStore} from '@/stores/counter.ts'
import {useRouter} from 'vue-router'

const userStore = useCounterStore()
const router = useRouter()
const confirm = () => {
	console.log('用户要退出登录了')
	// 退出登录业务逻辑实现
	// 1.清除用户信息 触发action
	userStore.clearUserInfo()
	// 2.跳转到登录页
	router.push('/login')
}
</script>

<template>
	<nav class = "app-topnav">
		<div class = "container">
			<ul>
				<!-- 多模版渲染 区分登录状态和非登录状态 -->
				
				<!-- 适配思路: 登录时显示第一块 非登录时显示第二块  是否有token -->
				<template v-if = "userStore">
					<li><a href = "javascript:"><i class = " iconfont icon-user"></i>{{ userStore }}</a></li>
					<li>
						<el-popconfirm cancel-button-text = "取消" confirm-button-text = "确认" title = "确认退出吗?"
						               @confirm = "confirm">
							<template #reference>
								<a href = "javascript:">退出登录</a>
							</template>
						</el-popconfirm>
					</li>
					<li><a href = "javascript:">我的订单</a></li>
					<li><a href = "javascript:">会员中心</a></li>
				</template>
				<template v-else>
					<li><a href = "javascript:" @click = "$router.push('/login')">请先登录</a></li>
					<li><a href = "javascript:">帮助中心</a></li>
					<li><a href = "javascript:">关于我们</a></li>
				</template>
			</ul>
		</div>
	</nav>
</template>


<style lang = "scss" scoped>
.app-topnav {
	background: #333;
	
	ul {
		align-items: center;
		display: flex;
		height: 53px;
		justify-content: flex-end;
		
		li {
			a {
				color: #cdcdcd;
				display: inline-block;
				line-height: 1;
				padding: 0 15px;
				
				i {
					font-size: 14px;
					margin-right: 2px;
				}
				
				&:hover {
					color: $xtxColor;
				}
			}
			
			~ li {
				a {
					border-left: 2px solid #666;
				}
			}
		}
	}
}
</style>
