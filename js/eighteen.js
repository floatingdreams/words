 SPA_RESOLVE_INIT = function(transition) { 
	document.getElementById("change").innerHTML = '<div class="problem over">\
      <div class="pro-tit">\
        <img src="images/pro-tit.png">\
        <span>第<i class="now-num">18</i>/20题</span>\
      </div>\
      <div class="pro-img hint-img">\
        <img src="images/pro-img.jpg">\
      </div>\
      <div class="time hint_over">\
        <span id="time">60</span>\
        <p>没有提示了，加油</p>\
      </div>\
      <div class="hint hint-over">\
        <input type="text" placeholder="输入答案" id="txt">\
      </div>\
      <div class="next" id="btn">\
        <a>下一题</a>\
      </div>\
    </div>';
    clearInterval(k);
    res();
  var len=item.list.length-30;
  var num=Math.round(Math.random()*len+30);
  if(item.list[num].qtype==3){
    $(".pro-img").html("<img src='"+item.list[num].img+"'>");
    $("#btn").on("click",function(){
        if($("#txt").val()==""||$("#txt").val()!=item.list[num].right){
            $(this).children("a").attr("href","#/error");
        }
        if($("#txt").val()!="" && $("#txt").val()==item.list[num].right){
            $(this).children("a").attr("href","#/nineteen");
        }
    });
  }
  
}