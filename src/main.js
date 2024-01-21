import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import axios from 'axios';
import galleryReset from './modules/galleryResetFoo.js';
import renderImages from './modules/renderImagesFoo.js';
import handlerLoadMoreBtn from './modules/handlerLoadMoreBtnFoo.js';
import loadMoreImages from './modules/loadMoreImagesFoo.js';
import smoothScrollToNextGroup from './modules/smoothScrollToNextGroupFoo.js';

export const form = document.querySelector('.form'),
  searchInput = document.querySelector('.search-input'),
  loader = document.querySelector('.loader'),
  loadMoreBtn = document.querySelector('.load-more-btn');

form.addEventListener('submit', handleFormSubmit);
loadMoreBtn.addEventListener('click', loadMoreImages);

axios.defaults.baseURL = 'https://pixabay.com';

export let page = 1;
export const per_page = 40;
let searchInputValue;

async function handleFormSubmit(event) {
  event.preventDefault();
  galleryReset();
  page = 1;
  searchInputValue = searchInput.value;
  await fetchImages();
}

async function fetchImages() {
  const response = await axios
    .get('/api/', {
      params: {
        key: '41798579-68ab5b2702b30822247f51cf8',
        q: searchInput.value,
        orientation: 'horizontal',
        image_type: 'photo',
        safesearch: true,
        page,
        per_page,
        // mode: 'no-cors',
      },
    })
    .then(response => {
      if (response.data.hits.length === 0) {
        return iziToast.warning({
          title: 'Ooops',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      }
      page++;
      renderImages(response.data.hits);
      handlerLoadMoreBtn(response.data.totalHits);
      smoothScrollToNextGroup();
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: 'Something is wrong!',
        position: 'topRight',
      });
    })
    .finally(() => {
      loader.classList.add('is-hidden');
    });
}
export default fetchImages;

// const gallery = document.querySelector('.gallery');
// function renderImages(images) {
//   const galleryMarkup = images
//     .map(
//       ({
//         webformatURL,
//         largeImageURL,
//         tags,
//         likes,
//         views,
//         comments,
//         downloads,
//       }) =>
//         `
//       <li class="gallery-item">
//         <a href="${largeImageURL}">
//           <img src="${webformatURL}" alt="${tags}" class="gallery-image"/>
//         </a>
//         <div class="image-desc">
//           <div class="image-desc-item">
//             <div class="image-desc-label">Likes</div>
//             <div>${likes}</div>
//           </div>
//           <div class="image-desc-item">
//             <div class="image-desc-label">Views</div>
//             <div>${views}</div>
//           </div>
//           <div class="image-desc-item">
//             <div class="image-desc-label">Comments</div>
//             <div>${comments}</div>
//           </div>
//           <div class="image-desc-item">
//             <div class="image-desc-label">Downloads</div>
//             <div>${downloads}</div>
//           </div>
//         </div>
//       </li>
//       `
//     )
//     .join('');
//   gallery.insertAdjacentHTML('beforeend', galleryMarkup);
//   new SimpleLightbox('.gallery a').refresh();
// }

// async function loadMoreImages() {
//   loader.classList.remove('is-hidden');
//   loadMoreBtn.classList.add('is-hidden');
//   await fetchImages();
// }

// function galleryReset() {
//   page = 1;
//   gallery.innerHTML = '';
//   loader.classList.remove('is-hidden');
//   loadMoreBtn.classList.add('is-hidden');
// }

// function handlerLoadMoreBtn(totalHits) {
//   const maxPages = Math.ceil(totalHits / per_page);
//   if (page > maxPages) {
//     return iziToast.show({
//       message: "We're sorry, but you've reached the end of search results.",
//       position: 'topRight',
//     });
//   } else {
//     loadMoreBtn.classList.remove('is-hidden');
//   }
// }
