<script setup>
</script>

<template>
  <vox-button>none</vox-button>
  <vox-button type="default">默认</vox-button>
  <vox-button type="primary">主要</vox-button>
  <vox-button type="success">成功</vox-button>
  <vox-button type="warning">警告</vox-button>
  <vox-button type="error">错误</vox-button>
  <div>
    <vox-button round>圆角</vox-button>
  </div>
  <vox-button type="success" disabled>成功-禁用</vox-button>
  <vox-button type="warning" text>警告-文字</vox-button>
  <vox-button type="error" link>错误-链接</vox-button>
  <vox-button type="primary" border>主要-边框</vox-button>
  <vox-button type="primary" border dashed>主要-边框-dashed</vox-button>
  <vox-button type="primary" circle>圆形</vox-button>
  <vox-button type="primary" block>主要-block</vox-button>
  <vox-button type="primary" size="small">s</vox-button>
  <vox-button type="primary" size="default">d</vox-button>
  <vox-button type="primary" size="large">l</vox-button>

  <vox-button-group size="small">
    <vox-button>默认</vox-button>
    <vox-button>默认</vox-button>
    <vox-button>默认</vox-button>
  </vox-button-group>
</template>

<style scoped></style>
