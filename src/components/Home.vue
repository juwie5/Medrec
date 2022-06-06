<template>
    <div>
      <Navbar/>
      <Body/>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import Navbar from '../views/Navbar.vue'
import Body from '../views/Body.vue'
export default {
  name: 'Home',
  components: {
    Navbar,
    Body
  },
  methods:{
    ...mapActions({
      login: 'auth/login'
    }),

    getToken(){
      this.login()
    }
  },
  created(){
      this.getToken()
   }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
