window.onload = function(){
			
//全选功能
	$("#makeall").click(function(){
		$(".makeone").prop("checked",$(this).prop("checked"))
	})
//删除商品
	$(".icon-shanchu").click(function(){
		$.post("/goods/remove",{"num":$(this).parent().parent().attr("remove")}
		)
		$(this).parent().parent().remove();
	})
//更改商品信息
	$(".icon-pencircle").click(function(){
		
	})
//对错符号切换
	$(".mrest").click(function(){
		if($(this).hasClass("icon-duigou")){
			$(this).removeClass("iconfont icon-duigou").addClass("iconfont icon-error")
		}else{
			$(this).removeClass("iconfont icon-error").addClass("iconfont icon-duigou")
		}
	})
//分页查询功能
	$("#countp").change(function(){
		location.href="/show?pageNo="
	})
//搜索调用
	$("#serchgood").click(function(){
		var str1 = $("#serchkey").val();
		serchgoods(str1,res);
	})
	$(document).keypress(function(e){
		var e = e || event;
		var str1 = $("#serchkey").val();
		if(e.keyCode == 13){
			serchgoods(str1,res);
		}
	})




//搜索功能函数
	function serchgoods(sstr,res){
		var reg = RegExp(sstr,"g");
		var newarr = [];
			for(var i = 0;i < res.length;i++){
				for(var j in res[i]){
					if(reg.test(res[i][j])){
						if(newarr.indexOf(res[i]) == -1){
							newarr.push(res[i])
						}
					}
				}
			}
			if(newarr){
				add(newarr)
		}
}
}