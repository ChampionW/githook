import { isString } from "antd/es/button";
import { type } from "os";

interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
  }
  
  interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
  }
  
  type Person = User | Admin;
  
  const persons: Person[] = [
    {
      type: 'user',
      name: 'Max Mustermann',
      age: 25,
      occupation: 'Chimney sweep',
    },
    {
      type: 'admin',
      name: 'Jane Doe',
      age: 32,
      role: 'Administrator',
    },
    {
      type: 'user',
      name: 'Kate Müller',
      age: 23,
      occupation: 'Astronaut',
    },
    {
      type: 'admin',
      name: 'Bruce Willis',
      age: 64,
      role: 'World saver',
    },
    {
      type: 'user',
      name: 'Wilson',
      age: 23,
      occupation: 'Ball',
    },
    {
      type: 'admin',
      name: 'Agent Smith',
      age: 23,
      role: 'Administrator',
    },
  ];
  
  //告诉ts person 是一个Admin类型 然后在使用的时候，传递的参数类型当然还是person，然后在使用的时候，依然是person类型，只是通过 is 
  // 而通过is，在做类型判断的时候，语义化会更加明确一点
  const isAdmin = (person: Person): person is Admin => person.type === 'admin'
  const isUser = (person: Person): person is User => person.type === 'user';


  function logPerson(person: Person) {
    let additionalInformation: string = '';
    if (isAdmin(person)) {
      additionalInformation = person.role;
    }
    if (isUser(person)) {
      additionalInformation = person.occupation;
    }
    // console.log(
    //   ` - ${chalk.green(person.name)}, ${person.age}, ${additionalInformation}`
    // );
  }
  interface F {
      champion: string,
      age: number
  }
  type demp = (keyof F)
  let b:( 'a' | 'b')[] = ['a','b']
  let a:demp = 'age'
  console.log(a)

  function filterUsers(
    persons: Person[],
    criteria: { age: number; [index: string]: number }
  ): User[] {
    return persons.filter(isUser).filter((user) => {
      // 这个地方有点意思,当用keyof这个关键字遍历一个接口类型的话，返回的是一个这个接口的key的字符串的形式组成的联合类型
      // 也就是大概这种形式 ('a' | 'b')[],则这个数组当中只能存放字符串a或者字符串b
      let criteriaKeys = Object.keys(criteria) as (keyof User)[];
      return criteriaKeys.every((fieldName) => {
        return user[fieldName] === criteria[fieldName];
      });
    });
  }
  
//   console.log(chalk.yellow('Users of age 23:'));
  
  filterUsers(persons, {
    age: 23,
  }).forEach(logPerson);