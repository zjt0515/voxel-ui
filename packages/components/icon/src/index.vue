<template>
  <i :class="[ns.b()]">
    <slot />
  </i>
</template>

<script>export default { name: 'vox-icon' };</script>
<script setup>
import { useNamespace } from '@voxel-ui/hook';
const ns = useNamespace('icon')
</script>

<style lang="scss" scoped></style>