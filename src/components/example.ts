export function Employee(this: any, fullName: string, salary: number) {
  this.fullName = fullName;
  this.salary = salary;

  this.getSalary = function () {
    return this.salary;
  };
}

// ✅ No type checker errors
const emp1 = new (Employee as any)("James Doe", 100);

console.log(emp1.fullName); // 👉️ "James Doe"

console.log(emp1.getSalary()); // 👉️ 100
