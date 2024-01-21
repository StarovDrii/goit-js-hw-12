import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { page, per_page, loadMoreBtn } from '../main.js';

function handlerLoadMoreBtn(totalHits) {
  const maxPages = Math.ceil(totalHits / per_page);
  if (page > maxPages) {
    return iziToast.show({
      message: "We're sorry, but you've reached the end of search results.",
      position: 'topRight',
    });
  } else {
    loadMoreBtn.classList.remove('is-hidden');
  }
}
export default handlerLoadMoreBtn;
