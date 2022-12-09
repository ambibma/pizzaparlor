//Pizza Logic
function Pizza (toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.cost = 0;
}

Pizza.prototype.costOfToppings = function() {
    for (i = 0; i <= this.toppings.length; i++)
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
function handleSubmit(event){
event.preventDefault();
const sizeSelection = document.getElementById("pizzaSize").value;
const toppingsSelection = document.querySelectorAll("input[name=toppingsOption]:checked");
const toppingsSelectionsArray = Array.from(toppingsSelection);
const pizzaToppings = toppingsSelectionsArray.forEach(function(element){
  return element.value
});
let pizza = new Pizza(pizzaToppings, sizeSelection);
const displayCost = document.getElementById("OrderTotal");
pizza.costOfPizza();
displayCost.innerText = pizza.cost

}

window.addEventListener("load", function (){
this.document.querySelector("form#pizzaOrderForm").addEventListener("submit", handleSubmit);
});