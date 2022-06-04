<template>
    <div>
      <Navbar/>
      <Body/>
    </div>
</template>

<script>
import { login } from '@/services/service.js'
import Navbar from '../views/Navbar.vue'
import Body from '../views/Body.vue'
export default {
  name: 'Home',
  components: {
    Navbar,
    Body
  },
  methods:{
    getToken(){
      
      login()
    }
  },
  mounted(){
    // this.getToken()
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
