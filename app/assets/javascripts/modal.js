$(function(){
  $('#item-delete-modal-on').on('click', function(){
    // console.log('modal on')
    $("#item-delete-modal").addClass('show');
  })

  $('.modal').on('click', function(){
    $(this).removeClass('show');
  })
})