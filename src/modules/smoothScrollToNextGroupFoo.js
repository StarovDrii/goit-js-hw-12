function smoothScrollToNextGroup() {
  let galleryItemHeight = document
    .querySelector('.gallery-item')
    .getBoundingClientRect().height;

  window.scrollBy({ top: galleryItemHeight * 2, behavior: 'smooth' });
}
export default smoothScrollToNextGroup;
