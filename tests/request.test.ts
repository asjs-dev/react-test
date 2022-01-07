import { Post } from "../src/common/post";
import { request } from "../src/common/request";

describe("Request Tests", function () {
  it("Request should respond between 250 and 1500 ms", () => {
    const startTime: number = Date.now();
    return request(5).then((items: Post[]) => {
      const elapsedTime: number = Date.now() - startTime;

      expect(elapsedTime).toBeGreaterThan(250);
      expect(elapsedTime).toBeLessThan(1500);

      return;
    });
  });

  it("Request should create 5 Post items", () =>
    request(5).then((items: Post[]) => expect(items.length).toBe(5)));

  it("Request should create 3 Post items", () =>
    request(3).then((items: Post[]) => expect(items.length).not.toBe(5)));
});
