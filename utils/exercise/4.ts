// interface User {
//     name: string;
//     age: number;
//     occupation: string;
//   }
  
//   interface Admin {
//     name: string;
//     age: number;
//     role: string;
//   }
  
//   type Person = User | Admin;
  
//   const persons: Person[] = [
//     {
//       name: 'Max Mustermann',
//       age: 25,
//       occupation: 'Chimney sweep',
//     },
//     {
//       name: 'Jane Doe',
//       age: 32,
//       role: 'Administrator',
//     },
//     {
//       name: 'Kate Müller',
//       age: 23,
//       occupation: 'Astronaut',
//     },
//     {
//       name: 'Bruce Willis',
//       age: 64,
//       role: 'World saver',
//     },
//   ];
  
//   // 联合类型 ➕ 类型断言
//   function logPerson(person: Person) {
//     let additionalInformation: string;
//     if ((person as Admin).role) {
//       additionalInformation = (person as Admin).role;
//     } else {
//       additionalInformation = (person as User).occupation;
//     }
//     console.log(additionalInformation)
//   }
  
//   persons.forEach(logPerson);