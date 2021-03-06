
    const foodbox = document.querySelector(".content");
    const menu = document.querySelectorAll(".Btn");
    let pricee = 0;

    menu.forEach((m) => {
      m.addEventListener("click", (e) => {
        if (e.target.innerHTML === "All") {
          fetch("food.json")
            .then((req) => req.json())
            .then((data) => {
              populateContent(data);
            });
        } else if (e.target.innerHTML === "Pizza") {
          let leList = [];
          fetch("food.json")
            .then((req) => req.json())
            .then((data) => {
              for (const item of data) {
                if (item.type == "pizza") {
                  leList.push(item);
                }
              }
              populateContent(leList);
            });
        } else if (e.target.innerHTML === "Drinks") {
          let leList = [];
          fetch("food.json")
            .then((req) => req.json())
            .then((data) => {
              for (const item of data) {
                if (item.type == "drink") {
                  leList.push(item);
                }
              }
              populateContent(leList);
            });
        } else if (e.target.innerHTML === "Sides") {
          let leList = [];
          fetch("food.json")
            .then((req) => req.json())
            .then((data) => {
              for (const item of data) {
                if (item.type == "side") {
                  leList.push(item);
                }
              }
              populateContent(leList);
            });
        } else if (e.target.innerHTML === "Dessert") {
          let leList = [];
          fetch("food.json")
            .then((req) => req.json())
            .then((data) => {
              for (const item of data) {
                if (item.type == "dessert") {
                  leList.push(item);
                }
              }
              populateContent(leList);
            });
        }
      });
    });

    function populateContent(items) {
      foodbox.innerHTML = "";
      for (const item of items) {
        const type = item.type
          .split("\n\n")
          .map((p) => `<p>${p}</p>`)
          .join("");
        foodbox.insertAdjacentHTML(
          "beforeend",
          `
                  <article class = "foodItem" style="background-color: lightgray">
                    <div style="margin-left: 2em; padding-top:3em">
                        <h2 class="itemName">${item.name}</h2>
                        <h2 class="itemPrice">${item.price}</h2>
                        <img class="images" src="${item.image}">
                        <button style="width: 5em; height: 5em"class="addListBtn">Add To Ticket!!</button>
                    </div>
                  </article>
                  `
        );
      }
      buttons();
    }
    function buttons() {
      var AddItemBtns = document.getElementsByClassName("addListBtn");
      for (let i = 0; i < AddItemBtns.length; i++) {
        var button = AddItemBtns[i];
        button.addEventListener("click", AddItem);
      }
    }

    function AddItem(event) {
      var button = event.target;
      var item_card = button.parentElement;
      var item_name = item_card.getElementsByClassName("itemName")[0].innerText;
      var item_price =
        item_card.getElementsByClassName("itemPrice")[0].innerText;
      pricee += Number(item_price);
      const total = document.querySelector(".total");
      total.innerHTML = "$" + pricee;
      var wholeItem = document.createElement("div");
      wholeItem.classList.add("whole");
      wholeItem.insertAdjacentHTML(
        "beforeend",
        `<article>
          <div style="margin-bottom: 1em; padding-bottom: 0.1em; margin-left: 8em; border: 2px solid black">
            <button style="margin-left: 10em; margin-top: 1em" class="removeItem">Remove</button>
            <div>
              <p style="text-align: center; padding-left: 0.5em; font-size: 2em; margin-left: 0.5em; margin-right: 0.5em; background-color: #E8E8E8" class="item_name">${item_name}</p>
            </div>
            <div>
              <p style="text-align: center; padding-top: 0.3em; padding-bottom: 0.3em; margin-right: 8em; background-color: lightgrey; margin-left: 7em"class="itemPrice">$${item_price}</p>
            </div>
          </div>
        </article>`
      );
      let ticketList = document.getElementsByClassName("ticketList")[0];
      ticketList.append(wholeItem);
      let buttons = ticketList.getElementsByClassName("removeItem");
      for (let i = 0; i < buttons.length; i++) {
        var variable = buttons[i];
        variable.addEventListener("click", removeItem);
      }
    }

    function loadAll() {
      fetch("food.json")
        .then((req) => req.json())
        .then((data) => {
          populateContent(data);
        });
    }

    function removeItem(event) {
      var buttonClicked = event.target;
      var whole = buttonClicked.parentElement.parentElement;
      var price = whole.querySelector(".itemPrice").innerHTML;
      price2 = price.substring(1);
      console.log(price2);
      pricee -= Number(price2);
      const total = document.querySelector(".total");
      total.innerHTML = "$" + pricee;
      buttonClicked.parentElement.parentElement.remove();
    }

    function pay() {
      const orderSection = document.querySelector(".order-section");
      orderSection.style.display = "none";
      const body = document.querySelector("body");
      body.classList.remove("grid");
      body.style.textAlign = "center";
      const removeItem = document.querySelectorAll(".removeItem");
      removeItem.forEach((remove) => {
        remove.style.display = "none";
      });
      const pay = document.querySelector(".placeBtn");
      pay.style.display = "none";
    }