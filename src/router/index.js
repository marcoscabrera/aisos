import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "@/store/index.js";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: { name: 'Login' }
  },
  {
    path: "/documentacionproyecto",
    name: "DocumentacionDelProyecto",
    component: () =>
      import(/* webpackChunckName:"documentacionproyecto" */ "../views/DocumentacionDelProyecto.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    meta: { requiresAuth : true },
    component: () =>
      import(/* webpackChunckName:"dashboard" */ "../views/Dasboard.vue"),
  },
  {
    path: "/conciencia",
    name: "Conciencia",
    meta: { requiresAuth : true },
    component: () =>
      import(/* webpackChunckName:"conciencia" */ "../views/Conciencia.vue"),
  },
  {
    path: "/denuncias",
    name: "Denuncias",
    meta: { requiresAuth : true },
    component: () =>
      import(/* webpackChunckName:"denuncias" */ "../views/Denuncias.vue"),
  },
 {
    path: "/denuncias/:id",
    name: "DenunciasDetalle",
    meta: { requiresAuth : true },
    component: () =>
      import(/* webpackChunckName:"denunciasdetalle" */ "../views/Denuncias.vue"),
  },
    {
    path: "/valoracionintegral/:id",
    name: "ValoracionIntegral",
    meta: { requiresAuth : true },
    component: () =>
      import(/* webpackChunckName:"valoracionintegral" */ "../views/ValoracionIntegral.vue"),
  },
  {
    path: "/estadisticas",
    name: "Estadisticas",
    meta: { requiresAuth : true },
    component: () =>
      import(/* webpackChunckName:"estadisticas" */ "../views/Estadisticas.vue"),
  },
  {
    path: "/configuracion",
    name: "Configuracion",
    meta: { requiresAuth : true },
    component: () =>
      import(/* webpackChunckName:"config" */ "../views/Configuration.vue"),
  },
  {
    path: "/roles",
    name: "Roles",
    meta: { requiresAuth : true },
    component: () =>
      import(/* webpackChunckName:"roles" */ "../views/Roles.vue"),
  },
  {
    path: "/nuevorol",
    name: "Nuevorol",
    meta: { requiresAuth : true },
    component: () =>
      import(/* webpackChunckName:"nuevorol" */ "../views/NuevoRol.vue"),
  },
  {
    path: "/usuarios",
    name: "Usuarios",
    meta: { requiresAuth : true },
    component: () =>
      import(/* webpackChunckName:"usuarios" */ "../views/Usuarios.vue"),
  },
  {
    path: "/nuevousuario",
    name: "Nuevousuario",
    meta: { requiresAuth : true },
    component: () =>
      import(/* webpackChunckName:"nuevousuario" */ "../views/NuevoUsuario.vue"),
  },
  {
    path: "/acuerdo",
    name: "Acuerdo",
    meta: { requiresAuth : true },
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
    meta: { requiresAuth : true },
    component: () =>
      import(/* webpackChunckName:"criterios" */ "../views/Criterios.vue"),
  },
  {
    path: "/unidades",
    name: "Unidades",
    meta: { requiresAuth : true },
    component: () =>
      import(/* webpackChunckName:"unidades" */ "../views/Unidades.vue"),
  },
  {
    path: "/documentos",
    name: "Documentos",
    meta: { requiresAuth : true },
    component: () =>
      import(/* webpackChunckName:"unidades" */ "../views/Documentos.vue"),
  },
  {
    path: "/cargos",
    name: "CargosSOS",
    meta: { requiresAuth : true },
    component: () =>
      import(/* webpackChunckName:"cargos" */ "../views/CargosSOS.vue"),
  },
  
    {
    path: "/seguimiento",
    name: "Seguimiento",
    meta: { requiresAuth : true },
    component: () =>
      import(/* webpackChunckName:"seguimiento" */ "../views/Seguimiento.vue"),
  },
      {
    path: "/cierre/:incidenteId",
    name: "Cierre",
    meta: { requiresAuth : true },
    component: () =>
      import(/* webpackChunckName:"cierre" */ "../views/Cierre.vue"),
  }
  ,
      {
    path: "/denuncialegal/:denunciaId",
    name: "DenunciaLegal",
    meta: { requiresAuth : true },
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
    path: "/notificacionnoautorizado",
    name: "NotificacionNoAutorizado",
    component: () =>
      import(/* webpackChunckName:"notificacionnoautorizado" */ "../views/Notificacion_noautorizado.vue"),
  },
  {
    path: "/permisoimpresion/:incidenteId",
    name: "PermisoImpresion",
    meta: { requiresAuth : true },
    component: () =>
      import(/* webpackChunckName:"permisoimpresion" */ "../views/permisoimpresion.vue"),
  },
      {
    path: "/investigacioninterna/:incidenteId",
    name: "InvestigacionInterna",
    meta: { requiresAuth : true },
    component: () =>
      import(/* webpackChunckName:"denuncialegal" */ "../views/InvestigacionInterna.vue"),
  },
      
  {
    path: "/prevencion",
    name: "Prevencion",
    meta: { requiresAuth : true },
    component: () =>
      import(/* webpackChunckName:"prevencion" */ "../views/Prevencion.vue"),
  },
  {
    path: "/evidencias/:incidenteId",
    name: "Evidencias",
    meta: { requiresAuth : true },
    component: () =>
      import(/* webpackChunckName:"evidencias" */ "../views/Evidencias.vue"),
  },
  {
    path: "/evidencias/agregar/:incidenteId",
    name: "EvidenciasAgregar",
    meta: { requiresAuth : true },
    component: () =>
      import(/* webpackChunckName:"evidencias" */ "../views/EvidenciasAgregar.vue"),
  },
  {
    path: "/subirarchivos",
    name: "SubirArchivos",
    meta: { requiresAuth : true },
    component: () =>
      import(/* webpackChunckName:"subirarchivos" */ "../views/subirArchivo.vue"),
  },
    {
    path: "/catalogos/programas",
    name: "Programas",
    meta: { requiresAuth : true },
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
router.beforeEach(  (to, from , next ) => {

  if (to.meta.requiresAuth) {
       
   
    let usuario =store.state.usuarios.usuarios_usuariologueado;

    let lusuario = usuario.length;

    console.log("valor usuario "+ lusuario);
      
    if (usuario == 0){
      next({
        name:"Login"
      });
    }else {
      next();
    }


  }else {

    next();
  }

});
export default router;
