<template>
    <div class="about">
        <van-tabs v-model="active" type="card">
            <van-tab title="标签 1">
                <div class="flex">1111</div>
                <p>{{ token }}</p>
            </van-tab>
            <van-tab title="标签 2">内容 2</van-tab>
            <van-tab title="标签 3">内容 3</van-tab>
            <van-tab title="标签 4">内容 4</van-tab>
        </van-tabs>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import { State } from "vuex-class"
@Component
export default class About extends Vue {
    @State(state => state.system.token) token!: string
    active = 0
}
</script>
<style scoped>
h1 {
    font-size: 15px;
}
h2 {
    font-size: 12px;
}
.flex {
    display: flex;
    transition: transform 1s;
}
</style>
