import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/reset.css';
import axios from 'axios'
//导入头、尾组件
import Header from '@/components/commons/Header'
import Footer from '@/components/commons/Footer'
// 配置请求根路径
// 本机地址
// axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// 远程后台地址
// axios.defaults.baseURL = '/api'
Vue.use(ElementUI);
Vue.config.productionTip = false
// 挂在到Vue实例，后面可通过this调用
Vue.prototype.$http = axios
axios.defaults.baseURL = "http://localhost:8008"


//注册组件
Vue.component('Header',Header);
Vue.component('Footer',Footer);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
