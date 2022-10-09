import { appendContent } from './helpers.js';
import { createContentTemplate } from './card.js';
import { createSorting } from './sorting.js';
import { getMovies } from './service.js';

function init() {
  appendContent('sort', createSorting());

  getMovies()
    .then((data) => {
      const fragment = document.createDocumentFragment();

      data.forEach((movie) => {
        fragment.appendChild(createContentTemplate(movie));
      });

      appendContent('content', fragment);
    });
}

init();
