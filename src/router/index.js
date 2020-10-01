import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () =>
      import(/* webpackChunckName:"dashboard" */ "../views/Dasboard.vue"),
  },
  {
    path: "/conciencia",
    name: "Conciencia",
    component: () =>
      import(/* webpackChunckName:"dashboard" */ "../views/Conciencia.vue"),
  },
  {
    path: "/denuncias",
    name: "Denuncias",
    component: () =>
      import(/* webpackChunckName:"dashboard" */ "../views/Denuncias.vue"),
  },
  {
    path: "/estadisticas",
    name: "Estadisticas",
    component: () =>
      import(/* webpackChunckName:"dashboard" */ "../views/Estadisticas.vue"),
  },
  {
    path: "/configuracion",
    name: "Configuracion",
    component: () =>
      import(/* webpackChunckName:"config" */ "../views/Configuration.vue"),
  },
  {
    path: "/roles",
    name: "Roles",
    component: () =>
      import(/* webpackChunckName:"roles" */ "../views/Roles.vue"),
  },
  {
    path: "/usuarios",
    name: "Usuarios",
    component: () =>
      import(/* webpackChunckName:"usuarios" */ "../views/Usuarios.vue"),
  },
  {
    path: "/criterios",
    name: "Criterios",
    component: () =>
      import(/* webpackChunckName:"criterios" */ "../views/Criterios.vue"),
  },
  {
    path: "/unidades",
    name: "Unidades",
    component: () =>
      import(/* webpackChunckName:"unidades" */ "../views/Unidades.vue"),
  },
  {
    path: "/documentos",
    name: "Documentos",
    component: () =>
      import(/* webpackChunckName:"unidades" */ "../views/Documentos.vue"),
  },
  {
    path: "/cargos",
    name: "CargosSOS",
    component: () =>
      import(/* webpackChunckName:"cargos" */ "../views/CargosSOS.vue"),
  },
  {
    path: "/parentesco",
    name: "Familia",
    component: () =>
      import(/* webpackChunckName:"parentesco" */ "../views/Familia.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
