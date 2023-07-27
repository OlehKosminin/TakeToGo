export interface IMenuItem {
  _id: string;
  to: string;
  position: string;
  title: string;
  text: string;
  comments: string;
}

export interface ISideBarBottom {
  _id: string;
  to: string;
  position: string;
  icon: string;
  title: string;
}

export interface ISmallMenuItem {
  _id: string;
  key: string;
  icon: string;
  text: string;
  position: string;
  to: string;
}

interface IPhoto {
  _id: string;
  category: string;
  photoUrl: string;
  photoId: string;
  alt: string;
}

export interface IDishesItem {
  _id: string;
  title: string;
  description: string;
  price: string;
  currency: string;
  category: string;
  type: string;
  bought: string;
  photo: IPhoto[];
  discount: string;
  weight: string;
  ingredients: string[];
}
