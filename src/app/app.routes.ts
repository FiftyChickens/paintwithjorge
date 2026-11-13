import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { GalleryPage } from './gallery-page/gallery-page';
import { ContactPage } from './contact-page/contact-page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
    data: {
      title: "Twin Cities Painters | Jorge's Painting Services LLC",
      description:
        'Interior and exterior painting, historic home restoration, and wood refinishing in Osseo, Dayton, Maple Grove, and the northwest Twin Cities. Request a free estimate.',
    },
  },
  {
    path: 'gallery',
    component: GalleryPage,
    data: {
      title: "Painting & Restoration Projects | Jorge's Painting Services LLC",
      description:
        'See interior, exterior, and restoration work by Jorge’s Painting Services, serving Osseo, Dayton, and the Greater Twin Cities.',
    },
  },
  {
    path: 'contact',
    component: ContactPage,
    data: {
      title: "Contact a Twin Cities Painter | Free Estimate",
      description:
        'Contact Jorge’s Painting Services for a free painting or restoration estimate in Osseo, Dayton, and the Greater Twin Cities.',
    },
  },
  { path: '**', redirectTo: '' },
];
