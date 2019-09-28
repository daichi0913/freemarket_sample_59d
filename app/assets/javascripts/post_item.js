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
  
