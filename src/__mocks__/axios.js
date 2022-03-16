export default {
  get(url) {
    if (url === "/user") {
      return new Promise((resolve, reject) => resolve({ name: "wu" }));
    }
  },
};
