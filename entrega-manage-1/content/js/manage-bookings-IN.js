$("#img1").on('click', function(){
    $(this).attr("src","./content/img/like-selected.png");
    $("#img2").attr("src","./content/img/unlike.png");
});

$("#img2").on('click', function(){
  $(this).attr("src","./content/img/unlike-selected.png");
  $("#img1").attr("src","./content/img/like.png");
});




