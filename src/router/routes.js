const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "user",
        component: () => import("src/pages/UserPage.vue"),
      },
      {
        path: "first-card",
        component: () => import("src/pages/CardInfo/CardOnePage.vue"),
      },
      {
        path: "second-card",
        component: () => import("src/pages/CardInfo/CardTwoPage.vue"),
      },
      {
        path: "third-card",
        component: () => import("src/pages/CardInfo/CardThreePage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
