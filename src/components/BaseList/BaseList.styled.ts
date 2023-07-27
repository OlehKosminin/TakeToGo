import styled from "styled-components";
import { NavLink } from "react-router-dom";

import responsiveFont from "../../mixins/responsiveFont";

export const List = styled.ul`
  margin-top: 40px;
  display: grid;
  grid-row-gap: 20px;
  @media screen and (min-width: 500px) and (max-width: 999px) {
    margin-left: 0;
    margin-right: 0;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }

  @media screen and (min-width: 1000px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    margin: -20px;
    margin-top: 40px;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 1000px) {
    flex-basis: 275px;
    margin: 10px;
  }
`;

export const LinkSinglePage = styled(NavLink)`
  display: block;
  color: ${({ theme }) => theme.baseSettings.secondColor};
  height: 100%;
  ${(props) =>
    responsiveFont({
      minWidth: props.theme.baseSettings.mobile,
      maxWidth: "1000",
      minFontSize: "18",
      maxFontSize: "40",
    })};

  @media screen and (min-width: 1000px) {
    ${(props) =>
      responsiveFont({
        minWidth: props.theme.baseSettings.tablet,
        maxWidth: props.theme.baseSettings.pc,
        minFontSize: "10",
        maxFontSize: "30",
      })};
  }
`;

export const Photo = styled.img``;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;

  margin: 20px 0;
`;

export const Info = styled.p``;

export const Description = styled.p`
  color: #a8a8a8;

  margin: 10px 0;

  ${(props) =>
    responsiveFont({
      minWidth: props.theme.baseSettings.mobile,
      maxWidth: props.theme.baseSettings.tablet,
      minFontSize: "12",
      maxFontSize: "25",
    })};
`;

export const Button = styled.button`
  color: #ffffff;
  border: 1px solid #e0641d;
  border-radius: 5px;

  font-size: 20px;
  font-weight: 600;

  background-color: transparent;

  width: 100%;
  padding: 10px 0;

  transition: all linear 0.5s;
  &:hover {
    background-color: #e0641d;
  }

  @media screen and (min-width: 700px) {
    width: fit-content;

    padding: 10px 60px;
  }
`;
