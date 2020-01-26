let firstNames = ["Sergey", "Alexey", "Dmitriy"];
let lastNames = ["Belov", "Kozlov", "Baranov"];

let names = [];

for (let i = 0; i < firstNames.length; i++) {
    names.push(`${firstNames[i]} ${lastNames[i]}`);   
}

console.log(names);