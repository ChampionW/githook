import { type } from "os";


type User = {
    id: number;
    kind: string;
  };
  

function makeCustomer<T extends User>(u: T): User {
    // Error（TS 编译器版本：v4.4.2）
    // Type '{ id: number; kind: string; }' is not assignable to type 'T'.
    // '{ id: number; kind: string; }' is assignable to the constraint of type 'T', 
    // but 'T' could be instantiated with a different subtype of constraint 'User'.
    return {
      id: u.id,
      kind: 'customer'
    }
  }
  makeCustomer({id:10,kind:'fff',name:'hh'})

  function makeCustomerTwo<T extends User>(u: T): T {
    // Error（TS 编译器版本：v4.4.2）
    // Type '{ id: number; kind: string; }' is not assignable to type 'T'.
    // '{ id: number; kind: string; }' is assignable to the constraint of type 'T', 
    // but 'T' could be instantiated with a different subtype of constraint 'User'.
    return {
      ...u,
      id: u.id,
      kind: 'customer'
    }
  }
  
  // 接口的继承 通过extends这个关键字 demo这个类型就即要有user类型定义的属性，也要有自身定义的属性age
  interface demo extends User {age:number } 
  const person:demo = {
      age: 0,
      id: 0,
      kind: ""
  }
  // 使用的第二种条件 泛型约束 约定这个泛型T，必须要包含一个name属性
  function getCnames<T extends { name: string }>(entities: T[]):string[] {
    return entities.map(entity => entity.name)
  }
  getCnames([{name:'xxx'}])

  // 在比如在redux当中，dispatch这个方法，它接收一个action，但是这个action，要拥有一个type属性，然后返回action
  interface Dispatch<T extends { type: string }> {
    (action: T): T
  }
  // extends 判断一个类型是不是可以分配给另外一个类型
  type Human = {
    name: string;
  }
  type Duck = {
    age: string;
    name: string
  }
  // 判断 Duck上面的类型是否包含Human上面的类型
  type Bool = Duck extends Human ? 'yes' : 'no'; // Bool => 'yes'

  type A1 = 'x' extends 'x' ? string : number; // string
  type A2 = 'x' | 'y' extends 'x' ? string : number; // number
  
  type P<T> = T extends 'x' ? string : number;
  type A3 = P<'x' | 'y'> // ? string | number
// 其作用是从第一个联合类型参数中，将第二个联合类型中出现的联合项全部排除，只留下没有出现过的参数。
  type A = Exclude<'key1' | 'key2', 'key2'> // 'key1'

  // 高级类型Pick的定义
type Pick1<T, K extends keyof T> = {
    // 首先 我们知道 keyof T 返回的是key的联合类型
    // 然后 k也是一个联合类型，只是这个联合类型要求只能是 keyof T这个联合类型中的一部分
    [P in K]: T[P]
}
 
interface AA {
    name: string;
    age: number;
    sex: number;
}


type ADemo<T> = keyof T

// 约束泛型T只能是'name' | 'age' 这个联合类型中的一个
interface hhh <T extends 'name' | 'age'> {
    school: T
}

type BB  = 'name' | 'age'

const gg: hhh<BB> = {school: "name"}

type testDEmo = ADemo<{name:string,age:number}>

type AONE = Pick1<AA, 'name'|'age'>
// 报错：类型“"key" | "noSuchKey"”不满足约束“keyof A”
type ATWO = Pick1<AA, 'name'|'sex'>

