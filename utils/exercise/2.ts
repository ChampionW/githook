// type Extract<T, U> = T extends U ? T : never
// type A = Extract<'key1' | 'key2', 'key1'> // 'key1'


// Q: 如何定义一个 SetOptional 工具类型，支持把给定的 keys 对应的属性变成可选的？
type Foo = {
    a: number;
    b?: string;
    c: boolean;
  };
  
  // 测试用例
  type SomeOptional = SetOptional<Foo, "a" | "b">;
  
  // Ans
  
  type Simplify<T> = {
    [P in keyof T]: T[P];
  };
  
  type SetOptional<T, K extends keyof T> = Simplify<
    // Partial in 可有可无键值的那部分
    // Pick 必须有的键值的那部分
    Partial<Pick<T, K>> & Pick<T, Exclude<keyof T, K>>
  >;
  
  // type FooKeys = keyof Foo;
  // const fooKey: FooKeys = 'b';
  
  const fooInstance: Simplify<Foo> = {
    a: 1,
    // b: '23', // 可以加上, 也可以不加
    c: false,
  };
  
  const fooOptionalInstance: SomeOptional = {
    c: false,
  };
  
  // 设置属性变成必选: SetRequired
  type SetRequired<T, K extends keyof T> = Simplify<
    // Required Pick 必须有的键值的那部分
    // Partial in 可有可无键值的那部分
    Required<Pick<T, K>> & Partial<Pick<T, Exclude<keyof T, K>>>
  >;
  
  type SomeRequired = SetRequired<Foo, 'a' | 'b'>;
  
  const fooRequiredInstance: SomeRequired = {
    a: 1,
    b: "str",
    // c: false,
  }
  