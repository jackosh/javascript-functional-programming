const tap = (value, fn) => {
  const curried = (fn) => (
      typeof(fn) === 'function' && fn(value),
      value
    );
  
  return fn === undefined
         ? curried
         : curried(fn);
}
// # Now this works
tap('espresso')((it) => {
  console.log(`Our drink is '${it}'`) 
});

// # And this works
tap('espresso', (it) => {
  console.log(`Our drink is '${it}'`) 
});