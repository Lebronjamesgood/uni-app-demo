import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
Vue.use(uView);
Vue.config.productionTip = false
import { myHttp } from './common/js/request.js'
App.mpType = 'app'
Vue.prototype.$myHttp = myHttp
const app = new Vue({
    ...App
})
app.$mount()
