//console.log("hello from ts");

let myString: string;
let myNum: number;
let myBool: boolean;
let myVar: any;

/*
let strArr: string[]; //array of strings
let numArr: number[];
let boolArr: boolean[];
*/

let strArr: Array<string>;
let numArr: Array<number>;
let boolArr: Array<boolean>;

let strNumTuple: [string, number];

myString = "Hello".slice(0, 3);
myNum = 22; //-22, 5 + 5, 5.5, 0xf00d
myBool = true;
myVar = "yo";

strArr = ["Hello", "yo"];
numArr = [1, 2, 3];
boolArr = [true, false, true];

strNumTuple = ["yoyo", 4];

let myVoid: void = undefined; //null
let myNull: null = null;
let myUndefined: undefined = undefined;

console.log(myString);
console.log(myNum);
