export const publicKey = '12fff6eb4664b42b5d9589e7fc49db42';
export const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMmZmZjZlYjQ2NjRiNDJiNWQ5NTg5ZTdmYzQ5ZGI0MiIsInN1YiI6IjVmOWYxZTIwN2UzNDgzMDAzOWEyZTMxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1fijJU8DlzJTj4xdU9-c_wnX3qE8WYPrjK1SAJfsCu4';

export const withKey = (url: string) => `${url}?api_key=${publicKey}`;

const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/';
export const getW45ImageUrl = (imagePath: string) =>
  `${BASE_IMAGE_URL}w45${imagePath}`;

export const getW92ImageUrl = (imagePath: string) =>
  `${BASE_IMAGE_URL}w92${imagePath}`;

export const getW185ImageUrl = (imagePath: string) =>
  `${BASE_IMAGE_URL}w185${imagePath}`;

export const getW300ImageUrl = (imagePath: string) =>
  `${BASE_IMAGE_URL}w300${imagePath}`;

export const getW500ImageUrl = (imagePath: string) =>
  `${BASE_IMAGE_URL}w500${imagePath}`;

export const getW780ImageUrl = (imagePath: string) =>
  `${BASE_IMAGE_URL}w780${imagePath}`;

export const getW1280ImageUrl = (imagePath: string) =>
  `${BASE_IMAGE_URL}w1280${imagePath}`;
