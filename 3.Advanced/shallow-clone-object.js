const shallowClone = (obj) => {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  const clonedObj = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = obj[key];
    }
  }
  return clonedObj;
};

// Example Usage
const originalObject = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    country: 'USA'
  }
};

const clonedObject = shallowClone(originalObject);

console.log('Original Object:', originalObject);
console.log('Cloned Object:', clonedObject);

// Modifying the cloned object's nested property will affect the original object
clonedObject.address.city = 'San Francisco';

console.log('After modifying the cloned object:');
console.log('Original Object:', originalObject);
console.log('Cloned Object:', clonedObject);