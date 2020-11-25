import Vue from 'vue'
import Home from '../components/Home'
import Login from '../components/Login'
import NotFound from '../components/NotFound'
import Board from '../components/Board'
import VueRouter from 'vue-router'

// Vue Router 사용하기
Vue.use(VueRouter)

const router = new VueRouter({
  mode : 'history',
  routes : [
    {path : '/' , component : Home},
    {path : '/login', component : Login},
    {path : '/b/:bid', component : Board}, // bid라는 변수가 들어간다.
    {path: '*', component : NotFound} //위의 규칙을 따르지 않을시 가장 아래 데이터와 메핑된다.
  ]
})

// 모듈로 사용할수 있게 export해준다.
export default router