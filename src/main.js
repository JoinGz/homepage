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

	var learnedTop = $("#learned").offset().top;
	var learnedWidth = $("#learned").outerHeight();
	var windowHeight = $(window).height();
	var bool = true;
	$(window).scroll(function(){
		var scrollTOP = $(document).scrollTop();
		if(scrollTOP+windowHeight>learnedTop+learnedWidth/2){
			if(bool){
				$.ajax({url:"./API/data.php",success:function(data){
					var ob=JSON.parse(data);
					document.querySelector("#works").innerHTML = production.tpl(ob)
				}})
				
				bool=false;
			}
			
		}
	})
})