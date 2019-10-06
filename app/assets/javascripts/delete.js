$(function(){
  $('.delete_btn').on('click',function(e){
   e.preventDefault();
   e.stopPropagation();
   let href = $(this).attr('href');
   console.log(href)
  })
})