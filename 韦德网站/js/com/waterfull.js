define(['jquery'], function($){
	function waterFull(){
		var curPage = 1
		var perPageCount = 9
		start()
		$('#load').click(function(){
			start()
		})
		function start(){
			getData(function(newsList){
				console.log(newsList) //1.得到后台的数据
				$.each(newsList, function(idx, news){
					var $node = getNode(news) //遍历数据，进行html拼接,并返回jQuery对象（下面对该对象采用jQ方法）
					$node.find('img').load(function(){
						$('#images').append($node)
						waterFallPlace($node) //寻找img元素，当img加载完成后，执行
					})
				})
			})
		}
		//取得后台的数据
		function getData(callback){
			$.ajax({
				url: 'https://platform.sina.com.cn/slide/album_tech',
				dataType: 'jsonp',
				jsonp:"jsoncallback",
				data: {
					app_key: '1271687855',
					num: perPageCount,
					page: curPage
				}
			}).done(function(ret){
				if(ret && ret.status && ret.status.code === "0"){
					callback (ret.data);   //如果数据没问题，那么生成节点并摆放好位置
					curPage++
				}else{
					console.log('get error data');
				}
			});
		}
		//后台数据拼接成dom节点
		function getNode(item){
			var html = ''
			html += '<li class="item">'
			html += '<a href="' + item.url + '"><img src="' + item.img_url + '" alt="图片"></a>'
			html += ' <h3 class="header">'+ item.short_name +'</h3>'
			html += '<p class="description">'+item.short_intro+'</p>'
			html += '</li>'
			return $(html)
		}
		//瀑布流放置DOM
		var colSumHeight = [],
				nodeWidth = $('.item').outerWidth(true),
				colNum = parseInt($('#images').width()/nodeWidth);

		for(var i=0; i<colNum; i++){
			colSumHeight.push(0)
		}

		function waterFallPlace($nodes){
			$nodes.each(function(){
				var $cur = $(this);
				var idx = 0,
					  minSumHeight = colSumHeight[0];
				for(var i=0;i<colSumHeight.length; i++){
					if(colSumHeight[i] < minSumHeight){
						idx = i;
						minSumHeight = colSumHeight[i];
					}
				}
				$cur.css({
					left: nodeWidth*idx,
					top: minSumHeight,
					opacity: 1
				});
				colSumHeight[idx] = $cur.outerHeight(true) + colSumHeight[idx];
				$('#images').height(Math.max.apply(null,colSumHeight));
			});
		}
	}
	return waterFull
})






