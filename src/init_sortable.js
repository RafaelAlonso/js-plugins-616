import Sortable from 'sortablejs';

const initSortable = () => {
  const moviesList = document.getElementById('movies-list');
  Sortable.create(moviesList, {
    ghostClass: "ghost",
    animation: 700,
    onEnd: (event) => {
      alert(`${event.oldIndex} moved to ${event.newIndex}`);
    }
  });
}

export { initSortable };