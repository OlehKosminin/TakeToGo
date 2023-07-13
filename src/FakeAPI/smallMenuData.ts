import { ISmallMenuItem } from "../Interface/Interface";
import { nanoid } from "nanoid";

export const smallMenuData: ISmallMenuItem[] = [
  {
    _id: nanoid(),
    position: "1",
    key: "3",
    icon: "new",
    text: "Try new",
    to: "new",
  },
  {
    _id: nanoid(),

    position: "2",
    key: "4",
    icon: "bakedRolls",
    text: "Baked sushi",
    to: "bakedRolls",
  },
  {
    _id: nanoid(),
    position: "3",
    key: "1",
    icon: "sushi",
    text: "Sushi",
    to: "sushi",
  },
  {
    _id: nanoid(),

    position: "4",
    key: "2",
    icon: "setSushi",
    text: "Se and combo",
    to: "setSushi",
  },
  {
    _id: nanoid(),
    position: "5",
    key: "5",
    icon: "wok",
    text: "Wok",
    to: "wok",
  },
  {
    _id: nanoid(),
    position: "6",
    key: "6",
    icon: "pizza",
    text: "Pizza",
    to: "pizza",
  },
  {
    _id: nanoid(),
    position: "7",
    key: "7",
    icon: "additional",
    text: "Additional",
    to: "additional",
  },
];

export {};
