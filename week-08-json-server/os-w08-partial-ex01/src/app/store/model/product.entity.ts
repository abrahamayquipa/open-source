export class Product {
  id: number;
  title: string;
  description: string;
  photoUrl: string;
  price: number;
  bundleId: number;
  rating: number;

  constructor(id: number, title: string, description: string, photoUrl: string, price: number, bundleId: number, rating: number) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.photoUrl = photoUrl;
    this.price = price;
    this.bundleId = bundleId;
    this.rating = rating;
  }
}
