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
  div.innerText = null
  const ol = document.createElement("ol");
  const ul = document.createElement("ul");
  Object.keys(pizzasToDisplay.orders).forEach(function(key){
  const order = pizzasToDisplay.findOrder(key);
  const li = document.createElement("li");
  const li2 = document.createElement("li");
  // const p = document.createElement("p");
  li.append(order.size + " Pizza");    
  li.setAttribute("id", order.id);
  ol.append(li);
  });
  div.append(ol);
}
function handleSubmit(event){
  event.preventDefault();
  const sizeSelection = document.getElementById("pizzaSize").value;
  const warningMessageSize = document.getElementById("warningMessageSize");
  const warningMessageName = document.getElementById("warningMessageName");
  if (sizeSelection === "null"){
  return warningMessageSize.classList.remove("hidden")
  }
  warningMessageSize.classList.add("hidden");
  const toppingsSelection = document.querySelectorAll('input[type="checkbox"]:checked[name="toppingsOption"]');
  const displayCost = document.getElementById("displayOrder");
  const printCost = document.getElementById("orderTotal");
  let pInterger = parseInt(printCost.innerText);
  const nameInput = document.getElementById("nameInput").value;
  if (nameInput === ""){
    return warningMessageName.classList.remove("hidden")
    }
  warningMessageName.classList.add("hidden")
  const toppingsSelectionsArray = Array.from(toppingsSelection);
  const pizzaToppings = [];
  toppingsSelectionsArray.forEach(function(element){
    return pizzaToppings.push(element.value)
    });
  let newPizza = new Pizza(pizzaToppings, sizeSelection);
  parlor.newOrder(newPizza)
  displayOrder(parlor);
  newPizza.costOfPizza();
  pInterger += newPizza.cost;
  printCost.innerText = pInterger.toString();
  displayCost.classList.remove("hidden");
  sizeSelection.value = null;
  toppingsSelection.value = null;


}
function handleCheckout() {
  let pizzaForm = document.querySelector("div.item");
  let checkoutMessage = document.querySelector("div.item3");
  let checkoutButton = document.getElementById("checkoutButton");
  const nameInput = document.getElementById("nameInput").value;
  let displayCustomerName = document.getElementById("customerName");
  let newOrderButton = document.getElementById("newPizzaButton");
  pizzaForm.classList.add("hidden");
  checkoutMessage.classList.remove("hidden");
  checkoutButton.classList.add("hidden");
  displayCustomerName.innerText = nameInput;
  newOrderButton.classList.remove("hidden");
}
function handleReset(){
  location.reload();
}

window.addEventListener("load", function (){
document.querySelector("form#pizzaOrderForm").addEventListener("submit", handleSubmit);
document.querySelector("button#checkoutButton").addEventListener("click", handleCheckout);
document.querySelector("button#newPizzaButton").addEventListener("click", handleReset);

});