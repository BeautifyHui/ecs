window.onload = function(){
//	选项卡显示情况
	var lis = $("#addcon").find(".chosecard").find("li");
	var forms = $("#addcon").find("form");
	forms.fadeOut(0).eq(0).fadeIn(0);
	for(let i = 0; i < lis.length;i++){
		$(lis[i]).click(function(){
			$(this).css("background","#fefefe").siblings().css("background","#efefef");
			$(forms).fadeOut(0).eq(i).fadeIn(0);
		})
	}
//表单验证
	$("#certen").click(function(){
		if($("#goodname").val() && $("#goodprice").val() ){
			$.ajax({
				type:"post",
				url:"/add/goods",
				data:{
					goodname: $("#goodname").val(),
					goodcode : $("#goodcode").val(),
					goodnum : $("#goodnum").val()?$("#goodnum").val():Math.round(Math.random() * 90000000000 + 10000000000),
					goodprice : $("#goodprice").val(),
					sale : $("#goodsale").val(),
					date : $("#date").val(),
					sort : Math.round(Math.random() * 100 + 1)
				},
				success:function(msg){
					alert(msg.msg);
				}
				
			})
		}else{
			alert("商品名称必须和价格为必填选项")
		}
	})
}