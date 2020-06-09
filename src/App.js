import React, { useState } from "react";
import "./App.css";

function Student({ name, grade, index, removeStudent }) {
  return (
    <div>
      <p>
        Student Name: {name}, Grade: {grade}
      </p>

      <div>
        <button onClick={() => removeStudent(index)}>x</button>
      </div>
    </div>
  );
}

function StudentForm({ addStudent }) {
  const [value, setValue] = useState("");
  const [grade, setGrade] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addStudent(value, grade);
    setValue("");
    setGrade("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        name="name"
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter Name of Student"
      />
      <input
        type="text"
        className="input"
        name="grade"
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
        placeholder="Enter Grade of Student"
      />
      <button onClick={handleSubmit}>Add Student</button>
    </form>
  );
}

function App() {
  const [student, setStudents] = useState([
    {
      name: "Alice",
      grade: "A",
    },
    {
      name: "Bob",
      grade: "B",
    },
    {
      name: "Charlie",
      grade: "C",
    },
  ]);

  const addStudent = (name, grade) => {
    const newStudent = [...student, { name, grade }];
    setStudents(newStudent);
  };

  const removeStudent = (index) => {
    console.log(...student);
    const newStudent = [...student];
    newStudent.splice(index, 1);
    console.log(newStudent);
    setStudents(newStudent);
  };

  return (
    <div className="app">
      <div>
        {student
          .sort((a, b) => (a.grade > b.grade ? 1 : -1))
          .map((student, index) => (
            <Student
              key={index}
              index={index}
              grade={student.grade}
              name={student.name}
              removeStudent={removeStudent}
            />
          ))}
        <StudentForm addStudent={addStudent} />
      </div>
    </div>
  );
}

export default App;
