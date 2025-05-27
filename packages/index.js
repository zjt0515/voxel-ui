import components from './components.js'

export * from './components/index'

// 全局安装
export const install = function (app) {
  if (install.installed) return
  components.forEach((c) => app.use(c))
}

export default install