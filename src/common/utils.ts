import { Post } from "./post";

const consonants = "bcdfghjklmnpqrstvwxyz";
const vowels = "aeiou";

const rand = (x: number) => Math.floor(Math.random() * x);

export const between = (min: number, max: number, value: number) =>
  Math.min(max, Math.max(min, value));

const generateSpacePosition = () => between(4, 16, rand(16));

export const generateText = (min = 10, max = 1024) => {
  const length = between(min, max, rand(max));

  let previousLetterType = consonants;
  let result = "";

  let spacePosition = generateSpacePosition();
  for (let i = 0; i < length; ++i) {
    previousLetterType =
      previousLetterType === consonants || rand(10) === 0 ? vowels : consonants;
    result += previousLetterType[rand(previousLetterType.length)];
    if (i === spacePosition) {
      result += " ";
      spacePosition += generateSpacePosition();
    }
  }

  return result;
};

export const generateDate: any = () =>
  new Date(Math.round(Math.random() * 2000000000000));

const getRandomColor = () => rand(64) * 4;

export const generateImage = (width = 64, height = 64, cellSize = 8) => {
  const canvas = document.createElement("canvas");

  canvas.width = width;
  canvas.height = height;

  const context = canvas.getContext("2d");

  for (let i = 0; i < width; i += cellSize) {
    for (let j = 0; j < height; j += cellSize) {
      context.fillStyle =
        "rgb(" +
        getRandomColor() +
        ", " +
        getRandomColor() +
        ", " +
        getRandomColor() +
        ")";
      context.fillRect(i, j, cellSize, cellSize);
    }
  }

  return canvas.toDataURL();
};

export const generatePost = (): Post => ({
  title: generateText(4, 16),
  body: generateText(128, 512),
  date: generateDate(),
  state: "read"
});
