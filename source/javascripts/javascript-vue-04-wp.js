'use strict'

import Vue from 'vue';
import App from './javascript-vue-04/partials/vue/components/App.vue'
import Home from './javascript-vue-04/partials/vue/components/Home.vue'

Vue.component('app-servers', Home);

new Vue({
  el: '#app',
  render: h => h(App)
})


