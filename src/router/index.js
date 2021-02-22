import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import variablesLocales from '@/store/variablesLocales.js';




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
    path: "/conciencia/:tipo",
    name: "Conciencia",
    meta: { requiresAuth : true },
    component: () =>
      import(/* webpackChunckName:"conciencia" */ "../views/Conciencia2.vue"),
  },
 
  {
    path: "/parametros",
    name: "Parametros",
    meta: { requiresAuth : true },
    component: () =>
      import(/* webpackChunckName:"parametros" */ "../views/Parametros.vue"),
  },
  {
    path: "/prevencion/:tipo",
    name: "Prevencion",
    meta: { requiresAuth : true },
    component: () =>
      import(/* webpackChunckName:"prevencion" */ "../views/Prevencion2.vue"),
  },
   {
    path: "/nuevaconciencia",
    name: "Nuevoconciencia",
    meta: { requiresAuth : true },
    component: () =>
      import(/* webpackChunckName:"nuevaconciencia" */ "../components/conciencia/Nuevoconciencia.vue"),
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
    path: "/visorpdf",
    name: "VisorPDF",
    meta: { requiresAuth : true },
    component: () =>
      import(/* webpackChunckName:"visorpdf2" */ "../views/VisorPDF.vue"),
  },
  {
    path: "/estadisticas",
    name: "Estadisticas",
    meta: { requiresAuth : true },
    component: () =>
      import(/* webpackChunckName:"estadisticas" */ "../views/Estadisticas.vue"),
  },
  {
    path: "/estadisticas2",
    name: "Estadisticas2",
    meta: { requiresAuth : true },
    component: () =>
      import(/* webpackChunckName:"estadisticas" */ "../views/Estadisticas2.vue"),
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
   // meta: { requiresAuth : true },
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
    path: "/reporteparaimprimir",
    name: "ReporteImpresion",
    meta: { requiresAuth : true },
    component: () =>
      import(/* webpackChunckName:"reporteparaimprimir" */ "../views/ReporteImpresion.vue"),
  },
  {
    path: "/reporteparaimprimirvaloracion",
    name: "ReporteImpresionValoracion",
    meta: { requiresAuth : true },
    component: () =>
      import(/* webpackChunckName:"reporteparaimprimirvaloracion" */ "../views/ReporteVintegral.vue"),
  },
  {
    path: "/reporteparaimprimircierre",
    name: "ReporteImpresionCierre",
    meta: { requiresAuth : true },
    component: () =>
      import(/* webpackChunckName:"reporteparaimprimircierre" */ "../views/ReporteCierre.vue"),
  },
  {
    path: "/reporteparaimprimirseguimiento",
    name: "ReporteImpresionSeguimiento",
    meta: { requiresAuth : true },
    component: () =>
      import(/* webpackChunckName:"reporteparaimprimirseguimiento" */ "../views/ReporteSeguimiento.vue"),
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
    meta: { requiresAuth : true },
    component: () =>
      import(/* webpackChunckName:"notificacionuno" */ "../views/Notificacionuno.vue"),
  },
   {
    path: "/notificaciondos/:incidenteId/:folio/:esincidente",
    name: "Notificaciondos",
    meta: { requiresAuth : true },
    component: () =>
      import(/* webpackChunckName:"notificaciondos" */ "../views/Notificaciondos.vue"),
  },
  {
    path: "/notificaciontres/:incidenteId/:folio/:esincidente",
    name: "Notificaciontres",
    component: () =>
      import(/* webpackChunckName:"notificaciontres" */ "../views/Notificaciontres.vue"),
  },
  {
    path: "/notificacioncuatro/:incidenteId/:folio/:esincidente",
    name: "Notificacioncuatro",
    meta: { requiresAuth : true },
    component: () =>
      import(/* webpackChunckName:"notificacioncuatro" */ "../views/Notificacioncuatro.vue"),
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
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {

   let id = variablesLocales.getUsuarioId();

    console.log (" valor de id router beforeEach  : " + id);

   if ( id == 0) { 

      next({
        name: "Login"
      });

    }else {
      next();
    }




  } else {
    next();
  }
});

export default router;
