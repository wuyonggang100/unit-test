import { map } from "../src/fn";

let fn = jest.fn();
map([1, 2, 3], fn);

test("测试map方法", function () {
  // jest.fn() 可以记录测试用例执行的过程
  // let fn = jest.fn();
  // map([1, 2, 3], fn);
  // console.log(fn.mock);
  expect(fn.mock.calls[0][0]).toBe(1);
  expect(fn).toBeCalled();
});

it("测试map方法调用次数", function () {
  expect(fn).toBeCalledTimes(3);
});
