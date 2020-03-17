import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import { currentAuthenticatedUser } from '@/plugins/amplify'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      requiresAuth: true,
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

async function routing(to, from, next) {
  if (to.matched.every(record => !record.meta.requiresAuth)) {
    return next()
  }

  try {
    // 認証が必要なページのハンドリング
    await currentAuthenticatedUser();
    return next()
  } catch (e) {
    return next({ path: '/' })
  }
}

router.beforeEach(routing)

export default router
