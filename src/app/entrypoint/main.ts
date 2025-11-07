import { createApp } from 'vue'
import { router } from '@/app/routes/';
import { App } from '@/app/layout/';

import '@/app/styles/base.css';

const app = createApp(App);

app.use(router);

app.mount('#app')
