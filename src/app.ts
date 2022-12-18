const message = "Hello TypeScript";
const message2 = "Bye JavaScript";
console.log(message, message2, code, inspire);
let a: string = 'Shakib';
// infer korte parbe tokhon type bole na dileo hobe, but jodi na pare tahole type bole dite hobe
a = '123';

let myName;
myName = "Shakib";
myName = "Sizan";
// ekhane type infer korche na karon let myName any type, but it's not a proper way. To work properly after myName type should be declared.
myName = 123;
let abc: string;
abc = "Abc";
abc = "123";
console.log(a, myName, abc);
