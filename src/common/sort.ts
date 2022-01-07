import { Post } from "./post";

export type Direction = "ASC" | "DESC";

const sortByDate = function (direction: Direction, itemA: Post, itemB: Post) {
  return direction === "ASC"
    ? itemA.date.getTime() - itemB.date.getTime()
    : itemB.date.getTime() - itemA.date.getTime();
};

export type SortFunction = (a: Post, b: Post) => number;

export const sortByDateAsc: SortFunction = sortByDate.bind(this, "ASC");
export const sortByDateDesc: SortFunction = sortByDate.bind(this, "DESC");
