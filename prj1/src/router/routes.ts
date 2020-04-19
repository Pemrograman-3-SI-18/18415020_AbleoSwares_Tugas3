import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '/admin',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/admin/home/DataBuku.vue') },
      { path: 'inputdatabuku', component: () => import('pages/admin/home/InputDataBuku.vue') },
      { path: 'datatransaksi', component: () => import('pages/admin/transaksi/DataTransaksi.vue') }]
  },
  {
    path: '/pembeli',
    component: () => import('layouts/PembeliLayout.vue'),
    children: [{ path: '', component: () => import('pages/pembeli/DataBuku/DataBuku.vue') },
      { path: 'transaksi', component: () => import('pages/pembeli/Transaksi/Transaksi.vue') }]
  },
  {
    path: '/',
    component: () => import('layouts/LoginRegisLayout.vue'),
    children: [{ path: 'auth/login', component: () => import('pages/users/Login.vue') },
      { path: 'auth/registrasi', component: () => import('pages/users/Registrasi.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
