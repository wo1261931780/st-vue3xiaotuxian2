import {httpInstance} from '@/utils/http.js'


function getBannerAPI(){
	return httpInstance({
		url:'/home/banner',
	})
}
