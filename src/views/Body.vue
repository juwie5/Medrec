<template>
  <div class="layout">
      <div class="user-dash">
          <h4 class="pr-10">Take a tour</h4>
          <img  class="pr-10" src="../assets/msg-alert.svg" alt="">
          <img  class="pr-10" src="../assets/bell.svg" alt="">
          <img  src="../assets/user-img.png" alt="">
      </div>
    <div class="user-content">
        <h1>Update Patient Medical Record</h1>
        <p @click="getRecords()">Click the tabs to view and edit patient medical details</p>
    </div>    
    <div class="cnt-body">
      <div v-for="item in data" :key="item.id">
            <h3 class="cnt-h3">{{item.title}}</h3>
            <div class="cnt-item">
                <div v-for="option in item.investigations" :key="option.id">
                <input type="checkbox" :id="`option_${option.id}`" v-model="selectedIds[option.id]">
                <label :for="`option_${option.id}`" class="cnt-label">{{option.title}}</label>
            </div>
            </div>
           <hr/>
        </div>
        <div class="cnt-select">
                <div>
                     <label for="ct-scan">Ct-scan</label>
                    <select name="ct-scan" id="" v-model="ctScan">
                        <option value="" disabled selected>*Specify</option>
                        <option>Scan needed in the left cerebral hemisphere</option>
                        <option>Scan needed in the right cerebral hemisphere</option>
                    </select>
                </div>
                <div>
                        <label for="mri">Mri</label>
                        <select name="mri" id="" v-model="Mri">
                            <option value="" disabled selected>*Specify</option>
                            <option>Full body MRI</option>
                            <option>Half body MRI 😉</option>
                        </select>
                </div> 
            </div>
            <button class="btn" @click="sendRecords()">Save and Send</button>
        </div>  
        <div @click="modal = !modal" v-if="modal" class="modal">
            <div class="status">
                 <h3 class="cnt-h3">Record added sucessfully</h3>
            </div>
        </div>
        
        
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Body',
    data: () => {
        return{
           data: '',
           filterData: '',
           Developer: 'Developer',
           ctScan: '',
           Mri: '',
           selectedIds: {},
           modal: false
        }
    },
    methods:{
         async getRecords(){
            const REQENDPOINT = "https://testdrive.kompletecare.com/api/investigations"
            const TOKEN = localStorage.getItem('token')
            try{
                const res = await axios.get(REQENDPOINT, {
                    headers: {
                        'Accept' : 'application/json',
                        'Content-Type': 'application/json',
                         'Authorization' : `Bearer ${TOKEN}`
                    },
                    crossdomain: true
                })
                if (res.status == 200){
                    // console.log(res.data.data)
                    this.data = res.data.data
                } else {
                    return null
                }
            } catch(err){
                return err
            }
        },
        async sendRecords(){
            const REQENDPOINT = "https://testdrive.kompletecare.com/api/investigations"
            const TOKEN = localStorage.getItem('token')
           var data = new FormData();
            data.append('developer', this.Developer);
            data.append('mri', this.ctScan);
            data.append('ctscan', this.Mri);
            let keys = Object.keys(this.selectedIds)

            keys.forEach((id, index) => {
              data.append(`investigations[${index}]`, id)
            })

            var config = {
            method: 'post',
            url: `${REQENDPOINT}`,
            headers: { 
                'Authorization': `Bearer ${TOKEN}`, 
            },
            data : data
            };
            axios(config)
            .then(function (response) {
            // console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
            // console.log(error);
            });
            this.modal = true  
            this.selectedIds = {}
            this.ctScan = ''
            this.Mri = ''  
        },
    },
    mounted(){
        this.getRecords()
    }  
}
</script>

<style scoped>

</style>