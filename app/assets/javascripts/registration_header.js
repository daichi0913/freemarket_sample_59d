$(function(){
  function addClassesToList(index){
    $('.nakamura-timeline li').each(function(i, element){
      if(i>index){
        return;
      }else if(i===index){
        $(element).addClass('active');
      }else{
        $(element).addClass('through');
      }
    })
  }
  $(document).on('turbolinks:load', function(){
    const current_path = location.pathname;
    const urls = [/\/users\/sign_up/, /\/users\/[0-9]+\/sms_confirmation/, /\/users\/[0-9]+\/address/, /\/users\/[0-9]+\/credit_card_registration/, /\/users\/[0-9]+\/finish/];
    
    $.each(urls, function(index, value){
      if(current_path.match(value)){
        addClassesToList(index);
        return
      }
    })
  })
})