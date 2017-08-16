	var $ = require('./jquery.min.js')
	module.exports = function(){
		function Button1($ct){
			this.$ct = $ct
			this.bind()
		}

		Button1.prototype = {
			bind: function(){
				this.$ct.click(function(){
					$('.box').css({'background': 'red'})
				})
			}
		}
		new Button1($('.button1'))
	}
