// -----------------Shallow Merge Two Objects in JavaScript-----------------

const book = {
  title: "harry potter",
  author: "j.k.rowling",
  genre: "Fantasy, drama, young adult fiction"
};

const updateBook = {
  genre:
    "Fantasy, drama, young adult fiction, mystery, thriller, Bildungsroman",
  release: "2001–2011"
};

// const merged = Object.assign(book, updateBook);
// const merged = Object.assign({}, book, updateBook);
const merged = Object.assign({}, updateBook, book);

console.log(book);
console.log(merged);
console.log(updateBook);

//The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the target object.
// changes are applied in the order of objects mentioned
console.log(Object.is(book, merged));
console.log(Object.is(book, updateBook));

// ------------------------Shallow Merge Two Objects in JavaScript using ES6

const mergedUsingES6 = {
  ...book,
  ...updateBook
};
console.log(mergedUsingES6);

const person = {
  name: {
    first: "joe"
  },
  age: 23,
  color: "green"
};

const update = {
  name: {
    last: "smith"
  },
  color: "blue",
  book: "Harry Potter"
};

const mergedPerson = {
  ...person,
  ...update
};
console.log(mergedPerson);

// name object from update overwrittes name object in person
//to retain both first and last keys, deep merging is required

//use Object.assign and spread operator only for shallow merging
//shallow merging is where there are no objects inside object

// ------------Deep merge using spread operator

const deepMergeUsingSpread = {
  ...person,
  ...update,
  name: {
    ...person.name,
    ...update.name
  }
};

console.log(deepMergeUsingSpread);
