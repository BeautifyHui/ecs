window.onload = function(){
	$.ajax({
		url:"/goods",
		type:"get",
		success:function(res){
			console.log(res);
		}
	})
}
