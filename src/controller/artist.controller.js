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

export { randomArtist };