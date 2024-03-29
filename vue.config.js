module.exports = {
    publicPath: "./",
    chainWebpack: config => {
        // 移除 prefetch 插件
        config.plugins.delete("prefetch")
    },
    css: {
        loaderOptions: {
            scss: {
                prependData: `@import "@/assets/scss/index.scss";`,
            },
        },
    },
}
