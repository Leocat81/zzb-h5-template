/* 全局注册vant组件 */
import { VueConstructor } from "vue"
import { Button, Tab, Tabs, Tabbar, TabbarItem } from "vant"

const components = [Button, Tab, Tabs, Tabbar, TabbarItem]

const install = (Vue: VueConstructor): void => {
    components.forEach(item => {
        Vue.use(item)
    })
}
export default { install }
