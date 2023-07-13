import { nanoid } from "nanoid";
import { ISideBarBottom } from "../Interface/Interface";

export const fakeBottomApi: ISideBarBottom[] = [
  {
    _id: nanoid(),
    to: "account",
    position: "1",
    icon: "account",
    title: "Accound",
  },
  {
    _id: nanoid(),
    to: "menu",
    position: "2",
    icon: "menu",
    title: "Menu",
  },
  {
    _id: nanoid(),
    to: "action",
    position: "3",
    icon: "action",
    title: "Action",
  },
  {
    _id: nanoid(),
    to: "delivery",
    position: "4",
    icon: "delivery",
    title: "Delivery",
  },
];
