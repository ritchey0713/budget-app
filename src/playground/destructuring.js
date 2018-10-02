const person = {
  name: "John",
  age: 32,
  location: {
    city: "Columbus",
    temp: 66
  }
}

console.log(`${person.name} is ${person.age}.`)

const { name = 'anonymous', age } = person

console.log(`${name} is now ${age + 1}.`)


if(person.location.city && person.location.temp) {
console.log(`its ${person.location.temp} in ${person.location.city}.`)
}

const {temp: temperature, city} = person.location

console.log(`its now ${temperature + 30 } in ${city}`)

const book = {
  title: "Ego is the enemy",
  author: "Ryan Holiday",
  publisher: {
    name: "Penguin"
  }
}

const {name: publisherName = "Anonymous"} = book.publisher 

console.log(publisherName)