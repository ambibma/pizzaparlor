//Pizza Logic
function Pizza (toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.cost = 0;
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