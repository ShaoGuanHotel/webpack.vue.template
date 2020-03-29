import initElement from './initElement'
import initAppConst from './initAppConst'
import initI18n from './initI18n'
import initAPI from './initAPI'
import initRouter from './initRouter'

// 往Vue原型上追加内容，简化开发调用，原型上追加内容是不会影响性能的，因为原型在内存中只存在一份
export default function initVue(Vue) {
  initElement(Vue)
  initAppConst(Vue)
  const i18n = initI18n(Vue)
  const router = initRouter(Vue)
  initAPI(Vue)

  return {
    i18n,
    router
  }
}