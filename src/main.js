import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.form'),
  searchInput = document.querySelector('.search-input'),
  gallery = document.querySelector('.gallery'),
  loader = document.querySelector('.loader');

form.addEventListener('submit', fetchImages);

function fetchImages(event) {
  loader.classList.remove('is-hidden');
  gallery.innerHTML = '';
  event.preventDefault();
  const url = new URL('https://pixabay.com/api/');
  const searchParams = new URLSearchParams({
    key: '41798579-68ab5b2702b30822247f51cf8',
    q: searchInput.value,
    orientation: 'horizontal',
    image_type: 'photo',
    safesearch: true,
  });

  fetch(`${url}?${searchParams}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(images => {
      if (images.hits.length === 0) {
        console.log(iziToast.warning);

        return iziToast.warning({
          title: 'Ooops',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      }
      renderImages(images.hits);
    })
    .catch(error =>
      iziToast.error({
        title: 'Error',
        message: 'Something is wrong!',
        position: 'topRight',
      })
    )
    .finally(() => {
      loader.classList.add('is-hidden');
      form.reset();
    });
}

function renderImages(images) {
  const galleryMarkup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `
      <li class="gallery-item">
        <a href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" class="gallery-image"/>
        </a>
        <div class="image-desc">
          <div class="image-desc-item">
            <div class="image-desc-label">Likes</div>
            <div>${likes}</div>
          </div>
          <div class="image-desc-item">
            <div class="image-desc-label">Views</div>
            <div>${views}</div>
          </div>
          <div class="image-desc-item">
            <div class="image-desc-label">Comments</div>
            <div>${comments}</div>
          </div>
          <div class="image-desc-item">
            <div class="image-desc-label">Downloads</div>
            <div>${downloads}</div>
          </div>
        </div>
      </li>
      `
    )
    .join('');

  gallery.innerHTML = galleryMarkup;
  new SimpleLightbox('.gallery a').refresh();
}
