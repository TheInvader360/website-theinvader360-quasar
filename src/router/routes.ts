import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name:'home', component: () => import('src/pages/Home.vue') },
      { path: 'about', name:'about', component: () => import('src/pages/About.vue') },
      { path: 'blog', name:'blog', component: () => import('src/pages/Blog.vue') },
      { path: 'projects-apps', name: 'projectsApps', component: () => import('src/pages/projects/Apps.vue') },
      { path: 'projects-fun', name: 'projectsFun', component: () => import('src/pages/projects/Fun.vue') },
      { path: 'projects-work', name: 'projectsWork', component: () => import('src/pages/projects/Work.vue') },
      { path: 'privacy', name:'privacy', component: () => import('src/pages/Privacy.vue') }
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
