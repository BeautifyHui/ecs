window.onload = function(){
	$.ajax({
		url:"/goods",
		type:"get",
		success:function(res){
			console.log(res);
			var str = "";
			for(var i = 0; i < res.length;i++){
				str += `<tr>
				<td>
					<input type="checkbox"/>
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
			$("#conlist").append(str)
		}
	})
}
