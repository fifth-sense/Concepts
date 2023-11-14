// Create a universal function that can accept an object as a parameter, and then create a logic to generate the single object output as shown below 


// input
var user = {
    name: "Vishal",
    address: {
      primary: {
        house: "109",
        street: {             
          main: "21",
          cross: "32"
        }
      }
    }
  };
  
  //output
  
  // {
  //   user_name: "Vishal",
  //   user_address_primary_house: "109",
  //   user_address_primary_street_main: "21",
  //   user_address_primary_street_cross: "32",
  // }
  let result = {};
  function create(key, user){
    let keys = Object.keys(user); 
    console.log("keys",keys)
    keys.forEach((ele)=>{
        if(typeof user[ele] !== 'object'){
            let objKey =  key + "_" + ele;
            result[objKey] = user[ele];
        }else{
           create(key + "_" + ele,user[ele]);
        }
    })
  }
  create("user", user)
  console.log(result)
  

  // console.log(findIndicesWithSum([2, 3, 5, 7, 10], 8));   // Output: [1, 2]
// console.log(findIndicesWithSum([2, 3, 5, 7, 10], 12));  // Output: [2, 3]
// console.log(findIndicesWithSum([2, 3, 5, 7, 10], 999)); // Output: []

// function findIndicesWithSum(arr, sum){
   
//   for(let i=0;i<arr.length;i++){
//       let diff= sum-arr[i];
//       if(arr.includes(diff) && arr.indexOf(diff) !=i)
//       return [i, arr.indexOf(diff)]
//   }
//   return [];
// }
// console.log(findIndicesWithSum([2, 3, 5, 7, 10], 8));
function findIndicesWithSum1(nums, target){
  
  const map = new Map();
  for(let i=0;i<nums.legth;i++){
    const item = target-nums[i];
    console.log(item)
    if(map.has(item)){
      return [map.get(item), i];
    }
    map.set(nums[i], i)

  }
  //console.log(map)
  return [];
}


console.log(findIndicesWithSum1([2, 3, 5, 7, 10], 12));  // Output: [2, 3]
console.log(findIndicesWithSum1([2, 3, 5, 7, 10], 999));

//Remove duplicate elements from array numbered in javascript all possible ways - Example - [1, 2, 3, 4,7,7,9,8,10,10,11]
let Example = [1, 2, 3, 4,7,7,9,8,10,10,11]
//method 1
console.log([...new Set(Example)])
function removeDuplicate(arr){
  //arr.sort();
  var res=[]
  
  for(let i=0;i<arr.length;i++){
    let isDuplicate=false;
    for(let j =0;j<res.length;j++){
      if(arr[i] == res[j]){
        isDuplicate = true;
        break;
      }
    }
    if(!isDuplicate){
      res.push(arr[i])
    }
  }
  console.log(res)
}

removeDuplicate(Example)
const arr = ['a', 'b', 'a', 'a', 'c', 'c'];

function count(arr){
  let itemCount={}
  arr.forEach((item)=>  itemCount[item] = (itemCount[item]||0)+1);
  console.log(itemCount)
  return itemCount
}

console.log(count(arr)); // ️ {a: 3, b: 1, c: 2}
let Temp1 =[{FirstName:'Vivek', Id:1},{FirstName:'Vinay', Id:2}]

let Temp2 =[{LastName:'A', Id:2},{LastName:'D', Id:1}];

const re = Temp1.map((i) => {
    const data = Temp2.find((j) => j.Id == i.Id );
    return {...i, ...data};
})

//console.log(re);

//Expected Output  = [{FirstName:’Vivek’, LastName:’D’, Id:1},{FirstName:’Vinay’, LastName:’A’, Id:2}];

// two sum using JS

//console.log(findIndicesWithSum([2, 3, 5, 7, 10], 12));  // Output: [2, 3]
// console.log(findIndicesWithSum([2, 3, 5, 7, 10], 999)); // Output: []


// let arr4= [2, 3, 5, 7, 10];

// function findIndicesWithSum(nums, target) {
//   const map = new Map();
  
//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i]; // 6 = 8-2
//     // console.log(`${complement} = ${target} - ${nums[i]}`);
//     if (map.has(complement)) {
//       // console.log("FF ", [map.get(complement), i])
//       return [map.get(complement), i];
//     }
    
//     // console.log(map)
//     map.set(nums[i], i);
//   }
  
//   return [];
// }

//its done

