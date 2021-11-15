---
layout: post
title: Reflecting on the first year of my degree
author: George Baker
category: university
---

Under the strangest of circumstances, the first year of my computer science degree has 
come to an end.

Even though the year didn't finish in the way that I expected, I still got to spend six
months studying my favourite subject at my favourite university and meet some of my
favourite people. 

These are the modules I took this year:
* Programming in Java
* Mathematical Foundations of Computer Science 
* Widening Horizons — Level 6 French
* Data Structures and Algorithms
* Artificial Intelligence
* Logic and Computation 

## Programming in Java
Since I learnt to code before starting university, I didn't have any trouble at all
with this module. 

In fact, it was nice to study something that I'm familiar with, so I could get used to
the 'university' style of teaching.

It was definitely useful to go over the basics again to fill any holes in my knowledge.

```java
class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

```
javac HelloWorld.java
java HelloWorld.class
```

## Mathematical Foundations of Computer Science
I found this module challenging. Although I *can* get good at maths with practice, I 
find that it takes time for me to digest new concepts.

Having said that, I did enjoy this module for two reasons: 
1. amazing lecturers — 
[Professor Achim Jung](https://www.birmingham.ac.uk/staff/profiles/computer-science/jung-achim.aspx)
and 
[Dr Paul Levy](https://www.birmingham.ac.uk/staff/profiles/computer-science/levy-paul.aspx).
2. fascinating theory — *is $$P = NP$$?*, finite state machines, the halting problem,
 ..., I could go on

## Widening Horizons
I am in the last year-group to take this module. 
[Widening Horizons](https://www.birmingham.ac.uk/welcome/welcome-week-and-beyond/starting-your-studies/wideninghorizons.aspx)
Modules are an extra module that *you* get to pick. UoB offer lots of different choices
of WHMs; I chose French.

## Data Structures and Algorithms
I'd have to say that this was my favourite module this year! 

We learnt about different data structures and algorithms that go along with them
 (e.g. *arrays* and *bubble sort*).

```python
# Python program showing a simple data structure
my_array = [2, 9, 45, 23, 6]
bubble_sort(my_array) # does bubble sort
print(my_array) # outputs [2, 6, 9, 23, 45]
```

Once we learnt a data structure and algorithm, we got an assignment to do which basically
 went something like:
* here's an unlikely scenario that can be abstracted using data structures and algorithms
* implement the algorithms by completing the blank Java methods
* pass all of the tests (but, you might still be wrong)  

I loved doing the assignments for this module for two reasons:
1. they were programming based (in Java)
2. they were challenging — I love a programming challenge within my grasp!  

## Artificial Intelligence
This module contains two parts:
1. AI theory
2. Robotics

I didn't really like robotics for a few reasons:
* imprecise and unpredictable at *runtime*
* use of block based programs instead of an actual programming language 
([Open Roberta](https://lab.open-roberta.org))
* not enough time to complete the assignments fully (i.e. to gain full marks)
* crowded and claustrophobic labs
* parts were unreliable


This is what the robots (for this module) looked like:
![EV3 Lego Robot](/assets/img/ev3.jpeg)


I didn't take in much of the AI theory; a lot of it was heavy and maths based. Otherwise, I *sort of* enjoyed it,
I guess...

## Logic and Computation 
This was my second favourite module this year.

I loved learning about logic. We learnt about propositional and predicate logic:
### Propositional Logic 

If $$P$$ implies $$Q$$, and we know that $$P$$, we can conclude $$Q$$.

Premise 1: $$ P \to Q $$

Premise 2: $$ P $$

Conclusion: $$ Q $$

Or, more succinctly: $$ P\to Q,P\vdash Q $$
 
### Predicate Logic 

If all men are mortal, and Socrates is a man, we can conclude that Socrates is mortal.

If we have:
* $$ A(x) $$ which states that $$ x $$ is a man,
* $$ B(x) $$ which states that $$ x $$ is mortal,

Premise 1: $$ \forall x[A(x) \to B(x)] $$

Premise 2: $$ A(s) $$

Conclusion: $$ B(s) $$

Or, more succinctly: $$ \forall x[A(x) \to B(x)], A(s) \vdash B(s) $$

In this module, we also learnt a theorem proving language by Microsoft Research called [Lean](https://leanprover.github.io).

I found translating proofs that I had done on paper into a theorem prover very interesting and sometimes a bit 
tricky. 

## Conclusion 
Although COVID-19 prematurely ended this academic year, I still had a great first year 
at Birmingham. I learnt a lot, and I can't wait to learn some more advanced stuff next
year!
 

<script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>