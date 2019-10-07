$(function(){
  $(".forprice").on("keyup",function(){
    var allprice = Math.round($(this).val()*0.1);
    $(".price1").text("¥"+allprice.toLocaleString());
    $(".pricebox-all").text("¥"+($(this).val() - allprice).toLocaleString());
  })
})