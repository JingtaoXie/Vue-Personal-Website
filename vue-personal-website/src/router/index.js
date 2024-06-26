import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '@/components/Homepage.vue'
import Education from '@/components/Education.vue'
import SkillAndIntro from '@/components/SkillandIntro.vue'
import WorkingExp from '@/components/WorkingExp.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Homepage
  },
  {
    path: '/Education',
    name: 'Education',
    component: Education
  },
  {
    path: '/Skill',
    name: 'SkillAndIntro',
    component: SkillAndIntro
  },
  {
    path: '/Work',
    name: 'WorkingExp',
    component: WorkingExp
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router