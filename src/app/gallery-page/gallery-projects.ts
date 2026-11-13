import { GalleryProject } from '../components/gallery-card/gallery-project';

export const GALLERY_PROJECTS: GalleryProject[] = [
  {
    title: 'Fireplace',
    photos: [
      { src: 'photos/firePlace_before.jpg', alt: 'Fireplace before painting', label: 'Before' },
      { src: 'photos/firePlace_after.jpg', alt: 'Fireplace after painting', label: 'After', isAfter: true },
    ],
  },
  {
    title: 'Front Door',
    photos: [
      { src: 'photos/door_before.jpg', alt: 'Front door before painting', label: 'Before' },
      { src: 'photos/door_after.jpg', alt: 'Front door after painting', label: 'After', isAfter: true },
    ],
  },
  {
    title: 'Deck Restoration',
    featureInSlideshow: true,
    photos: [
      { src: 'photos/deck-restoration/deck_before.PNG', alt: 'Deck before restoration', label: 'Before' },
      { src: 'photos/deck-restoration/deck_after1.PNG', alt: 'Restored deck with refreshed finish', label: 'After', isAfter: true },
      { src: 'photos/deck-restoration/deck_before1.PNG', alt: 'Deck stairs before restoration', label: 'Before' },
      { src: 'photos/deck-restoration/deck_after2.PNG', alt: 'Deck stairs after restoration', label: 'After', isAfter: true },
      { src: 'photos/deck-restoration/deck_before2.PNG', alt: 'Deck boards before restoration', label: 'Before' },
      { src: 'photos/deck-restoration/deck_before3.PNG', alt: 'Deck stairs before restoration from another angle', label: 'Before' },
    ],
  },
  {
    title: 'Historic Home Exterior Restoration',
    featureInSlideshow: true,
    photos: [
      { src: 'photos/historic-home-restoration/historic_before.PNG', alt: 'Historic home exterior before restoration', label: 'Before' },
      { src: 'photos/historic-home-restoration/historic_after.PNG', alt: 'Historic home exterior after restoration', label: 'After', isAfter: true },
      { src: 'photos/historic-home-restoration/historic_before1.PNG', alt: 'Historic home siding before restoration', label: 'Before' },
      { src: 'photos/historic-home-restoration/historic_after1.PNG', alt: 'Restored historic home exterior detail', label: 'After', isAfter: true },
      { src: 'photos/historic-home-restoration/historic_before2.PNG', alt: 'Historic home siding before repair and painting', label: 'Before' },
      { src: 'photos/historic-home-restoration/historic_after2.PNG', alt: 'Historic home siding after repair and painting', label: 'After', isAfter: true },
    ],
  },
  {
    title: 'Rustic Cabin Exterior Repaint',
    featureInSlideshow: true,
    photos: [
      { src: 'photos/cabin-exterior/cabin_before.PNG', alt: 'Rustic cabin exterior before repainting', label: 'Before' },
      { src: 'photos/cabin-exterior/cabin_after.PNG', alt: 'Rustic cabin exterior after repainting', label: 'After', isAfter: true },
      { src: 'photos/cabin-exterior/cabin_before1.PNG', alt: 'Rustic cabin exterior from another angle before repainting', label: 'Before' },
      { src: 'photos/cabin_after2.png', alt: 'Completed rustic cabin exterior repaint', label: 'After', isAfter: true },
    ],
  },
  {
    title: 'Elevator Interior Restoration',
    featureInSlideshow: true,
    photos: [
      { src: 'photos/elevator-restoration/elevator_before.PNG', alt: 'Elevator interior before restoration', label: 'Before' },
      { src: 'photos/elevator-restoration/elevator_after.PNG', alt: 'Elevator interior after restoration', label: 'After', isAfter: true },
      { src: 'photos/elevator-restoration/elevator_before1.PNG', alt: 'Elevator interior detail before restoration', label: 'Before' },
      { src: 'photos/elevator-restoration/elevator_after1.PNG', alt: 'Elevator interior detail after restoration', label: 'After', isAfter: true },
    ],
  },
  {
    title: 'Outdoor Wood Furniture Restoration',
    featureInSlideshow: true,
    photos: [
      { src: 'photos/wooden-furniture-restoration/furniture_before.PNG', alt: 'Outdoor wood furniture before restoration', label: 'Before' },
      { src: 'photos/wooden-furniture-restoration/furniture_after.PNG', alt: 'Restored outdoor wood furniture', label: 'After', isAfter: true },
      { src: 'photos/wooden-furniture-restoration/furniture_before1.PNG', alt: 'Outdoor furniture detail before refinishing', label: 'Before' },
      { src: 'photos/wooden-furniture-restoration/furniture_after1.PNG', alt: 'Outdoor furniture detail after refinishing', label: 'After', isAfter: true },
    ],
  },
  {
    title: 'Garage Cabinet Finishing',
    photos: [
      { src: 'photos/garage-cabinet-finishing/cabinet_before.PNG', alt: 'Garage cabinets before finishing', label: 'Before' },
      { src: 'photos/garage-cabinet-finishing/cabinet_after.PNG', alt: 'Garage cabinets after finishing and painting', label: 'After', isAfter: true },
      { src: 'photos/garage-cabinet-finishing/cabinet_before1.PNG', alt: 'Garage cabinets before painting', label: 'Before' },
      { src: 'photos/garage-cabinet-finishing/cabinet_after1.PNG', alt: 'Garage cabinet components after painting', label: 'After', isAfter: true },
    ],
  },
];
