var $ = require('./jquery.min.js');
 module.exports = function tab(){
    $('header .nav>p').click(function(e){
      e.preventDefault();
    $('.tab').css({'display': 'block'})
    })
    $('.contact button').click(function(e){
      e.preventDefault();
    $('.tab').css({'display': 'block'})
    })
    $('.header>li').click(function(){
      $(this).siblings().removeClass('active')
      $(this).addClass('active')
      var index = $(this).index()
      var $contextLists = $(this).parents('.tab').find('.context>li')
      $contextLists.removeClass('active')
      $contextLists.eq(index).addClass('active')
    })
    $('.tab>span').click(function(){
      $('.tab').css({'display': 'none'})
    })
  }
