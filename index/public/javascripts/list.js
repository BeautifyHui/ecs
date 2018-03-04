window.onload = function(){
			
//全选功能
	$("#makeall").click(function(){
		$(".makeone").prop("checked",$(this).prop("checked"))
	})
//删除商品
	$(".removegood").click(function(){
		console.log($(this).attr("gid"))
		$.ajax({
			type:"get",
			url:"/api/remove",
			data:
				{_id:$(this).attr("gid")},
			success:function(msg){
				console.log(msg.massage);
				location.reload(true)
			}
		});
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
//	$("#countp").change(function(){
//		location.href="/show?pageNo="
//	})
//搜索功能
	$("#serchgood").click(function(){
		var str1 = $("#serchkey").val();
		console.log(str1)
		$.ajax({
			type:"get",
			url:"/api/serch",
			data:{
				keyword:str1
			},
			success:function(msg){
				console.log(msg)
				
			}
		});
	})
//修改功能
	$(".icon-edit").click(function(){
		var id = $(this).attr("gid");
		$.ajax({
			type:"get",
			url:"/api/rewrite",
			data:{
				id:id
			},
			success:function(msg){
				console.log(msg)
				location.href="/rewrite"
			}
		})
	})
}