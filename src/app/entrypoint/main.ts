import { createApp } from 'vue'
import router from '../routes/router';
import App from '../layout/App.vue'
import '../../app/styles/base.css';

const app = createApp(App);

app.use(router);

app.mount('#app')
