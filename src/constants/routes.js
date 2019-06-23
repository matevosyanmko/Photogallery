// route components
import { Albums } from '../views/albums';
import { Contacts } from '../views/contacts';
import { Gallery } from '../views/gallery';
import { Videos } from '../views/videos';
//route props
import { GalleryItems } from './gallery';
import { AlbumItems } from './albums';
import { VideoItems } from './videos';

// routes
export const Routes = [
  { key: 1, name: 'Gallery', path: '/', component: Gallery, props: GalleryItems },
  { key: 2, name: 'Albums', path: '/albums', component: Albums, props: AlbumItems },
  { key: 3, name: 'Albums Item', path: '/albums/:id', component: Albums, props: AlbumItems },
  { key: 4, name: 'Contacts', path: '/contacts', component: Contacts },
  { key: 5, name: 'Videos', path: '/videos', component: Videos, props: VideoItems }
];
