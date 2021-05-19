///////////////////////////////////////
// ALGOLIA PLACES
///////////////////////////////////////

const input = document.getElementById("search");
const h3 = document.getElementById("place");

input.addEventListener("keyup", (event) => {
  // O fetch de POST precisa de um segundo argumento com o `method`` e como é POST, precisamos passar um `body`
  fetch("https://places-dsn.algolia.net/1/places/query", {
    method: "POST",
    body: JSON.stringify({ query: event.currentTarget.value }),
  })
    .then((response) => response.json())
    .then((data) => {
      const address = data.hits[0].locale_names.default[0];
      h3.innerText = address;
    });
});

////////////////////////////////////////////////////////////
////// OMDB API
///////////////////////////////////////////////////////////

const form = document.getElementById("search-form");
const moviesList = document.getElementById("movies-list");

// Escutar o submit do form (click no search ou enter no input)
form.addEventListener("submit", (event) => {
  // Este callback é chamado somente quando ocorre o submit

  event.preventDefault(); // Para não seguir o action do form

  const keyword = document.getElementById("keyword").value; // Pegamos o valor digitado no input de text (NÃO ESQUECER DO .value NO FINAL)

  // Interpolando o keyword com a URL da API
  const url = `http://www.omdbapi.com/?s=${keyword}&apikey=adf1f2d7`;

  // Limpa todos os <li> para começar uma nova exibição dos movies
  moviesList.innerHTML = "";

  fetch(url) //Faz o request HTTP do tipo GET
    .then((response) => response.json()) // Converte a resposta em JSON
    .then((data) => {
      // Dentro deste callback temos o data que é a resposta da API

      // Na resposta temos a chave Search que é um array
      data.Search.forEach((movie) => {
        // Iterando por cada elemento do Array (movie)

        // item é o HTML do <li>
        const item = `<li>
                        <img src="${movie.Poster}">
                        <h4>${movie.Title}</h4>
                      </li>`;

        // No movie temos a chave Title
        moviesList.insertAdjacentHTML("beforeend", item); // Insere uma nova <li> item dentro do moviesList <ul>
      });
    });
});
