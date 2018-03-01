window.onload = function(){
	$("#checkinnum").html(Math.round((Math.random()*9000) + 1000))
	$("#usecheck").click(function(){
		var che = $("#checkinnum").html();
		var check = $("#checkin").val();
		var name = $("#username").val();
		var pwd = $("#pwd").val();
		//非空判断
		if(!name){
			alert("请输入用户名");
			return;
		}
		if(!pwd){
			alert("请输入密码");
			return;
		}
		if(!check){
			alert("请输入验证码");
			return;
		}
		if(check != che){
			alert("验证码填写错误");
			$("#checkinnum").html(Math.round((Math.random()*9000) + 1000));
			$("#checkin").val("");
			return;
		}
		$.ajax({
			type:"GET",
			url:"/login?username="+name+"&pwd="+pwd,
			success:function(msg){
				if(msg == "true"){
					location.href="users";
				}else{
					alert("用户名或密码错误");
					window.location.reload();
				}
			}
		});
					
	})
	
}
