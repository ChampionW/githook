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
  
  function logUser(user: User) {
    const pos = users.indexOf(user) + 1;
    console.log(
      ` - #${pos} User: ${chalk.green(user.name)}, ${user.age}, ${
        user.occupation
      }`
    );
  }
  
  function logAdmin(admin: Admin) {
    const pos = admins.indexOf(admin) + 1;
    console.log(
      ` - #${pos} Admin: ${chalk.green(admin.name)}, ${admin.age}, ${admin.role}`
    );
  }
  
  const admins: Admin[] = [
    {
      type: 'admin',
      name: 'Will Bruces',
      age: 30,
      role: 'Overseer',
    },
    {
      type: 'admin',
      name: 'Steve',
      age: 40,
      role: 'Steve',
    },
  ];
  
  const users: User[] = [
    {
      type: 'user',
      name: 'Moses',
      age: 70,
      occupation: 'Desert guide',
    },
    {
      type: 'user',
      name: 'Superman',
      age: 28,
      occupation: 'Ordinary person',
    },
  ];
  
  function swap<T, L>(v1: T, v2: L): [L, T] {
    return [v2, v1];
  }
  
  function test1() {
    console.log(chalk.yellow('test1:'));
    const [secondUser, firstAdmin] = swap(admins[0], users[1]);
    logUser(secondUser);
    logAdmin(firstAdmin);
  }
  
  function test2() {
    console.log(chalk.yellow('test2:'));
    const [secondAdmin, firstUser] = swap(users[0], admins[1]);
    logAdmin(secondAdmin);
    logUser(firstUser);
  }
  
  function test3() {
    console.log(chalk.yellow('test3:'));
    const [secondUser, firstUser] = swap(users[0], users[1]);
    logUser(secondUser);
    logUser(firstUser);
  }
  
  function test4() {
    console.log(chalk.yellow('test4:'));
    const [firstAdmin, secondAdmin] = swap(admins[1], admins[0]);
    logAdmin(firstAdmin);
    logAdmin(secondAdmin);
  }
  
  function test5() {
    console.log(chalk.yellow('test5:'));
    const [stringValue, numericValue] = swap(123, 'Hello World');
    console.log(` - String: ${stringValue}`);
    console.log(` - Numeric: ${numericValue}`);
  }
  
  [test1, test2, test3, test4, test5].forEach((test) => test());

  type omitted = Omit<"a" | "b", "a">;

  type tt = Omit<User,'age' | 'name'>
  type yy = myPick<User,'age' | 'name'>
  type myPick<T,K extends keyof T> = {
      [P in K]: T[P]
  }