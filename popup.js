if (chrome.extension){
  var url = chrome.extension.getURL('likebar.html');
  var height = "40px";
  var div = "<div w3-include-html='"+url+"'></div>";

  $('body').prepend(div);
  w3.includeHTML();
  $(document).ready(function(){
      $('body').append(mainAnchor());
  });
}

function mainAnchor(){
  var oLink = document.createElement("a");
  oLink.style.position = "absolute";
  oLink.id = "thea";
  oLink.style.left = "0";
  oLink.style.top = "0";
  oLink.style.height = "20px";
  oLink.style.width = "20px";
  oLink.style.fontSize = "20px";
  oLink.style.widthWeight = "bolder";
  oLink.text = "❤";
  oLink.style.backgroundColor = "#FFFFFF";
  oLink.style.color = "#1f1f1f";
  oLink.style.borderRadius = "20px";
  oLink.style.zIndex = "99999";
  oLink.style.cursor = "pointer";
  oLink.style.opacity = ".5";

  oLink.onclick = function(){
    var toggle = $("#maindiv").css("display");
    if(toggle == "none") {
      $("#maindiv").show("slow","swing", function(){
        $('ytd-app').css({
          '-webkit-transform': 'translateY(40px)'
        });
      });
      $("input#search").focus(function(){
        $("#maindiv").hide("slow","swing", function(){
          $('ytd-app').css({
            '-webkit-transform': 'translateY(0)'
          });
        });
      })
    } else {
      $("#maindiv").hide("slow","swing", function(){
        $('ytd-app').css({
          '-webkit-transform': 'translateY(0)'
        });
      });
    }
  }
  return oLink;
}
