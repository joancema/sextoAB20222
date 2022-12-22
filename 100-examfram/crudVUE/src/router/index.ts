import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import CounterView from '../views/OtroView.vue';
import CrudView from '../views/CrudView.vue';


const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/counter',
        name: 'Counter',
        component: CounterView
    },
    {
        path:'/vuetify',
        name:'Vuetify',
        component: CrudView
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;