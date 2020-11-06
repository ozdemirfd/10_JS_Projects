
const personAccount={
  firstname:"Feride",
  lastName:"Ozdemir",
  incomes:[5000,2000,300],
  expenses:[300,200,1000],
  totalIncome(){
    let sum=0;
    for(i of this.incomes){
      sum+=i
    }
    return sum
  },
  totalExpense(){
    let sum=0;
    for(i of this.expenses){
      sum+=i
    }
    return sum
  },
  addExpenses(val){
    this.expenses.push(val)
    //return this.totalExpense()

  },
  addIncome(val){
    this.incomes.push(val);
    //return this.totalIncome()
  },
  accInfo(){
return `${this.firstname} ${this.lastName} has total ${this.totalIncome()- this.totalExpense()} $ profit today`

  }
}
personAccount.addIncome(4000)
personAccount.addExpenses(1000)
console.log(personAccount.accInfo())
