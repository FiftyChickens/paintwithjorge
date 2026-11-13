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
      { src: 'photos/Deck_Before.png', alt: 'Deck before restoration', label: 'Before' },
      { src: 'photos/Deck_after.png', alt: 'Restored deck with refreshed finish', label: 'After', isAfter: true },
      { src: 'photos/Deck_before1.png', alt: 'Deck surface before restoration', label: 'Before' },
      { src: 'photos/Deck_after1.png', alt: 'Deck surface after restoration', label: 'After', isAfter: true },
      { src: 'photos/Deck_before2.png', alt: 'Deck boards before refinishing', label: 'Before' },
      { src: 'photos/Deck_after2.png', alt: 'Deck boards after refinishing', label: 'After', isAfter: true },
    ],
  },
  {
    title: 'Historic Home Exterior Restoration',
    featureInSlideshow: true,
    photos: [
      { src: 'photos/historic_before.png', alt: 'Historic home exterior before restoration', label: 'Before' },
      { src: 'photos/historic_after.png', alt: 'Historic home exterior after restoration', label: 'After', isAfter: true },
      { src: 'photos/historic_before1.png', alt: 'Historic home siding before repair and painting', label: 'Before' },
      { src: 'photos/Historic_after1.png', alt: 'Historic home siding after repair and painting', label: 'After', isAfter: true },
      { src: 'photos/historic_after2.png', alt: 'Restored historic home exterior detail', label: 'After', isAfter: true },
      { src: 'photos/historic_after3.png', alt: 'Freshly painted historic home exterior detail', label: 'After', isAfter: true },
    ],
  },
  {
    title: 'Rustic Cabin Exterior Repaint',
    featureInSlideshow: true,
    photos: [
      { src: 'photos/cabin_before.png', alt: 'Rustic cabin exterior before repainting', label: 'Before' },
      { src: 'photos/cabin_after.png', alt: 'Rustic cabin exterior after repainting', label: 'After', isAfter: true },
      { src: 'photos/cabin_after1.png', alt: 'Freshly repainted rustic cabin exterior detail', label: 'After', isAfter: true },
      { src: 'photos/cabin_after2.png', alt: 'Completed rustic cabin exterior repaint', label: 'After', isAfter: true },
    ],
  },
  {
    title: 'Elevator Interior Restoration',
    featureInSlideshow: true,
    photos: [
      { src: 'photos/elevator_before.png', alt: 'Elevator interior before restoration', label: 'Before' },
      { src: 'photos/elevator_after.png', alt: 'Elevator interior after restoration', label: 'After', isAfter: true },
      { src: 'photos/elevator_before1.png', alt: 'Elevator interior detail before restoration', label: 'Before' },
      { src: 'photos/elevator_after1.png', alt: 'Elevator interior detail after restoration', label: 'After', isAfter: true },
    ],
  },
  {
    title: 'Outdoor Wood Furniture Restoration',
    featureInSlideshow: true,
    photos: [
      { src: 'photos/furniture_before.png', alt: 'Outdoor wood furniture before restoration', label: 'Before' },
      { src: 'photos/furniture_after.png', alt: 'Restored outdoor wood furniture', label: 'After', isAfter: true },
      { src: 'photos/furniture_before1.png', alt: 'Outdoor furniture detail before refinishing', label: 'Before' },
      { src: 'photos/furniture_after1.png', alt: 'Outdoor furniture detail after refinishing', label: 'After', isAfter: true },
    ],
  },
];
