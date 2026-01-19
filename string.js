let a = "Hi";
let lowertext= a.toLowerCase();
console.log(lowertext);
//lower case - helps to lower the Character //include strtwith  endwith trim  substring slice 
//charat replaceall 
let text = "hello priya";
console.log(text.length)

//length gives the total length of the string 

let b = "apple,banana,grapes";
let fruits=b.split(",");
console.log(fruits);

//split sepeartes the string whenever seperator occurs
let c="Hello priya";
console.log(c.startsWith("hello"));
console.log(c.endsWith("hello"));
//to check the starting and emding of the stying

let d= "hye priya";
console.log(d.includes("hye"));
//includes check if some thing is presnst or not

let e= "hello priya";
console.log(e.charAt(6));
//checks the character at given position g
let f= "hello hi"
console.log(f.substring(0,3));
//check if any substring presents or not


let g= " hye pyiui  "
console.log(g.trim());
//trim reduces the space


let h="hye poiuyt"
console.log(h.slice(0,5));
//slice gives the particular string 


let i = " hello you ! you are learning js";
let j=i.replaceAll("you","i");
console.log(j);
//replacell replaces all the string with another part you want 


//pop push shift unshift index of includes 
// push(item) → add at the end
//- pop() → remove from the end
//- unshift(item) → add at the beginning
//- shift() → remove from the beginning
//includes
//split join


let arr =[1,2,3];
arr.push(4);
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift(8);
console.log(arr);
arr.shift();
console.log(arr);


//map
let m=[1,2,3,4]
let r=m.map((val)=>val*2);
console.log(r);

//filter
let n= m.filter((val)=>val>30);
console.log(n);
//some and every
//some = check if any element matches the Condiotion 
//every=check if all element matches the Condiotion
//from=string ko array ki form me convert krta h...

let object=[
  { "_id": 2, "quantity": 5, "price": 25, "targetPrice": 100 },
  { "_id": 1, "quantity": 10, "price": 15, "targetPrice": 120 },
  { "_id": 3, "quantity": 6, "price": 35, "targetPrice": 100 },
  { "_id": 4, "quantity": 5, "price": 55, "targetPrice": 150 },
  { "_id": 5, "quantity": 5, "price": 55, "targetPrice": 150 }
]
let result = object.filter((value)=>value.quantity>5&&value.price>10&&value.targetPrice>50);
console.log(result);


