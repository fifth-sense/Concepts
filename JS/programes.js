//Q=> calculate the frequency
//const arr = [1, 4, 3, 2, 4, 5, 3, 1, 5, 4, 1, 3, 4, 5, 2, 6];

// const frequencyMap = {}; // like unordered_map in c++
// for (const num of arr) {
//     frequencyMap[num] = (frequencyMap[num] || 0) + 1;
// }

//console.log(frequencyMap); //O(n)

//Q=> convert camel case to snake case and snake case to camel case.

let str = "FileNotFound"; //file_not_found
let str2 = "ruby_love_snake_case"; //RubyLoveSnakeCase
//ascii for A-Z = 65-90 and a-z = 97-122
let ans = ""
function convert(str){
  let ar = str.split("");
  for(let a of ar){
    if(a>=65 && a<=90)
    ans = a.toLowerCase();
    a
  }


}

function merge(arr, l, m, r)
{
	var n1 = m - l + 1;
	var n2 = r - m;

	// Create temp arrays
	var L = new Array(n1);
	var R = new Array(n2);

	// Copy data to temp arrays L[] and R[]
	for (var i = 0; i < n1; i++)
		L[i] = arr[l + i];
	for (var j = 0; j < n2; j++)
		R[j] = arr[m + 1 + j];

	// Merge the temp arrays back into arr[l..r]

	// Initial index of first subarray
	var i = 0;

	// Initial index of second subarray
	var j = 0;

	// Initial index of merged subarray
	var k = l;

	while (i < n1 && j < n2) {
		if (L[i] <= R[j]) {
			arr[k] = L[i];
			i++;
		}
		else {
			arr[k] = R[j];
			j++;
		}
		k++;
	}

	// Copy the remaining elements of
	// L[], if there are any
	while (i < n1) {
		arr[k] = L[i];
		i++;
		k++;
	}

	// Copy the remaining elements of
	// R[], if there are any
	while (j < n2) {
		arr[k] = R[j];
		j++;
		k++;
	}
}

// l is for left index and r is
// right index of the sub-array
// of arr to be sorted
function mergeSort(arr,l, r){
	if(l>=r){
		return;
	}
	var m =l+ parseInt((r-l)/2);
	mergeSort(arr,l,m);
	mergeSort(arr,m+1,r);
	merge(arr,l,m,r);
}

// Function to print an array
function printArray( A, size)
{
	for (var i = 0; i < size; i++)
	console.log( A[i] + " ");
}


var arr = [ 12, 11, 13, 5, 6, 7 ];
	var arr_size = arr.length;

	//console.log( "Given array is ");
	//printArray(arr, arr_size);

	mergeSort(arr, 0, arr_size - 1);

	//console.log( "Sorted array is ");
	//printArray(arr, arr_size);

//flatten array
let arr1 = [1,[2,[3,4,5,[6,7],8],9],10];
let arr2 = [
    [1, 2],
    [3, 4],
    [5, 6],[7, 8, 9],
    [10, 11, 12, 13, 14, 15]
];
//method 1
let res =[];
function flat(arr1){
	for(let i=0;i<arr1.length;i++){
		if(typeof arr1[i] == "number"){
		   res.push(arr1[i])
		}else{
		   flat(arr1[i]);
		}
	}
	return;
}
flat(arr1);
//console.log(res)
//method 2 using concat and apply
let res2 = [].concat.apply([],arr2 );
// console.log("flaten array",res2)

//method 3  using spread operator
let res3 = [].concat(...arr2)
// console.log("flaten array",res3)

//method 4 using reduce method

let res4 = arr2.reduce((acc, currVal)=> {return acc.concat(currVal)}, [])
// console.log("flaten array",res4);

//using flat() method
// it will take arr and an optional argument depth if we don't provide any it will take 1 
let arr4 = [1, 2, [3, [4, 5, 6], 7], 8];
// console.log(arr4.flat()) //[ 1, 2, 3, [ 4, 5, 6 ], 7, 8 ]
// console.log(arr4.flat(2)) //[1, 2, 3, 4,5, 6, 7, 8 ]



 //final unique from this array [1,3,3,2,6,3,4,5,5,6,6,7,7,8,8,8,9]
 let array = [1,3,3,2,6,3,4,5,5,6,6,7,7,8,8,8,9];


 
let ans2 = [...new Set(array)]
//console.log(ans2);

let p = array.filter((e,i,self) => {
       return i==self.indexOf(e);
    }
)
//console.log(p);
 //perform destructing on this array 
 const address = ["583, Margaret Street", "LOS ANGELES, CA", "USA"];
 let x, y, rest;
 [x,y, ...rest] = address;
 //console.log(x);

 // custom bind method
 Function.prototype.myBind = function(...args){
    let context = this;
    let param = args.slice(1);
    return function(...args2){
        context.apply(args[0], [...param, ...args2])
    }

}

 //Q. create your own map function

 let mapArray = [1,3,4,5]

 Array.prototype.myMap = function(callback){
	let resultArray = [];
	for(let i=0;i<this.length;i++){
		if(this[i] === undefined || this[i]==null){
			break;
		}
		resultArray[i]=callback(this[i], i, this )
	}
	return resultArray;

 }
 console.log(mapArray.myMap(function(val){
	return val*2;
 }))
//  console.log([1,2,3, null, undefined, 4].myMap(a => +a));
//  console.log([1,2,3, null, undefined, 4].map(a => +a));
//  console.log(["hey","hi", null, undefined, "bye"].myMap(a => +a));
//  console.log(["hey","hi", null, undefined, "bye"].map(a => +a));

//Q Your own Filter
Array.prototype.myFilter = function(callback){

	let filterArry =[];
	for(let i=0;i<this.length;i++){
		if(callback(this[i], i, this)){
			filterArry.push(this[i])
		}
	}
	return filterArry;

}

console.log([12, 34, 5, 67,8].myFilter(a=> a%2==0));

Array.prototype.myReduce = function(callback, accumulator){
	let res = accumulator;
	for(let i =0;i<this.length;i++){
		res = callback(res, this[i], i , this);
	}
	return res;
}
//console.log([1, 2, 5].myReduce((a,v)=>a+v, 0))

//print 1 after 1 sec 2 after 2 sec 3 after 3 sec till 5

function printNumber(){
	for(let i =1;i<=5;i++){ // if we use var i=1 then in that case it will print 6 6 6 6 6 because it store refrence of i on every iteration same reference being passed to settimeout  
	setTimeout(()=>{
		console.log(i);
	}, i*1000)
}
}
//printNumber() // 1 2 3 4 5

//can you do it using var only - yes we have to create closure for it

function printNumberUsingVar() {
	for(var i=1;i<=5;i++){
		function close(i){
			setTimeout(()=>{
              console.log(i)
			}, i*1000)
		}
		close(i)
	}
}
//printNumberUsingVar();

function counter() {
	var count = 0;
	return function increment(){
	count++;
	console.log(count);
	}
	}
	var counter1 = counter(); //counter function has closure with count var.
	//counter1(); //1  increments counter
	var counter2 = counter();
	//counter2(); // 1 here counter2 is whole new copy of counter function and it
	//wont impack the output of counter1

//Event Listener:- We will create a button in html and attach event to it.
//Let’s implement a increment counter button. Using global variable (not good as anyone can change it)
// Another Example of callback
function printStr(str, cb) {
setTimeout(() => {
console.log(str);
cb();
}, Math.floor(Math.random() * 100) + 1)
}
function printAll() {
printStr("A", () => {
printStr("B", () => {
printStr("C", () => {})
})
})
}
//	printAll()
// A B C // in order

//how to find length of an object
// use object.keys(obj).length
let obj = {
	a:1, b:2,c:3
}
console.log(Object.keys(obj).length, "length");

