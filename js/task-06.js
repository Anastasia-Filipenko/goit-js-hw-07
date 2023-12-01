function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const input = document.querySelector('#controls input[type="number"]');
const container = document.querySelector("#boxes");

function createBoxes(amount) {
  container.innerHTML = "";

  if (amount >= 1 && amount <= 100) {
    let boxSize = 30;
    let markup = "";

    for (let i = 0; i < amount; i++) {
      const color = getRandomHexColor();
      markup += ` <div style="width:${boxSize}px; height:${boxSize}px; background-color:${color}"> </div>`;
      boxSize += 10;
    }
    container.insertAdjacentHTML("beforeend", markup);
  }
  input.value = "";
}

const destroyBoxes = () => {
  container.innerHTML = "";
};

createBtn.addEventListener("click", () => {
  createBoxes(input.value);
});

destroyBtn.addEventListener("click", destroyBoxes);
