$(document).ready(function(){
    $(".secao").hover(function(){
        $(this).css("background-color", "#FF0000");
    },
    function(){
        $(this).css("background-color", "#faebd7");
    });

    $("#cabecalho").click(function(){
        $(this).fadeOut();
    });
    $("#divContato").click(function(){
        $(this).fadeOut();
    });

    $("#divEducacao").click(function(){
        loadDoc();
    });
});

function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("divEducacao").innerHTML =
      this.responseText;
    }
    xhttp.open("GET", "ajaxText.txt");
    xhttp.send();
  }