

import style from '../ImageGalleryItem/imageGalleryitem.module.css';

export const ImageGalleryItem = ({
  images,
  handleModalImage,
  handleModalAlt,
  showModal,
}) => {
  return (
    <>
      {images.map(image => (
        <li
          key={image.id}
          className={style.ImageGalleryItem}
          onClick={() => {
            handleModalImage(image.largeImageURL);
            handleModalAlt(image.tags);
          }}
        >
          <img
            src={image.webformatURL}
            alt={image.tags}
            className={style.ImageGalleryItem__image}
            
          />
        </li>
      ))}
    </>
  );
};