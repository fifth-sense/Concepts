let count=0;
function getData(){
    console.log("fetch data"), count++;
}
//useful in SSR search functionality
 function debounce(fn, d){

    let timer;
    return function(){
        let context = this;
        let arg = arguments;

        clearTimeout(timer)
        timer = setTimeout(()=>{
            fn.apply(context, arg)
        }, d)
        
    }

 }

 let enhanced = debounce(getData, 2000);
 enhanced();

