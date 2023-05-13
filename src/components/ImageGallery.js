// ImageGallery.js
import React from 'react';
import styles from './ImageGallery.module.css'; // Consider creating a CSS module for the gallery

const images = [ // Add the paths to your images here
  'img/brands.png',
  'img/image2.png',
  'img/image3.png',
  // Add as many images as you need...
];

const ImageGallery = () => (
  <div className={styles.gallery}>
    {images.map((src, index) => (
      <img key={index} src={src} alt="" className={styles.image} /> 
    ))}
  </div>
);

export default ImageGallery;
