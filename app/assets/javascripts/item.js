$(function(){
  var buildMessageHTML = function(){

    var html =`<div class="image-box">
                 <div class="image">
                 </div>
                 <div class="bottom">
                   <div class="edit">
                     編集
                    </div>
                    <div class="delete">
                      削除
                    </div>
                 </div>
               </div>`
    return html;
  };
  //画像ファイルプレビュー表示
  $('form').on('change', 'input[type="file"]', function(e) {
    var file = e.target.files[0],
        reader = new FileReader(),
        t = this;
    // 画像ファイル以外の場合は何もしない
    if(file.type.indexOf("image") < 0){
      return false;
    }
    var insertHTML ='';
    insertHTML = buildMessageHTML;
    $("#drop_zone").append(insertHTML);
    reader.onload = (function(file) {
      return function(e) {
        $(".image").append($('<img>').attr({
                  src: e.target.result,
                  width: "70px",
                  height: "70px",
                  flout:"left",
                  class: "preview",
                  title: file.name
              }));
      };
    })(file);
    reader.readAsDataURL(file);
  });
  $(document).on('click','.delete',function(){
    $(this).parents(".image-box").remove();
  })


// ターボリンクスの記述をかく
  $(document).on('turbolinks:load', function(){

    var imageHover;
    $('.photo-slide').hover(function(){
        // console.log("へへへ")

    //   imageHover = setTimeout(function() {
    //     $('#bakudan').css
    //     $('#bakuhatsu').css('opacity', '0')
    //   }, 1000)
    // }, function() {
    //   $('#bakudan').css('opacity', '1')
    //   $('#bakuhatsu').css('opacity', '0')
    //   clearTimeout(timeBomb)
    // clearTimeout がないとイベントがキャンセルできず、
    // 一瞬でもカーソルが乗ると３秒後にイベントが発火してしまうので
    // 注意です。
    });
  })
});


