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
