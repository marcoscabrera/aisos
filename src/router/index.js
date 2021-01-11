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
      import(/* webpackChunckName:"conciencia" */ "../views/Conciencia.vue"),
  },
  {
    path: "/denuncias",
    name: "Denuncias",
    component: () =>
      import(/* webpackChunckName:"denuncias" */ "../views/Denuncias.vue"),
  },
 {
    path: "/denuncias/:id",
    name: "DenunciasDetalle",
    component: () =>
      import(/* webpackChunckName:"denunciasdetalle" */ "../views/Denuncias.vue"),
  },
    {
    path: "/valoracionintegral/:id",
    name: "ValoracionIntegral",
    component: () =>
      import(/* webpackChunckName:"valoracionintegral" */ "../views/ValoracionIntegral.vue"),
  },
  {
    path: "/estadisticas",
    name: "Estadisticas",
    component: () =>
      import(/* webpackChunckName:"estadisticas" */ "../views/Estadisticas.vue"),
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
    path: "/nuevorol",
    name: "Nuevorol",
    component: () =>
      import(/* webpackChunckName:"nuevorol" */ "../views/NuevoRol.vue"),
  },
  {
    path: "/usuarios",
    name: "Usuarios",
    component: () =>
      import(/* webpackChunckName:"usuarios" */ "../views/Usuarios.vue"),
  },
  {
    path: "/nuevousuario",
    name: "Nuevousuario",
    component: () =>
      import(/* webpackChunckName:"nuevousuario" */ "../views/NuevoUsuario.vue"),
  },
  {
    path: "/acuerdo",
    name: "Acuerdo",
    component: () =>
      import(/* webpackChunckName:"acuerdo" */ "../views/Acuerdo.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunckName:"login" */ "../views/Login.vue"),
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
    path: "/seguimiento",
    name: "Seguimiento",
    component: () =>
      import(/* webpackChunckName:"seguimiento" */ "../views/Seguimiento.vue"),
  },
      {
    path: "/cierre/:incidenteId",
    name: "Cierre",
    component: () =>
      import(/* webpackChunckName:"cierre" */ "../views/Cierre.vue"),
  }
  ,
      {
    path: "/denuncialegal/:denunciaId",
    name: "DenunciaLegal",
    component: () =>
      import(/* webpackChunckName:"denuncialegal" */ "../views/DenunciaLegal.vue"),
  },
      {
    path: "/notificacionuno/:incidenteId/:folio",
    name: "Notificacionuno",
    component: () =>
      import(/* webpackChunckName:"notificacionuno" */ "../views/Notificacionuno.vue"),
  },
   {
    path: "/notificaciondos/:incidenteId/:folio/:esincidente",
    name: "Notificaciondos",
    component: () =>
      import(/* webpackChunckName:"notificaciondos" */ "../views/Notificaciondos.vue"),
  },
  {
    path: "/permisoimpresion/:incidenteId",
    name: "PermisoImpresion",
    component: () =>
      import(/* webpackChunckName:"permisoimpresion" */ "../views/permisoimpresion.vue"),
  },
      {
    path: "/investigacioninterna/:incidenteId",
    name: "InvestigacionInterna",
    component: () =>
      import(/* webpackChunckName:"denuncialegal" */ "../views/InvestigacionInterna.vue"),
  },
      
  {
    path: "/prevencion",
    name: "Prevencion",
    component: () =>
      import(/* webpackChunckName:"prevencion" */ "../views/Prevencion.vue"),
  },
  {
    path: "/evidencias/:incidenteId",
    name: "Evidencias",
    component: () =>
      import(/* webpackChunckName:"evidencias" */ "../views/Evidencias.vue"),
  },
  {
    path: "/evidencias/agregar/:incidenteId",
    name: "EvidenciasAgregar",
    component: () =>
      import(/* webpackChunckName:"evidencias" */ "../views/EvidenciasAgregar.vue"),
  },
  {
    path: "/subirarchivos",
    name: "SubirArchivos",
    component: () =>
      import(/* webpackChunckName:"subirarchivos" */ "../views/subirArchivo.vue"),
  },
    {
    path: "/catalogos/programas",
    name: "Programas",
    component: () =>
      import(/* webpackChunckName:"programas" */ "../views/Programas.vue"),
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
