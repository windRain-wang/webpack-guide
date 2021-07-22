async function getComponent() {
  const element = document.createElement("div");
  const { default: _ } = await import("lodash");
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  return element;
}

getComponent().then((component) => {
  document.body.appendChild(component);
});
console.log('process.env.ASSET_PATH', process.env.ASSET_PATH);