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