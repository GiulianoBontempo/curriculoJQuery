$(document).ready(function(){
    $(".secao").hover(function(){
        $(this).css("background-color", "#FF0000");
    },
    function(){
        $(this).css("background-color", "#faebd7");
    });

    $("#cabecalho").click(function(){
        $(this).fadeOut()
    });
    $("#divContato").click(function(){
        $(this).fadeOut()
    });
});