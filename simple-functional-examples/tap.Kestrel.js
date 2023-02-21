const tap = (value) =>
  (fn) => (
    typeof(fn) === 'function' && fn(value),
    value
)

// tap('espresso')((it) => {
//   console.log(`Our drink is '${it}'`) 
// });
//=> Our drink is 'espresso'
let log = (it) => console.log(`Our drink is '${it}'`)
let inludeInBraces = (it) => console.log(`<<${it}>>`)

// tap('espresso')(log);
tap('espresso')();
tap('espresso')(inludeInBraces);
