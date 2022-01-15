import Vue from "vue"
import Vuex from "vuex"
import db from "@/utils/db"
Vue.use(Vuex)

export default {
    namespaced: true,
    state: {
        token: db.get("token"),
    },
    mutations: {
        setToken(state: any, value: string) {
            state.token = value
            db.set("token", value)
        },
    },
}
