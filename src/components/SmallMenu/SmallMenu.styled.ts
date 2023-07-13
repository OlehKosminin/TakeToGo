import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  margin: 20px 0 20px 0;

  :last-child {
    margin-bottom: 0;
  }
`;

export const Link = styled(NavLink)`
  margin-bottom: 25px;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: ${(props) => props.theme.sideBar.iconHover};
  }
`;

export const Item = styled.li`
  cursor: pointer;

  font-size: ${(props) => props.theme.sideBar.fontSizeTitle};
  font-weight: 400;
  text-align: center;

  color: ${(props) => props.theme.sideBar.blackColor};

  width: 86px;
  /* height: 86px; */
`;

export const Text = styled.p`
  margin-top: 10px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  ${Link} {
    transition: ${(props) => props.theme.sideBar.linkTransition};
  }
`;
