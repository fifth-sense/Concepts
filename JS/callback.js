function customCallback(callback, data){
    
    //simulating a delay
    setTimeout(()=>{
        if(typeof callback == 'function'){
            callback(data);
        }
    }, 1000)
}

function printData(result) {
    console.log("data received::",result )
}
customCallback(printData, "200 ok");


//custom promise

function customPromiseWithCallbacks(action, onSuccess, onError) {
    console.log(action, onError, onSuccess)
    // Simulate an asynchronous operation
    setTimeout(() => {
      // Perform the action
      const result = action();
       
      // If the action is successful, call the onSuccess callback
      // If it encounters an error, call the onError callback
      if (result) {
        onSuccess(result);
      } else {
        onError("An error occurred");
      }
    }, 1000); // Simulate a 1-second delay
  }
  
  // Usage example
  customPromiseWithCallbacks(() => {
      // Simulate a successful operation
      return "Success";
    },
    (result) => {
      console.log("Resolved:", result);
    },
    (error) => {
      console.error("Rejected:", error);
    }
  );
  