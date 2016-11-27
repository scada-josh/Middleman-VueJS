'use strict'

import Vue from 'vue';
import App from './javascript-vue-02/partials/vue/components/App.vue'
import Home from './javascript-vue-02/partials/vue/components/Home.vue'

Vue.component('server-status', Home);

new Vue({
  el: '#app',
  render: h => h(App)
})


