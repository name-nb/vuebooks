import axios from "axios";
import qs from "qs";
import {Indicator} from "mint-ui"; 
//axios.defaults.baseURI="/douban/movie"       配置基础路径(省略)
//axios.defaults.headers={}  配置请求头
//axios.defaults.timeout=3000; 请求时间3秒

axios.interceptors.request.use(function(config) {
	//请求之前做的事
	Indicator.open({  
		text:"加载中...",
		spinnerType:"fading-circle"
	})
	return config;
}, function(error) {
	// 对请求错误做些什么
	return Promise.reject(error);
});

axios.interceptors.response.use(function(response) {
	//请求之后做的事
	Indicator.close()
	return response;
}, function(error) {
	// 对响应错误做点什么
	return Promise.reject(error);
});

//get
const douban = (url, params) => {
	return new Promise((resolve, reject) => {
		axios.get(url, { params: params })
			.then((res) => {
				resolve(res.data)
			})
			.catch((err) => {
				reject(err)
			})
	})
}
//post
const postcount = (url, params) => {
	//params = qs.stringify(params) //将对象转换成url字符串类型数据
	return new Promise((resolve, reject) => {
		axios.post(url, { params: params })
			.then((res) => {
				resolve(res.data)
			})
			.catch((err) => {
				reject()
			})
	})
}

const getcount = () => {
	return axios.get("/php/count.php", { params: { title: "" } }).then((res) => res.data)
}
export default {
	douban,
	getcount,
	postcount
}