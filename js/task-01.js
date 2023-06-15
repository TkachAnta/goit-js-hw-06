const ul = document.getElementById("categories");
const items = ul.querySelectorAll("li.item");

console.log("Number of categories: " + items.length);

items.forEach(item => {
  const categoryTitle = item.querySelector("h2").textContent;
  const categoryElements = item.querySelectorAll("ul li").length;

  console.log("Category: " + categoryTitle);
  console.log("Elements: " + categoryElements);
});