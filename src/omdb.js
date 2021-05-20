////////////////////////////////////////////////////////////
////// OMDB API
///////////////////////////////////////////////////////////

const moviesList = document.getElementById("movies-list");

const appendMovie = (movie) => {
  // Iterando por cada elemento do Array (movie)

  // item é o HTML do <li>
  const item = `<li>
                  <img src="${movie.Poster}" height="120">
                </li>`;

  // No movie temos a chave Title
  moviesList.insertAdjacentHTML("beforeend", item); // Insere uma nova <li> item dentro do moviesList <ul>
}

const addMoviesToList = (data) => {
  // Dentro deste callback temos o data que é a resposta da API

  // Na resposta temos a chave Search que é um array
  data.Search.forEach(appendMovie);
}

const fetchMovies = (event) => {
  // Este callback é chamado somente quando ocorre o submit
  event.preventDefault(); // Para não seguir o action do form

  const keyword = document.getElementById("keyword").value; // Pegamos o valor digitado no input de text (NÃO ESQUECER DO .value NO FINAL)

  // Interpolando o keyword com a URL da API
  const url = `http://www.omdbapi.com/?s=${keyword}&apikey=adf1f2d7`;

  // Limpa todos os <li> para começar uma nova exibição dos movies
  moviesList.innerHTML = "";

  fetch(url) //Faz o request HTTP do tipo GET
    .then((response) => response.json()) // Converte a resposta em JSON
    .then(addMoviesToList);
}

export { fetchMovies };