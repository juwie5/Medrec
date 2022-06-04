
//import FormData from 'form-data'


const REQENDPOINT = "https://testdrive.kompletecare.com/api/investigations";





async function getRecords(){
  console.log('hi')
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


export {getRecords}