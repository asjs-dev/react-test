import { generatePost } from "../src/common/utils";
import { Direction, sortByDateAsc, sortByDateDesc } from "../src/common/sort";
import { Post } from "../src/common/post";

const sortCheck = function (postList: Post[], direction: Direction) {
  const isAscending: boolean = direction === "ASC";

  postList.sort(isAscending ? sortByDateAsc : sortByDateDesc);

  let latestDate: number = postList[0].date.getTime();
  const filteredIndex: number = postList.findIndex((item: Post) => {
    const value: number = item.date.getTime();
    const result: boolean = isAscending
      ? value < latestDate
      : value > latestDate;
    latestDate = value;
    return result;
  });

  expect(filteredIndex).toBe(-1);
};

describe("Order Tests", function () {
  const postList: Post[] = [];

  for (let i = 0; i < 5; ++i) {
    postList.push(generatePost());
  }

  it("Order Post list by date ASC", sortCheck.bind({}, postList, "ASC"));

  it("Order Post list by date DESC", sortCheck.bind({}, postList, "DESC"));
});
