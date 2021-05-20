import { fetchMovies } from './omdb';
import { initSortable } from './init_sortable';
import { initMarkdown } from './init_markdown';
import { initSelect2 } from './init_select2';

const form = document.getElementById("search-form");

// Escutar o submit do form (click no search ou enter no input)
form.addEventListener("submit", fetchMovies);

initSortable();
initMarkdown();
initSelect2();