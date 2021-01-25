---
layout: post
author: George Baker
description: A short introduction to object oriented programming in Python.
image: https://blog.gsbaker.uk/favicon.png
---

### Prerequisites
1. Have a basic knowledge of Python. (See 
[A Short Introduction To Programming In Python]({% post_url 2020-12-18-a-short-introduction-to-programming %})).

--- 

## All About Data 
In my first post titled [A Short Introduction To Programming In Python]({% post_url 2020-12-18-a-short-introduction-to-programming %}),
I attempted to simplify the act of programming as:
> just telling a computer what to do.

I also introduced some common *data types* likes strings, integers, and booleans.

As we are now moving into more complex programming, I feel the need to update my crude
definition of what programming essentially is:
> Programming is telling a computer what to do with certain data.

You see, computing stuff relies on two things: **instructions** and  **data**.

One *style* of programming is based on the concept of *objects* which can contain data
and instructions. This is [Object Oriented Programming](https://en.wikipedia.org/wiki/Object-oriented_programming)
(OOP).

## Moving From Basic Python To Object Oriented Python
Python supports a very simple way of programming where we can just write basic 
instructions and the computer will just go line-by-line and execute them:
```python
x = 5

print("The value of x is " + str(x))

switch = False

if switch:
  print("The switch is on.")
else:
  print("The switch is off.")
```

We can use functions to group instructions together:
```python
def largest(x1, x2, x3):
  if x1 > x2 and x1 > x3:
    return x1
  elif x2 > x1 and x2 > x3:
    return x2
  return x3
```

If you're comfortable with simple programming and functions, the next step is to introduce
objects.

You can create an object using a `class`. 

Classes are basically blueprints for objects. They instruct a computer on how to create
an object and how that object should behave.

You could literally use objects to represent any abstract *thing*.

## `BankAccount` Example

A nice, clear example is a bank account.

Objects have two things: **data** and **actions**. E.g. a bank account might have a 
balance and a way to withdraw or deposit money. 

In OOP, data is represented using special variables (often referred
to as *attributes*) and actions are represented using functions (which are often referred
 to as *methods*).

To create a bank account object, we need a `class`:
```python
class BankAccount:
  pass
```

It's accepted practice to use capitalised [camel case](https://en.wikipedia.org/wiki/Camel_case) 
in class names.

### Classes, Objects, and Instances

In order to create an object, all we have to do is create a variable and assign
it to `ClassName()`.

E.g. 

```python
class BankAccount:
  pass

a = BankAccount()
```

In this example, we have a class `BankAccount` where `a` is an object of that class.

In OOP, we say that `a` is an **instance** of `BankAccount`.

We might want `a` to have a balance; after all, it is a `BankAccount`.

We can do that by simply giving `a` the attribute `balance`:
```python
class BankAccount:
  pass

a = BankAccount()
a.balance = 100
```

What if we have three instances of `BankAccount` each with a balance and account name?
```python
class BankAccount:
  pass

a = BankAccount()
a.balance = 100
a.name = "George Baker"

b = BankAccount()
b.balance = 440
b.name = "John Smith"

c = BankAccount()
c.balance = 1034
c.name = "Jane Doe"
```

If every `BankAccount` has a `balance` and `name`, then surely there's an easier way
of creating a `BankAccount` instance with those attributes.

As it turns out, there's a special method that we can use to instantiate (make an instance
of) our objects. 

### `init` and `self`
A `class` is a blueprint for an object. So far, our class `BankAccount` does literally
nothing. 

It turns out that there is a special kind of method which is used
to create an object: a [constructor](https://en.wikipedia.org/wiki/Constructor_(object-oriented_programming)).

Every OOP language has a different way of writing a constructor. Python's constructor
is named `__init__` (where `init` is short for initialise).

In Python, functions that look like `__method_name__` with two `_` before and after the
method name are [special](https://www.geeksforgeeks.org/dunder-magic-methods-python/).

`__init__` must have an argument named `self`:
```python
class BankAccount:
  def __init__(self):
    pass
```

If we want a `BankAccount` with a `balance` and `name`, then instead of saying `a.name`,
or `b.balance`, we can generalise each instance using the keyword `self`. I.e. `self.name`,
and `self.balance`.

We can automate the process of giving an instance an attribute in the `__init__(self)` method.

The `self` argument represents a single instance of an object. I.e. `self` could represent
the `BankAccount` `a`, or the `BankAccount` `c`.

Since we want our `BankAccount`s to have a `balance` and `name`, we can add these as 
arguments to the `__init__` method:
```python
class BankAccount:
  def __init__(self, balance, name):
    pass
```

Now, if we want to create a `BankAccount`, we have to provide a `balance` and `name`. This
is because when we say `a = BankAccount()`, `__init__` is automatically called. In fact,
the parentheses in `BankAccount()` are for giving arguments to `__init__`.

So now, if we want to create instances of `BankAccount`, we have to do it like so:
```python
class BankAccount
  def __init__(self, balance, name):
    pass

a = BankAccount(100, "George Baker")
b = BankAccount(440, "John Smith")
c = BankAccount(1034, "Jane Doe")
```

Now we can automate the process of assigning attributes to the instances `a`, `b`, and `c`:
```python
class BankAccount
  def __init__(self, balance, name):
    self.balance = balance
    self.name = name

a = BankAccount(100, "George Baker")
b = BankAccount(440, "John Smith")
c = BankAccount(1034, "Jane Doe")
```

This might seem confusing since `self.balance = balance` uses the word `balance` twice.

Let's use `a` as an example to explain this. The `self.balance` on the left hand side is 
equivalent to saying `a.balance`. When this runs, `self` is replaced by `a`. The `balance`
on the right hand side refers to whatever argument is given for `balance`. In this case,
it's `100`. 

I.e. when this runs, it'll simplify to `a.balance = 100`.

### Other Methods
Now we know how to give an object data (attributes), we can now move on to giving it 
actions.

There are two common types of methods in OOP: getters and setters.

The first action we'll introduce is simply getting the account's balance (a getter method):
```python
class BankAccount
  def __init__(self, balance, name):
    self.balance = balance
    self.name = name

  def get_balance(self):
    return self.balance
```

If a method does something with an instance, then we must give it the instance by passing
`self` as an argument.


Now, if we create a `BankAccount`, we can use `get_balance()` to get the balance.

```python
class BankAccount
  def __init__(self, balance, name):
    self.balance = balance
    self.name = name

  def get_balance(self):
    return self.balance
    

a = BankAccount(100, "George Baker")
print(a.get_balance())
```

Running this, we'll get:
```python
100
```

A common action associated with bank accounts is the ability to withdraw and deposit money.

So let's write two methods: `withdraw` and `deposit`:

```python
class BankAccount
  def __init__(self, balance, name):
    self.balance = balance
    self.name = name

  def get_balance(self):
    return self.balance

  def withdraw(self, amount):
    self.balance -= amount
    
  def deposit(self, amount):
    self.balance += amount
    

a = BankAccount(100, "George Baker")
print(a.get_balance())
a.withdraw(50)
print(a.get_balance())
a.deposit(100)
print(a.get_balance())
```

Running this, we'll get:
```python
100
50
150
```

---

### Where to go from here?
This was just a **short** introduction to Object Oriented Programming. 
Don’t worry if you didn’t understand all of it. In order to keep it brief, I refrained
 from explaining a lot of things which other tutorials might explain in further detail.
 
If you’re interested in learning more, here are some great resources to get you started:
- [9. Classes (docs.python.org)](https://docs.python.org/3/tutorial/classes.html)
- [Python OOP Tutorial 1: Classes and Instances — Corey Shaffer](https://www.youtube.com/watch?v=ZDa-Z5JzLYM)