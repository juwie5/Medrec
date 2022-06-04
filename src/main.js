import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/app.css'
import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const app = createApp(App)


app.use(router)
app.mount('#app')
