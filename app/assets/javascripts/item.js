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
    let number = 1;
    if (location.pathname.match(/items\/new$|items\/\d+\/edit$/)){
      number = $('input[type="file"]').length;
    }


    $('form').on('change', 'input[type="file"]', function(e) {
      var file = e.target.files[0],
      reader = new FileReader(),
      t = this;
      // 画像ファイル以外の場合は何もしない
      if(file.type.indexOf("image") < 0){
        return false;
      }

      $(this).parents('label').css({'display':'none'});
      console.log($(this).parents('label')[0])

      var insertHTML ='';
      insertHTML = buildMessageHTML;
      $("#drop_zone").append(insertHTML);

      if($('input[type="file"]').length < 10){
        $("#drop_zone").append(`<label for="item_item_images_attributes_${number}_image"><input type="file" name="item[item_images_attributes][${number}][image]" id="item_item_images_attributes_${number}_image"></label>`);
        number += 1;
      }
      console.log($('input[type="file"]'))
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


