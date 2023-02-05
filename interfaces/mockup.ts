export interface Mockup {
  id: number;
  instantPrice: string;
  highestBid: string;
  author: string;
  authorAvatar: string;
  type: string;
  stock: number;
  likes: number;
  createdAt: string;
  endsAt: string;
  media: Media;
  attributes: Attributes;
  bidUsers: BidUser[];
}

export interface Media {
  id: number;
  image: string;
  image2x: string;
}

export interface Attributes {
  id: number;
  color: string;
  type: string;
}

export interface BidUser {
  id: number;
  name: string;
  avatar: string;
}
