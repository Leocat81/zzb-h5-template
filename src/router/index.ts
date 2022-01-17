import Vue from "vue"
import VueRouter, { RouteConfig } from "vue-router"
import tabbar from "@/components/tabbar/index.vue"
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: "/",
        name: "Home",
        components: {
            default: () =>
                import(/* webpackChunkName: "home" */ "../views/Home.vue"),
            tabbar,
        },
        meta: {
            name: "首页",
        },
    },
    {
        path: "/about",
        name: "About",
        components: {
            default: () =>
                import(/* webpackChunkName: "about" */ "../views/About.vue"),
            tabbar,
        },
        meta: {
            name: "我的",
        },
    },
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
})

export default router
