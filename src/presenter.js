import esBisiesto from "./esBiciesto";

const first = document.querySelector("#year");
const form = document.querySelector("#biciesto-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const year = Number.parseInt(first.value);
  let message = ""; 
  if(esBisiesto(year)) message = "El año " + year.toString() + " es un año biciesto."
  else message = "El año " + year.toString() + " NO es un año biciesto."
  div.innerHTML = "<p>" + message + "</p>";
});
