define(['jquery', 'com/Carousel', 'com/waterfull','com/goTop','com/Tab'],function($, Carousel, waterFull,GoTop,tab){
	new Carousel($('.carousel'))
	waterFull()
	new GoTop($('.gotop'))
	tab()
	console.log('这是网页程序的主模板')
})


