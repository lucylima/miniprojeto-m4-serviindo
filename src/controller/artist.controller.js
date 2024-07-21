import { Artist } from "../model/Artist.model.js"
const artists = [
  "7038634357",
  "lucy eris",
  "Caroline Polachek",
  "Mitski",
  "Malibu",
  "Ecco2k",
  "Bladee",
  "Chico Buarque",
  "Yeule",
  "Lady Gaga",
  "Melanie Martinez",
  "Amaarae",
];

const randomArtist = () => {
  const random = Math.floor(Math.random() * artists.length);
  const response = artists[random];
  return response 
};

const showSomeArtists = (number) => {
  let list = [];
  for (let index = 0; index < number; index++) {
    const random = Math.floor(Math.random() * artists.length);
    list.push(artists[random]);
  }
  const response = list;
  return response;
};

const createArtist = (artist) => {
  const newArtist = new Artist(artist);
  artists.push(newArtist);
  return newArtist;
};

export { randomArtist, showSomeArtists, createArtist };