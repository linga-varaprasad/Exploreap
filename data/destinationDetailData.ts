export interface Review {
  name: string;
  avatar: string;
  time: string;
  rating: number;
  comment: string;
  likes: number;
  dislikes: number;
}

export interface SimilarDestination {
    id: string;
    name: string;
    location: string;
    image: string;
}

export interface DestinationDetail {
  id: string;
  title: string;
  location: string;
  heroImages: string[];
  rating: number;
  tags: string[];
  description: string;
  gallery: string[];
  reviews: Review[];
  similarDestinations: SimilarDestination[];
}

export const destinationDetailData: Record<string, DestinationDetail> = {
  '1': {
    id: '1',
    title: 'Araku Valley',
    location: 'Andhra Pradesh',
    heroImages: ['https://storage.googleapis.com/aistudio-hosting/templates/explore-ap/detail-hero-1.png', 'https://storage.googleapis.com/aistudio-hosting/templates/explore-ap/detail-hero-2.png'],
    rating: 4.5,
    tags: ['Best Time: Oct-Mar', 'Duration: 2-3 days', 'Difficulty: Easy'],
    description: "Araku Valley, a picturesque hill station in Andhra Pradesh, is renowned for its coffee plantations, lush landscapes, and tribal culture. It's an ideal getaway for nature lovers and those seeking a peaceful retreat from city life.",
    gallery: [
      'https://storage.googleapis.com/aistudio-hosting/templates/explore-ap/gallery-1.png',
      'https://storage.googleapis.com/aistudio-hosting/templates/explore-ap/gallery-2.png',
      'https://storage.googleapis.com/aistudio-hosting/templates/explore-ap/gallery-3.png',
      'https://storage.googleapis.com/aistudio-hosting/templates/explore-ap/gallery-4.png',
      'https://storage.googleapis.com/aistudio-hosting/templates/explore-ap/gallery-5.png',
      'https://storage.googleapis.com/aistudio-hosting/templates/explore-ap/gallery-6.png',
    ],
    reviews: [
        {
            name: 'Priya Sharma',
            avatar: 'https://storage.googleapis.com/aistudio-hosting/templates/explore-ap/review-avatar-1.png',
            time: '2 weeks ago',
            rating: 5,
            comment: 'Absolutely breathtaking! The valley is a paradise with stunning views and a peaceful atmosphere. The coffee plantations are a must-visit.',
            likes: 15,
            dislikes: 2,
        },
        {
            name: 'Arjun Verma',
            avatar: 'https://storage.googleapis.com/aistudio-hosting/templates/explore-ap/review-avatar-2.png',
            time: '1 month ago',
            rating: 4,
            comment: 'Enjoyed my trip to Araku Valley. The landscapes are beautiful, and the tribal culture is fascinating. However, it can get a bit crowded during peak season.',
            likes: 8,
            dislikes: 1,
        }
    ],
    similarDestinations: [
        { id: 'horsley', name: 'Horsley Hills', location: 'Chittoor', image: 'https://storage.googleapis.com/aistudio-hosting/templates/explore-ap/similar-1.png' },
        { id: 'rushikonda', name: 'Rushikonda Beach', location: 'Visakhapatnam', image: 'https://storage.googleapis.com/aistudio-hosting/templates/explore-ap/similar-2.png' },
        { id: 'lambasingi', name: 'Lambasingi', location: 'Visakhapatnam', image: 'https://storage.googleapis.com/aistudio-hosting/templates/explore-ap/similar-3.png' },
    ],
  },
  '3': {
    id: '3',
    title: 'Tirupati',
    location: 'Andhra Pradesh',
    heroImages: ['https://storage.googleapis.com/aistudio-hosting/templates/explore-ap/featured-tirupati.png'],
    rating: 4.8,
    tags: ['Pilgrimage', 'Spiritual', 'Devotional'],
    description: "Tirupati is a renowned pilgrimage city in Andhra Pradesh, famous for the Sri Venkateswara Temple. Perched on the Tirumala Hills, this sacred site draws millions of devotees annually, making it one of the most visited holy places in the world.",
    gallery: [
      'https://storage.googleapis.com/aistudio-hosting/templates/explore-ap/gallery-1.png',
      'https://storage.googleapis.com/aistudio-hosting/templates/explore-ap/gallery-2.png',
      'https://storage.googleapis.com/aistudio-hosting/templates/explore-ap/gallery-3.png',
      'https://storage.googleapis.com/aistudio-hosting/templates/explore-ap/gallery-4.png',
      'https://storage.googleapis.com/aistudio-hosting/templates/explore-ap/gallery-5.png',
      'https://storage.googleapis.com/aistudio-hosting/templates/explore-ap/gallery-6.png',
    ],
    reviews: [
        { name: 'Ravi Kumar', avatar: 'https://storage.googleapis.com/aistudio-hosting/templates/explore-ap/review-avatar-2.png', time: '3 days ago', rating: 5, comment: 'A deeply spiritual and moving experience. The temple complex is vast and beautifully maintained. Darshan was well-organized.', likes: 25, dislikes: 0, }
    ],
    similarDestinations: [
        { id: '1', name: 'Araku Valley', location: 'Visakhapatnam', image: 'https://storage.googleapis.com/aistudio-hosting/templates/explore-ap/featured-araku.png' },
    ],
  },
  'gandikota': {
    id: 'gandikota',
    title: 'Gandikota',
    location: 'Andhra Pradesh',
    heroImages: ['https://storage.googleapis.com/aistudio-hosting/templates/explore-ap/featured-gandikota.png'],
    rating: 4.6,
    tags: ['Adventure', 'Canyon', 'Historical Fort'],
    description: "Often referred to as the 'Grand Canyon of India,' Gandikota is a spectacular gorge formed by the Pennar River. It's home to a historic fort, ancient temples, and offers breathtaking views, making it a paradise for adventurers and photographers.",
    gallery: [],
    reviews: [
        { name: 'Ananya Reddy', avatar: 'https://storage.googleapis.com/aistudio-hosting/templates/explore-ap/review-avatar-1.png', time: '1 week ago', rating: 5, comment: 'The views are out of this world! Kayaking in the gorge was an unforgettable experience. A hidden gem for sure.', likes: 18, dislikes: 1, }
    ],
    similarDestinations: [],
  },
  'vijayawada': {
    id: 'vijayawada',
    title: 'Vijayawada',
    location: 'Andhra Pradesh',
    heroImages: ['https://storage.googleapis.com/aistudio-hosting/templates/explore-ap/trending-vijayawada.png'],
    rating: 4.4,
    tags: ['City', 'Business Hub', 'Temples'],
    description: "Situated on the banks of the Krishna River, Vijayawada is a bustling city known for the Kanaka Durga Temple. It's a vibrant blend of history, spirituality, and modern development, serving as a major commercial center.",
    gallery: [], reviews: [], similarDestinations: [],
  },
  'rajahmundry': {
    id: 'rajahmundry',
    title: 'Rajahmundry',
    location: 'Andhra Pradesh',
    heroImages: ['https://storage.googleapis.com/aistudio-hosting/templates/explore-ap/trending-rajahmundry.png'],
    rating: 4.3,
    tags: ['River Godavari', 'Culture', 'History'],
    description: "Rajahmundry, on the banks of the Godavari River, is considered the cultural capital of Andhra Pradesh. It's famous for its temples, scenic river ghats, and rich literary heritage.",
    gallery: [], reviews: [], similarDestinations: [],
  },
  'kakinada': {
    id: 'kakinada',
    title: 'Kakinada',
    location: 'Andhra Pradesh',
    heroImages: ['https://storage.googleapis.com/aistudio-hosting/templates/explore-ap/trending-kakinada.png'],
    rating: 4.2,
    tags: ['Port City', 'Beaches', 'Cuisine'],
    description: "Kakinada is a major port city known for its planned layout, serene beaches like Uppada, and the unique mangrove forests of Coringa Wildlife Sanctuary. It's also a food lover's delight, famous for the sweet 'Kaja'.",
    gallery: [], reviews: [], similarDestinations: [],
  },
  'anantapur': {
    id: 'anantapur',
    title: 'Anantapur',
    location: 'Andhra Pradesh',
    heroImages: ['https://storage.googleapis.com/aistudio-hosting/templates/explore-ap/trending-anantapur.png'],
    rating: 4.1,
    tags: ['History', 'Drought Prone', 'Temples'],
    description: "Anantapur is a historic city, home to significant sites like the Lepakshi Temple with its famous hanging pillar, and the ancient Penukonda Fort. The region is also known for its silk industry.",
    gallery: [], reviews: [], similarDestinations: [],
  },
};