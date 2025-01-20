let str = "geeksforgeeks";

function printCharWithFreq(str){

    let frquency={};
    for (let i=0;i<str.length;i++){
        if (!frquency[str[i]]){
            frquency[str[i]]=1;
        }
        else {
            frquency[str[i]]++;
        }
    }
    console.log(frquency)
}
printCharWithFreq(str);