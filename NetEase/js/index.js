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
})()


