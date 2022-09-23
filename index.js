function adicionarFilme() {
  let nomeFilme = document.getElementById("nome_filme").value; //value: pegando valor do campo input
  let filmeFavorito = document.getElementById("filme").value; //value: pegando valor do campo input
  let error = document.querySelector(".error");
  let errorNome = document.querySelector(".error_nome");
 
  if(!nomeFilme == "" || !nomeFilme == null) {
    errorNome.textContent = "";
    listarNomeFilme(nomeFilme);
    document.getElementById("nome_filme").value = "";
  } else {
    errorNome.textContent = "Nome não pode ser em branco";
  }

  if (filmeFavorito.endsWith(".jpg") || filmeFavorito.endsWith(".png")) {
    error.textContent = "";
    listarFilmeFavorito(filmeFavorito);
  } else {
    error.textContent = "Endereço de filme inválido!";
  }

  document.getElementById("filme").value = "";
}

function listarNomeFilme(nomeFilme) {
    let span = document.querySelector("#nome");
    span.textContent = nomeFilme;
}

function listarFilmeFavorito(filme) {
  let elementoFilmeFavorito = "<img src=" + filme + ">";
  let elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML =
    elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}