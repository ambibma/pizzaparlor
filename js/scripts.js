function Pizza (toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.costOfPizza = function() {
  this.cost = 0
  for (i = 0; i <= this.toppings.length; i++)
      if(this.toppings[i] === "pepporoni"){
          this.cost += 3.00 
      }else if (this.toppings[i] === "olives"){
          this.cost += 2.00 
      }}
