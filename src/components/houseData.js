import house1 from '../assets/house-1.webp';
import house2 from '../assets/house-2.webp';
import house3 from '../assets/house-3.webp';
import house4 from '../assets/house-4.webp';
import rec1 from '../assets/rec1.png';
import rec2 from '../assets/rec2.png';
import rec3 from '../assets/rec3.png';
import rec4 from '../assets/rec4.png';
import news1 from '../assets/news1.jpg';
import news2 from '../assets/news2.jpg';
import news3 from '../assets/news3.jpg';
import news4 from '../assets/news4.jpg';

export const Houses = [
  {
    uploadtime: 11,
    type: 'Single family Home',
    price: 135000,
    bed: 2,
    bath: 1,
    sqft: 1481,
    imgURL: house1,
    addressLine1: '3211 Haven Causeway Suite 952',
    addressLine2: 'Wichita, KS 67218',
  },
  {
    uploadtime: 12,
    type: 'Multi family Home',
    price: 285000,
    bed: 3,
    bath: 2,
    sqft: 3451,
    imgURL: house2,
    addressLine1: '3211 Haven Causeway Suite 952',
    addressLine2: 'Wichita, KS 67218',
  },
  {
    uploadtime: 13,
    type: 'Condo',
    price: 75000,
    bed: 1,
    bath: 1,
    sqft: 834,
    imgURL: house3,
    addressLine1: '3211 Haven Causeway Suite 952',
    addressLine2: 'Wichita, KS 67218',
  },
  {
    uploadtime: 10,
    type: 'Town Home',
    price: 330000,
    bed: 2,
    bath: 1,
    sqft: 1289,
    imgURL: house4,
    addressLine1: '3211 Haven Causeway Suite 952',
    addressLine2: 'Wichita, KS 67218',
  },
];

export const Recomms = [
  { place: 'College Hill', price: 249950, listings: 11, imgURL: rec1 },
  { place: 'South Central', price: 125700, listings: 29, imgURL: rec2 },
  { place: 'Southwest Whichita', price: 138700, listings: 35, imgURL: rec3 },
  { place: 'Riverside', price: 192497, listings: 24, imgURL: rec4 },
];

export const news = [
  {
    title: 'unique homes',
    body: 'Get Away From It All: 5 Picture-Perfect Private Islands You Can Buy Right Now',
    imgURL: news1,
  },
  {
    title: 'trends',
    body: 'Finally, Mortgage Rates and Home Prices Favor Buyers—but How Long Will This Christmas Miracle Last?',
    imgURL: news2,
  },
  {
    title: 'trends',
    body: 'Millions of Americans Are Squeezed by Rent: See How Your City Stacks Up',
    imgURL: news3,
  },
  {
    title: 'home improvement',
    body: 'Christina Hall Is Back—With a New Husband, Home, and Season of ‘Christina on the Coast’',
    imgURL: news4,
  },
];
