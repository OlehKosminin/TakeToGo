import { nanoid } from "nanoid";

import { IMenuItem } from "../Interface/Interface";

export const menuItem: IMenuItem[] = [
  {
    _id: nanoid(),
    to: "set",
    position: "1",
    title: "Sets",
    text: "Sets",
    comments: "I like sushi",
  },
  {
    _id: nanoid(),
    to: "rolls",
    position: "2",
    title: "Rolls",
    text: "Rolls",
    comments: "I like sushi",
  },
  {
    _id: nanoid(),
    to: "soup",
    position: "3",
    title: "Soup",
    text: "Soup",
    comments: "I like soup",
  },
];
