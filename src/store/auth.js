import axios from 'axios'
const LOGINENPOINT = "https://testdrive.kompletecare.com/api/login";
const TOKEN  = "ymlsh0vXHWweVtm6hsRwWlvcRYOkqVWLZJaxqNVx";


export default{
    namespaced: true,
    state:{
        
    },
    getters: {
     
    },
    mutations: {
      
    },
    actions: {
        async login(){
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
                let tokenData = response.data.data.token
                let REQTOKEN = tokenData.slice(4,44)
                localStorage.setItem('token', REQTOKEN)
               
            })
            .catch(function (error) {
                console.log(error);
            });
        },
       
    }
}