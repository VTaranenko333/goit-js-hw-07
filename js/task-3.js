const inputElement = document.querySelector("#name-input");
const outputElement = document.querySelector("#name-output");

inputElement.addEventListener("input", () => {
  const trimmedValue = inputElement.value.trim();
  outputElement.textContent = trimmedValue !== "" ? trimmedValue : "Anonymus";
});
