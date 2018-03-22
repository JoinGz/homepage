import "./assets/css/main.css"
import Learned from "./template/learned.js"
import Production from "./template/production.js"
var production = new Production();
var leard = new Learned();
$(document).ready(function() {
	document.querySelector("#learned").innerHTML = leard.tem({
		title: "123name",
		arr: [{
			title: "JQuery",
			description: "在原生的API上面组合出一套新的API。有自己编写的JQuery!",
			img:"./images/JQuery.png"
		}, {
			title: "Bootstrap",
			description: "此网站UI基于Bootstrap,其思想值得借鉴，媒体查询是其核心！",
			img:"./images/bootstrap.png"
		}, {
			title: "AngularJS",
			description: "第一款接触上手的MVW框架。还有其双向数据绑定，路由知识。",
			img:"./images/ng-logo.png"
		}, {
			title: "Vue",
			description: "Vue是最近使用最频繁的一个框架，Vue全家桶的配置用起来也比较方便",
			img:"./images/logo.png"
		}, {
			title: "webpack",
			description: "使用webpack来构建项目，和Vue-cli一起使用相当方便",
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
			title: "淘宝项目",
			class:"pull-right",
			demoURL:"./taobao/index.html",
			githubURL:"https://github.com/JoinGz/taobao",
			description: "<p>1.此项目用GLUP构建</p><p>2.搜索框数据是淘宝真实API接口</p><p>3.其余数据用AJAX模拟真实使用环境，滑动到这一位置才加载。</p>",
			img:"./images/taobao.png"
		},{
			mt:"",
			title: "小游戏",
			class:"",
			demoURL:"./Game/index.html",
			githubURL:"https://github.com/JoinGz/samllGame",
			description: "一个小小的游戏。<p>用了TO DO LIST的小VUE引用。</p>",
			img:"./images/ipad.png"
		},
		{
			mt:"",
			title: "Vue WebApp",
			class:"pull-right",
			demoURL:"./music-player/index.html",
			githubURL:"https://github.com/JoinGz/taobao",
			description: "用Vue构建项目，用到了Vue-router+Vuex+webpack+axios+Vue-cli,用Vue全家桶构建。<p>一个音乐WebAPP</p><p>歌词界面，音量调整，控制进度等等</p>",
			img:"./images/player.png"
		}
		]
	})

})