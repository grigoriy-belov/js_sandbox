var group = [
    {
        name: "Vasya",
        age: 24,
        notebook: false
    },
    {
        name: "Petya",
        age: 27,
        notebook: true
    },
    {
        name: "Masha",
        age: 22,
        notebook: true
    }
];
  
function getStudentList(arrayOfStudents) {
    arrayOfStudents.forEach(student => 
       console.log(`name: ${student.name}, age: ${student.age}, notebook: ${student.notebook}`));	
}
  
getStudentList(group);

function addNewStudent(name, age, notebook) {
    group.push({name, age, notebook})
}

addNewStudent("Vova", 20, false);

getStudentList(group);