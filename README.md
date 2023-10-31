# object-extractor

## Introduction
object-extractor is a JavaScript module that can be used to extract specific properties from an object. This documentation will guide you through the process of using the "extract" function effectively.

## Installation
```
npm install object-extractor

// or

pnpm add object-extractor
```
## Function Signature
```javascript
import extract from 'object-extractor'
// const extract = require('object-extractor')

extract({
  extract: ['name', 'address.city'],
  ob: obj
});
```

## Parameters
This module accepts a single parameter, which is an object containing the following properties:

- `extract` (array, required): An array that specifies the properties to extract from the object.
- `ob` (object, required): The object from which the properties are to be extracted.

## Return Value
The function returns the extracted properties as an object.

## Usage Examples

### Example 1: Extracting Properties from an Object
```javascript
const obj = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'New York',
    country: 'USA'
  }
};

const result = extract({
  extract: ['name', 'address.city'],
  ob: obj
});

console.log(result);
// Output: { name: 'John', 'address.city': 'New York' }
```

In this example, the "extract" function is used to extract the properties 'name' and 'address.city' from the `obj` object. The resulting object contains only the extracted properties.

### Example 2: Handling Invalid Parameters
```javascript
const result = extract({
  extract: ['name', 'address.city'],
  ob: 'invalid object'
});

console.log(result);
// Output: 'Add a valid object'
```

If the "ob" parameter is not a valid object or if it is an array, the function will return the error message 'Add a valid object'.

## Error Handling
The "extract" function performs basic error handling and returns appropriate error messages in the following cases:

- If the "extract" property is missing in the "params" object, the function will return the error message 'Adds an array with the properties to extract'.
- If the "ob" property is missing in the "params" object, the function will return the error message 'Add a valid object'.
