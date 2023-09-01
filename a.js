//let a = "jOnAs"
// b = a.slice(0,1).toUpperCase()
// c= a.slice(1,5).toLowerCase()
// d = b+c
//console.log(d)

//console.log(a.slice(0,1).toUpperCase()+a.slice(1).toLowerCase());

// ARRAY METHODS

let arr = ["ruby", "rekha", "rahul","akshit", "rohit"];

// console.log(arr.length);
// console.log(arr[arr.length-1])
arr.push("anjali"); // add array at the end -- ["ruby", "rekha", "rahul","akshit", "rohit". "anjali"]
// console.log(arr.length);
// console.log(arr[arr.length-1])

//console.log(arr.pop()) //remove from last ["ruby", "rekha", "rahul","akshit", "rohit"]

//console.log(arr.shift()) // remove item from beginning [ "rekha", "rahul","akshit", "rohit"]

//console.log(arr.unshift("rashmi")); // add item at beginning ["rashmi","rekha", "rahul","akshit", "rohit"]


delete arr[1] // it will just remove the key  from the array 
//console.log(arr.length) // it should give 4 but its 5 delete not removing the element 

// because of this we use SPLICE - we can add , remove and replace from the array

//SPLICE(start, [deletecount, ele1, ele2]) // start from strat index delete deletecount element then add ele1, ele2, Returns the array of removed element, negative index are allowed it will start taking element from last

let arr2 = ["I", "study", "JavaScript"];
//console.log(arr2.splice(1, 2, "love ", "js"));
//console.log(arr2)
//console.log(arr2.splice(1, 0, "my")) // o means no deletion
//console.log(arr2)

//console.log(arr2.splice(-1, 2, "x" , "y")) // -1 takes from last  picche se 2 ele remove then add "x". "y"
//console.log(arr2)

 // add 4  at second position
 let x = [1, 2, 3, 5, 6]

 x.splice(3, 0, 4) //adding at 3 and  0 - not deleteing any element 4 add 4 at position at 3
// console.log(x) //[ 1, 2, 3, 4, 5, 6 ]

 x.splice(-2, 0, 8, 8)
 //console.log(x)


 //SLICE = arr.slice(startindex, endindex) return a new array copying all elemet from start to end(not including end) both start and end can be negation so in that case it will take position from array end
 let ar = [1,3,4,5,6]
 console.log(ar.slice(-2,-1)) // [3] this will return new array with removed element
//  console.log(ar) // this will print the original array [ 1, 3, 4, 5, 6 ]

//  console.log(ar.slice()) // this is also can be done it will just copy the element 
//  console.log(ar.slice(1)) // slice 1 element from beginning 
//  console.log(ar.slice(0, -3)) //[ 1, 3 ]
//  console.log(ar)

 /// CONCAT - will add element to the given array it can array adn values as its arguments
 let m = [1, 3, 5]
//  console.log(m.concat([6,7], 8,9))
//  console.log(m.concat([6,7], [8,9]))
//  console.log(m.concat(6,7, 8,9))

//  let arrayLike = {
//     0: "something",
//     length: 1
//   };
//   console.log(m.concat(arrayLike))

//FOREACH = can iterate over an array and add a function for every element
//arr.forEach(function(item, index, array) {
    // ... do something with item
//  });

let p = [1,2,8,9,6]
let sum =0 
p.forEach((e)=>{
    sum+=e;
    //console.log(" e+sum ",sum)
})
  
//SEARCHING IN ARRAY
//indexOf()- check from beggining if exist return index of it otherwise return -1  
//lastIndexOf()- same as indexOf but return from last in the array  
//include() - used to find any element existanse

let v  = [4,9, 2,7,5.9,63, NaN, false, 63]
//console.log(v.indexOf(false))  // -1 which is wrong should return 6
//console.log(v.includes(NaN)) // true - because its handled NaN case
console.log(v.lastIndexOf(63, 5)) 

//find() findIndexOf() findLastIndexOf()

//let result = arr.find(function(item, index, array) {
    // if true is returned, item is returned and iteration is stopped
    // for falsy scenario returns undefined
 // });

// let ob = [
//     {name: "rakse", id: 1},
//     {name: "ravi", id: 2},
//     {name: "rani", id: 9},
//     {name: "rocky", id: 4},
//     {name: "andle", id: 10},
//     {name: "ramu", id: 12},
//     {name: "gabbar", id: 29},
//     {name: "bijli", id: 14},
// ]

//console.log(ob.find((item) => item.id == 0 )) // undefined
//console.log(ob.find((item) => item.id == 4 )) //{ name: 'rocky', id: 4 }
//console.log(ob.findIndex((item)=> item.id == 9)) // 2
//console.log(ob.findLastIndex((item)=>item.name == "ravi"));

//Filter()

//arr.filter(function(item,index, arr)=>{
    //it will return an array of all matching element on the basis of condition
    //return empty array if nothing is found

//})

// console.log(ob.filter((e)=> e.id <12))
// console.log(ob)

//Sort()
//let x3 = [ 1, 2, 15 ];

// the method reorders the content of arr
//x3.sort();

//console.log( x3 );  // 1, 15, 2 - because js item are sort first all element got conversted in string  For strings, lexicographic ordering is applied and indeed "2" > "15".
//to use our own sorting order we can supply function to our sort method
// function alphanumeric(a, b){
//     if(a>b) return 1;
//     if(a==b) return 0
//     if(a<b) return -1
// }
// above function can return as 
//console.log(x3.sort(function(a,b){return a-b}) ) // [1,2,15] arrow function arr.sort( (a, b) => a - b );
//console.log(x3.sort(alphanumeric)) // [1,2,15]

//Use localeCompare for strings
//Remember strings comparison algorithm? It compares letters by their codes by default.

//For many alphabets, it’s better to use str.localeCompare method to correctly sort letters, such as Ö.
//let countries = ['Österreich', 'Andorra', 'Vietnam'];
//console.log(countries.sort((a, b)=> a>b ? 1: -1)) // [ 'Andorra', 'Vietnam', 'Österreich' ] // not sorted properly
//console.log(countries.sort((a,b)=> a.localeCompare(b)))

//reverse()
//console.log(x3.reverse());

//split() join()

//let names = 'Bilbo, Gandalf, Nazgul';
//console.log(names.split(", "))
//let res = names.split(", ", 3);
//console.log(res);
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Welcome to Programiz!");
let a = [
    {
        "key": "All",
        "isChecked": true,
        "options": [
            {
                "id": "Status",
                "type": "text",
                "label": "Status",
                "access": {
                    "edit": false,
                    "read": true
                },
                "required": false,
                "isSelected": true,
                "isVisible": true
            },
            {
                "id": "ORDER_NUM",
                "type": "text",
                "label": "Order #",
                "access": {
                    "edit": false,
                    "read": true
                },
                "required": false,
                "isSelected": false,
                "isVisible": true
            },
            {
                "id": "Order Type",
                "type": "text",
                "label": "Order Type",
                "access": {
                    "edit": false,
                    "read": true
                },
                "required": false,
                "isSelected": true,
                "isVisible": true
            },
            {
                "id": "ORDER_DT",
                "type": "date-time",
                "label": "Order Date",
                "access": {
                    "edit": false,
                    "read": true
                },
                "required": false,
                "isSelected": false,
                "isVisible": true
            },
            {
                "id": "Order Sub Type",
                "type": "text",
                "label": "Order Sub Type",
                "access": {
                    "edit": false,
                    "read": true
                },
                "required": false,
                "isSelected": false,
                "isVisible": true
            },
            {
                "id": "Product",
                "type": "text",
                "label": "Product",
                "access": {
                    "edit": false,
                    "read": true
                },
                "required": false,
                "isSelected": false,
                "isVisible": true
            },
            {
                "id": "Customer Id",
                "type": "text",
                "label": "Customer Id",
                "access": {
                    "edit": false,
                    "read": true
                },
                "required": false,
                "isSelected": true,
                "isVisible": true
            },
            {
                "id": "Customer",
                "type": "text",
                "label": "Customer",
                "access": {
                    "edit": false,
                    "read": true
                },
                "required": false,
                "isSelected": true,
                "isVisible": true
            },
            {
                "id": "Customer Type",
                "type": "text",
                "label": "Customer Type",
                "access": {
                    "edit": false,
                    "read": true
                },
                "required": false,
                "isSelected": true,
                "isVisible": true
            },
            {
                "id": "CCD",
                "type": "date-time",
                "label": "Customer Commit Date",
                "access": {
                    "edit": false,
                    "read": true
                },
                "required": false,
                "isSelected": true,
                "isVisible": true
            },
            {
                "id": "Order Manager",
                "type": "text",
                "label": "Order Manager",
                "access": {
                    "edit": false,
                    "read": true
                },
                "required": false,
                "isSelected": true,
                "isVisible": true
            },
            {
                "id": "Process Step",
                "type": "text",
                "label": "Order Process Step",
                "access": {
                    "edit": false,
                    "read": true
                },
                "required": false,
                "isSelected": true,
                "isVisible": true
            },
            {
                "id": "Process Step Due Date",
                "type": "date-time",
                "label": "Process Step Due Date",
                "access": {
                    "edit": false,
                    "read": true
                },
                "required": false,
                "isSelected": true,
                "isVisible": true
            },
            {
                "id": "Assigned To",
                "type": "text",
                "label": "Assigned To",
                "access": {
                    "edit": false,
                    "read": true
                },
                "required": false,
                "isSelected": true,
                "isVisible": true
            }
        ],
        "dropdownOption": [
            {
                "id": "Status",
                "type": "text",
                "label": "Status",
                "access": {
                    "edit": false,
                    "read": true
                },
                "required": false,
                "isSelected": true,
                "isVisible": true
            },
            {
                "id": "ORDER_NUM",
                "type": "text",
                "label": "Order #",
                "access": {
                    "edit": false,
                    "read": true
                },
                "required": false,
                "isSelected": false,
                "isVisible": true
            },
            {
                "id": "Order Type",
                "type": "text",
                "label": "Order Type",
                "access": {
                    "edit": false,
                    "read": true
                },
                "required": false,
                "isSelected": true,
                "isVisible": true
            },
            {
                "id": "ORDER_DT",
                "type": "date-time",
                "label": "Order Date",
                "access": {
                    "edit": false,
                    "read": true
                },
                "required": false,
                "isSelected": false,
                "isVisible": true
            },
            {
                "id": "Order Sub Type",
                "type": "text",
                "label": "Order Sub Type",
                "access": {
                    "edit": false,
                    "read": true
                },
                "required": false,
                "isSelected": false,
                "isVisible": true
            },
            {
                "id": "Product",
                "type": "text",
                "label": "Product",
                "access": {
                    "edit": false,
                    "read": true
                },
                "required": false,
                "isSelected": false,
                "isVisible": true
            },
            {
                "id": "Customer Id",
                "type": "text",
                "label": "Customer Id",
                "access": {
                    "edit": false,
                    "read": true
                },
                "required": false,
                "isSelected": true,
                "isVisible": true
            },
            {
                "id": "Customer",
                "type": "text",
                "label": "Customer",
                "access": {
                    "edit": false,
                    "read": true
                },
                "required": false,
                "isSelected": true,
                "isVisible": true
            },
            {
                "id": "Customer Type",
                "type": "text",
                "label": "Customer Type",
                "access": {
                    "edit": false,
                    "read": true
                },
                "required": false,
                "isSelected": true,
                "isVisible": true
            },
            {
                "id": "CCD",
                "type": "date-time",
                "label": "Customer Commit Date",
                "access": {
                    "edit": false,
                    "read": true
                },
                "required": false,
                "isSelected": true,
                "isVisible": true
            },
            {
                "id": "Order Manager",
                "type": "text",
                "label": "Order Manager",
                "access": {
                    "edit": false,
                    "read": true
                },
                "required": false,
                "isSelected": true,
                "isVisible": true
            },
            {
                "id": "Process Step",
                "type": "text",
                "label": "Order Process Step",
                "access": {
                    "edit": false,
                    "read": true
                },
                "required": false,
                "isSelected": true,
                "isVisible": true
            },
            {
                "id": "Process Step Due Date",
                "type": "date-time",
                "label": "Process Step Due Date",
                "access": {
                    "edit": false,
                    "read": true
                },
                "required": false,
                "isSelected": true,
                "isVisible": true
            },
            {
                "id": "Assigned To",
                "type": "text",
                "label": "Assigned To",
                "access": {
                    "edit": false,
                    "read": true
                },
                "required": false,
                "isSelected": true,
                "isVisible": true
            }
        ]
    },
    {
        "key": "v2",
        "isChecked": false,
        "options": [
            {
                "id": "Status",
                "type": "text",
                "label": "Status",
                "access": {
                    "edit": false,
                    "read": true
                },
                "required": false,
                "isSelected": true,
                "isVisible": true
            },
            {
                "id": "Order Type",
                "type": "text",
                "label": "Order Type",
                "access": {
                    "edit": false,
                    "read": true
                },
                "required": false,
                "isSelected": true,
                "isVisible": true
            },
            {
                "id": "Customer Id",
                "type": "text",
                "label": "Customer Id",
                "access": {
                    "edit": false,
                    "read": true
                },
                "required": false,
                "isSelected": true,
                "isVisible": true
            },
            {
                "id": "Customer",
                "type": "text",
                "label": "Customer",
                "access": {
                    "edit": false,
                    "read": true
                },
                "required": false,
                "isSelected": true,
                "isVisible": true
            },
            {
                "id": "Customer Type",
                "type": "text",
                "label": "Customer Type",
                "access": {
                    "edit": false,
                    "read": true
                },
                "required": false,
                "isSelected": true,
                "isVisible": true
            },
            {
                "id": "CCD",
                "type": "date-time",
                "label": "Customer Commit Date",
                "access": {
                    "edit": false,
                    "read": true
                },
                "required": false,
                "isSelected": true,
                "isVisible": true
            },
            {
                "id": "Order Manager",
                "type": "text",
                "label": "Order Manager",
                "access": {
                    "edit": false,
                    "read": true
                },
                "required": false,
                "isSelected": true,
                "isVisible": true
            },
            {
                "id": "Process Step",
                "type": "text",
                "label": "Order Process Step",
                "access": {
                    "edit": false,
                    "read": true
                },
                "required": false,
                "isSelected": true,
                "isVisible": true
            },
            {
                "id": "Process Step Due Date",
                "type": "date-time",
                "label": "Process Step Due Date",
                "access": {
                    "edit": false,
                    "read": true
                },
                "required": false,
                "isSelected": true,
                "isVisible": true
            },
            {
                "id": "Assigned To",
                "type": "text",
                "label": "Assigned To",
                "access": {
                    "edit": false,
                    "read": true
                },
                "required": false,
                "isSelected": true,
                "isVisible": true
            }
        ],
        "dropdownOption": [
            {
                "id": "Status",
                "type": "text",
                "label": "Status",
                "access": {
                    "edit": false,
                    "read": true
                },
                "required": false,
                "isSelected": true,
                "isVisible": true
            },
            {
                "id": "ORDER_NUM",
                "type": "text",
                "label": "Order #",
                "access": {
                    "edit": false,
                    "read": true
                },
                "required": false,
                "isSelected": false,
                "isVisible": true
            },
            {
                "id": "Order Type",
                "type": "text",
                "label": "Order Type",
                "access": {
                    "edit": false,
                    "read": true
                },
                "required": false,
                "isSelected": true,
                "isVisible": true
            },
            {
                "id": "ORDER_DT",
                "type": "date-time",
                "label": "Order Date",
                "access": {
                    "edit": false,
                    "read": true
                },
                "required": false,
                "isSelected": false,
                "isVisible": true
            },
            {
                "id": "Order Sub Type",
                "type": "text",
                "label": "Order Sub Type",
                "access": {
                    "edit": false,
                    "read": true
                },
                "required": false,
                "isSelected": false,
                "isVisible": true
            },
            {
                "id": "Product",
                "type": "text",
                "label": "Product",
                "access": {
                    "edit": false,
                    "read": true
                },
                "required": false,
                "isSelected": false,
                "isVisible": true
            },
            {
                "id": "Customer Id",
                "type": "text",
                "label": "Customer Id",
                "access": {
                    "edit": false,
                    "read": true
                },
                "required": false,
                "isSelected": true,
                "isVisible": true
            },
            {
                "id": "Customer",
                "type": "text",
                "label": "Customer",
                "access": {
                    "edit": false,
                    "read": true
                },
                "required": false,
                "isSelected": true,
                "isVisible": true
            },
            {
                "id": "Customer Type",
                "type": "text",
                "label": "Customer Type",
                "access": {
                    "edit": false,
                    "read": true
                },
                "required": false,
                "isSelected": true,
                "isVisible": true
            },
            {
                "id": "CCD",
                "type": "date-time",
                "label": "Customer Commit Date",
                "access": {
                    "edit": false,
                    "read": true
                },
                "required": false,
                "isSelected": true,
                "isVisible": true
            },
            {
                "id": "Order Manager",
                "type": "text",
                "label": "Order Manager",
                "access": {
                    "edit": false,
                    "read": true
                },
                "required": false,
                "isSelected": true,
                "isVisible": true
            },
            {
                "id": "Process Step",
                "type": "text",
                "label": "Order Process Step",
                "access": {
                    "edit": false,
                    "read": true
                },
                "required": false,
                "isSelected": true,
                "isVisible": true
            },
            {
                "id": "Process Step Due Date",
                "type": "date-time",
                "label": "Process Step Due Date",
                "access": {
                    "edit": false,
                    "read": true
                },
                "required": false,
                "isSelected": true,
                "isVisible": true
            },
            {
                "id": "Assigned To",
                "type": "text",
                "label": "Assigned To",
                "access": {
                    "edit": false,
                    "read": true
                },
                "required": false,
                "isSelected": true,
                "isVisible": true
            }
        ]
    }
]
let ob = {
    key: "",
    isChecked: "",
    option: []
  }
  let userPreferredList = a.map(item => {
      return{
      "key": item.key,
      "isChecked" : item.isChecked,
      "option" : item.options}
    })
console.log(JSON.stringify(userPreferredList))













