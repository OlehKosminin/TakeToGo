interface IAdaptiveValue {
  startSize: string;
  endSize: string;
  startValue: string;
  endValue: string;
}

const adaptiveValue = ({
  startSize,
  endSize,
  startValue,
  endValue,
}: IAdaptiveValue): string => {
  const parsedMinWidth = parseFloat(startSize);
  const parsedMaxWidth = parseFloat(endSize);
  const parsedMinFontSize = parseFloat(startValue);
  const parsedMaxFontSize = parseFloat(endValue);

  const screenSize = window.innerWidth;

  if (screenSize > parsedMaxWidth) {
    return `${parsedMaxFontSize}px`;
  }

  if (screenSize < parsedMaxWidth) {
    return `${parsedMinFontSize}px`;
  }
  const t = (screenSize - parsedMinWidth) / (parsedMaxWidth - parsedMinWidth);
  const adaptiveVal =
    parsedMinFontSize + t * (parsedMaxFontSize - parsedMinFontSize);

  return `${adaptiveVal}px`;
};

export default adaptiveValue;
