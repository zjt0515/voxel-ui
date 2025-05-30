export const defaultNamespace = 'vox'

export const useNamespace = (block) => {
  const namespace = defaultNamespace

  // block类名
  const b = (blockSuffix = '') => _bem(namespace, block, blockSuffix)

  // element类名
  const e = (element) => element ? _bem(namespace, block, '', element) : ''

  // modifier类名生成
  const m = (modifier, value) => modifier ? _bem(namespace, block, '', '', modifier, value) : ''

  // status类名
  const is = (activeName, activeValue) => activeName && activeValue ? `is-${activeName}` : ''

  return { namespace, b, e, m, is }
}

/**
 * bem命名规则
 * namepsace-block-blockSuffix__element--modifier_modifierValue
 * @param {*} namespace 
 * @param {*} block 
 * @param {*} blockSuffix 
 * @param {*} element 
 * @param {*} modifier 
 * @param {*} modifierValue 
 */
const _bem = (namespace, block, blockSuffix, element, modifier, modifierValue) => {
  let className = `${namespace}-${block}`

  blockSuffix && (className += `-${blockSuffix}`)

  element && (className += `__${element}`)

  modifier && (className += `--${modifier}`)

  modifierValue && (className += `_${modifierValue}`)

  return className
}
