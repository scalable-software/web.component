const inject = (importmap, type) => {
  const element = document.createElement("script");
  element.type = type;
  element.textContent = JSON.stringify(importmap);
  document.currentScript.after(element);
};
