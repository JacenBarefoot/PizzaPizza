const itemContainer = document.querySelector(".content")
const sidesBtn = document.querySelector(".sidesBtn")
const drinksBtn = document.querySelector(".drinksBtn")
const pizzaBtn = document.querySelector(".pizzaBtn")
const dessertBtn = document.querySelector(".dessertBtn")


function populateContent(items) {
    itemContainer.innerHTML = "";
    for (const item of items) {
        const price = item.price
            .split("\n\n")
            .map((p) => `<p>${p}</p>`)
            .join("");
        itemContainer.insertAdjacentHTML(
            "beforeend",
            `
        <article>
            <h2>${item.name}</h2>
            ${paragraphs}
        </article>`
        )
    }
}

fetch("food.json").then(req => req.json()).then(items => populateContent())

drinksBtn.addEventListener("click", ()=> {
    populateContent(blah)
})