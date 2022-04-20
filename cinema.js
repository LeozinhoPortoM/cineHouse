const catalogo = require("./database/catalogo");

function listarTodosOsFilmes() {

    catalogo.forEach(function (filme) {
        console.log(filme)
    });

}

function adicionarFilme(filme) {

    catalogo.push(filme);

}

function listarFilmesEmCartaz() {

    for (var i = 0; i < catalogo.length; i++) {
        catalogo[i].emCartaz ? console.log(catalogo[i]) : "";
    }
}

function listarFilmesDeLongaDuracao() {

    var longaDuracao = catalogo.filter((valor) => valor.duracao > 2.0);
    return longaDuracao

}

function buscarFilme(filme) {

    for (var i = 0; i < catalogo.length; i++) {
        if (catalogo[i].codigo === filme) {
            return console.log(catalogo[i]);
        }
    }
    return console.log("Nenhum filme encontrado!")
}

function alterarStatusEmCartaz(codigoFilme) {

    for (var i = 0; i < catalogo.length; i++) {

        if (catalogo[i].codigo === codigoFilme) {

            catalogo[i].emCartaz ? catalogo[i].emCartaz = false : catalogo[i].emCartaz = true;
            return console.log(catalogo[i])

        }
    }
}

function removerFilme(codigoFilme) {

    catalogo.pop(codigoFilme)

}


//listarFilmesEmCartaz()
//listarFilmesDeLongaDuracao()
//listarTodosOsFilmes()
//buscarFilme(2);
//removerFilme()
//alterarStatusEmCartaz(1)
/* adicionarFilme(
    {
        codigo: 5, 
        titulo: "Homem de Ferro", 
        duracao: 2.05, 
        atores: ["Robert Downey"], 
        anoDeLancamento: 2010, 
        emCartaz: false
    }
) */