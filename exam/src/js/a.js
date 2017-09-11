	var $ = require('./jquery.min.js')
	module.exports = function(){
		$('#click').on('click',function(){
			$('#wrapper').css('background-color', 'red')
		})
	}
