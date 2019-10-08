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
    if (del === 1){
      $($('.category_select')[index+1]).remove();
    
    } else if (del === 2){
      $($('.category_select')[index+1]).remove();
      $($('.category_select')[index+1]).remove();
    }
  }

  function deleteHTMLforsb(){
    var length = $('.size-form').length;
    if(length===1){
      $('.size-form').remove();
    }
  }

  function buildHTMLforsb(){
    var size = `<div class="size-form"><label for="size">サイズ</label>
    <span class="form-require">必須</span><select name="item[size]" class="select-form"><option selected="selected">---</option>
    <option value="XXS以下">XXS以下</option>
    <option value="XS(SS)">XS(SS)</option>
    <option value="S">S</option>
    <option value="M">M</option>
    <option value="L">L</option>
    <option value="XL(LL)">XL(LL)</option>
    <option value="2XL(3L)">2XL(3L)</option>
    <option value="3XL(4L)">3XL(4L)</option>
    <option value="4XL(5L)以上">4XL(5L)以上</option>
    <option value="FREE SIZE">FREE SIZE</option>
    </select></div>`
    return size;
  }


  $(document).on('turbolinks:load', function(){
    $(document).off("change", ".category_select");
    $(document).on("change", ".category_select", function(){

      // $("select").removeClass(".hidden");    // console.log( $(this).val() );
      var category_id = $(this).val();
      // 引数にthisを指定し、クリックした順番を変数に格納
      var index = $('.category_select').index(this);
      var length = $('.category_select').length;

      //
      deleteHTMLforsb();
      
      if(index === 2){
        $(".category_select_box").after(buildHTMLforsb);
      }
      // 順番を表示
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


  $("#item_shipping_fee").on("change", function(){
    function buildHTMLforshippingway(shippingfee){
      var html = `<div class="shipping-way"><label for="shippin_way">配送の方法</label>
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
      </select></div>`
      var html2 = `<div class="shipping-way"><label for="shippin_way">配送の方法</label>
      <span class="form-require">必須</span><select name="item[shipping_way]" id="item_shipping_way"><option selected="selected">---</option>
      <option value="未定">未定</option>
      <option value="クロネコヤマト">クロネコヤマト</option>
      <option value="ゆうパック">ゆうパック</option>
      <option value="ゆうメール">ゆうメール</option>
      </select></div>`
      console.log(shippingfee)
      if(shippingfee === "送料込み(出品者負担)"){
        return html;
      }
      else if(shippingfee === "着払い(購入者負担)"){
        return html2;
      }
    }
    deleteHTML();

    $('.shipping-box-forappend').after(buildHTMLforshippingway($(this).val()));


  function deleteHTML(){
    var length = $('.shipping-way').length;
    if(length===1){
       $('.shipping-way').remove();
    }
  }
  });
})
