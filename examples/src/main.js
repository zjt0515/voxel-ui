import { createApp } from 'vue'
import App from './App.vue'
// 全局引入
import VoxelUI from '../../packages'
import '@voxel-ui/theme/src/index.scss'
import '@voxel-ui/components/button/src/style'

createApp(App).use(VoxelUI).mount('#app')
