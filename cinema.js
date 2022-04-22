const fs = require('fs')
const catalogo = require("./database/catalogo");

function listarTodosOsFilmes() {

    catalogo.forEach(function (filme) {
        console.log(filme.titulo)
    });

}

function adicionarFilme(filme) {

    catalogo.push(filme);
    //const result = {...catalogo, ...filme}
    fs.writeFileSync("./database/catalogo.json", JSON.stringify(catalogo, null, 4), "utf-8")

}

function listarFilmesEmCartaz() {

    for (var i = 0; i < catalogo.length; i++) {
        catalogo[i].emCartaz ? console.log(catalogo[i].titulo) : "";
    }
}

function listarFilmesDeLongaDuracao() {

    var longaDuracao = catalogo.map(valor => {
        return valor.duracao > 2.0 ? console.log(valor.titulo) : "";
    });

}

function buscarFilme(filme) {

    for (var i = 0; i < catalogo.length; i++) {
        if (catalogo[i].codigo === filme) {
            return console.log(catalogo[i].titulo);
        }
    }
    return console.log("Nenhum filme encontrado!")
}

function alterarStatusEmCartaz(codigoFilme) {

    for (var i = 0; i < catalogo.length; i++) {
        if (catalogo[i].codigo === codigoFilme) {
            if (catalogo[i].emCartaz === true) {
                catalogo[i].emCartaz = false
                fs.writeFileSync("./database/catalogo.json", JSON.stringify(catalogo, null, 3), "utf-8")
            } else {
                catalogo[i].emCartaz = true
                fs.writeFileSync("./database/catalogo.json", JSON.stringify(catalogo, null, 3), "utf-8")
            }
        }
    }
}

function removerFilme(codigoFilme) {

    for (var i = 0; i < catalogo.length; i++) {
        if (catalogo[i].codigo === codigoFilme) {
            delete catalogo[i]
        }
    }
    console.log(catalogo)
}


//listarFilmesEmCartaz()
//listarFilmesDeLongaDuracao()
//listarTodosOsFilmes()
//buscarFilme(2);
//removerFilme(2)
//alterarStatusEmCartaz(3)
/* adicionarFilme(
    {
        codigo: 5, 
        titulo: "Homem de Ferro", 
        duracao: 2.05, 
        atores: ["Robert Downey"], 
        anoDeLancamento: 2010, 
        emCartaz: true
    }
)  */