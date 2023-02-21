# Compose and Pipeline

## Compose
```javascript
const compose = (a, b) =>
  (c) => a(b(c))
```

As we saw before, given:
```javascript
const addOne = (number) => number + 1;
const doubleOf = (number) => number * 2;
```

Instead of:
```javascript
const doubleOfAddOne = (number) => doubleOf(addOne(number));
```

 We could write:
```javascript
const doubleOfAddOne = compose(doubleOf, addOne);
```

## Pipeline

compose is extremely handy, but one thing it doesn’t communicate well is the order on operations. compose is written that way because it matches the way explicitly composing functions works in JavaScript and most other languages: When you write a(b(…)), a happens after b.

Sometimes it makes more sense to compose functions in data flow order, as in “The value flows through a and then through b.” For this, we can use the pipeline function:

```javascript
const pipeline = (...fns) =>
  (value) =>
    fns.reduce((acc, fn) => fn(acc), value);

const setter = pipeline(addOne, double);
```

Comparing pipeline to compose, pipeline says “add one to the number and then double it.” Compose says, “double the result of adding one to the number.” Both do the same job, but communicate their intention in opposite ways.
