import { css } from "styled-components";

type ResponsiveFontMixinProps = {
  minWidth: string;
  maxWidth: string;
  minFontSize: string;
  maxFontSize: string;
};

const responsiveFont = ({
  minWidth,
  maxWidth,
  minFontSize,
  maxFontSize,
}: ResponsiveFontMixinProps) => {
  const parsedMinWidth = parseFloat(minWidth);
  const parsedMaxWidth = parseFloat(maxWidth);
  const parsedMinFontSize = parseFloat(minFontSize);
  const parsedMaxFontSize = parseFloat(maxFontSize);

  return css`
    @media (min-width: ${parsedMinWidth}px) and (max-width: ${parsedMaxWidth}px) {
      font-size: calc(
        ${parsedMinFontSize}px + (${parsedMaxFontSize} - ${parsedMinFontSize}) *
          (
            (100vw - ${parsedMinWidth}px) /
              (${parsedMaxWidth} - ${parsedMinWidth})
          )
      );
    }
    @media (max-width: ${minWidth}px) {
      font-size: ${minFontSize}px;
    }
    @media (min-width: ${maxWidth}px) {
      font-size: ${maxFontSize}px;
    }
  `;
};

export default responsiveFont;
