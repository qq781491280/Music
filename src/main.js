// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import 'common/stylus/index.styl'
import axios from 'axios'
import api from "./api"
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Swiper, { Pagination, Navigation ,Autoplay} from 'swiper';
import 'swiper/swiper-bundle.css'
Vue.prototype.$axios = axios
// import fastclick from 'fastclick'
// fastclick.atttach(document.body)
Swiper.use([Pagination, Navigation,Autoplay]);
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
Vue.prototype.$api = api
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
