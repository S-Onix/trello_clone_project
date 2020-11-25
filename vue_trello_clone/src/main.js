import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

// Vue Router 사용하기
Vue.use(VueRouter)

const Login = {
  template : `<div>Login Page</div>`
}
const NotFound = {
  template : `<div>Page not Found</div>`
}

const router = new VueRouter({
  mode : 'history',
  routes : [
    {path : '/' , component : App},
    {path : '/login', component : Login},
    {path: '*', component : NotFound} //위의 규칙을 따르지 않을시 가장 아래 데이터와 메핑된다.
  ]
})

new Vue({
  el: '#app',
  router,
  render: h=>h({template: '<router-view></router-view>'})

})
