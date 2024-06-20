<script lang = "ts" setup>

import LayoutNav from "@/views/Layout/components/LayoutNav.vue";
import LayoutHeader from "@/views/Layout/components/LayoutHeader.vue";
import LayoutFooter from "@/views/Layout/components/LayoutFooter.vue";
</script>

<template>
	<div>我是首页</div>
	<!--	这里同步添加一个二级路由-->
	<LayoutNav></LayoutNav>
	<LayoutHeader></LayoutHeader>
	<RouterView/>
	<LayoutFooter></LayoutFooter>
</template>

<style scoped>

</style>
