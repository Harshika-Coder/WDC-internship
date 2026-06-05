const fs = require("fs");
const dotenv = require("dotenv");

dotenv.config();
const PASSING_MARKS = parseInt(process.env.PASSING_MARKS);

const students = JSON.parse(
  fs.readFileSync("Month-1/Week-1/students.json", "utf-8"),
);

const calcAverage = (marks) => {
  const sum = marks.reduce((a, b) => a + b, 0);
  return sum / marks.length;
};

const assignGrade = (avg) => {
  if (avg >= 75) return "A";
  if (avg >= 60) return "B";
  if (avg >= PASSING_MARKS) return "C";
  return "F";
};

const report = students.map((student) => {
  const avg = calcAverage(student.marks);
  const grade = assignGrade(avg);
  return {
    id: student.id,
    name: student.name,
    branch: student.branch,
    semester: student.semester,
    average: avg.toFixed(2),
    grade,
  };
});

fs.writeFileSync("report.json", JSON.stringify(report, null, 2));
console.log("✅ Report generated successfully!");
