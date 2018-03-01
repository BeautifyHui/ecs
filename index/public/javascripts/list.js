window.onload = function(){
	$.ajax({
		url:"/goods",
		type:"GET",
		success:function(res){
			var str = "";
			for(var i = 0; i < res.length;i++){
				str += `<tr>
				<td>
					<input type="checkbox" class="makeone"/>
					<span>${res[i].goodcode}</span>
				</td>
				<td>
					${res[i].goodname}
				</td>
				<td>
					${res[i].goodnum}
				</td>
				<td>
					${res[i].goodprice}
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
					${res[i].sort}
				</td>
				<td>${res[i].date}</td>
				<td>${res[i].sale}</td>
				<td class="make">
					<i class="iconfont icon-xiangqingye"></i>
					<i class="iconfont icon-pencircle"></i>
					<i class="iconfont icon-edit"></i>
					<i class="iconfont icon-shanchu"></i>
				</td>
			</tr>`
			}
			$("#conlist").append(str);
//全选功能
			$("#makeall").click(function(){
				$(".makeone").prop("checked",$(this).prop("checked"))
			})
//搜索功能函数
			function(str){
				var reg = //
				for(var i = 0;i < res.length;i++){
					
				}
			}
//搜索调用
			$("#serchkey").val().chenge(function(){
				$("#serchgood").click(function(){
					
				})
				$(document).keypress(function(){
					
				})
			})
		}
	})
}
