$(function(){
  $(document).on('turbolinks:load', function(){

    $(".r-content-top-main").hover(function(){
      $(this).css('opacity','0.8');
    },function(){
      $(this).css('opacity','')
    });

    $('.l-box2').hover(function(){
      $(this).css('background-color','#FCF7FB');
    },function(){
      $(this).css('background-color','');
    });
    $(".l-box2").hover(function(){
      $(this).children(".list3").css({
        'color':'black',
        'right':'10px'
      });
    },function(){
      $(".list3").css({
        'color':'',
        'right':''
      });
    });

    $(".li").hover(function(){
      $(this).css('background-color','black');
    },function(){
    $(this).css('background-color','');
    });

    $(".main-top-left").hover(function(){
      $(this).css('opacity','0.8');
    },function(){
    $(this).css('opacity','');
    })
    $(".senter-main-top-left").hover(function(){
      $(this).css('opacity','0.8');
    },function(){
    $(this).css('opacity','');
    })
    $(".senter-main-top-right").hover(function(){
      $(this).css('opacity','0.8');
    },function(){
    $(this).css('opacity','');
    })
    $(".main-top-right").hover(function(){
      $(this).css({
        'opacity':'0.8',
      });
    },function(){
    $(this).css({
      'opacity':'',
    }
    );
    });
    $(document).on('click', ".main-top-right", function(){
      $(this).css({
        'background-color':'white',
        'border-top':'2px solid red'
      });
    });
    $(document).on('click', ".senter-main-top-right", function(){
      $(this).css({
        'background-color':'white',
        'border-top':'2px solid red'
      });
    });
    $(document).on('click', ".senter-main-top-left", function(){
      $(this).css({
        'background-color':'white',
        'border-top':'2px solid red'
      });
    });
    $(document).on('click', ".senter-main-top-right", function(){
      $('.senter-main-top-left').css({
        'background-color':'#f5f5f5',
        'border-top':'0px solid black'
      });
    });
    $(document).on('click', ".main-top-right", function(){
      $('.main-top-left').css({
        'background-color':'#f5f5f5',
        'border-top':'0px solid black'
      });
    });
    $(document).on('click', ".main-top-right", function(){
      $('.main-tab-2').css({
        'display':'block',
      });
    });
    $(document).on('click', ".main-top-right", function(){
      $('.news-11').css({
        'display':'none',
      });
    });
    $(document).on('click', ".main-top-left", function(){
      $('.main-top-right').css({
        'background-color':'#f5f5f5',
        'border-top':'0px solid black'
      });
    });
    $(document).on('click', ".senter-main-top-left", function(){
      $('.senter-main-top-right').css({
        'background-color':'#f5f5f5',
        'border-top':'0px solid black'
      });
    });
    $(document).on('click', ".main-top-left", function(){
      $(this).css({
        'background-color':'white',
        'border-top':'2px solid red'
      });
    });
    $(document).on('click', ".main-top-left", function(){
      $('.main-tab-2').css({
        'display':'none'
      });
    });
    $(document).on('click', ".main-top-left", function(){
      $('.news-11').css({
        'display':'block'
      });
    });
    $(".tab1a-4").hover(function(){
      $(this).css('background-color','white');
    },function(){
    $(this).css('background-color','');
    });
  });
});

$(function(){
  $('.l-box2').each(function(){
      var $href = $(this).attr('href');
      if(location.href.match($href)) {
      $(this).addClass('active');
      } else {
      $(this).removeClass('active');
      }
  });
});