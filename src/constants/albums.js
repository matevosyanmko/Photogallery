const importAll = (r) => r.keys().map(r);
const Album1 = importAll(require.context('../assets/albums/album1', false, /\.(png|jpe?g|svg)$/));
const Album2 = importAll(require.context('../assets/albums/album2', false, /\.(png|jpe?g|svg)$/));
const Album3 = importAll(require.context('../assets/albums/album3', false, /\.(png|jpe?g|svg)$/));
const Album4 = importAll(require.context('../assets/albums/album4', false, /\.(png|jpe?g|svg)$/));

export const AlbumItems = [
  { id: 1, name: 'Album1', gallery: Album1 },
  { id: 2, name: 'Album2', gallery: Album2 },
  { id: 3, name: 'Album3', gallery: Album3 },
  { id: 4, name: 'Album4', gallery: Album4 }
];
