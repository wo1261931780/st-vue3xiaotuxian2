<template>
	<footer class = "app_footer">
		<!-- 联系我们 -->
		<div class = "contact">
			<div class = "container">
				<dl>
					<dt>客户服务</dt>
					<dd><i class = "iconfont icon-kefu"></i> 在线客服</dd>
					<dd><i class = "iconfont icon-question"></i> 问题反馈</dd>
				</dl>
				<dl>
					<dt>关注我们</dt>
					<dd><i class = "iconfont icon-weixin"></i> 公众号</dd>
					<dd><i class = "iconfont icon-weibo"></i> 微博</dd>
				</dl>
				<dl>
					<dt>下载APP</dt>
					<dd class = "qrcode"><img src = "@/assets/images/none.png"/></dd>
					<dd class = "download">
						<span>扫描二维码</span>
						<span>立马下载APP</span>
						<a href = "javascript:">下载页面</a>
					</dd>
				</dl>
				<dl>
					<dt>服务热线</dt>
					<dd class = "hotline">400-0000-000 <small>周一至周日 8:00-18:00</small></dd>
				</dl>
			</div>
		</div>
		<!-- 其它 -->
		<div class = "extra">
			<div class = "container">
				<div class = "slogan">
					<a href = "javascript:">
						<i class = "iconfont icon-footer01"></i>
						<span>价格亲民</span>
					</a>
					<a href = "javascript:">
						<i class = "iconfont icon-footer02"></i>
						<span>物流快捷</span>
					</a>
					<a href = "javascript:">
						<i class = "iconfont icon-footer03"></i>
						<span>品质新鲜</span>
					</a>
				</div>
				<!-- 版权信息 -->
				<div class = "copyright">
					<p>
						<a href = "javascript:">关于我们</a>
						<a href = "javascript:">帮助中心</a>
						<a href = "javascript:">售后服务</a>
						<a href = "javascript:">配送与验收</a>
						<a href = "javascript:">商务合作</a>
						<a href = "javascript:">搜索推荐</a>
						<a href = "javascript:">友情链接</a>
					</p>
					<p>CopyRight © 小兔鲜儿</p>
				</div>
			</div>
		</div>
	</footer>
</template>

<style lang = "scss" scoped>
.app_footer {
	background-color: #f5f5f5;
	overflow: hidden;
	padding-top: 20px;
	
	.contact {
		background: #fff;
		
		.container {
			display: flex;
			padding: 60px 0 40px 25px;
		}
		
		dl {
			border-right: 1px solid #f2f2f2;
			color: #999;
			height: 190px;
			padding: 0 72px;
			text-align: center;
			
			&:first-child {
				padding-left: 0;
			}
			
			&:last-child {
				border-right: none;
				padding-right: 0;
			}
		}
		
		dt {
			font-size: 18px;
			line-height: 1;
		}
		
		dd {
			border: 1px solid #ededed;
			float: left;
			height: 92px;
			margin: 36px 12px 0 0;
			padding-top: 10px;
			width: 92px;
			
			.iconfont {
				color: #666;
				display: block;
				font-size: 36px;
			}
			
			&:hover {
				.iconfont {
					color: $xtxColor;
				}
			}
			
			&:last-child {
				margin-right: 0;
			}
		}
		
		.qrcode {
			border: 1px solid #ededed;
			height: 92px;
			padding: 7px;
			width: 92px;
		}
		
		.download {
			border: none;
			font-size: 14px;
			height: auto;
			padding-top: 5px;
			width: auto;
			
			span {
				display: block;
			}
			
			a {
				background-color: $xtxColor;
				border-radius: 2px;
				color: #fff;
				display: block;
				line-height: 1;
				margin-top: 5px;
				padding: 10px 25px;
			}
		}
		
		.hotline {
			border: none;
			color: #666;
			font-size: 22px;
			height: auto;
			padding-top: 20px;
			width: auto;
			
			small {
				color: #999;
				display: block;
				font-size: 15px;
			}
		}
	}
	
	.extra {
		background-color: #333;
	}
	
	.slogan {
		border-bottom: 1px solid #434343;
		display: flex;
		height: 178px;
		justify-content: space-between;
		line-height: 58px;
		padding: 60px 100px;
		
		a {
			color: #fff;
			font-size: 28px;
			height: 58px;
			line-height: 58px;
			
			i {
				font-size: 50px;
				font-weight: 100;
				margin-right: 10px;
				vertical-align: middle;
			}
			
			span {
				text-shadow: 0 0 1px #333;
				vertical-align: middle;
			}
		}
	}
	
	.copyright {
		color: #999;
		font-size: 15px;
		height: 170px;
		padding-top: 40px;
		text-align: center;
		
		p {
			line-height: 1;
			margin-bottom: 20px;
		}
		
		a {
			border-right: 1px solid #999;
			color: #999;
			line-height: 1;
			padding: 0 10px;
			
			&:last-child {
				border-right: none;
			}
		}
	}
}
</style>
