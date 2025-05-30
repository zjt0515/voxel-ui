import { getCurrentInstance } from 'vue'
export const defaultNamespace = 'vox'

export const useParent = (parentName) => {
  const parent = getCurrentInstance().parent

  const group = () => {
    return parent.proxy.$options.name === `${defaultNamespace}-${parentName}`

  }
  const props = (attr) => {
    return parent.props?.[attr] || fase
  }

  return { group, props }
}