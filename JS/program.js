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
  