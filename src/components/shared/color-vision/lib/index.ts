function isWhiteColor(hex: string) {
  const hexColor = hex.replace('#', '');

  const red = parseInt(hexColor.substring(0, 2), 16);
  const green = parseInt(hexColor.substring(2, 4), 16);
  const blue = parseInt(hexColor.substring(4, 6), 16);

  return Math.sqrt((255 - red) ** 2 + (255 - green) ** 2 + (255 - blue) ** 2) >= 200;
}

export function scoreExperience(score: number) {
  const minRange = 1;
  const maxRange = 10;
  const minValue = 1000;
  const maxValue = 1;

  return ((score - minRange) / (maxRange - minRange)) * (maxValue - minValue) + minValue;
}

export function generateRandomColor() {
  let color = '#000000';
  for (let i = 0; i < 999999; i += 1) {
    color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    if (!isWhiteColor(color)) break;
  }

  return color;
}

export function generateRandomColorList(length: number, currentColor: string) {
  const list = Array.from({ length }, () => generateRandomColor());

  list[Math.floor(Math.random() * list.length)] = currentColor;

  return list;
}
