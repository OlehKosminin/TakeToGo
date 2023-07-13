import { css } from "styled-components";

type ResponsiveFontMixinProps = {
  minWidth: number;
  maxWidth: number;
  minFontSize: number;
  maxFontSize: number;
};

const responsiveFont = ({
  minWidth,
  maxWidth,
  minFontSize,
  maxFontSize,
}: ResponsiveFontMixinProps) =>
  css`
    @media (min-width: ${minWidth}px) and (max-width: ${maxWidth}px) {
      font-size: calc(
        ${minFontSize}px + (${maxFontSize} - ${minFontSize}) *
          ((100vw - ${minWidth}px) / (${maxWidth} - ${minWidth}))
      );
    }
    @media (max-width: ${minWidth}px) {
      font-size: ${minFontSize}px;
    }
    @media (min-width: ${maxWidth}px) {
      font-size: ${maxFontSize}px;
    }
  `;

export default responsiveFont;
