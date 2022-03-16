import { getDataByCallBack, getDataByPromise } from "../src/async";

// jest.setTimeout(2000);
// it("测试回调函数", (done) => {
//   jest.useFakeTimers();
//   getDataByCallBack((data) => {
//     // console.log("---data---", data);
//     expect(data).toEqual({ name: "wu" });
//
//     // done();
//   });
//   jest.runAllTimers();
//
//   // jest.runOnlyPendingTimers();
// });

test("测试promise", async () => {
  let data = await getDataByPromise();
  expect(data).toEqual({ name: "wu" });
});
