import styled from "styled-components";
import responsiveFont from "../../mixins/responsiveFont";

export const TitleEl = styled.h2`
  position: relative;
  ${(props) =>
    responsiveFont({
      minWidth: props.theme.baseSettings.mobile,
      maxWidth: props.theme.baseSettings.pc,
      minFontSize: "40",
      maxFontSize: "80",
    })};

  color: ${({ theme }) => theme.baseSettings.secondColor};

  width: fit-content;
  margin: 0 auto;
  font-weight: 500;

  &::after {
    content: "";

    position: absolute;
    width: 60%;
    height: 1px;

    background-color: tomato;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
