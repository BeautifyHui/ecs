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
}