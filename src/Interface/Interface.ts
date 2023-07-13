export interface IIcon {
  _id: string;
  href: string | null;
  to: string;
  position: string;
  icon: string;
  title: string;
  text: string;
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
