const div = document.querySelector("div");
const h1 = document.createElement("h1");
const input = document.querySelector("input");
const btn = document.querySelector("button");
document.body.appendChild(h1);

btn.addEventListener("click", () => {
  if (input.value > 0 && input.value < 100) {
    for (let i = 0; i < input.value; i++) {
      const image = document.createElement("img");
      image.src = "./download.jfif";
      div.appendChild(image);
    }
  } else {
    h1.innerText = "input should include only numbers";
  }
});

input.addEventListener("change", function () {
  div.innerHTML = "";
});
