console.log(true+"1") //true1

console.log(true+true+"1") //21

console.log(true+1)//2

console.log('' + 1 + 5);  //15

var a =[1,2,3,4,5,6,7];
var b =a;
b.push("8")
console.log(a);// [1,2,3,4,5,6,7,8]
console.log(b); //[1,2,3,4,5,6,7,8]

var arr = [NaN, 0, 15, false, -22, '',undefined, 47, null]
let res = arr.filter((i)=> i && i!=NaN)
console.log(res) //needed - [15, -22, 47]

var Temp1 =[{FirstName:'Vivek', Id:1},{FirstName:'Vinay', Id:2}]

var Temp2 =[{LastName:'A', Id:2},{LastName:'D', Id:1}];

let x = Temp1.map((item)=>{
    const data = Temp2.find((ele) => ele.Id === item.Id);
    return {...item, data}
})
console.log(x)

//Expected Output  = [{FirstName:’Vivek’, LastName:’D’, Id:1},{FirstName:’Vinay’, LastName:’A’, Id:2}];
