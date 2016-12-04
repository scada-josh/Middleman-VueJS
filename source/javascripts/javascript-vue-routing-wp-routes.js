import Home from  './javascript-vue-routing/partials/vue/components/Menu/Home.vue';
import User from  './javascript-vue-routing/partials/vue/components/Menu/User/User.vue';

// const ItWorks = {
//   template: '<div>It works!</div>'
// }

// export const routes = [
// 	{ path: '', component: ItWorks},
// 	{ path: '/', component: ItWorks},
// 	{ path: '/user', component: User},
// 	{ path: 'http://localhost/Middleman-VueJS/build/src/desktop/vue-routing/', component: ItWorks},
// 	{ path: '/Middleman-VueJS/build/src/desktop/vue-routing/', component: ItWorks},
// 	{ path: '/build/src/desktop/vue-routing/', component: ItWorks},
// 	{ path: '*', redirect: '/'}
// ];


export const routes = [
  { path: '/', component: Home },
  { path: '/user', component: User },
  { path: '*', redirect: '/'}
];



// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }


// export const routes = [
//   { path: '/foo', component: Foo },
//   { path: '/bar', component: Bar },
//   { path: '/ee', component: Bar },
//   { path: '*', redirect: '/ee'}
// ];
