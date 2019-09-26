$(function(){

  function buildHTML(category) {

    if (index != 2)

    (index == 0 || index== 1)

    var html = `<select class= "category_select"></select>`
    return html;
  }


$(document).on('turbolinks:load', function(){


  $('select').change(function() {
    // console.log( $(this).val() );
    var category_id = $(this).val();
    $.ajax({
        type: 'get',                // HTTPメソッドはGETで
        url:  '/api/categories',             // /usersのURLに (これによりusersコントローラのindexアクションが起動)
        data: { id: category_id},    // keyword（キー）: input（バリュー）を送信する  ※パラムス
        dataType: 'json'            // サーバから値を返す際はjsonである
    })

    .done(function(children){

        // <li>要素の順番を変数に格納
        var index = $('option').index(index+1);
       
        // 変数の中身をコンソールに表示
        console.log(index);
       
      });

      // console.log(children)
    });

    // $(category).on('click', '.category_select_add', function(){
    //   removeCategory($(this).data('user-id'),$(this).data('user-name'))
    //   $(this).parent().remove();
    //   })
    


    
    // console.log(html)

    
    
    // .fail(function(){
    //   console.log("ajax error")
    // });
    })
  })
