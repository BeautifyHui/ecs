window.onload=function(){
	var flag=true;
	//确定侧边栏高度
	var h= $(window).height()-$("#top").height()-$("#nav").height()
	$("#asideul").css("height",h+"px");
	$(".move").css("height",h+"px");
	$("#right").css("height",h+"px");
	$("#right").css("width",($(window).width()-$("#asideul").width()-$(".move").width()-20)+"px")
	var lis = $(".li");
	for(let i = 0; i < lis.length;i++){
		lis[i].flag=true;
		$(lis[i]).css("background","#575757 url(../images/menu_"+(i+1)+".png) no-repeat 9px 0")
		//鼠标点击侧边栏事件
		.click(function(){
			if(this.flag){
				for(var j = 0;j < lis.length;j++){
					$(lis[j]).css("background","#575757 url(../images/menu_"+(j+1)+".png) no-repeat 9px 0");
					$(lis[j]).find(".menu").css("display","none");
					lis[j].flag=true;
				}
				$(this).css("background","#474747 url(../images/menu1_"+(i+1)+".png) no-repeat 9px 0");
				$(this).find(".menu").css("display","block");
				this.flag=false;
				return;
			}
			$(this).css("background","#575757 url(../images/menu_"+(i+1)+".png) no-repeat 9px 0");
			$(this).find(".menu").css("display","none");
			this.flag=true;
		})
		//设置鼠标滑过侧边栏事件
		.mouseover(function(){
			if(flag){
				$(this).css("background-color","#474747");
			}
		})
		.mouseout(function(){
			if(flag){
				$(this).css("background-color","#575757")
			}
		})
	}
	//ul里面的ul鼠标滑过点击事件
	var inli = $(".menu").find("li");
	$(inli[0]).css("background","#666")
	for(var i = 1; i < inli.length;i++){
		$(inli[i]).css("background","#575757")
		.mouseover(function(){
			$(this).css("background","#666")
		}).mouseleave(function(){
			$(this).css("background","#575757")
		})
	}
	//视口变化事件
	$(window).resize(function(){
		var h = $(this).height()-$("#top").height()-$("#nav").height();
		$("#asideul").css("height",h+"px");
		$(".move").css("height",h+"px");
		$("#right").css("height",h+"px");
		$("#right").css("width",($(window).width()-$("#asideul").width()-$(".move").width()-20)+"px" )
	})
	//侧边导航最小化功能
	var flag1=true;
	$(".move").click(function(){
		if(flag1){
			$("#asideul").find(".big").css("display","none");
			$("#asideul").find(".minpic").css("display","block");
			$(".move").css("background-image","url(../images/arrow_right.gif)");
			$("#right").css("width",($(window).width()-$("#asideul").width()-$(".move").width()-20)+"px" )
			flag1=false;
		}else{
			$(".big").css("display","block");
			$("#asideul").find(".minpic").css("display","none");
			$(".move").css("background-image","url(../images/arrow_left.gif)");
			$("#right").css("width",($(window).width()-$("#asideul").width()-$(".move").width()-20)+"px" )
			flag1=true;
		}
	})
//	点击二级菜单防止事件冒泡
	$(".menu").find("li").click(function(e){
		var e = e||event;
		e.stopPropagation();
	})
	
}
