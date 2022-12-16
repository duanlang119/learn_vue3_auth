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
//     name: '��ʦ����',
//     meta: { title: '��ʦ����', icon: 'example' },
//     children: [
//       {
//         path: 'table',
//         name: '��ʦ�б�',
//         component: List,
//         meta: { title: '��ʦ�б�', icon: 'table' }
//       },
//       {
//         path: 'save',
//         name: '��ӽ�ʦ',  
//         component: Save,
//         meta: { title: '��ӽ�ʦ', icon: 'tree' }
//       },
//       {
//         path: 'edit/:id',   
//         name: 'EduTeacherEdit',
//         component: Save,
//         meta: { title: '�༭��ʦ', noCache: true },
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
