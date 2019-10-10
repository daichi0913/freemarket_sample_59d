$(function(){
  $(document).on('turbolinks:load', function(){
    $('#item-delete-modal-on').on('click', function(){
      $("#item-delete-modal").addClass('show');
      $('.modal-banner').animate({"margin": "20px auto", "opacity": "1"}, 400);
    })
  
    $('.modal').on('click', function(){
      $(this).removeClass('show');
      $('.modal-banner').css({"margin": "8px auto", "opacity": "0"});
    })
  })  
})