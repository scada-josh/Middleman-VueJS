'use strict'

import Vue from  'vue';
import App from  './javascript-ch08-communicate-components/partials/vue/components/App.vue'

export const eventBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})


