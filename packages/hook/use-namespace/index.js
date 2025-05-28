export const defaultNamespace = 'vox'

export const useNamespace = (block) => {
  const namespace = defaultNamespace

  const b = (blockSuffix = '') => _bem(namespace, block, blockSuffix)

  const e = (element) => element ? _bem(namespace, block, '', element) : ''

  const m = (modifier, value) => modifier ? _bem(namespace, block, '', '', modifier, value) : ''

  return { namespace, b, e, m }
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
