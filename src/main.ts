import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'
import Xing from './components/Xing.vue'
import Xing2 from './components/Xing2.vue'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Xing },
        { path: '/xxx', component: Xing2 },
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')