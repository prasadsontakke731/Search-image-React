import './ImageList.css';
import React from 'react';
import ImageShow from './ImageShow';

function ImageList({ images }) {
  const renederedImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });

  return <div className='image-list'>{renederedImages}</div>;
}

export default ImageList;
