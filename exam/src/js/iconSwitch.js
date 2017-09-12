	var $ = require('./jquery.min.js')
	module.exports = function(){
		//产品服务图片切换功能
		$a = $('.solveIcon>li>a')
		$a.on('click', function(e){
			e.preventDefault()
			$(e.target).css('background-position', '0px -155px')
			$(e.target).parent().siblings().find('a').css('background-position', '0px 0px')
      var index = $(e.target).parent().index()
      $('.solveIntro>li').eq(index).addClass('show').siblings().removeClass('show')
		})
	}()
