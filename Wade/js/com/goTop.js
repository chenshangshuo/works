define(['jquery'],function($){
  function GoTop($ct){
    this.$ct = $ct
    $winHeight = $(window).height()
    this.bind()
  }

  GoTop.prototype = {
    bind: function(){
      var _this = this
      $(window).scroll(function(){
        if ($(window).scrollTop() > $winHeight) {
          _this.$ct.css({'display': 'block'})
        }else{
          _this.$ct.css({'display': 'none'})
        }
      })
      this.$ct.click(function(e){
        e.preventDefault();
        $(window).scrollTop(0)
      })
    }
  }
	return GoTop
})







