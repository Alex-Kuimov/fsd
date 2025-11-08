import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/profile/',
        name: 'profile',
        component: () => import('@/pages/profile/ui/HomePage.vue'),
    },
   
]

const router = createRouter({
    history: createWebHistory(),
    routes
})



export default router