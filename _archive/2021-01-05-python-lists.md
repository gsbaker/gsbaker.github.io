---
layout: post
author: George Baker
title: A short introduction to lists in Python
description: A short introduction to lists in Python
image: https://blog.gsbaker.uk/favicon.png
category: programming
---

### Prerequisites
1. Install [Python](https://www.python.org) to follow along.
2. Read [A Short Introduction To Programming]({% post_url 2020-12-18-python-intro %}) first.

---

## Data Types
In [A Short Introduction To Programming]({% post_url 2020-12-18-python-intro %}),
we talked about having different *data types* — which basically allow us to categorise 
different information. 

I.e. numbers can be represented using the `Int` or `Float` data types; similarly,
words can be represented using the `String` data type.

The Python programming language is a *dynamically typed* language. This is a fancy way
of saying that Python is smart enough to work out what data type something is without us
having to tell it (unlike [Java](https://www.java.com/en/), [C](https://en.wikipedia.org/wiki/C_(programming_language)),
or [Swift](https://swift.org)).

E.g. we can say:
```python
name = "George"
age = 20
```
and Python will work out that `name` is a `String` and `age` is an `Int`.

By comparison, in Java, you would have to say:
```java
String name = "George";
int age = 20;
```

## Data Structures
All of the data types we have covered so far are great for storing single bits of 
information, like *one* person's name, or *one* person's age.

However, what if you want a collection of data or information? I.e. what if you want
a *multiple* names, or a *multiple* ages?

Well, just like we have **data types**, we also have **data structures**.

According to our good friend Wikipedia,
> a data structure is a collection of data values.

There are many different types of data structures:
- arrays
- linked lists
- stacks
- queues

Python has a really useful data structure called a *list*.


## Lists
As the name suggests, lists store a *list* of data.

Or, more specifically, a number of *elements* in a specific order.

You can create a list of elements using `[]` and commas to separate the elements.

E.g.
```python
my_list = [elem1, elem2, elem3, ...]
```

Elements are accessed using an integer index, starting at zero.

You can access an element using `list_name[n]` where `n` is the integer index.

E.g.
```python
my_list[0]
```
will access `elem1`.

For example, say we wanted a list of ages, we could easily do that in Python:
```python
ages = [20, 65, 34, 74, 77, 23]
```

index | ages
--- | ---
0 | 20
1 | 65
2 | 34
3 | 74
4 | 77
5 | 23

```python
> print(ages[4])
77

> print(ages[0])
20
```

And, say we wanted a list of names, we could also easily do that:
```python
names = ["George", "Paul", "John", "Ringo"]
```
```python
> print(names[0])
George

> print(names[3])
Ringo
```

### Operations on Lists
We can do some pretty neat things with lists. 

By way of an example, let's say we want to a program which will sum a list of numbers.
I.e. given a list a numbers, it adds every number together.

We can do this fairly easily in Python using a few different tools.

First, we'll use the `list` data structure to create a list of numbers to test.

```python
numbers = [1,2,3,4]
```

We know that $$ 1 + 2 + 3 + 4 = 10 $$.

So, if we give our program this list, it needs to output `10`.

Second, we'll use a *for-each* loop. In [A Short Introduction To Programming]({% post_url 2020-12-18-python-intro %}),
we talked about for loops which use the `range(start, stop, step)` function:
```python
for x in range(10):
  print(x)
```

We can use a *for-each* loop to *iterate* over a list of elements:
```python
for n in numbers:
  print(n)
```

In our program, we can use a counter variable `count` to add the numbers together:
```python
count = 0
for n in numbers:
  count = count + n
```

Third, we can use a function to generalise:
```python
def sum(xs):
  result = 0
  for x in xs:
    result += x
  return result
```
**Note**: `x += n` is the same as `x = x + n`.

And sure enough, if we do `sum(numbers)`, we get `10`.

--- 
### Where to go from here?
This was just a **short** introduction to lists in Python. Don't worry if you didn't 
understand all of it. In order to keep it brief, I refrained from explaining a lot of 
things which other tutorials might explain in further detail. 

If you're interested in learning more, here are some great resources to get you started:
- [5. Data Structures (docs.python.org)](https://docs.python.org/3/tutorial/datastructures.html)
- [Python Tutorial for Beginners 4: Lists, Tuples, and Sets — Corey Shafer](https://www.youtube.com/watch?v=W8KRzm-HUcc)

<script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>
