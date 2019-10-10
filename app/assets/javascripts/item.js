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
  $(document).on('turbolinks:load', function(){
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
  })


// ターボリンクスの記述をかく
  $(document).on('turbolinks:load', function(){
    //商品詳細ページ画像の初期インデックス
    var imageHover
    $('.photo-slide img').on("mouseenter", function(){
      var index = $('.photo-slide img').index(this);
      $('.photo-slide img.active').removeClass("active");
      $(this).addClass("active");
      $(".item-photo-main").animate({scrollLeft: index * 300}, 300);
    });

  })
});


