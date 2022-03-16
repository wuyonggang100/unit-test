// jest.mock("../src/ajax");

import { fetchData } from "../src/ajax";

it("测试 ajax", async () => {
  let res = await fetchData();
  expect(res).toEqual({ name: "wu" });
});

it("测试 mock 方法", async () => {
  let { sum } = jest.requireActual("../src/ajax");
  expect(sum(1, 2)).toBe(3);
});
