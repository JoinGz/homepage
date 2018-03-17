<div class="container">
	<div class="text-center">
		<h1 class="margin">What is?</h1>
		<p><%=title%></p>
	</div>
</div>

<div class="container">
	<div class="row">
		<%for(var i=0;i<arr.length;i++){%>
			<div class="col-sm-4 text-center">
			<img src="<%=arr[i].img%>" alt="" class="img" />
			<h3><%=arr[i].title%></h3>
			<p><%=arr[i].description%></p>
			</div>
			
		<%}%>
	</div>
</div>