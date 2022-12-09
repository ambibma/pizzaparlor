Pizza {}
toppings:
size:
cost:

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

test: it should add another value to the pizza's cost key-property for two toppings and size"
code: pizza.costOf();
expected output : 15

