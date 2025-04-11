//var -> function scope
//let -> block scope
//const -> block scope

// function sayHello() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   console.log(i);
// }

// sayHello();

// const person = {
//   name: "Vikk",
//   // talk() {},
// };

import Teacher, { promote } from "./teacher";
import React, { Component } from "react";

// Default -> import { Person } from "./person";
// Named -> import Teacher from "./teacher";

const teacher = new Teacher("Vikri", "Masters");
teacher.teach();

// person.walk();

// const walk = person.walk.bind(person);
// walk();

// person.talk();
// person.name = "";

// const targetMember = "name";
// person[targetMember.value] = "Vikri";

// const square = (number) => number * number;
// console.log(square(5));

// const jobs = [
//   { id: 1, isActive: true },
//   { id: 2, isActive: true },
//   { id: 3, isActive: false }
// ];

// const activeJobs = jobs.filter(function(job) {
//   return job.isActive;
// });

// const activeJobs = jobs.filter(job => job.isActive);

// const person = {
//   talk () {
//     var self = this;
//     setTimeout(() => {
//       console.log("this", this);
//     }, 1000);
//   }
// }

// person.talk();

// const colors = ["red", "green", "blue"];
// const items = colors.map(color => `<li>${color}</li>`);
// console.log(items);

// const address = {
//   street: "",
//   city: "",
//   country: ""
// };

// const { street, city, country } = address;
// const { street: st } = address;

// const first = [1, 2, 3];
// const second = [4, 5, 6];

// const combined = first.concat(second);
// const combined = [...first, "a", ...second, "b"];

// const clone = [...first];
// console.log(first);
// console.log(clone);

// const first = { name: "Vikri" };
// const second = { age: 20 };

// const combined = {...first, ...second, location: "Indonesia" };
// console.log(combined);