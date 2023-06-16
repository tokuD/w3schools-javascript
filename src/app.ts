const body = document.querySelector("body") as HTMLBodyElement;

body.innerHTML = `
<form action="${document.baseURI}" method="get">
  <label for="firstName">firstName</label>
  <input name="firstName" />
  <button type="submit">Submit</button>
</form>
`;
