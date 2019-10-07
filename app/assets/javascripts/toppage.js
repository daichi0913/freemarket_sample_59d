$(()=>{
  function slide_view(index, inv=false){
    //this function's default is that image move to left

    //get view width because image's width is variable
    const width = $($(".slider-image")[0]).width();
    let num = index+1;
    
    //inv means inverse slide. image move to right
    if(inv){
      num = indx-1;
      if(num< 0){
        num = $(".slider-image").length -1;
      }
    }else{
      if(num===$(".slider-image").length){
        num = 0;
      }
    }

    //move active-class on .slider-image and .dots
    $($(".slider-image")[index]).removeClass('active');
    $($(".dots")[index]).removeClass('active');
    $($(".slider-image")[num]).addClass('active');
    $($(".dots")[num]).addClass('active');
    //slide
    $(".slides").animate({scrollLeft: width*num}, 300);
  }
  
  function auto_slide() {
    if(!(location.pathname.match(/^\/$/))){
      return;
    }
    let index = $('.slider-image').index($('.slider-image.active')[0]);
    slide_view(index);
    console.log(index);
  }
  $(document).on('turbolinks:load', function(){
    
    $('.photo-slide img').on("mouseenter", function(){
      var index = $('.photo-slide img').index(this);
      // $(".item-photo-main")[0].scrollLeft = index * 300;
      $(".item-photo-main").animate({scrollLeft: index * 300}, 300);
    });

    setInterval(auto_slide, 5000);
  })
})