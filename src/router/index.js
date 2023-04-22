import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/chatbot',
    name: 'Chatbot',
    component: () => import(/* webpackChunkName: "chatbot" */ '../views/Chatbot.vue')
  },
  {
    path: '/chatbotnumbers',
    name: 'Chatbotnumbers',
    component: () => import(/* webpackChunkName: "chatbot" */ '../components/ChatbotNumbers.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
