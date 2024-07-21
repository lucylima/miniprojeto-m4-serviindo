import { Album } from "../model/Album.model.js"

const albums = [
  {
    title: 'Neo Seven',
    artist: '7038634357',
    release: '23/11/2022',
    genre: 'eletronic'
  },
  {
    title: 'My Way Out',
    artist: '7038634357',
    release: '15/11/2021',
    genre: 'eletronic'
  }
]

const randomAlbum = () => {
  const random = Math.floor(Math.random() * albums.length)
  const response = albums[random]
  return response
}

const showSomeAlbums = (number) => {
  let list = [];
  for (let index = 0; index < number; index++) {
    const random = Math.floor(Math.random() * albums.length);
    list.push(albums[random]);
  }
  const response = list;
  return response;
};

const createAlbum = (title, artist, release, genre) => {
  const newAlbum = new Album(title, artist, release, genre);
  albums.push(newAlbum)
  return newAlbum
};

export { randomAlbum, showSomeAlbums, createAlbum }