$(document).ready(function(){
  debugger;
    $(".btns").click(function(){
      $(".overlay").show();
    });

    $("#popover-close").click(function(){
      $(".overlay").hide();
    });
   
  });