// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

//引入Element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//引入Echarts
import echarts from 'echarts';
Vue.prototype.$echarts = echarts;

Vue.use(ElementUI);
Vue.config.productionTip = false;

import BaiduMap from 'vue-baidu-map';
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的我的密钥
  ak:'TikutzZDFrTsnHkUd02DO67UpZjW4PUG'
});

//轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
Vue.use(VueAwesomeSwiper);

//文字滚动
import scroll from 'vue-seamless-scroll';
Vue.use(scroll);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
