import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

document.addEventListener('keypress', function(e) {
    if(e.key === "Enter") {
        const btn = document.querySelector("#btn-submit");
        btn.click();
    }
});