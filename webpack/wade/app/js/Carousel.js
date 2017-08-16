  var $ = require('./jquery.min.js');
    // 1.构造函数
  module.exports = function(){
    function Carousel($ct){
      this.$ct = $ct
      this.init()
      this.bind()
      // 当窗口变化时重新调整窗口
      var _this = this
      $(window).resize(function(){
        _this.init()
      })
    }
    //2.选择对象，初始化，对应子类众多，可用find()查找
    Carousel.prototype = {
      init: function(){
        var $pre = this.$pre = this.$ct.find('.pre')
        var $next = this.$next = this.$ct.find('.next')
        var $imgCt = this.$imgCt = this.$ct.find('.imgs')
        var $imgs = this.$imgs = this.$ct.find('.imgs>li')
        var $bullets = this.$bullets = this.$ct.find('.bullets>li')

        this.pageIndex = 0   //记录当前页
        this.isAnimate = false //状态锁
        this.imgsCount = $imgs.length
        this.imgWidth = $(window).width()

        $imgs.css({'width': $(window).width()})
        $imgCt.css({'width': $(window).width()*(this.imgsCount+2)})
        $imgCt.append($imgs.first().clone())  //良好的轮播体验必须前后插入图片，利用CSS过渡下
        $imgCt.prepend($imgs.last().clone())
        $imgCt.css({'left': -$(window).width()})
      },
    //绑定事件
      bind: function(){
        var _this = this
        this.$next.click(function(e){
          e.preventDefault()
          _this.playNext(1)
        })

        this.$pre.click(function(e){
          e.preventDefault()
          _this.playPre(1)
        })

        this.$bullets.click(function(){
          var index = $(this).index()
          if (index > _this.pageIndex) {
            _this.playNext(index - _this.pageIndex)
          }else if (index < _this.pageIndex) {
            _this.playPre(_this.pageIndex-index)
          }
        })

        setInterval(function(){_this.playNext(1)}, 4000)
      },

      playNext: function(len){
        var _this = this
        if (this.isAnimate) return  //isAnimate的用法，最后一个参数是执行选项后的函数
        this.isAnimate = true
        this.$imgCt.animate({
          'left': '-=' + this.imgWidth*len
        },function(){
          _this.pageIndex += len
          if (_this.pageIndex === _this.imgsCount) {
            _this.$imgCt.css({'left': -_this.imgWidth})
            _this.pageIndex = 0
          }
          _this.setBgcolor()
          _this.isAnimate = false
        })
      },

      playPre: function(len){
        var _this = this
        if (this.isAnimate) return
        this.isAnimate = true
        this.$imgCt.animate({
          'left': '+=' + this.imgWidth*len
        },function(){
          _this.pageIndex -= len
          if (_this.pageIndex === -1) {
            _this.$imgCt.css({'left': -_this.imgWidth*_this.imgsCount})
            _this.pageIndex = _this.imgsCount - 1
          }
          _this.setBgcolor()
          _this.isAnimate = false
        })
      },
      setBgcolor: function(){
        this.$bullets.removeClass('active').eq(this.pageIndex).addClass('active')
      }
    }
    new Carousel($('.carousel'))
  }



