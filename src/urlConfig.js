export const api = 'http://localhost:5000/api';

export const userImageUrl = (filename) => {
  return `http://localhost:5000/img/users/${filename}`;
};

export const productsImagesUrl = (filename) => {
  return `http://localhost:5000/img/products/${filename}`;
};
