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
        <p>Click the tabs to view and edit patient medical details</p>
        <div>
            <div v-for="item in data" :key="item.id">
                {{data}}
            </div>
        </div>
    </div>
  </div>
</template>

<script>
 import { getRecords } from "@/services/service.js"
export default {
    name: 'Body',
    data: () =>{
        return{
           data: []
        }
    },
    methods:{
        getData(){
            getRecords()
        }
    },
    mounted(){
        this.getData()
    }
    
}
</script>

<style scoped>

</style>