var students = ["Gosho",
                "Tosho",
                "Raya",
                "Pesho",
                "Ivan",
                "Rosen",
                "Anna",
                "Dara",
                "Daniel",
                "Rumen",
                "Nikola",                
                "Galya"                
                ];

var evenStudents = [];
var oddStudents = [];

for(i=0; i<students.length; i++) {
    if(i%2===0){        
        oddStudents.push(students[i]);
    }else{
        evenStudents.push(students[i]);
    }
}

console.log(evenStudents);
console.log(oddStudents);

alert('EvenStudents are '+evenStudents+ '. OddStudents are '+ oddStudents + '.');