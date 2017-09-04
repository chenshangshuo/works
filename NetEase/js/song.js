(function(){
	const $lyric = $('.song .lyric')
	const	$audio = $('<audio></audio>')
	const $disc = $('.page .disc')
	const $start = $('.disc .iconStart')
	const $pause = $('.disc .iconPause')
	const $song = $('.song>h3')
	//解析url，获得id
	let id = parseInt(location.search.match(/\bid=(\d*)/)[1])
	$.get('../song.json').then(function(response){
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
  }

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



