import { createRouter, createWebHistory } from 'vue-router'
import CreateComponent from '@/components/CreateComponent.vue'
import EditComponent from '@/components/EditComponent.vue'
import ListComponent from '@/components/ListComponent.vue'
import Convid_19Component from '@/components/Covid-19.vue'
import GraphComponent from '@/components/Graph.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: CreateComponent
    },
    {
        path: '/view',
        name: 'view',
        component: ListComponent
    },
    {
        path: '/edit/:id',
        name: 'edit',
        component: EditComponent
    },
    {
        path: '/covid-19',
        name: 'covid-19',
        component: Convid_19Component
    },
    {
        path: '/graph',
        name: 'graph',
        component: GraphComponent
    }
];

const router = createRouter({ history: createWebHistory(), routes });
export default router