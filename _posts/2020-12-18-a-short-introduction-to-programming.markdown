---
layout: post
author: George Baker 
description: A short introduction to programming using Python.
image: https://blog.gsbaker.uk/img/logic-board.jpg
---

### Prerequisites
1. Install [Python](https://www.python.org) to follow along.
2. Have a basic knowledge of mathematical functions.

***

## What is programming?
Computers are really dumb.

People like to tell stories about how computers will one day take over the world, but
right now, they look like this:

![](/img/logic-board.jpg)

Essentially, computers are just a big slab of metal with more slabs of metal on them. 

The only 'intelligence' they have is the instructions that a human programmer (that's you)
give to it.

Programming is just telling a computer what to do.

## Connection to Maths
In maths and computer science, a function is something which takes an input, does
something with it, and produces an output.

Let's look at the following function `f(x)` that takes a number `x` and increases it by 
`1`:

`f(x) = x + 1`

E.g.

- `f(4) = (4) + 1  = 5`

We can write this as a computer program in Python very easily:
```python
def f(x):
  return x + 1
```

Functions are a very useful tool in programming. In this introduction, we're going
to use a few functions that are *built in* to Python.

For now, don't worry about the specific Python *syntax* above.

## Data Types
Data is a fancy word for information.

All programming languages support the handling of different types of data called 
*data types*.

Here are some of the most important ones which you'll find in most modern programming
languages:

### Characters
- `'g'`
- `'0'`
- `'E'`

### Strings
Strings are characters that are 'strung' together to form words/sentences.
- `"My name is George"`
- `"Hey there"`

### [Integers](https://en.wikipedia.org/wiki/Integer)
- `21`
- `4`
- `0`
- `-2048`

### [Floats](https://en.wikipedia.org/wiki/Floating-point_arithmetic)
The term 'float' comes from 'floating point arithmetic'.
- `2.43`
- `5.1`
- `-1000.3`
- `7456.4`

### [Boolean](https://en.wikipedia.org/wiki/Boolean_data_type)
- `True`
- `False`

## The `print` function
The first function we'll use is called `print`. 

`print(x)` takes a value `x` as an input and simply outputs it to the screen. `x` can be
of any type.

Traditionally, the first program that one should write is the 
["Hello, World!"](https://en.wikipedia.org/wiki/%22Hello%2C_World!%22_program) program.

This program simply uses the `print(x)` function to output the string `"Hello, World!"`.

All one has to do is input the value `"Hello, World!"`:
```python
> print("Hello, World!")
Hello, World!
```

And you'll get `"Hello, World!"` as the output.

A nice, simple program.

Since the `print(x)` function can take an `x` value of any type, we can also input the
following values:
```python
> print(3) # int
3

> print(5934.23) # float
5934.23

> print('g') # character
'g'

> print(True) # boolean
True

# This is a comment. It's an annotation/explanation which is ignored by Python.
```

## Variables
Much like in maths, where we could say something like `x=3`, programming languages have
a very useful tool called **variables**.

A variable is called such because its value can change, i.e. vary, i.e. its value is
*variable*.

So, for example:
```python
x = 3

...

x = 5 # the value of x has changed from 3 to 5
```

You can *declare* a variable of any data type:
```python
name = "George" 
age = 20 
gpa = 4.0
married = False
favourite_letter = 'e'
```

We can also simply *pass* these variables as an input value to a function e.g. 
`print(x)`:
```python
> print(name)
George

> print(age)
20
```

## Control Flow
Telling a computer *what to do* relies heavily on making decisions on various data.

Let's take for example, switching a lightbulb.

If the lightbulb is on, we want to turn it off. If it's off, we want to turn it on.

We could represent this scenario in programming by creating a boolean variable called
`lightbulb` which can either be *on* or *off*. We'll use `True` to represent the
lightbulb being on and `False` to represent the lightbulb being off.

We'll set the initial value of `lightbulb` to `False` i.e. off:
```python
lightbulb = False
```

Now we want a way of turning our lightbulb *on or off* depending on which state it's 
currently in. 

For this, we can use a tool called **control flow**. This can best be described as 
*if this then that*. 

### `if` statements
```python
if condition:
  # do something
```

where `condition` is a boolean expression i.e. it's either `True` or `False`.

E.g.
```python
if lightbulb:
  lightbulb = False
```

#### `==` operator
We can declare booleans directly by just saying something like `married = True`, but
we can also form booleans using an expression which evaluates to either `True` or 
`False` using the `==` operator:
```python
> 100 == 100
True

> 'e' == 'E'
False
```

You can think of `x == y` meaning *are `x` and `y` exactly the same?* If so, then this
expression will evaluate to `True`, if not, it'll evaluate to `False`.

Since an `if` statement is conditioned upon a boolean expression, we can use `x == y` as
the condition:
```python
age = 20

if age == 20: # evaluates to True
  print ("You're twenty years old!")
```

### `else` statements
If an `if` statement evaluates to `False`, you can *optionally* add an `else` statement
which tells the computer what to do if an `if` condition isn't met.

E.g. if our lightbulb is off, we could use the `else` statement to turn it on:

```python
if lightbulb:
  lightbulb = False
else:
  lightbulb = True
```

## Defining our own functions with `def`
Each programming language defines functions in a different way. Python does it very
simply: using the `def` keyword:
```python
def function_name(arg1, arg2, arg3, ...):
  # do something
```

Where `arg1`, `arg2`, and `arg3` are special input *variables* which the function can 
use called *arguments* or *parameters* (these terms are broadly equivalent).

A function could have `0..n` *arguments* — this depends on what information the 
function needs.

### `return`
A function can also *optionally* **return** something i.e. give something as an output.

A common pattern in programming is to take `n` inputs into a function as arguments, 
for the function to then do something with those inputs and `return` a value. 

By way of an example, let's use our scenario from earlier of switching a lightbulb 
on and off.

We could write a function called `switch` which switches a `lightbulb` on and off:
```python
def switch(x):
  if x:
    x = False
    return x
  else:
    x = True
    return x
```

`switch` takes a value `x` as an argument, and switches its boolean value. It will
`return` the new boolean value. 

E.g.
```python
> lightbulb = True # i.e. on
> lightbulb = switch(lightbulb) # we'll get back False i.e. off
```

## Iteration
Another common theme in programming is instructing a computer to repeat a certain
action `n` number of times. This is called **iteration**.

There are two tools in Python for iterating:
1. `for` loops
2. `while` loops

### `for` loop
`for` loops in Python make use of the `range(start, stop, step)` function. 

The `range(start, stop, step)` function returns a sequence of numbers, starting from `0`
(by default), and increments by `1` (by default), and stops before a specified number.

The only compulsory argument is `stop`.

E.g. 
```python
range(5)
```
will return `0`, `1`, `2`, `3`, `4`. `range(5)` is equivalent to `range(0,5)`.

We can construct a `for` loop using the `range(start, stop, step)` function to repeat 
a set of commands a specified number of times:
```python
for x in range(10):
  print(x)
```

This will output:
```python
0
1
2
3
4
5
6
7
8
9
```

### `while` loop
`while` loops execute a block of commands **while** a certain condition evaluates
to `True`.

They are syntactically similar to `if` statements:
```python
while condition:
  # do something
```

If we wanted to output the numbers `0..9` like we did just above, we could do that 
with a `while` loop and a counter variable:
```python
count = 0
while count < 10:
  print(count)
  count = count + 1 # increment count by one
```

This will output:
```python
0
1
2
3
4
5
6
7
8
9
```

Just for fun, we could also instruct a computer to do something forever by setting the
`while condition` to be always `True`:
```python
while True:
  print("Hello, World!")
```

And this program will go on outputting "Hello, World!" forever, and ever...

Computers are so clever!

---
### Where to go from here?
This was just a **short** introduction to programming. Don't worry if you didn't 
understand all of it. In order to keep it brief, I refrained from explaining a lot of 
things which other tutorials might explain in further detail. 

If you're interested in learning more, here are some great resources to get you started:
- [Beginner's Guide to Python (python.org)](https://wiki.python.org/moin/BeginnersGuide)
- [thenewboston Python 3.4 Programming Tutorials (video series)](https://www.youtube.com/watch?v=HBxCHonP6Ro&list=PL6gx4Cwl9DGAcbMi1sH6oAMk4JHw91mC_)