//Parlor Logic
let parlor = new Parlor();
function Parlor() { 
this.orders = {};
this.currentId = 0;

}
Parlor.prototype.newOrder = function (order){
    order.id = this.assignOrderId();
    this.orders[order.id] = order;
}
Parlor.prototype.assignOrderId = function(){
  this.currentId += 1;
  return this.currentId;
}
Parlor.prototype.findOrder = function(id){
  if(this.orders[id] !== undefined){
    return this.orders[id];
  }
  return false;
}

//Pizza Logic
function Pizza (toppings, size, name) {
  this.toppings = toppings;
  this.size = size;
  this.cost = 0;
  this.name = name
}

Pizza.prototype.costOfToppings = function() {
    for (i = 0; i <= 2; i++)
      if(this.toppings[i] === "pepporoni"){
          this.cost += 3.00 
      }else if (this.toppings[i] === "olives"){
          this.cost += 2.00 
      } return this.cost
  
    
  }
Pizza.prototype.costOfSize = function () {
  if(this.size === "medium"){
      this.cost += 10.00 
  }else if (this.size === "large"){
      this.cost += 12.00
  }else if (this.size === "xl"){
      this.cost += 15.00      
  } return this.cost
}

Pizza.prototype.costOfPizza = function (){
  this.costOfToppings() + this.costOfSize()
  return this.cost
}

//UI Logic
function displayOrder(pizzasToDisplay){
  const div = document.getElementById("pizzas");
  const ul = document.createElement("ul");
  Object.keys(pizzasToDisplay.orders).forEach(function(key){
  const order = orderToDisplay.findOrder(key);
  const li = document.createElement("li");
  li.append()
  });
}
function handleSubmit(event){
  event.preventDeafult();
  const sizeSelection = document.getElementById("pizzaSize").value;
  const toppingsSelection = document.querySelectorAll('input[type="checkbox"]:checked[name="toppingsOption"]');
  const displayCost = document.getElementById("displayOrder");
  const printCost = document.getElementById("orderTotal");
  const nameInput = document.getElementById("nameInput").value;
  const toppingsSelectionsArray = Array.from(toppingsSelection);
  const pizzaToppings = [];
  toppingsSelectionsArray.forEach(function(element){
    return pizzaToppings.push(element.value)
    });
  let newPizza = new Pizza(pizzaToppings, sizeSelection);
  parlor.newOrder(newPizza)
}



function handleSubmit(event){
event.preventDefault();
const sizeSelection = document.getElementById("pizzaSize").value;
const warningMessage = document.getElementById("warningMessage");
if (sizeSelection === "null"){
  return warningMessage.classList.remove("hidden")
}const toppingsSelection = document.querySelectorAll('input[type="checkbox"]:checked[name="toppingsOption"]');
warningMessage.classList.add("hidden");
const toppingsSelectionsArray = Array.from(toppingsSelection);
const pizzaToppings = [];
toppingsSelectionsArray.forEach(function(element){
  return pizzaToppings.push(element.value)
  });
const displayCost = document.getElementById("displayOrder");
const printCost = document.getElementById("orderTotal");
let pizza = new Pizza(pizzaToppings, sizeSelection);
pizza.costOfPizza();
displayCost.classList.remove("hidden");
printCost.innerText = pizza.cost
  }


  

function addPizza (event){
  event.preventDefault();

}


window.addEventListener("load", function (){
this.document.querySelector("form#pizzaOrderForm").addEventListener("submit", handleSubmit);
});