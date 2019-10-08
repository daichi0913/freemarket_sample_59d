$(function(){
  $('#item-delete-modal-on').on('click', function(){
    $("#item-delete-modal").addClass('show');
  })

  $('.modal').on('click', function(){
    $(this).removeClass('show');
  })
})