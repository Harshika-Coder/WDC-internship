const students = [
  { name: "Aman", marks: 75, city: "Delhi" },
  { name: "Riya", marks: 55, city: "Bangalore" },
  { name: "John", marks: 82, city: "Mumbai" },
  { name: "Sara", marks: 60, city: "Bangalore" },
  { name: "Karan", marks: 45, city: "Pune" },
  { name: "Neha", marks: 90, city: "Delhi" },
  { name: "Amit", marks: 68, city: "Bangalore" },
  { name: "Priya", marks: 72, city: "Chennai" },
  { name: "Vikas", marks: 50, city: "Kolkata" },
  { name: "Anita", marks: 88, city: "Mumbai" }
];

function filterAbove60(students) {
  return students.filter(student => student.marks > 60);
}

function averageMarks(students) {
  const total = students.reduce((sum, student) => sum + student.marks, 0);
  return total / students.length;
}

function studentsFromBangalore(students) {
  return students.filter(student => student.city === "Bangalore");
}

console.log("All Students:");
console.log(students);

console.log("\nStudents with marks > 60:");
console.log(filterAbove60(students));

console.log("\nAverage Marks:");
console.log(averageMarks(students));

console.log("\nStudents from Bangalore:");
console.log(studentsFromBangalore(students));