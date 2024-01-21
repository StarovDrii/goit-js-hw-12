import fetchImages from '../main.js';
import { loader, loadMoreBtn } from '../main.js';

async function loadMoreImages() {
  loader.classList.remove('is-hidden');
  loadMoreBtn.classList.add('is-hidden');
  await fetchImages();
}

export default loadMoreImages;
