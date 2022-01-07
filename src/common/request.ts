import { generatePost, between } from "./utils";
import { Post } from "./post";

export const request = (numberOfResults = 5) =>
  new Promise((resolve) => {
    const result: Post[] = [];

    for (let i = 0; i < numberOfResults; ++i) {
      result.push(generatePost());
    }

    // simulate network delay
    // (random response time between 250 and 1500 ms)
    setTimeout(() => resolve(result), between(250, 1500, Math.random() * 1500));
  });
