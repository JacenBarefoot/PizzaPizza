class Pizza {
    constructor(name, image){
        this.name = name;
        this.image = image;
    }
}

pizzaList = [new Pizza("Cheese pizza", "images/cheesepizza.jpeg"), new Pizza("Pepperoni Pizza", "images/pepperoni.jpeg"), new Pizza("Sausage Pizza", "images/sausagepizza.jpeg")]

function pizza_btn() {
    console.log(pizzaList);
}

// --------------------------------------------------

class Dessert {
    constructor(name, image){
        this.name = name;
        this.image = image;
    }
}

dessertList = [new Dessert("Brownies", "images/brownies.jpeg"), new Dessert("CinnaSticks", "images/cinnasticks.jpeg"), new Dessert("Cookies", "images/cookies.jpeg")]

function dessert_btn() {
    console.log(dessertList);
}

// --------------------------------------------------

class Sides {
    constructor(name, image){
        this.name = name;
        this.image = image;
    }
}

sidesList = [new Sides("Fries", "images/fries.jpeg"), new Sides("Salad", "images/salad.jpeg"), new Sides("Nachos", "images/nachos.jpeg")]

function sides_btn() {
    console.log(sidesList);
}

// --------------------------------------------------

class Drinks {
    constructor(name, image){
        this.name = name;
        this.image = image;
    }
}

drinksList = [new Drinks("Water", "images/water.jpeg"), new Drinks("Sprite", "images/sprite.jpeg"), new Drinks("Coke", "images/coke.jpeg")]

function drinks_btn() {
    console.log(drinksList);
}


// const box = document.querySelector(".content");



