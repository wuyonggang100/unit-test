const getDataByCallBack = (cb) => {
  setTimeout(() => {
    cb({ name: "wu" });
  }, 3000);
};

const getDataByPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "wu" });
    }, 3000);
  });
};

export { getDataByCallBack, getDataByPromise };
