import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { GalleryPage } from './gallery-page/gallery-page';
import { ContactPage } from './contact-page/contact-page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'gallery', component: GalleryPage },
  { path: 'contact', component: ContactPage },
  { path: '**', redirectTo: '' },
];
