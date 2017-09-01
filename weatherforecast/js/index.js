
(function(){
	var HOST = 'https://weixin.jirengu.com'
//获取当地时间
	function getTime(){
		time = ''
		var hour = new Date().getHours()
		var minutes = new Date().getMinutes()
		if (minutes < 10 ) {
			minutes = '0' + minutes
		}
		if (hour>12) {
			return time = (hour+ ':' + minutes + 'pm')
		}else{
			return time = (hour+ ':' + minutes+'am')
		}
	}
	//更新时间
	function setupTime(){
		getTime()
		$('#header .time').text(time)
		setTimeout(setupTime, 60000)
	}
	setupTime()

	//输入框状态切换
	$('#header>input').focus(function(){
		$('#header>input').css('opacity',0.9)
	})
	$('#header>input').blur(function(){
		$('#header>input').css('opacity',0.3)
	})

//获取数据，开始填充到dom中
	$.ajax({
    url: `${HOST}/weather/`,
    method: 'GET'
}).done(function(info){
    console.log(info);
    var wea = info.weather[0]
    $('#header .location').text(wea['city_name'])
    //底部数据分离
    getFuture(info)
}).fail(function(jqXHR, textStatus){
    console.log("数据无法获取");
})

//底部数据，开始填充到dom中
	function getFuture(info){
		//左侧今天的天气先进行填充
    var now = info.weather[0]['now']
    $('#footer .t-temp>p:nth-child(1)').text(now['temperature'] + '°')
    $('#footer .t-temp>p:nth-child(2)').text(info.weather[0]['city_name'])
    $('#footer .t-wind>p').text(now['text'])
    $('#footer .t-wind>img').attr('src',`${HOST}/images/weather/code/` + now['code'] + '.png')
		var future = info.weather[0]['future']
		//右侧数据填充
		$('main .f-center p').each(function(index){
			$(this).text(future[index+4].day)
		})
		$('main .f-center>img').each(function(index){
			$(this).attr('src', `${HOST}/images/weather/code/` + future[index+4]['code1'] + '.png')
		})
		$('main .f-center>.t-temp').each(function(index){
			$(this).text(future[index+4]['low'] + '°' + '~' +future[index+4]['high']+ '°')
		})
	}

//获取其他城市的天气预报
	$('.inp-city').keydown(function(event){
		if(event.keyCode === 13){
			$.ajax(`${HOST}/weather/cityid?location=${$('.inp-city').val()}`)
				.done(function(info){
					var cityId = info['results'][0]['id']
					getCity(cityId)
				})
		}
	})
	function getCity(cityId){
		$.ajax(`${HOST}/weather/now?cityid=${cityId}`)
			.done(function(info){
				getFuture(info)
			})
	}
})()
