// //interfaces
// interface IsPerson {
//     name: string;
//     age: number;
//     speak (a: string): void;
//     spend (a:number): number;
// };


// const me: IsPerson = {
//     name: "johan",
//     age: 30,
//     speak( text: string): void {
//         console.log(text);
//     }, 
//     spend(amount: number): number {
//         console.log('I spent', amount);
//         return amount;
//     }
// };

// const greetPerson = (person: IsPerson) => {
//     console.log ('Hello', person.name);
// };

// console.log(me);
// greetPerson(me);


import {Invoice} from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import {Payment} from './classes/Payment.js';
import {HasFormatter} from './interfaces/HasFormatter.js';


// let doc1: HasFormatter;
// let doc2: HasFormatter;

// doc1 = new Invoice ('yoshi', 'web work', 250);
// doc2 = new Payment ('mario', 'art work', 200);

// let docs: HasFormatter[] = [];

// docs.push(doc1);
// docs.push(doc2);

// console.log(docs);

// const inv1 = new Invoice ('mario', 'work on the marion website', 250);
// const inv2 = new Invoice ('mario', 'work on the luigi website', 300);

// let Invoices: Invoice[] = [];
// Invoices.push(inv1);
// Invoices.push(inv2);

// Invoices.forEach(inv => {
//     console.log(inv.client , inv.amount, inv.format());
// });


const form = document.querySelector('.new-item-form') as HTMLFormElement; //use the class name, so dont no what this element type

//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLSelectElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//list templatte instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate (ul);





form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    let values: [string, string, number];
    values= [toFrom.value, details.value, amount.valueAsNumber]
   
    let doc: HasFormatter;
    if (type.value === 'invoice'){
        doc = new Invoice (...values);
    }else{
        doc = new Payment (...values);

    }

    console.log(doc);

    list.render(doc, type.value, 'end');

});



///GENERICS

const addUID = <T extends {name:string}>(obj:T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

let doc1 = addUID({name: 'yoshi', age:40}); //with T capture the things

console.log(doc1.name);

//with interfaces
//ENUMS
enum ResourseType {BOOK, AUTHER, FILM, PERSON }
interface Resourse<T> {
    uid: number,
    resourceType: ResourseType,
    data: T,
}

const doc3: Resourse<object> = {
    uid :1,
    resourceType: ResourseType.BOOK,
    data: {title: 'wind'}
}

const doc4: Resourse<object> = {
    uid :1,
    resourceType: ResourseType.PERSON,
    data:{name: 'yosh'}
}


console.log(doc3,doc4);


//tuples
let arr = ['ryu', 25, true];
arr[0] =false;
arr[1]= 'd';
arr = [30, false,'jk'];

let tup: [string, number, boolean] = ['ryu', 25, true];
tup[0] ='false';
tup[1]= 1;

