$(()=>{
  function slide_view(inv=false){
    //this function's default is that image move to left

    //get index to know current .slider-image's place
    //get view width because image's width is variable
    const index = $('.slider-image').index($('.slider-image.active')[0]);
    const width = $($(".slider-image")[0]).width();
    let num = index+1;
    
    //inv means inverse slide. image move to right
    if(inv){
      num = index-1;
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
    slide_view();
    // console.log(index);
  }
  $(document).on('turbolinks:load', function(){
    
    $('.photo-slide img').on("mouseenter", function(){
      var index = $('.photo-slide img').index(this);
      // $(".item-photo-main")[0].scrollLeft = index * 300;
      $(".item-photo-main").animate({scrollLeft: index * 300}, 300);
    });
    $('.slider-controller-left').on("click", function(){
      slide_view(true);
    })
    $('.slider-controller-right').on("click", function(){
      slide_view();
    })
    setInterval(auto_slide, 5000);
  })
})