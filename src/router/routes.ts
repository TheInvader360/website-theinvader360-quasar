import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name:'home', component: () => import('src/pages/Home.vue') },
      { path: 'about', name:'about', component: () => import('src/pages/About.vue') },
      { path: 'blog', name:'blog', component: () => import('src/pages/Blog.vue') },
      { path: 'apps', name: 'appProjects', component: () => import('src/pages/projects/Apps.vue') },
      { path: 'apps/:id', name: 'appProject', component: () => import('src/pages/projects/App.vue'), props: true },
      { path: 'fun', name: 'funProjects', component: () => import('src/pages/projects/Fun.vue') },
      { path: 'fun/:id', name: 'funProject', component: () => import('src/pages/projects/FunProject.vue'), props: true },
      { path: 'work', name: 'workProjects', component: () => import('src/pages/projects/Work.vue') },
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
