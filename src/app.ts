const body = document.querySelector("body")!;
const main = document.createElement("main");
const ul = document.createElement("ul");

body.appendChild(main);
main.appendChild(ul);

for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.innerHTML = `item-${i}`;
  li.style.textDecoration = "none";
  li.style.listStyleType = "none";
  li.style.border = "1px solid";
  li.style.padding = "4px";
  li.style.width = "100px";
  li.style.textAlign = "center";
  li.style.marginBottom = "16px";
  li.style.borderRadius = "8px";
  li.onclick = () => {
    console.log(`click at ${li.innerText}`);
  };
  ul.appendChild(li);
}

console.log(`baseURI: ${document.baseURI}`); 
console.log(`documentURI: ${document.documentURI}`);
console.log(`lastModified: ${document.lastModified}`);
console.log(`URL: ${document.URL}`);

