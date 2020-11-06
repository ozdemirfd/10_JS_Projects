
console.log(users)

const keys=Object.keys(users)
console.log(keys)

const value=Object.values(users)
console.log(value);
console.log(keys.length);

let max=0;
let skillsName="";
// for(var a=0;a<keys.length;a++){
//   if(users[keys[a]].skills.length>max){
//     max=users[keys[a]].skills.length
//     skills=keys[a];

//   }

// }
//console.log(`${skills} has ${max} skills`)

for(i in users){
  //console.log(users[i].skills)
  if(users[i].skills.length>max){
    max=users[i].skills.length
    skillsName=i;

  }
}
console.log(`${skillsName} has ${max} skills`)

// 5.
// Count users having greater than equal to 50 points from the following object.
let count=0;
for(i in users){
  if(users[i].points>=50){
   count++;
  }
}
console.log(count)
let name="";
for(i in users){
  if(users[i].skills.includes("MongoDB") && users[i].skills.includes("Express") && users[i].skills.includes("React") && users[i].skills.includes("Node")){
   console.log(i)
  }
}

users["Feride"]={
  email: 'fd@asab.com',
  skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node','Protractor'],
  age: 39,
  isLoggedIn: false,
  points: 60
},

console.log(users)

for(let i in users) {
  users[i].getInfo = () => {
    return `${i} is ${users[i].age} years old. She/He knows ‘${users[i].skills.join(", ")}’.`
  }
}
console.log(users["Asab"].getInfo())