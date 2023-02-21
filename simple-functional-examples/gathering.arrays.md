# gathering
Sometimes we need to extract arrays from arrays. Here is the most common pattern: Extracting the head and gathering everything but the head from an array:

```javascript
const [car, ...cdr] = [1, 2, 3, 4, 5];

car
  //=> 1
cdr
  //=> [2, 3, 4, 5]
```
car and cdr are archaic terms that go back to an implementation of Lisp running on the IBM 704 computer. Some other languages call them first and butFirst, or head and tail. We will use a common convention and call variables we gather rest, but refer to the ... operation as a “gather,” following Kyle Simpson’s example.29

Alas, the ... notation does not provide a universal patten-matching capability. For example, we cannot write

```javascript
const [...butLast, last] = [1, 2, 3, 4, 5];
  //=> ERROR
```

```javascript
const [first, ..., last] = [1, 2, 3, 4, 5];
  //=> ERROR
```
Now, when we introduced destructuring, we saw that it is kind-of-sort-of the reverse of array literals. So if

```javascript
const wrapped = [something];
```
Then:

```javascript
const [unwrapped] = something;
```
What is the reverse of gathering? We know that:

```javascript
const [car, ...cdr] = [1, 2, 3, 4, 5];
```
What is the reverse? It would be:

```javascript
const cons = [car, ...cdr];
```
Let’s try it:

```javascript
const oneTwoThree = ["one", "two", "three"];
```

["zero", ...oneTwoThree]
  //=> ["zero","one","two","three"]
It works! We can use ... to place the elements of an array inside another array. We say that using ... to destructure is gathering, and using it in a literal to insert elements is called “spreading.”
