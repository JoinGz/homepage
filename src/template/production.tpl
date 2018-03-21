<% for (var i = 0;i<works.length;i++){%>
<div class="container-fluid  showbox <%=works[i].mt%>"">
	<div class="row">
		<div class="container">
			<div class="row">
				
					<div class="col-sm-6 text-center <%=works[i].class%>">
						<a href="<%=works[i].demoURL%>">
							<!--<img src="./dist/public/images/taobao.png" />-->
						</a>

					</div>
					<div class="col-sm-6">
						<h1><%=works[i].title%></h1>
						<p><%=works[i].description%></p>
						<p>你猜一猜嘿嘿嘿！</p>
						<p>
							<a href="<%=works[i].demoURL%>" class="btn btn-embossed btn-primary">view demo</a>
							<a href="<%=works[i].githubURL%>" class="btn btn-embossed btn-primary">view github</a>
						</p>
					</div>
			
				
			</div>
		</div>
	</div>
</div>
<%}%>
