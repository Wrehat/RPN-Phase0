// Tipe Data Object | Part 1

// Object 


// SINTAKS OBJECT
const person = {
    name: 'wrehat',
    age: 20,
    hobbies: ['reading', 'codding', 'running'],
    details: {
        height: 165,
        weight: 55,
    }
}

// MANIPULASI DATA OBJECT
console.log(person.age)
person.isProgrammer = true; 

const x = person;
x.age = 23
// person['isProgrammer'] = true;

// AKSES DATA OBJECT
// console.log(person)
// console.log(person.name)
// console.log(person.age)
// console.log(person.hobbies[0])
// console.log(person.details.height)

// const detail = person.details
// console.log(detail.weight)


// HAPUS DATA OBJECT
// delete person['isProgrammer'];
// delete person.isProgrammer;
// console.log(person)

// LOOPING KHUSUS OBJECT
for (data in person) {

//     // DISINI MENGGUNAKAN AKSES DENGAN BRACKET NOTATION
//     // [height] js akan mencari variabel dengan nama height, bukan mencari properti sedangkan height adalah properti, maka harus ditambah dengan ['height'] 
    console.log(
        data !== "details" 
        ? `${data}: ${person[data]}` 
        : `${data}: tinggi: ${person[data]['height']} berat: ${person[data].weight}`
    )

    // console.log(
    //     data !== "details"
    //         ? `${data}: ${person[data]}`
    //         : `${data}: tinggi: ${person.details.height}`
    // );
}


let ttl = [['Bekasi', '20/02/2000'],['Depok','10/01/2001']];
let personTtl = [];

for (let i = 0; i < ttl.length; i++){
    for(let j = 0; j < ttl[i].length - 1; j++){
        let data = {
            tempat: ttl[i][j],
            tanggal: ttl[i][j+1],
        }
        personTtl.push(data)
    }
}

console.log(personTtl);









