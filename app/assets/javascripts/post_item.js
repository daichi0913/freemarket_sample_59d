$(function(){

  function buildHTML() {
    var html = `<select class= "category_select"><option selected ="selected">---</option></select>`
    return html;
  }

  function buildHTMLforDB() {
    var html = `<select class= "category_select", name="item[category_id]"><option selected ="selected">---</option></select>`
    return html;
  }

  function deleteHTML(index, length){
    let del = length - (index+1);
    if (del == 1){
      $($('.category_select')[index+1]).remove();
    
    } else if (del == 2){
      $($('.category_select')[index+1]).remove();
      $($('.category_select')[index+1]).remove();
    }
  }

  $(document).on('turbolinks:load', function(){
    $(document).off("change", ".category_select");
    $(document).on("change", ".category_select", function(){

      // $("select").removeClass(".hidden");    // console.log( $(this).val() );
      var category_id = $(this).val();
      // 引数にthisを指定し、クリックした順番を変数に格納
      var index = $('.category_select').index(this);
      var length = $('.category_select').length;

      // 順番を表示
      console.log(index);
      $.ajax({
          type: 'get',                // HTTPメソッドはGETで
          url:  '/api/categories',             // /usersのURLに (これによりusersコントローラのindexアクションが起動)
          data: { id: category_id},    // keyword（キー）: input（バリュー）を送信する  ※パラムス
          dataType: 'json'            // サーバから値を返す際はjsonである
      }
      ).done(function(children){
        deleteHTML(index, length);
        var html = buildHTML;

        if ($('.category_select').length ==2){
          $('.category_select_box').append(buildHTMLforDB);
        }else if($('.category_select').length < 3){
          $('.category_select_box').append(html);
        }

        children.forEach(function(child) {
          var html = `<option value="${child.id}">${child.name}</option>`;
          $($('.category_select')[index+1]).append(html);
          $('<option>'+child.name+'</option>').val('');
        });
      });
    });
  })

function handleFileSelect(evt) {
  evt.stopPropagation();
  evt.preventDefault();

  files = evt.dataTransfer.files; // FileList object.

  // 以下に必要なFile Objectのプロパティを記述
  var output = [];
  for (var i = 0, f; f = files[i]; i++) {
    output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
                f.size, ' bytes, last modified: ',
                f.lastModifiedDate.toLocaleDateString(), '</li>');
  }
  document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
}

function handleDragOver(evt) {
  evt.stopPropagation();
  evt.preventDefault();
  evt.dataTransfer.dropEffect = 'copy'; 
}

  // // イベントリスナーを設定
  // var dropZone = document.getElementById('drop_zone');
  // dropZone.addEventListener('dragover', handleDragOver, false);
  // dropZone.addEventListener('drop', handleFileSelect, false);


function file_upload()
{
  
  
  // build/appendHTML的な記述をする



    // フォームデータを取得
    let formdata = () => new FormData($('#my_form').get(0));
    // ファイルが未登録なら一番最初のファイルを追加
    // 複数ファイルアップロードの場合ここを修正
    if($('input[name="upload_file"]').val() == ""){
      formdata.append('upload_file',files[0])
    }

    //非同期通信
    $.ajax({
        url  : "/upload2",
        type : "POST",
        data : formdata,
        cache       : false,
        contentType : false,
        processData : false,
        dataType: 'html',

    })
    .done(function(data, textStatus, jqXHR){
        console.log(data);
    })
    .fail(function(jqXHR, textStatus, errorThrown){
        console.log("fail");
    })
    .always(function(data){
        console.log("complete")
    });
}



  $("#item_shipping_fee").on("change", function(){
    var buildHTMLforshippingway = function()  {
      var html = `<div class="shipping-way"></div><label for="shippin_way">配送の方法</label>
      <span class="form-require">必須</span><select name="item[shipping_way]" id="item_shipping_way"><option selected="selected">---</option>
      <option value="未定">未定</option>
      <option value="らくらくメルカリ便">らくらくメルカリ便</option>
      <option value="ゆうメール">ゆうメール</option>
      <option value="レターパック">レターパック</option>
      <option value="普通郵便(定形、定形外)">普通郵便(定形、定形外)</option>
      <option value="クロネコヤマト">クロネコヤマト</option>
      <option value="ゆうパック">ゆうパック</option>
      <option value="クリックポスト">クリックポスト</option>
      <option value="ゆうパケット">ゆうパケット</option>
      </select>`
      return html;
    }
    deleteHTML();
    $('.shipping-box').after(buildHTMLforshippingway);


  function deleteHTML(){
    var length = $('.shipping-way').length;
    if(length===1){
       $('.shipping-way').remove();
    }
    console.log(length)
  }



  });


  // if($('input[name="upload_file"]').val() == ""){
  //   formdata.append('upload_file',files[0])
  // }


    // %div.fee-to-days
    //   %h3.each-head 配送について
    //   %label{for: "shippin_fee"} 配送料の負担
    //   %span.form-require 必須
    //   = f.select :shipping_fee do
    //     %option{selected:"selected"} ---
    //     %option{value: "送料込み(出品者負担)"} 送料込み(出品者負担)
    //     %option{value: "着払い(購入者負担)"} 着払い(購入者負担)


    // ターボリンクスの記述をかく+価格計算式
  // $(document).on('turbolinks:load', function(){
  //   var calculatePrice = index$(.forprice)
  //    $('.for-price').on("keyup", function(){
  //     .for-price * 0.1
  //     $(".item-photo-main").animate({scrollLeft: index * 300}, 300);

  //     object.onkeyup = function(){ 処理 };

  //   });




  // function isNumeric(n) {
  //   return !isNaN(parseFloat(n)) && isFinite(n);
  // }


  // $('#btnCalculate').on('click', function() {
  //   var a = $('#pointspossible').val().replace(/ +/g, "");
  //   var b = $('#pointsgiven').val().replace(/ +/g, "");
  //   var perc = "0";
  //   if (a.length > 0 && b.length > 0) {
  //       if (isNumeric(a) && isNumeric(b)) {
  //           perc = a / b * 100;
  //       }
  //   }    
  //   $('#pointsperc').val(perc).toFixed(3);
  // });


  // // ドロップされる側のオブジェクトのidを'drop'とする

  // var target = document.getElementById('drop');
  // if (target) {

  // // ドラッグオーバー時の処理。
  //   target.addEventListener('dragover', function (e) {
  //     e.preventDefault();
  //     e.stopPropagation();
  //     e.dataTransfer.dropEffect = 'copy';
  //   });

  // // ドロップ時の処理。データをフォームに渡す。
  //   target.addEventListener('drop', function (e) {
  //     e.stopPropagation();
  //     e.preventDefault();
  //     document.getElementById('ファイルをもたせるフォームのid').files = e.dataTransfer.files;
  //   });
  // }


  // // 先程ファイルをもたせたフォームのクラス:form_class
  // // プレビュー画像の追加先クラス:upload_list

  // $('.form_class').on('change',function(e) {
  //   for(var i = 0; i < this.files.length; i++){
  //     const reader = new FileReader();
  //     reader.onload = function (e) {
  //       var html = `<img alt='画像' src='${e.target.result}'>`
  //   ('.upload_list').append(html);
  //     }
  //     reader.readAsDataURL(this.files[i]);
  //   }
  // });

  // addEventListener
  // addEventListener() は関数または EventListenerを実装したオブジェクトを、
  // 呼び出される EventTarget における指定されたイベント種別の
  // イベントリスナーのリストに加えることで動作します。どうやら指定したリスナーを
  // dragoverとdragをtergetに登録して、イベント時に中の記述を呼び出している
  // dataTransferでドラッグされているデータの保持
  // getElementByIdは該当するidが見つからない場合if文に処理を入れてあげないと、
  // 他のページでエラーがでる。
  // e.preventDefault();とe.stopPropagation();は
  // 画像がやってきたときのブラウザの動作を止めてるので、
  // 消すと画像ファイルをブラウザが表示する。
})
