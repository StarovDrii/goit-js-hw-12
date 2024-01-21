import { loader, loadMoreBtn } from '../main.js';
import { gallery } from './renderImagesFoo';

function galleryReset() {
  gallery.innerHTML = '';
  loader.classList.remove('is-hidden');
  loadMoreBtn.classList.add('is-hidden');
}

export default galleryReset;
