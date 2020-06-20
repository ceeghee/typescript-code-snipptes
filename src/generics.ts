/**
 * Learning Typescript Generics <T>
 *  We use generics to automatically infer the fuction arg types and return types
 * 
 * */

// ! <T> Represents the generic symbol, it can be any other variable asides from T
// ! can be Array<T> or just T[]
 const last = <T>(arr: T[]) => {
	 return arr[arr.length - 1]; // ! returns last element in the array
 }

 const l = last([1, 2, 3, 4]) // Array of numbers
//  console.log(l)

 const l2 = last(['a', 'b', 'c']) // Array of strings
//  console.log(l2)

//  ! we are not constrained to use just one generic type
// ! can also be Y = number i.e default value
 const makeArr = <X, Y>(x: X, y: Y): [X, Y] => {
	 return [x, y];
 }
 const v = makeArr(5, 'a')
 const v2 = makeArr<string | null, number>(null, 8) // we can override the infered value

//  ! constraining generics
// ! making sure the generic contains at least the firstname and last name object
// ! it can also contain other objects.

const makeFullName = <T extends {firstName: string; lastName: string}>(obj: T) => {
	return {
		...obj,
		fullName: obj.firstName + ' ' + obj.lastName
	}
}

// contains both firstname, lastname and an additional field, i.e no error
const v4 = makeFullName({firstName: 'ekene', lastName: 'mikel', age: 45}) 

// shows an error cause firstname and lastname properties are not included
// const v5 = makeFullName({age: 67})

// ! using generics with interfaces

interface test<T>{
	name: string, 
	age: number,
	data: T // data is of the generic type
}

type numberType = test<number>

const use = (args: numberType) => {
	return args
}

const user1 = use({age: 100, data: 32, name: 'sd'})
console.log(user1)