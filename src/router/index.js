import { createRouter, createWebHistory } from "vue-router";

import DefaultLayout from '@/layouts/DefaultLayout'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: DefaultLayout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () =>import( '@/views/Dashboard.vue'),
      },
      {
    path: "/user-management",
    name: "usermanagement",
    component: () => import("../views/userManagement/UserManagement.vue"),
  
  },
  {
    path: "/settings",
    name: "settings",
    component: () => import("../views/settings/SettingsView.vue"),
  },
    ],
  },
  {
    path: "/login",
    name: "userlogin",
    component: () => import("../views/user/UserLogin.vue"),
  },
  {
    path: "/registration",
    name: "userregistration",
    component: () => import("../views/user/UserRegistration.vue"),
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: "exactActiveLink",
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (!localStorage.getItem("role")) {
//       next({
//         path: "/login",
//       });
//     } else if (
//       to.meta.roles &&
//       !to.meta.roles.includes(localStorage.getItem("role"))
//     ) {
//       next({ name: "settings" });
//     } else {
//       next();
//     }
//   } else if (to.fullPath === "/login" && localStorage.getItem("role")) {
//     next({
//       path: "/",
//     });
//   } else {
//     next();
//   }
// });

export default router;
