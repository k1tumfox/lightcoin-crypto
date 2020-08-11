// let balance = 500.00; //starter relic

class Account {

  constructor(username) {
    this.username = username;
    this.transactions = [];
  }

  get balance() {
    //calc balance using trans objects
    let sum = 0;
    for (let ele of this.transactions) {
      sum += ele.value;
    }
    return sum;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

}

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }
  commit() {
    this.time = new Date();
    this.account.addTransaction(this);
  }
}

class Withdrawal extends Transaction {
  get value() {
    return -this.amount;
  }
}

class Deposit extends Transaction{
  get value() {
    return this.amount;
  }
}

// DRIVER CODE BELOW
const myAccount = new Account("starFox");
console.log('Starting Balance:', myAccount.balance);

const t1 = new Deposit(120.00, myAccount);
t1.commit();

const t2 = new Withdrawal(50.00, myAccount);
t2.commit();

console.log('Ending Balance:', myAccount.balance);
