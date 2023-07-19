import React, { FunctionComponent } from "react";

import {
  Phone,
  Arrow,
  Location,
  New,
  BakedRolls,
  Sushi,
  SetSushi,
  Wok,
  Pizza,
  Additional,
  AccountIcon,
  MenuIcon,
  ActionIcon,
  DeliveryIcon,
} from "./Icons.styled";

export interface IIconsProps {
  icon: string;
}

const Icons: FunctionComponent<IIconsProps> = ({ icon }) => {
  if (icon === "arrow") {
    return <Arrow />;
  }

  if (icon === "phone") {
    return <Phone />;
  }

  if (icon === "location") {
    return <Location />;
  }

  if (icon === "new") {
    return <New />;
  }

  if (icon === "new") {
    return <New />;
  }

  if (icon === "bakedRolls") {
    return <BakedRolls />;
  }

  if (icon === "sushi") {
    return <Sushi />;
  }
  if (icon === "setSushi") {
    return <SetSushi />;
  }
  if (icon === "wok") {
    return <Wok />;
  }
  if (icon === "pizza") {
    return <Pizza />;
  }
  if (icon === "additional") {
    return <Additional />;
  }

  if (icon === "account") {
    return <AccountIcon />;
  }
  if (icon === "menu") {
    return <MenuIcon />;
  }
  if (icon === "action") {
    return <ActionIcon />;
  }
  if (icon === "delivery") {
    return <DeliveryIcon />;
  }

  return <div>Not found</div>;
};

export default Icons;
