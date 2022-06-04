import axios from 'axios'

const LOGINENPOINT = "https://testdrive.kompletecare.com/api/login";
const TOKEN  = "ymlsh0vXHWweVtm6hsRwWlvcRYOkqVWLZJaxqNVx";

const login = async function login(){
    var data = new FormData();
    data.append('email', 'tester@kompletecare.com');
    data.append('password', 'password');
  
    var config = {
    method: 'post',
    url: `${LOGINENPOINT}`,
    headers: { 
      'Authorization': `Bearer ${TOKEN}`, 
    },
    data : data
  };
  axios(config)
  .then(function (response) {
   // console.log(response.data);
     let tokenData = response.data.data.token
     let REQTOKEN = tokenData.slice(4,43)
    // console.log(REQTOKEN)
     return REQTOKEN
  })
  .catch(function (error) {
    console.log(error);
  });
  
}


export{login}