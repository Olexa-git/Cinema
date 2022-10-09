import {appendContent} from './helpers.js';
import {createContentTemplate} from './card.js';
import {createSorting} from './sorting.js';
import {getMovies} from './service.js'

function init() {
  getMovies()
    .then((data) => {
      const fragment = document.createDocumentFragment();

      data.forEach((movie) => {
        fragment.appendChild(createContentTemplate(movie));
      });

      appendContent('content', fragment);
      appendContent('sort', createSorting());
    });
}
init();