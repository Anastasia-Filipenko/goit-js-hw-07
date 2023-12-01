const ul = document.querySelector("#categories");
console.log(`Number of categories: ${ul.children.length}`);

const ulArray = Array.from(ul.children);
ulArray.forEach((list) => {
  console.log(`Categoty: ${list.firstElementChild.textContent} `);
  console.log(`Elements: ${list.lastElementChild.children.length}`);
});
