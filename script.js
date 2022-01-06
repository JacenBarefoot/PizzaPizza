const foodbox = document.querySelectorAll(".content");
const menu = document.querySelectorAll(".Btn");

menu.forEach((m) => {
  m.addEventListener("click", () => {
    fetch("food.json")
      .then((req) => req.json())
      .then((data) => console.log(data));
  });
  m.addEventListener("click", (e) => {
    console.log(e.target.innerHTML);
    foodbox.forEach((box) => {
      box.classList.add("d-none");
      if (e.target.innerHTML === "All") {
        fetch("food.json")
          .then((req) => req.json())
          .then((data) => console.log(data));
      } else if (e.target.innerHTML === "Pizza") {
        fetch("food.json")
          .then((req) => req.json())
          .then((data) => console.log(data));
      } else if (e.target.innerHTML === "Drinks") {
        if (box.classList.contains("drink")) {
          box.classList.remove("d-none");
        }
      } else if (e.target.innerHTML === "Sides") {
        if (box.classList.contains("side")) {
          box.classList.remove("d-none");
        }
      } else if (e.target.innerHTML === "Dessert") {
        if (box.classList.contains("dessert")) {
          box.classList.remove("d-none");
        }
      }
    });
  });
});
