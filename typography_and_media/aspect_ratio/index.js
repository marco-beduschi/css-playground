document
  .querySelector("#select-aspect-ratio")
  .addEventListener("change", handleAspectRatioChange);
document
  .querySelector("#select-object-fit")
  .addEventListener("change", handleObjectFitChange);

function handleAspectRatioChange(e) {
  document
    .querySelectorAll("img")
    .forEach((el) => (el.style.aspectRatio = e.target.value));
}

function handleObjectFitChange(e) {
  document
    .querySelectorAll("img")
    .forEach((el) => (el.style.objectFit = e.target.value));
}
