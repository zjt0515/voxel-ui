import { createApp } from 'vue'
import App from './App.vue'
// 全局引入
import VoxelUI from '../../packages'

createApp(App).use(VoxelUI).mount('#app')
