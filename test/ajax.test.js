import { fetchData } from "../src/ajax";

it("测试 ajax", async () => {
  let res = await fetchData();
  expect(res).toEqual({ name: "wu" });
});
