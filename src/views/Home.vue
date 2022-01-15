<template>
    <div class="home">
        home
        <van-button type="primary" @click="login">点击登录</van-button>
        <van-button type="primary" @click="getProfile">获取个人资料</van-button>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import { Mutation, namespace } from "vuex-class"
const system = namespace("system")
debugger
@Component
export default class Home extends Vue {
    @system.Mutation("setToken") setToken!: (T: string) => void
    getProfile(): void {
        this.$Get("admin/myProfile")
    }
    async login(): Promise<void> {
        const token = await this.$Post(this.$Api.login, {
            username: "admin",
            password: "admin",
        })
        this.setToken(token.data.data.sessionId)
    }
}
</script>
