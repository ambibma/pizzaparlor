
Parlor {
  Orders: [{Pizza 1: toppings:[pep, olives], size: XL, Cost: 12.00 }]
}

parlor.costOf(1) ? // will need an id of sorts
or
pizza.prototype.costOf() ? // can ask the cost of itself?

"The most important part of this code review is using and demonstrating your understanding of constructors and prototypes."

Step 1:
-create pizza constructor
  -toppings
  -size
  -cost?
-create cost of method for pizza
  -look to pizza.toppings
    -check for toppings and assign value
    -check size and assign value
    -create cost toppings + size
Step 2:
-input for pizza size
-check box input for pizza toppings
-cost window
-add to order button? *
-checkout button
  -"You order will be ready for pick up in..."

Stretch Goals:
-refactor cost functions
-Add enter page
-add another pizza 
-add cheezy bread pop-up
-styling: background, theme
-display pizza


TDD

Describe: function Pizza()
test: It should return a new Pizza object
code: new Pizza(toppings, size)
expected output: Pizza {toppings:["Pepporoni", "olives"] size:XL}

describe: Pizza.prototype.costOfToppings()
test: It should add a cost to the pizza object of its topping
code: pizza.costOf()
expected output: 3

test: it should add another value to the pizza's cost key-property for two toppings
code: pizza.costOf()
expected output: 5

describe: Pizza.prototype.costOfSize();
test: it should add another value to the pizza's cost key-property for each size: "medium, large, xl"
code: pizza.costOfSize();
expected output : 20

describe: Pizza.prototype.costOfPizza();
test: it should return the total cost of a pizza adding costOfToppings and costOfSize to make one final const
code: pizza.costOfPizza();
expected output: 20

describe: function Parlor()
test: it should create a Parlor object with an empty array to hold orders 
code let parlor = new Parlor()
expected output = Parlor {orders:[]}

test: it should have a currentId value so that it can assign a unique ID to an order
code: Parlor.orders.currentId
expected output : Parlor {orders:[] CurrentId: 0}