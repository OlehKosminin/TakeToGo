import styled from "styled-components";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { ImLocation } from "react-icons/im";
import { GiSushis, GiWok } from "react-icons/gi";
import { AiFillFire } from "react-icons/ai";
import { MdFiberNew } from "react-icons/md";
import { FaPizzaSlice } from "react-icons/fa";
import { BiMessageRoundedAdd } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { IoMenuOutline } from "react-icons/io5";
import { MdLocalOffer } from "react-icons/md";
import { RiMotorbikeFill } from "react-icons/ri";

const marginRight = "15px";
const iconColor = (props: any) => props.theme.sideBar.contactIconColor;
const arrowColor = (props: any) => props.theme.sideBar.iconGreyColor;

export const Arrow = styled(IoIosArrowForward)`
  color: ${arrowColor};

  width: 21px;
  height: 21px;
`;

export const Phone = styled(BsFillTelephoneFill)`
  width: 21px;
  height: 21px;

  margin-right: ${marginRight};
  color: ${iconColor};
`;

export const Location = styled(ImLocation)`
  width: 21px;
  height: 21px;

  margin-right: ${marginRight};
  color: ${iconColor};
`;

const SmallMenuStyle = `
 width: 30px;
height: 30px;
(props: any) => props.theme.sideBar.blackColor;
transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const New = styled(MdFiberNew)`
  ${SmallMenuStyle}
`;
export const BakedRolls = styled(AiFillFire)`
  ${SmallMenuStyle}
`;

export const Sushi = styled(GiSushis)`
  ${SmallMenuStyle}
`;

export const SetSushi = styled(GiSushis)`
  ${SmallMenuStyle}
`;

export const Wok = styled(GiWok)`
  ${SmallMenuStyle}
`;

export const Pizza = styled(FaPizzaSlice)`
  ${SmallMenuStyle}
`;

export const Additional = styled(BiMessageRoundedAdd)`
  ${SmallMenuStyle}
`;

//  bottom

const SmallMenuBottomStyle = `
 width: 25px;
height: 25px;
 margin-right: 10px;
(props: any) => props.theme.sideBar.blackColor;
transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
export const AccountIcon = styled(FaUserCircle)`
  ${SmallMenuBottomStyle}
`;

export const MenuIcon = styled(IoMenuOutline)`
  ${SmallMenuBottomStyle}
`;

export const ActionIcon = styled(MdLocalOffer)`
  ${SmallMenuBottomStyle}
`;

export const DeliveryIcon = styled(RiMotorbikeFill)`
  ${SmallMenuBottomStyle}
`;
