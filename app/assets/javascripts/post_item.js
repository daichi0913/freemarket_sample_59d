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
      }
    else if (del === 2){
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
    var size = `<div class="size-form"><div class="select-form-group"><label for="size">サイズ</label>
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
    </select></div><div class="brand-form-group"><label for="brand">ブランド</label><span class="form-yourself">任意</span><input class="input-default", placeholder="例）シャネル",
    type="text", value="" name="item[brandname]" id="item_brandname"></input></div></div>`


    var ladiesizecm = `<div class="size-form"><div class="select-form-group"><label for="size">サイズ</label>
    <span class="form-require">必須</span><select name="item[size]" class="select-form"><option selected="selected">---</option>
    <option value="under20cm">20cm以下</option>
    <option value="205cm">20.5cm</option>
    <option value="21cm">21cm</option>
    <option value="215cm">21.5cm</option>
    <option value="22cm">22cm</option>
    <option value="225cm">22.5cm</option>
    <option value="23cm">23cm</option>
    <option value="235cm">23.5cm</option>
    <option value="24cm">24cm</option>
    <option value="245cm">24.5cm</option>
    <option value="25cm">25cm</option>
    <option value="255cm">25.5cm</option>
    <option value="26cm">26cm</option>
    <option value="265cm">26.5cm</option>
    <option value="27cm">27cm</option>
    <option value="over275cm">27.5cm</option>

    </select></div>`


    var mensizecm = `<div class="size-form"><div class="select-form-group"><label for="size">サイズ</label>
    <span class="form-require">必須</span><select name="item[size]" class="select-form"><option selected="selected">---</option>
    <option value="under235cm">23.5cm以下</option>
    <option value="24cm">24cm</option>
    <option value="245cm">24.5cm</option>
    <option value="25cm">25cm</option>
    <option value="255cm">25.5cm</option>
    <option value="26cm">26cm</option>
    <option value="265cm">26.5cm</option>
    <option value="27cm">27cm</option>
    <option value="over275cm">27.5cm</option>
    <option value="28cm">28cm</option>
    <option value="285cm">28.5cm</option>
    <option value="29cm">29cm</option>
    <option value="295cm">29.5cm</option>
    <option value="30cm">30cm</option>
    <option value="305cm">30.5cm</option>
    <option value="over31cm">31cm以上</option>
    
    </select></div>`


    var babysmall = `<div class="size-form"><div class="select-form-group"><label for="size">サイズ</label>
    <span class="form-require">必須</span><select name="item[size]" class="select-form"><option selected="selected">---</option>
    <option value="60cm">60cm</option>
    <option value="70cm">70cm</option>
    <option value="80cm">80cm</option>
    <option value="90cm">90cm</option>
    <option value="95cm">95cm</option>

    </select></div>`

    var babylarge = `<div class="size-form"><div class="select-form-group"><label for="size">サイズ</label>
    <span class="form-require">必須</span><select name="item[size]" class="select-form"><option selected="selected">---</option>
    <option value="100cm">100cm</option>
    <option value="110cm">110cm</option>
    <option value="120cm">120cm</option>
    <option value="130cm">130cm</option>
    <option value="140cm">140cm</option>
    <option value="150cm">150cm</option>
    <option value="160cm">160cm</option>

    </select></div>`


    var babyshoes = `<div class="size-form"><div class="select-form-group"><label for="size">サイズ</label>
    <span class="form-require">必須</span><select name="item[size]" class="select-form"><option selected="selected">---</option>
    <option value="under10.5cm">10.5cm以下</option>
    <option value="11cm">11cm・11.5cm</option>
    <option value="12cm">12cm・12.5cm</option>
    <option value="13cm">13cm・13.5cm</option>
    <option value="14cm">14cm・14.5cm</option>
    <option value="15cm">15cm・15.5cm</option>
    <option value="16cm">16cm・16.5cm</option>
    <option value="over17cm">17cm以上</option>

    </select></div>`


    const cate_id = $($('.category_select')[1]).val();
    console.log(cate_id)
    if(cate_id === "56"){
      return ladiesizecm;
    }
    else if(cate_id === "177"){
      return mensizecm;
    }
    else if(cate_id === "329"){
      return babyshoes;
    }

    else if(cate_id.match(/^260$|^272$|^281$/)){
      return babysmall;
    }
    
    else if(cate_id.match(/^290$|^305$|^320$/)){
      return babylarge;
    }


    else{
      return size;
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
      
      deleteHTMLforsb();
      
      if(index === 2){
        // 元々はこれ
        // $('.category_select').val()==="1"||$('.category_select').val()==="138"||$('.category_select').val()==="259"
        if ($('.category_select').val().match(/^1$|^138$|^259$/)){
          $(".category_select_box").after(buildHTMLforsb);
        }
        console.log($('.category_select').val())
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
          
          if($('.category_select').length ==2){
            $('.category_select_box').append(buildHTMLforDB);
          }
          else if($('.category_select').length < 3){
            $('.category_select_box').append(html);
          }
          
          children.forEach(function(child) {
            var html = `<option value="${child.id}">${child.name}</option>`;
            $($('.category_select')[index+1]).append(html);
            $('<option>'+child.name+'</option>').val('');
          });
        });
        
    });
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

        if(shippingfee === "送料込み(出品者負担)"){
          return html;
        }
        else if(shippingfee === "着払い(購入者負担)"){
          return html2;
        }
      }
      console.log("aaaaaaaa")
      deleteHTML();
      $('.shipping-box-forappend').append(buildHTMLforshippingway($(this).val()));
      

    function deleteHTML(){
      var length = $('.shipping-way').length;
      if(length===1){
        $('.shipping-way').remove();
      }
    }
    });
  })
})
