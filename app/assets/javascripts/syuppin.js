//price
$(function(){
  $(document).on('turbolinks:load', function(){
    $(".forprice").on("keyup",function(){
      var fee = Math.round($(this).val()*0.1);
      if(fee >= 30 && fee < 1000000){
        $(".price1").text("¥"+fee.toLocaleString());
        $(".pricebox-all").text("¥"+($(this).val() - fee).toLocaleString());
      }else{
        $(".price1").text("");
        $(".pricebox-all").text("");
      }
    })
  })
})