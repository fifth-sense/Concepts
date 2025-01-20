const employees = [
  { name: "Alice", department: "Engineering", salary: 90000 },
  { name: "Bob", department: "Sales", salary: 60000 },
  { name: "Charlie", department: "Engineering", salary: 110000 },
  { name: "David", department: "HR", salary: 50000 },
  { name: "Eve", department: "Sales", salary: 70000 },
  { name: "Frank", department: "Engineering", salary: 95000 },
  { name: "Grace", department: "HR", salary: 60000 },
];

// Function to calculate the top 3 highest-paid departments
function getTop3HighestPaidDepartments(employees) {
  // Step 1: Aggregate salaries by department
  const departmentSalaries = employees.reduce((acc, employee) => {
    const { department, salary } = employee;
    acc[department] = (acc[department] || 0) + salary;
    return acc;
  }, {});
  console.log('dept',departmentSalaries)

  // Step 2: Convert the object into an array of department-salary pairs
  const sortedDepartments = Object.entries(departmentSalaries)
    .sort((a, b) => b[1] - a[1]) // Sort by salary in descending order
    .slice(0, 3); // Get the top 3 departments
    console.log('sorted',sortedDepartments)
  // Step 3: Format the result
  return sortedDepartments.map(([department, totalSalary]) => ({
    department,
    totalSalary,
  }));
}

// Get the result
const top3Departments = getTop3HighestPaidDepartments(employees);
console.log(top3Departments);
