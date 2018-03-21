import "./assets/css/main.css"
import Learned from "./template/learned.js"
import Production from "./template/production.js"
var production = new Production();
var leard = new Learned();
$(document).ready(function() {
	document.querySelector("#learned").innerHTML = leard.tem({
		title: "123name",
		arr: [{
			title: "zheshidanaoke",
			description: "GZzhizuode yo heiehei!",
			img:"./images/logo.png"
		}, {
			title: "zheshidanaoke",
			description: "GZzhizuode yo heiehei!",
			img:"./images/logo.png"
		}, {
			title: "zheshidanaoke",
			description: "GZzhizuode yo heiehei!",
			img:"./images/logo.png"
		}, {
			title: "zheshidanaoke",
			description: "GZzhizuode yo heiehei!",
			img:"./images/logo.png"
		}, {
			title: "zheshidanaoke",
			description: "GZzhizuode yo heiehei!",
			img:"./images/logo.png"
		},{
			title: "zheshidanaoke",
			description: "GZzhizuode yo heiehei!",
			img:"./images/logo.png"
		}
		]
	})
document.querySelector("#works").innerHTML = production.tpl({
		
		works: [{
			mt:"mt100",
			title: "Vue WebApp",
			class:"pull-right",
			demoURL:"www.taobao.com",
			githubURL:"www.baidu.com",
			description: "用Vue构建项目，用到了Vue-router,用到了Vuex,用webpack构建啦！",
			img:"./images/taobao.png"
		},{
			mt:"",
			title: "M4A1 WebApp",
			class:"",
			demoURL:"www.taobao.com",
			githubURL:"www.baidu.com",
			description: "用Vue构建项目，用到了Vue-router,用到了Vuex,用webpack构建啦！",
			img:"./images/ipad.png"
		},
		]
	})

})