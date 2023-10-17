import { createWebHistory, createRouter } from "vue-router";
import HomeView from "@/components/Home/HomeVue.vue";
import RestaurantVue from "@/components/Restaurant/RestaurantVue.vue";
import MenuView from "@/components/Menu/MenuVue.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/menu',
        name: 'menu',
        component: MenuView
    },
    {
        path: '/nosrestaurants',
        name: 'nosrestaurants',
        component: RestaurantVue
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router