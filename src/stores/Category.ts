import {ref} from 'vue'
import {defineStore} from "pinia";
import {getCategoryApi} from "@/apis/layout";

export const useCategory = defineStore('category', () => {
	// 导航列表的逻辑
	const categoryList = ref([])
	const getCategory = async () => {
		const res = await getCategoryApi()
		console.log(categoryList)
		categoryList.value = res.result.data
	}
	return {
		categoryList,
		getCategory,
	}
})
