# destructuring and return values
Some languages support multiple return values: A function can return several things at once, like a value and an error code. This can easily be emulated in JavaScript with destructuring:

```javascript
const description = (nameAndOccupation) => {
  if (nameAndOccupation.length < 2) {
    return ["", "occupation missing"]
  }
  else {
    const [[first, last], occupation] = nameAndOccupation;

    return [`${first} is a ${occupation}`, "ok"];
  }
}

const [reg, status] = description([["Reginald", "Braithwaite"], "programmer"]);
```

reg
  //=> "Reginald is a programmer"

status
   //=> "ok"