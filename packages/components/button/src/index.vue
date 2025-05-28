<template>
  <div>
    <button :class="[ns.b()]">按钮</button>
  </div>
</template>
<script>export default { name: 'vox-button' };</script>
<script setup>
import { useNamespace } from '@voxel-ui/hook'
const ns = useNamespace('button')
console.log(ns.b())
</script>
<style lang="scss" scoped></style>