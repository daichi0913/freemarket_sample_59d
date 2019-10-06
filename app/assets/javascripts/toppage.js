$(()=>{
  function slideview() {
    if(!(location.pathname.match(/\//))){
      return;
    }
    console.log("slide");
  }
  $(document).on('turbolinks:load', function(){
    
    $('.photo-slide img').on("mouseenter", function(){
      var index = $('.photo-slide img').index(this);
      // $(".item-photo-main")[0].scrollLeft = index * 300;
      $(".item-photo-main").animate({scrollLeft: index * 300}, 300);
    });

  })
  setInterval(slideview, 3000);
})