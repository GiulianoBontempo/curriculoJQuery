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

    // $("#divEducacao").click(function(){
    //     loadDoc();
    // });
});

// function loadDoc() {
//     const xhttp = new XMLHttpRequest();
//     xhttp.onload = function() {
//       document.getElementById("divEducacao").innerHTML =
//       this.responseText;
//     }
//     xhttp.open("GET", "ajaxText.txt");
//     xhttp.send();
//   }

fetch("/educacao")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let saidaEducacao =''
        let educacoes = data;
        educacoes.map(function(educacao){
            saidaEducacao += '<h3 class="descricao">' + `${educacao.nome}` + '<h3><h4 class="descricao1">' + `${educacao.descricao}` + '<h4><a href="frontend/html/educacaoEditar.html?id=' + `${educacao.id}` + '">Editar </a><a href="removeEducacao?id=' + `${educacao.id}` + '">Excluir<a>'
        })
        document.getElementById("entradaEducacao").innerHTML = saidaEducacao;
    })

    fetch("/experiencias")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let saidaExperiencias =''
        let experiencias = data;
        experiencias.map(function(experiencia){
            saidaExperiencias += '<h3 class="descricao">' + `${experiencia.nome}` + '<h3><h4 class="descricao1">' + `${experiencia.descricao}` + '<h4><a href="frontend/html/experienciasEditar.html?id=' + `${experiencia.id}` + '">Editar </a><a href="removeExperiencia?id=' + `${experiencia.id}` + '">Excluir<a>'
        })
        document.getElementById("entradaExperiencias").innerHTML = saidaExperiencias;
    })