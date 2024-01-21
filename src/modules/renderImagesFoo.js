import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const gallery = document.querySelector('.gallery');
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
  gallery.insertAdjacentHTML('beforeend', galleryMarkup);
  new SimpleLightbox('.gallery a').refresh();
}
export default renderImages;
