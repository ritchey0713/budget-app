// const person = {
//   name: "John",
//   age: 32,
//   location: {
//     city: "Columbus",
//     temp: 66
//   }
// }

// console.log(`${person.name} is ${person.age}.`)

// const { name = 'anonymous', age } = person

// console.log(`${name} is now ${age + 1}.`)


// if(person.location.city && person.location.temp) {
// console.log(`its ${person.location.temp} in ${person.location.city}.`)
// }

// const {temp: temperature, city} = person.location

// console.log(`its now ${temperature + 30 } in ${city}`)

// const book = {
//   title: "Ego is the enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin"
//   }
// }

// const {name: publisherName = "Anonymous"} = book.publisher 

// console.log(publisherName)

const address = ["1299 S Juniper street", "Columbus", "Ohio", "43004"]

const [, city, state] = address

console.log(`You are in ${city}, ${state}`)

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"]

const [product, ,price] = item 

console.log(`A medium ${product} costs ${price}`)