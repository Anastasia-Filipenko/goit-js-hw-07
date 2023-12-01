const input = document.querySelector("#name-input");
const userName = document.querySelector("#name-output");

const changeName = (e) => {
  const name = e.target.value;
  userName.textContent = name.trim();

  if (userName.textContent.length === 0) {
    userName.textContent = "Anonymous";
  }
};

input.addEventListener("input", changeName);
