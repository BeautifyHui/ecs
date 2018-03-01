window.onload = function(){
	$.ajax({
		url:"/goods",
		type:"GET",
		success:function(res){
			add(res);
//全选功能
			$("#makeall").click(function(){
				$(".makeone").prop("checked",$(this).prop("checked"))
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

		}
	})
//列表添加功能
	function add(arr){
		var str = null;
		for(var i = 0; i < arr.length;i++){
			str += `<tr>
					<td>
						<input type="checkbox" class="makeone"/>
						<span>${arr[i].goodcode}</span>
					</td>
					<td>
						${arr[i].goodname}
					</td>
					<td>
						${arr[i].goodnum}
					</td>
					<td>
						${arr[i].goodprice}
					</td>
					<td>
						<i class="iconfont icon-duigou"></i>
					</td>
					<td>
						<i class="iconfont icon-duigou"></i>
					</td>
					<td>
						<i class="iconfont icon-duigou"></i>
					</td>
					<td>
						<i class="iconfont icon-duigou"></i>
					</td>
					<td>
						${arr[i].sort}
					</td>
					<td>${arr[i].date}</td>
					<td>${arr[i].sale}</td>
					<td class="make">
						<i class="iconfont icon-xiangqingye"></i>
						<i class="iconfont icon-pencircle"></i>
						<i class="iconfont icon-edit"></i>
						<i class="iconfont icon-shanchu"></i>
					</td>
				</tr>`
		}
			if(str){
				if($("#conlist").find(".sorry")){
					$("#conlist").find(".sorry").remove();
				}
				$("#conlist").append(str);
			}else{
				$("#conlist").find("tr:gt(0)").remove().end().append("<p class='sorry'>对不起,暂无商品数据!</p>")
			}
	}

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