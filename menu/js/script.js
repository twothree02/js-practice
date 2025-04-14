const menu = document.querySelector("#menu");

/*
const lists = [
  "strawberry.jpg",
  "lime.jpg",
  "mango.jpg",
  "lemon.jpg",
  "fig.jpg",
  "apple.jpg",
];

const strawberry = {
  name: "딸기",
  img: "strawberry.jpg",
  price: 4500,
};
*/

const lists = [
  {
    name: "딸기",
    img: "straWberry.jpg",
    price: 4500,
  },
  {
    name: "라임",
    img: "lime.jpg",
    price: 4000,
  },
  {
    name: "망고",
    img: "mango.jpg",
    price: 5000,
  },
  {
    name: "레몬",
    img: "lemon.jpg",
    price: 4000,
  },
  {
    name: "무화과",
    img: "fig.jpg",
    price: 5000,
  },
  {
    name: "사과",
    img: "apple.jpg",
    price: 4000,
  },
];

//console.log(lists[0].name);

//console.log(strawberry);
//console.log(lists[0]);

//console.log(strawberry.name);
//console.log(strawberry["img"]);

/*
const key = "name";

console.log(strawberry.key);
console.log(strawberry[key]);
*/

for (let i = 0; i < lists.length; i++) {
  /*
  const name = lists[i].name;
  const img = lists[i].img;
  const price = lists[i].price;
*/
  const { name, img, price } = lists[i];

  const content = `<div><img src="images/${img}" alt=""><h2>${name}</h2><p>${price}원</p>
  </div>`;
  menu.insertAdjacentHTML("beforeend", content);
  //menu.textContent = content;
}
