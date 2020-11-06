
const dog={
  name:"boby",
  legs:4,
  Color:"black",
  age:2,
  break(){
    return "woof woof"
  },
  breed:"terrier",
  getDogInfo(){
   return `My name is ${this.name}.I am ${this.calcAge()} years old in human years which is ${this.age} years old in dog years`
  },
  calcAge(){
  if(this.age>=2){
 return (2 * 10.5) + (this.age-2)*4;
  }else  if(this.age==1){
    return 10
  }
}

}

console.log(dog.getDogInfo());