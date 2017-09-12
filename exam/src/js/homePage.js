	var $ = require('./jquery.min.js')
	//首页JS部分
	module.exports = function(){
		//导航栏淡入淡出，经过防抖处理
		$window = $(window)
		var timer
		$window.on('scroll',function(){
			if (timer) {
				clearTimeout(timer)
			}
			timer = setTimeout(function(){
				if ($window.scrollTop() != 0) {
					$('nav').fadeIn(200)
					$('#btn').fadeOut(200)
				}else{
					$('nav').fadeOut(200)
					$('#btn').fadeIn(200)
				}
			},400)
		})
		//点击模态框事件发生，事件代理解决模态框消失
		$('#btn').on('click',function(){
			$('#cover').css('display', 'block')
		})
		$('#cover').on('click',function(e){
			if (e.target.tagName.toLowerCase() != "li") {
				$('#cover').css('display', 'none')
			}
		})
		//页面加载完成后，执行首屏动画
		$window.on('load',() =>
			$('.logoCenter img').animate({
				top: 0
			},1500)
		)
		$window.on('load',() =>
			$('.logoCenter .secondPart').animate({
				bottom: 0
			},1500)
		)
		//点击按钮返回到对应的页面
		$('.pointer>img').on('click',function(){
			$('html,body').animate({scrollTop: $("#service").offset().top}, 1000)
		})
	}()
