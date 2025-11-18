type Value=number | string | boolean;

const formatValue =(value:Value):Value=>{
   if(typeof value ==='string'){
      return value.toLocaleUpperCase()
   }else if(typeof value==="number"){
      return value*10
   }else{
      return !value
   }
}

type Input=string | number[];
const getLength =(input:Input)=>{
   if(Array.isArray(input)){
      return input.length
   }else{
      if(typeof input ==='string'){
         return input.length
      }
   }

}

class Person {
   name:string;
   age:number;
   constructor(name:string,
   age:number){
      this.name=name
      this.age=age

   }

   getDetails(){
      return `'Name: ${this.name}, Age: ${this.age}'`;
   }
}

 type BookList={
   title:string,
   rating:number,
 }

 const filterByRating =(booklist:BookList[]):BookList[]=>{

   return booklist.filter((book:BookList)=> book.rating>=4  && book.rating<=5)


 }

 type User={
   id:number,
   name:string,
   email:string,
   isActive:boolean,
}


const filterActiveUsers =(userList:User[]):User[]=>{
   return userList.filter((user:User)=> user.isActive===true)

}

interface Book {
   title: string;
   author: string;
   publishedYear: number;
   isAvailable: boolean;
}

const printBookDetails =(booklist:Book)=>{
 return console.log( `Title: ${booklist.title}, Author: ${booklist.author}, Published: ${booklist.publishedYear}, Available: ${booklist.isAvailable ? "Yes" :"No"}`)

}

type InputArray = (number | string)[]

const getUniqueValues = (arr1: InputArray, arr2: InputArray): InputArray => {
   let uniqueArray: InputArray = [];
   const combinedArray = [...arr1, ...arr2]


   for (let i = 0; i < combinedArray.length; i++) {
      const value= combinedArray[i];
      if(value===undefined){
         continue
      }
      if (! uniqueArray.includes(value)) {
         uniqueArray.push(value)
      }
   }
   return uniqueArray;

}

interface Product {
   name: string,
   price: number,
   quantity: number,
   discount?: number,
}
// didn't handle discount

const calculateTotalPrice = (productList: Product[]) => productList.reduce((acc, item) => 
 acc + ((item.price * item?.quantity) - (item.price * item?.quantity * (item.discount ?? 0) / 100)) 
, 0)

