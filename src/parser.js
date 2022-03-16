const parser = (str = "") => {
  const obj = {};
  // ()=() 匹配 a=3，获取 key 和 value, 然后两边不能有 &和=;
  str.replace(/([^&=]+)=([^&=]+)/g, function (...args) {
    // console.log("=args===", args);
    obj[args[1]] = args[2];
  });
  return obj;
};

const stringify = (obj = {}) => {
  const arr = [];
  for (let key in obj) {
    arr.push(`${key}=${obj[key]}`);
  }
  return arr.join("&");
};

// console.log(parser("a=3&b=4&c=5"));
// console.log("----", stringify({ a: "3", b: "4", c: "5" }));

// 此处导出的是接口，不是对象，因此不能用对象方式
// export { parser: parser, stringify: stringify };  // x 不能用这种方式

export { parser, stringify };
