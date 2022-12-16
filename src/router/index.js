import { 
    createRouter,
    createWebHashHistory
} from 'vue-router'

import Index from '@/pages/index.vue'
import Login from '@/pages/login.vue'
import NotFound from '@/pages/404.vue'
/* Layout */
// import Layout from '@/views/layout/Layout.vue'
// import List from '@/views/edu/teacher/list.vue'
// import Save from '@/views/edu/teacher/save.vue'

const routes = [
    {
    path:"/",
    component:Index
},
// {
//     path: '/',
//     component: Layout,
//     redirect: '/dashboard',
//     name: 'Dashboard',
//     hidden: true,
//     children: [{
//       path: 'dashboard',
//       component: () => import('@/views/dashboard/index')
//     }]
//   },

{
    path:"/login",
    component:Login
},  
// {
//     path: '/teacher',
//     component: Layout,
//     redirect: '/teacher/table',
//     name: '讲师管理',
//     meta: { title: '讲师管理', icon: 'example' },
//     children: [
//       {
//         path: 'table',
//         name: '讲师列表',
//         component: List,
//         meta: { title: '讲师列表', icon: 'table' }
//       },
//       {
//         path: 'save',
//         name: '添加讲师',  
//         component: Save,
//         meta: { title: '添加讲师', icon: 'tree' }
//       },
//       {
//         path: 'edit/:id',   
//         name: 'EduTeacherEdit',
//         component: Save,
//         meta: { title: '编辑讲师', noCache: true },
//         hidden: true
//       }
//     ]
//   },
{
    path: "/study",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "study" */ "../views/study/017/Home.vue"),
  },
{ 
    path: '/:pathMatch(.*)*', 
    name: 'NotFound', 
    component: NotFound 
}]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router;
