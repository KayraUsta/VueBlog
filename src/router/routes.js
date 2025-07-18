const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },
    {
    path: '/cv',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/cv.vue') }
    ]
  },
  {
    path: '/maintenance',
    children: [
      { path: '', component: () => import('pages/maintenance.vue') }
    ]
  },  

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/maintenance.vue')
  }
]

export default routes
