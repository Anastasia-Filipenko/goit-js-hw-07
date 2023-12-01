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

    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      box.style.width = boxSize + "px";
      box.style.height = boxSize + "px";
      box.style.backgroundColor = getRandomHexColor();
      container.append(box);
      boxSize += 10;
    }
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
