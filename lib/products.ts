export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  brand: string;
  rating: number;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Running Shoes",
    price: 99,
    image: "https://placehold.co/300x250/e2e8f0/1a56db?text=Running+Shoes",
    category: "Clothing",
    brand: "Nike",
    rating: 4,
    description: "Lightweight and breathable running shoes designed for maximum comfort and performance on any terrain.",
  },
  {
    id: 2,
    title: "Wireless Headphones",
    price: 199,
    image: "https://placehold.co/300x250/e2e8f0/1a56db?text=Headphones",
    category: "Electronics",
    brand: "Sony",
    rating: 5,
    description: "Premium wireless headphones with active noise cancellation, 30-hour battery life and superior sound quality.",
  },
  {
    id: 3,
    title: "Backpack",
    price: 129,
    image: "https://placehold.co/300x250/e2e8f0/1a56db?text=Backpack",
    category: "Home",
    brand: "Samsonite",
    rating: 4,
    description: "Durable everyday backpack with multiple compartments, padded laptop sleeve, and ergonomic design.",
  },
  {
    id: 4,
    title: "Smartwatch",
    price: 249,
    image: "https://placehold.co/300x250/e2e8f0/1a56db?text=Smartwatch",
    category: "Electronics",
    brand: "Apple",
    rating: 5,
    description: "Feature-packed smartwatch with health tracking, GPS, notifications, and a stunning always-on display.",
  },
  {
    id: 5,
    title: "Sunglasses",
    price: 149,
    image: "https://placehold.co/300x250/e2e8f0/1a56db?text=Sunglasses",
    category: "Clothing",
    brand: "Ray-Ban",
    rating: 4,
    description: "Stylish UV-protected sunglasses with polarized lenses and lightweight frame for all-day comfort.",
  },
  {
    id: 6,
    title: "Digital Camera",
    price: 499,
    image: "https://placehold.co/300x250/e2e8f0/1a56db?text=Digital+Camera",
    category: "Electronics",
    brand: "Canon",
    rating: 4,
    description: "Professional digital camera with 24MP sensor, 4K video recording, and advanced autofocus system.",
  },
  {
    id: 7,
    title: "T-shirt",
    price: 29,
    image: "https://placehold.co/300x250/e2e8f0/1a56db?text=T-shirt",
    category: "Clothing",
    brand: "H&M",
    rating: 3,
    description: "Comfortable everyday t-shirt made from 100% organic cotton in a classic fit.",
  },
  {
    id: 8,
    title: "Smartphone",
    price: 699,
    image: "https://placehold.co/300x250/e2e8f0/1a56db?text=Smartphone",
    category: "Electronics",
    brand: "Samsung",
    rating: 4,
    description: "Lorem ipsum dolor amet, conssectetur euisagend. Flagship smartphone with cutting-edge processor, stunning camera, and all-day battery.",
  },
];

export const categories = ["All", "Electronics", "Clothing", "Home"];
export const brands = ["All", "Nike", "Sony", "Apple", "Samsung", "Canon", "Ray-Ban", "H&M", "Samsonite"];
