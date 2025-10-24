export interface DiscoverItem {
  name: string;
  image: string;
}

export interface Destination {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const discoverNearYou: DiscoverItem[] = [
  { name: 'Beaches', image: 'https://storage.googleapis.com/aistudio-hosting/templates/explore-ap/discover-beaches.png' },
  { name: 'Temples', image: 'https://storage.googleapis.com/aistudio-hosting/templates/explore-ap/discover-temples.png' },
  { name: 'Hills', image: 'https://storage.googleapis.com/aistudio-hosting/templates/explore-ap/discover-hills.png' },
  { name: 'More', image: 'https://storage.googleapis.com/aistudio-hosting/templates/explore-ap/discover-more.png' },
];

export const featuredDestinations: Destination[] = [
  {
    id: '1',
    name: 'Araku Valley',
    description: 'Scenic hill station',
    image: 'https://storage.googleapis.com/aistudio-hosting/templates/explore-ap/featured-araku.png',
  },
  {
    id: 'gandikota',
    name: 'Gandikota',
    description: 'The Grand Canyon of India',
    image: 'https://storage.googleapis.com/aistudio-hosting/templates/explore-ap/featured-gandikota.png',
  },
  {
    id: '3',
    name: 'Tirupati',
    description: 'Famous temple town',
    image: 'https://storage.googleapis.com/aistudio-hosting/templates/explore-ap/featured-tirupati.png',
  },
];

export const trendingDestinations: Destination[] = [
  {
    id: 'vijayawada',
    name: 'Vijayawada',
    description: '',
    image: 'https://storage.googleapis.com/aistudio-hosting/templates/explore-ap/trending-vijayawada.png',
  },
  {
    id: 'rajahmundry',
    name: 'Rajahmundry',
    description: '',
    image: 'https://storage.googleapis.com/aistudio-hosting/templates/explore-ap/trending-rajahmundry.png',
  },
  {
    id: 'kakinada',
    name: 'Kakinada',
    description: '',
    image: 'https://storage.googleapis.com/aistudio-hosting/templates/explore-ap/trending-kakinada.png',
  },
  {
    id: 'anantapur',
    name: 'Anantapur',
    description: '',
    image: 'https://storage.googleapis.com/aistudio-hosting/templates/explore-ap/trending-anantapur.png',
  },
];