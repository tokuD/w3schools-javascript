const p = document.getElementById("demo") as HTMLParagraphElement;

p.innerHTML = "Hello World";

const body = document.querySelector("body")!;
body.innerHTML = `
<div>
  <ul>
    <li>item1</li>
    <li>item2</li>
    <li>item3</li>
  </ul>
</div>
`;
