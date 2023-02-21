# destructuring arrays

There is another way to extract elements from arrays: Destructuring, a feature going back to Common Lisp, if not before. We saw how to construct an array literal using [, expressions, , and ]. Here’s an example of an array literal that uses a name:

```javascript
const wrap = (something) => [something];
```
Let’s expand it to use a block and an extra name:

```javascript
const wrap = (something) => {
  const wrapped = [something];

  return wrapped;
}

wrap("package")
  //=> ["package"]
```

The line const wrapped = [something]; is interesting. On the left hand is a name to be bound, and on the right hand is an array literal, a template for constructing an array, very much like a quasi-literal string.

In JavaScript, we can actually reverse the statement and place the template on the left and a value on the right:

```javascript
const unwrap = (wrapped) => {
  const [something] = wrapped;

  return something;
}

unwrap(["present"])
  //=> "present"
```

The statement const [something] = wrapped; destructures the array represented by wrapped, binding the value of its single element to the name something. We can do the same thing with more than one element:

```javascript
const surname = (name) => {
  const [first, last] = name;

  return last;
}

surname(["Reginald", "Braithwaite"])
  //=> "Braithwaite"
```

We could do the same thing with (name) => name[1], but destructuring is code that resembles the data it consumes, a valuable coding style.

Destructuring can nest:

```javascript
const description = (nameAndOccupation) => {
  const [[first, last], occupation] = nameAndOccupation;

  return `${first} is a ${occupation}`;
}

description([["Reginald", "Braithwaite"], "programmer"])
  //=> "Reginald is a programmer"
```
