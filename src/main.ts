import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import vantComponents from "@/vant-components/index"
import { Get, Post } from "@/request"
import Api from "@/request/api"
Vue.config.productionTip = false
Vue.prototype.$Get = Get
Vue.prototype.$Post = Post
Vue.prototype.$Api = Api
Vue.use(vantComponents)
// 定义ts避免报错
declare module "vue/types/vue" {
    interface Vue {
        $Get: typeof Get
        $Post: typeof Get
        $Api: typeof Api
    }
}
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount("#app")
