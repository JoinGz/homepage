import "./assets/css/main.css"
import Learned from "./template/learned.js"
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

})