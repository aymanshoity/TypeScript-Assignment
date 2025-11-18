What are some differences between interfaces and types in TypeScript?

Typescript এ typeও interface এর মধ্যে পার্থক্য 
১। type ইনপুট ডাটা টাইপ এর ১ টা কালেকশন। Primitive, tupples, union এর জন্য ইউস করা হয়। Interface হলো মূলত object type ডাটার জন্য ইউস করা হয়। মূলত ইনপুট অবজেক্ট এর syntax টা ensure করে
২। type,  interfaceএর তুলনায় flexible.
৩। class extending এ interfaceব্যাবহার করা হয়। type ব্যাবহার করা যায় না।
৪। সেইম নাম type এর ক্ষেত্রে একাধিক বার ব্যাবহার করলে error return করে। কিন্তু interface এ  মার্জ হয়।
৫ । type  এর ক্ষেত্রে "type" কী ওয়ার্ড ব্যাবহার করা হয়।interface এর ক্ষেত্রে "interface" কী ওয়ার্ড ব্যাবহার করা হয়।
<!-- sorry i have less habit of typing bangla..i did it with my phone  -->

 Provide an example of using union and intersection types in TypeScript.

// union
type Appetizer= "fries" | 'onthon' |"cheeseball"

 const chooseAppetizer=(food:Appetizer)=>{
    return console.log(`Your Appetizer  ${food} is getting ready`)
 }

 chooseAppetizer('fries') // ✅  সঠিক
  chooseAppetizer('rice') // ❌  ভুল

//  intersection

interface Burger{
   patty:string,
   cheese:boolean,
}
interface Drinks{
   size:"small" | "medium" | 'large',
   name: string,
}

type StudentCombo = Burger & Drinks;

const getMyOrder=(order:StudentCombo)=>{

   return console.log(` Your Platter contain Burger with ${order.patty} and ${order.cheese ? "chesse" : "no cheese"}..With the Burger you ordered ${order.name} for drinks with ${order.size}`)

}

getMyOrder({
   patty:'beef',
   cheese:true,
    size:"small" ,
   name: 'Mojo',
}) //✅  সঠিক

getMyOrder({
   patty:'beef',
    size:"small" ,
   name: 'Mojo',
}) //✅  ভুল

