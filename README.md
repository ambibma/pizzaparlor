
# Pizza Parlor
---
#### By Ambi Hidalgo 
###### ambio.pk@gmail.com
---

#### Pizza Parlor
Pizza parlor is a student project that was created to demonstrate learned practices of object-oriented JavaScript. Utilizing knowledge of  objects, constructors and prototypes users will be able to create a pizza order with multiple pizzas! 

## Technologies Used

* Javascript
* CSS
* HTML
* Google Developer's Tools


## Setup/Installation Requirements

* Clone this repository (https://github.com/ambibma/pizzaparlor)
* using terminal or gitbash navigate to pizzaparlor repository file
* Once in the repo file 
    *       $ Start index.html
        or if on mac
    *       $ open index.html
* Place an order!

## Known Bugs

* No known bugs at the moment
send bug concerns to ambi.pk@gmail.com

## License


Copyright (c) Ambi Hidalgo 2022

## Tests for Business Logic


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
code: pizza.costOfToppings()
expected output: 5

describe: Pizza.prototype.costOfSize();
test: it should add another value to the pizza's cost key-property for each size: "medium, large, xl"
code: pizza.costOfSize();
expected output : 20

describe: Pizza.prototype.costOfPizza();
test: it should return the total cost of a pizza adding costOfToppings and costOfSize to make one final cost
code: pizza.costOfPizza();
expected output: 20

describe: function Parlor()
test: it should create a Parlor object with an empty object to hold orders 
code let parlor = new Parlor()
expected output = Parlor {orders:{}}

test: it should have a currentId value so that it can assign a unique ID to an order
code: Parlor.orders.currentId
expected output : Parlor {orders:{} CurrentId: 0}

Describe: assignOrderId()
test: it should add a counter to current.id that when called, current.id will count
code: Parlor.prototype.assignOrderId()
expected output: Parlor {oders:{} currentId: 1}

Describe: addOrder()
test: it should add an order to the Parlor object with a unique Id
code: Parlor.prototype.addOrder()
expected output: Parlor{orders:[1] currentId: 1}

Describe: findOrder() 
test: it should find and retrieve an order based on its id number
code: Parlor.prototype.findOrder(1)
expected output: 1: Pizza {Pizza(["pepporoni", "olives"], "medium", "john") id:1}