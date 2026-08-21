// problem2.js

class BankAccount {
  constructor(owner, balance = 0) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    return this.balance;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      return null;
    }
    this.balance -= amount;
    return this.balance;
  }

  summary() {
    return `${this.owner}: ${this.balance} THB`;
  }

  static bankName() {
    return "KKU Bank";
  }
}

class SavingsAccount extends BankAccount {
  constructor(owner, balance = 0, rate = 0.02) {
    super(owner, balance);
    this.rate = rate;
  }

  addInterest() {
    this.balance += this.balance * this.rate;
    return this.balance;
  }

  summary() {
    return `${super.summary()} (savings @ ${this.rate})`;
  }
}

// --- Demonstration ---
console.log("=== Problem 2 Demonstration ===");

// Create a SavingsAccount
const myAccount = new SavingsAccount("Manee", 1000, 0.05);
console.log("Initial Summary:", myAccount.summary());

// Show a deposit
console.log("Deposit 500, new balance:", myAccount.deposit(500));

// Show a rejected withdraw (returns null)
console.log("Withdraw 2000 (rejected):", myAccount.withdraw(2000));

// Valid withdraw
console.log("Withdraw 200, new balance:", myAccount.withdraw(200));

// addInterest()
console.log("Add interest, new balance:", myAccount.addInterest());

// summary()
console.log("Final Summary:", myAccount.summary());

// static bankName() called on both classes
console.log("BankAccount name:", BankAccount.bankName());
console.log("SavingsAccount name:", SavingsAccount.bankName());