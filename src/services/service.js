import axios from 'axios'
import FormData from 'form-data'

const LOGINENPOINT = "https://testdrive.kompletecare.com/api/login";
const REQENDPOINT = "https://testdrive.kompletecare.com/api/investigations";
const TOKEN  = "ymlsh0vXHWweVtm6hsRwWlvcRYOkqVWLZJaxqNVx";
let REQTOKEN = ``
console.log(REQTOKEN)



async function login(){
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
  console.log(response.data);
   let tokenData = response.data.data.token
   return REQTOKEN = tokenData.slice(3,43)
})
.catch(function (error) {
  console.log(error);
});

}

async function getRecords(){
    try{
        const res = await axios.get(REQENDPOINT, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${REQTOKEN}`,
            },
            crossdomain: true  
        })
        if (res.status == 200) {
          console.log(res.data)
            return res.data
        } else {
            return null
        }
    }  catch(err){
        return err
    }
}


export {login, getRecords}