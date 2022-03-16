import { addNode, removeNode } from "../src/dom";

describe("测试 dom 环境", function () {
  it("测试能否正常添加节点", () => {
    document.body.innerHTML = `<div id="wrapper"></div>>`;
    let button = document.createElement("button");
    let wrapper = document.querySelector("#wrapper");
    addNode(button, wrapper);
    let btn = wrapper.querySelector("button");
    expect(btn).not.toBeNull();
  });

  it("测试能否删除节点", () => {
    document.body.innerHTML = `<div id="wrapper"></div>>`;
    let button = document.createElement("button");
    let wrapper = document.querySelector("#wrapper");
    addNode(button, wrapper);
    removeNode(button);
    let btn = wrapper.querySelector("button");
    expect(btn).toBeNull();
  });
});
