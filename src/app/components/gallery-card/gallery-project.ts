export interface GalleryPhoto {
  src: string;
  alt: string;
  label: string;
  isAfter?: boolean;
}

export interface GalleryProject {
  title: string;
  photos: [GalleryPhoto, ...GalleryPhoto[]];
  featureInSlideshow?: boolean;
}
