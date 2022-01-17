<template>
    <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
        <van-tabbar-item icon="search" to="/about">我的</van-tabbar-item>
    </van-tabbar>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"
@Component
export default class tabbar extends Vue {
    active = 0
}
</script>
<style scoped></style>
