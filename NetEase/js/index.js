(function(){
	const $lastest = $('.latest>.lastestSongs')
	const $loading = $('.latest>.loading')
	$.get('../song.json').then(function(responese){
		let songArr = responese
		songArr.forEach(function(song){
			//生成jq对象
			let $newSong = $(`<li><a href="./song.html?id=${song.id}"><h3>${song.name}</h3><svg class="latestStart" aria-hidden="true"><use xlink:href="#icon-icon2"></use></svg><p><svg class="latestSq" aria-hidden="true"><use xlink:href="#icon-SQ"></use></svg>${song.singer}</p></a></li>`)
			$lastest.append($newSong)
		})
	})
	//移除登录图
	$loading.remove()
	//tab切换
	$('.siteNav').on('click','li',function(e){
		$(e.currentTarget).addClass('active').siblings().removeClass('active')
		let index = $(e.currentTarget).index()
		//click时，触发tabChange事件，并传递参数index
		$(e.currentTarget).trigger('tabChange', index)
		$('.content>li').eq(index).addClass('active').siblings().removeClass('active')
	})
	$('.siteNav').on('tabChange',function(e,index){
		let $li = $('.content>li').eq(index)
		//设置请求一次json
		if ($li.attr('data-downloaded') === 'yes') {
			return
		}
		if (index === 1) {
			$.get('../tab1.json').then(function(responese){
				let hotSongArr = responese
				hotSongArr.forEach(function(song){
					let $hotSong = $(`<li><a href="./song.html?id=${song.id}"><span>${song.order}</span><h3>${song.name}</h3>
						<svg class="latestStart" aria-hidden="true"><use xlink:href="#icon-icon2"></use></svg>
						<p><svg class="latestSq" aria-hidden="true"><use xlink:href="#icon-SQ"></use></svg>${song.singer}</p></a></li>`)
					$('.hotSongLists').append($hotSong)
				})
				$li.attr('data-downloaded','yes')
							console.log(1)
			})
		}else if (index === 2) {
			$.get('../tab1.json').then(function(res){
				let searchArr = res
				searchArr.forEach(function(song){
					let $hotSong = $(`<li><a href="./song.html?id=${song.id}"><span>${song.name}</span></li>`)
					$('.hotLists').append($hotSong)
				})
				$li.attr('data-downloaded', 'yes')
			})
		}
	})

	//函数节流，利用定时器，减少dom操作次数
	let timer = undefined
	$('#search').on('input',function(e){
		let $input = $(e.currentTarget)
		let value = $input.val().trim()
		if (value === '') {return}
		if (timer) {
			clearTimeout(timer)
		}

		timer = setTimeout(function(){
			search(value).then(function(result){
				timer = undefined
				if (result.length !== 0) {
					let name = result.map((r) => r.name)
					let id = result.map((r) => r.id)
					$('.opt').html(`<p><a href="./song.html?id=${id}">${name}</a></p>`)
				}else{
					$('.opt').text('没有结果')
				}
			})
		},500)
	})
	//搜索关键字并匹配
	function search(keyword){
		return new Promise((resolve, reject) =>{
			var database = [
				{"id":0, "name":"海阔天空"},
				{"id":1, "name":"磁带版A面末的口白"},
				{"id":2, "name":"你好"},
				{"id":3, "name":"神"},
				{"id":4, "name":"歌谣"},
				{"id":5, "name":"上火星球"}
			]
			let result = database.filter(function(item){
				return item.name.indexOf(keyword) >=0
			})
			setTimeout(function(){
				resolve(result)
			},(Math.random()*1000 + 500))
			})
	}
	//
	$('.songLists').on('click','li',function(e){
		$('.content>li').eq(0).removeClass('active')
		$('.content>li').eq(1).addClass('active')
	})
})()


