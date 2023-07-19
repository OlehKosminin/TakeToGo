import styled from "styled-components";

import responsiveFont from "../../mixins/responsiveFont";
import adaptiveValue from "../../mixins/adaptiveValue";
export const HeroSection = styled.div`
  position: relative;

  opacity: 0.5;

  @media screen and (max-width: 1000px) {
    overflow: hidden;

    background-image: url("https://res.cloudinary.com/dciop8duy/image/upload/v1689427841/top-view-delicious-sushi-concept_yusnex.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 90vh;
    background-position: 50% 50%;
  }
`;

export const HeroWrapper = styled.div`
  position: absolute;
  top: 5%;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.p`
  ${(props) =>
    responsiveFont({
      minWidth: props.theme.baseSettings.mobile,
      maxWidth: props.theme.baseSettings.tablet,
      minFontSize: props.theme.hero.title.fontSize.from,
      maxFontSize: props.theme.hero.title.fontSize.to,
    })};
  /* position: absolute;

  bottom: 55%; */

  font-family: "Nunito";
  font-weight: 100;

  color: ${(p) => p.theme.hero.title.textColor};
  opacity: 1;

  margin-bottom: ${(props) =>
    adaptiveValue({
      startSize: props.theme.baseSettings.mobile,
      endSize: props.theme.baseSettings.tablet,
      startValue: props.theme.hero.title.adaptiveValue.min,
      endValue: props.theme.hero.title.adaptiveValue.max,
    })};
`;

export const SubTitle = styled.p`
  ${(props) =>
    responsiveFont({
      minWidth: props.theme.baseSettings.mobile,
      maxWidth: props.theme.baseSettings.tablet,
      minFontSize: props.theme.hero.subTitle.fontSize.from,
      maxFontSize: props.theme.hero.subTitle.fontSize.to,
    })};

  /* position: absolute; */

  /* bottom: 50%; */
  /* right: 30%; */
  font-family: ${(props) => props.theme.baseSettings.baseFonts};

  color: ${(p) => p.theme.hero.subTitle.textColor};

  margin-bottom: ${(props) =>
    adaptiveValue({
      startSize: props.theme.baseSettings.mobile,
      endSize: props.theme.baseSettings.tablet,
      startValue: props.theme.hero.title.adaptiveValue.min,
      endValue: props.theme.hero.title.adaptiveValue.max,
    })};
`;

export const Description = styled.p`
  display: block;

  ${(props) =>
    responsiveFont({
      minWidth: props.theme.baseSettings.mobile,
      maxWidth: props.theme.baseSettings.tablet,
      minFontSize: props.theme.hero.description.fontSize.from,
      maxFontSize: props.theme.hero.description.fontSize.to,
    })};

  font-family: ${(props) => props.theme.baseSettings.baseFonts};
  text-align: center;

  color: ${(p) => p.theme.hero.subTitle.textColor};
  width: ${(props) =>
    adaptiveValue({
      startSize: props.theme.baseSettings.mobile,
      endSize: props.theme.baseSettings.tablet,
      startValue: props.theme.hero.description.adaptiveValue.min,
      endValue: props.theme.hero.description.adaptiveValue.max,
    })};
`;
