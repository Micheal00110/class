const favoriteFruit = [
    "apple",
    "banana",
    "grapes",
];
console.log(favoriteFruit[0]); // apple
const englishBandsByCity = {
    liverpool: "The Beatles",
    manchester: "The Smiths",
    london: "ziggy stardust and the spiders from mars",
    coventry:"Delia Derbyshire and the BBC Radiophonic Band",
    
};
console.log(englishBandsByCity.liverpool); // The Beatles
class DataTypeComparison {
  showExamples() {
    // Primitive data types
    const name = "Mike"; // string
    const age = 25; // number
    const isStudent = true; // boolean

    // Collection data types
    const colors = ["red", "blue", "green"]; // Array
    const student = { name: "Mike", age: 25, course: "Software Dev" }; // Object

    console.log("Primitive:", name, age, isStudent);
    console.log("Array:", colors);
    console.log("Object:", student);
  }
}

const compare = new DataTypeComparison();
compare.showExamples();
class Student {
  constructor() {
    this.profile = {
      name: "Mike",     // key: name, value: "Mike"
      age: 23,            // key: age, value: 23
      course: "IT"        // key: course, value: "IT"
    };
  }

  displayProfile() {
    for (let key in this.profile) {
      console.log(`${key}: ${this.profile[key]}`); // key and value
    }
  }
}

const Mike = new Student();
Mike.displayProfile();
class University {
  constructor() {
    this.departments = [
      {
        name: "Computer Science",
        students: [
          { name: "Alice", id: 101 },
          { name: "Bob", id: 102 }
        ]
      },
      {
        name: "Business",
        students: [
          { name: "Carol", id: 201 },
          { name: "Dan", id: 202 }
        ]
      }
    ];
  }

  listAllStudents() {
    this.departments.forEach((dept) => {
      console.log(`Department: ${dept.name}`);
      dept.students.forEach((student) => {
        console.log(` → ${student.name} (ID: ${student.id})`);
      });
    });
  }
}

const uni = new University();
uni.listAllStudents();