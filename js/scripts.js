function Pizza (toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.costOf = function() {
  this.cost = 0
  if (this.toppings[0] === "pepporoni") {
    this.cost += 3.00; 
  } else { 
    return this.cost
  }
}
