// destructuring and return values
// Some languages support multiple return values: A function can return several things at once, like a value and an error code. This can easily be emulated in JavaScript with destructuring:

// const mapWith = (fn, [first, ...rest]) =>
//   first === undefined
//     ? []
//     : [fn(first), ...mapWith(fn, rest)];

// mapWith((x) => x * x, [1, 2, 3, 4, 5])
//   //=> [1,4,9,16,25]

// mapWith((x) => !!x, [null, true, 25, false, "foo"])
//   //=> [false,true,true,false,true]

// const description = (nameAndOccupation) => {
//   if (nameAndOccupation.length < 2) {
//     return ["", "occupation missing"]
//   } else {
//     const [[first, last], occupation] = nameAndOccupation;
//     return [`${first} is a ${occupation}`, "ok"];
//   }
// }

// const getOccupation = ([[first, last], occupation]) =>
//     occupation == undefined
//         ? ["", "occupation missing"]
//         : [`${first} ${last} is a ${occupation}`, "ok"];

// const [reg, stat] = getOccupation([["Reginald", "Braithwaite"], "programmer"]);
// // const [reg, stat] = getOccupation([["Reginald", "Braithwaite"]]);

// console.log(reg, stat)

const user = {
  name: {
    first: "Reginald",
    last: "Braithwaite"
  },
  occupation: {
    title: "Author",
    responsibilities: ["JavaScript Allongé",
      "JavaScript Spessore",
      "CoffeeScript Ristretto"
    ]
  }
};

user.name.last
//=> "Braithwaite"

user.occupation.title
//=> "Author"

const description = ({ name: { first: given }, occupation: { title: title } }) =>
  `${given} is a ${title}`;

console.log(description(user))
