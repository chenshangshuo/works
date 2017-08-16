var $ = require('./jquery.min.js')
module.exports = function(){
	function Button3($ct){
		this.$ct = $ct
		this.bind()
	}
	Button3.prototype = {
		bind: function(){
			this.$ct.click(function(){
				$('.box').css({'background':'green'})
			})
		}
	}
	new Button3($('.button3'))
}
