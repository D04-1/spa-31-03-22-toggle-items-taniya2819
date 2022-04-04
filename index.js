function handleCityToggle() {
  let list = document.querySelector("ul");
  let button = document.querySelector("button");
  let isHidden = list.classList.toggle("hidden");
  //console.log(list.classList());
  if (isHidden) {
    //list.classList.toggle("hidden");
    button.innerHTML = "Zeige Städte";
  } else {
    //list.classList.toggle("hidden");
    button.innerHTML = "Verstecke Städte";
  }
}
