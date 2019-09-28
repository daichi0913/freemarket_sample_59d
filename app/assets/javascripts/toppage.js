// var loop = setInterval(function() {
  //li先頭要素のクローンを作成
//   var clone = $(".sli-box .slider-image1:first").clone(true);
//   //li先頭要素のマージントップにマイナスを指定しアニメーションさせる
//   $(".sli-box li:first").animate({
//   marginLeft : "100%"
//   }, {
//   duration : 1000,
//   complete : function() {
//       //処理完了時に先頭要素を削除
//       $(".sli-box li:first").remove();
//       //クローンをliの最後に追加
//       clone.clone(true).insertAfter($(".sli-box li:last"));
//   }
//   });
// }, 3000);