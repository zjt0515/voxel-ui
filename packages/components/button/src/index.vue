<template>
  <button
    :class="[ns.b(), ns.m(type), ns.m('size', size), ns.is('round', round), ns.is('disabled', disabled), ns.is('text', text), ns.is('link', link), ns.is('border', border), ns.is('dashed', dashed), ns.is('block', block), ns.is('circle', circle), ns.is('loading', loading), ns.is('button-group', isGroup)]">
    <!-- loading-icon -->
    <template v-if="loading">
      <i class="vox-icon iconfont icon-loading" :class="[ns.is('loading-transition', loading)]"></i>
    </template>
    <i v-else-if="icon" class="vox-icon iconfont" :class="icon"></i>
    <span v-if="!circle">
      <slot></slot>
    </span>
  </button>
</template>
<script>export default { name: 'vox-button' };</script>
<script setup>
import { useNamespace } from '@voxel-ui/hook'
import { getCurrentInstance, defineProps, computed } from 'vue'

const ns = useNamespace('button')

const props = defineProps({
  type: {
    type: String,
    default: 'default'
  },
  size: {
    type: String,
    default: 'default'
  },
  icon: {
    type: String,
    default: ""
  },
  round: Boolean,
  disabled: Boolean,
  text: Boolean,
  link: Boolean,
  border: Boolean,
  dashed: Boolean,
  block: Boolean,
  circle: Boolean,
  loading: Boolean
})

const isGroup = computed(() => {
  return getCurrentInstance().parent.proxy.$options.name === 'vox-button-group'
})
</script>
<style lang="scss" scoped></style>