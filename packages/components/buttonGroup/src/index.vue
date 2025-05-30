<template>
  <div :class="[ns.b(), ns.m(isGroupSize), ns.is('button-group', isGroup)]">
    <slot />
  </div>
</template>
<script>export default { name: 'vox-button-group' };</script>
<script setup>
import { useNamespace, useParent } from '@voxel-ui/hook';
const props = defineProps({
  size: {
    type: String,
    default: 'default'
  }
})
const ns = useNamespace('button-group')
const parent = useParent('')
const isGroup = parent.group()
const isGroupSize = props.size || parent.props('size')
</script>

<style lang="scss" scoped></style>