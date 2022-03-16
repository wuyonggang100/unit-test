import { parser, stringify } from "../src/parser.js";

describe("测试parser", () => {
  it("测试parser是否正常解析", () => {
    expect(parser("a=3&b=4&c=5")).toEqual({ a: "3", b: "4", c: "5" });
  });
});

describe("测试stringify", () => {
  it("测试stringify是否正常解析", () => {
    expect(stringify({ a: "3", b: "4", c: "5" })).toEqual("a=3&b=4&c=5");
  });
});

it.only("仅仅测试这一个", () => {
  expect(stringify({ a: "3", b: "4", c: "5" })).toEqual("a=3&b=4&c=5");
});
