import { flip } from "../src/coverage";

it("测试 flip", () => {
  expect(flip(true)).toBe("正");
  expect(flip(false)).toBe("反");
});
