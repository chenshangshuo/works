(function(){
	const $lyric = $('.song .lyric')
	const	$audio = $('<audio></audio>')
	const $disc = $('.page .disc')
	const $start = $('.disc .iconStart')
	const $pause = $('.disc .iconPause')
	const $song = $('.song>h3')
	//解析url，获得id
	let id = parseInt(location.search.match(/\bid=(\d*)/)[1])
	$.get('./song.json').then(function(response){
		let songs = response
		let song = songs.filter(function(s){
			if (s.id === id) {
				return s
			}
		})[0]
	  let url = song.url
	  //登入界面开始放歌
	  initPlayer(url)
	  //获取数据，分割拼接成数值
	  initText(song)
	})
	//音频的播放设置
  function initPlayer(url){
	  $audio.attr('src', url)
	  $audio[0].oncanplay = function(){
	  	$audio[0].play(),
	  	$disc.addClass('playing')
	  }
	  $pause.click(function(){
	  	$audio[0].pause(),
	  	$disc.removeClass('playing')
	  })
	  $start.click(function(){
			$audio[0].play()
			$disc.addClass('playing')
	  })
	  //将歌曲时间转变成这种形式：00:14.01(audio的currentTime APi)
	  setInterval(()=>{
		  let minute = ~~($audio[0].currentTime/60)
	  	let second = $audio[0].currentTime - minute*60
	  	if (minute<10) {
	  		minute = '0'+ minute
	  	}
	  	if (second<10) {
	  		second = '0'+ second
	  	}
	  	let time = `${minute}:${second}`
	  	let $lines = $('.lyric>p')
	  	//遍历对象，寻找time时间大于data-time的前一个且time时间小于data-time的后一个
	  	for(var i = 0; i<$lines.length;i++){
	  		if ($lines.eq(i).attr('data-time') < time && $lines.eq(i+1).attr('data-time') > time && $lines.eq(i+1) !== 0) {
	  			$whichLine = ($lines.eq(i))
	  		}
	  	}
	  	//css调整歌词高度变化
	  	if ($whichLine) {
	  		let lineTop = $whichLine.offset().top
	  		let lyricTop = $('.lyric').offset().top
	  		let delta = lineTop - lyricTop - $('.lyricShow').height()/3
	  		$('.lyric').css('transform',`translateY(-${delta}px)`)
	  		$whichLine.addClass('active').prev().removeClass('active')
	  	}
	  },500)
  }
  //歌词的插入
  function initText(song){
		$song.text(song.name+'-' +song.singer)
		let lyric = song.lyric
		let array = lyric.split('\n')
		let regex = /^\[(.+)\](.*)$/
		let newArray = array.map(function(string, index){
			let matches = string.match(regex)
			if (matches) {
				return{time: matches[1], words: matches[2]}
			}
		})
		//填充数据
		newArray.forEach(function(object){
			$p = $('<p></p>')
			if (!object) {
				return
			}
			$p.attr('data-time',object.time).text(object.words)
			$lyric.append($p)
		})
  }
})()



