// Provide an example of using union and intersection types in TypeScript.

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
