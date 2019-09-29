// function buildHTML(category) {


//   var html = `<select class= "category_select"></select>`
//   return html;
// }

// function appendHTML(category) {
//   if (index != 2){
//     // appendHTML
//     $('.category-box').append(html);

//   }else{
//     ;// end
//   }
// }



$(document).on('turbolinks:load', function(){


  $('.category_select').change(function(){

    $("select").removeClass(".hidden");    // console.log( $(this).val() );
    var category_id = $(this).val();
    // 引数にthisを指定し、クリックした順番を変数に格納
    var index = $('.category_select').index(this);
  
    // 順番を表示
    console.log(index);
    $.ajax({
        type: 'get',                // HTTPメソッドはGETで
        url:  '/api/categories',             // /usersのURLに (これによりusersコントローラのindexアクションが起動)
        data: { id: category_id},    // keyword（キー）: input（バリュー）を送信する  ※パラムス
        dataType: 'json'            // サーバから値を返す際はjsonである
    }).done(function(children){
      // <li>要素の順番を変数に格納
      // var index = $('option').index(this)+1;  
    });

      // console.log(children)
  });
});












// function handleFileSelect(evt) {
//   evt.stopPropagation();
//   evt.preventDefault();

//   files = evt.dataTransfer.files; // FileList object.

//   // 以下に必要なFile Objectのプロパティを記述
//   var output = [];
//   for (var i = 0, f; f = files[i]; i++) {
//     output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
//                 f.size, ' bytes, last modified: ',
//                 f.lastModifiedDate.toLocaleDateString(), '</li>');
//   }
//   document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
// }

// function handleDragOver(evt) {
//   evt.stopPropagation();
//   evt.preventDefault();
//   evt.dataTransfer.dropEffect = 'copy'; 
// }

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
