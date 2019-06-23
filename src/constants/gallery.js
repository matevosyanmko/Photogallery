const importAll = (r) => r.keys().map(r);
export const GalleryItems = importAll(require.context('../assets/gallery', false, /\.(png|jpe?g|svg)$/));
