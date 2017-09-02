(function(){
	const $lyric = $('.song .lyric')
	const	$audio = $('<audio></audio>')
	const $disc = $('.page .disc')
	const $start = $('.disc .iconStart')
	const $pause = $('.disc .iconPause')
	$.ajax({
	    url: '../lyric.json',
	    method: 'GET'
	    //获取数据，分割拼接成数值
	}).done(function(object){
		var lyric = object.lyric
		let array = lyric.split('\n')
		let regex = /^\[(.+)\](.*)$/
		let newArray = array.map(function(string, index){
			let matches = string.match(regex)
			if (matches) {
				return{time: matches[1], words: matches[2]}
			}
		})
		console.log(newArray)
//填充数据
	newArray.forEach(function(object){
		$p = $('<p></p>')
		if (!object) {
			return
		}
		$p.attr('data-time',object.time).text(object.words)
		$lyric.append($p)
	})
//登入界面开始放歌
  $audio.attr('src', 'http://dl.stream.qqmusic.qq.com/C400000yw7ED4bPPL8.m4a?vkey=1495912F86CF913FB8516B73B7E1F07424CD1207966A3FFD6AEE1D897BCABBC4084834402600690D02FF3DD5F8F9D3BF807F4DB3C329243F&guid=6758739068&uin=0&fromtag=66')
  $audio[0].oncanplay = function(){
  	$audio[0].play(),
  	$disc.addClass('playing')
  }
  $start.click(function(){
		$audio[0].pause()
		$disc.removeClass('playing')
  })
  $pause.click(function(){
  	$audio[0].play(),
  	$disc.addClass('playing')
  })

})
})()



