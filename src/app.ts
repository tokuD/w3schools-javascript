const body = document.querySelector("body") as HTMLBodyElement;

const calcWindowSize = (when: string) => {
  body.innerHTML = `
  <p>width: ${window.innerWidth}</p>
  <p>height: ${window.innerHeight}</p>
  <p>when: ${when}</p>
  `;
};

window.addEventListener("resize", () => calcWindowSize("resize"));
window.addEventListener("load", () => calcWindowSize("load"));
