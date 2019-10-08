$(function(){
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
  $(document).on('click', ".main-top-right", function(){
    $('.main-top-left').css({
      'background-color':'#f5f5f5',
      'border-top':'0px solid black'
    });
  });
  $(document).on('click', ".main-top-left", function(){
    $('.main-top-right').css({
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
  $(".tab1a-4").hover(function(){
    $(this).css('background-color','white');
  },function(){
  $(this).css('background-color','');
  });
});

