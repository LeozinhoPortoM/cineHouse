const { notDeepEqual } = require('assert');
const fs = require('fs');
//const catalogo = require("./database/catalogo");



const filmesCatalogo = fs.readFileSync('./database/catalogo.json', 'utf-8'); // String
const catalogo = JSON.parse(filmesCatalogo) // Object


function listarTodosOsFilmes() {

    catalogo.forEach(function(filme){
        console.log(filme)
    });
    //console.log(catalogo)
}

function adicionarFilme(filme) {
    
    //catalogo.push(filme);
    const newFilmeObject = {...catalogo, ...filme};
    const newFilmeString = JSON.stringify(newFilmeObject, null, 3);
    fs.appendFileSync('./database/catalogo.json', newFilmeString, 'utf-8');

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
    
    //catalogo.pop()
    // let codFilme = catalogo.filter((valor) => valor.codigo === codigoFilme)
    // //const newFilmeString = JSON.stringify(codigoFilme, null, 3);
    // fs.rm('./database/catalogo.json', codFilme)
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