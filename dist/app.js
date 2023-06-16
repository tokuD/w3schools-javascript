"use strict";
const body = document.querySelector("body");
const calcWindowSize = (when) => {
    body.innerHTML = `
  <p>width: ${window.innerWidth}</p>
  <p>height: ${window.innerHeight}</p>
  <p>when: ${when}</p>
  `;
};
window.addEventListener("resize", () => calcWindowSize("resize"));
window.addEventListener("load", () => calcWindowSize("load"));
//# sourceMappingURL=app.js.map