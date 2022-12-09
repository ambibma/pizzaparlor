function Pizza (toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.costOf = function() {
  this.cost = 0
  if ((this.toppings[0] === "pepporoni") && (this.toppings.length <= 1)) {
    this.cost += 3.00; 
  } else if ((this.toppings[0] ==="pepporoni") && (this.toppings[1] === "olives") &&(this.toppings.length<=2)){ 
    this.cost += 5.00
  } else {
    return this.cost
  }
}
