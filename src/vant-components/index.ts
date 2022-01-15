/* 全局注册vant组件 */
import { VueConstructor } from "vue"
import { Button } from "vant"

const components = [Button]
const install = (Vue: VueConstructor): void => {
    components.forEach(item => {
        Vue.use(item)
    })
}
export default { install }
