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

	console.log( "Given array is ");
	printArray(arr, arr_size);

	mergeSort(arr, 0, arr_size - 1);

	console.log( "Sorted array is ");
	printArray(arr, arr_size);

