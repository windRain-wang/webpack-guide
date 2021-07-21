// 使用 npx webpack --env goal=local --env production --progress 打包，可以看出效果
const path = require("path");

module.exports = (env) => {
  console.log("Goal: ", env.goal);
  console.log("Production: ", env.production);

  return {
    entry: "./src/index.js",
    output: {
      filename: "main.js",
      path: path.join(__dirname, "dist"),
    },
  };
};
