<template>
    <div class="home">
        <span class="text">home</span>
        <van-button type="primary" @click="login">点击登录</van-button>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import { namespace } from "vuex-class"
const system = namespace("system")
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
<style lang="scss" scoped>
.text {
    color: $highlight-color;
}
</style>
