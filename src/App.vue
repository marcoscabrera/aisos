<template>
  <!-- App.vue -->

  <v-app color="indigo">
    <v-navigation-drawer v-model="drawer" app class="barra">
      <!-- -->
      <v-list dense>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img
              src="https://www.aldeasinfantiles.org.mx/getmedia/51757cf7-a274-4bdc-b552-4304db77c698/logo-aldeas-mx"
              alt=""
            />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title color="white"> Aldeas Infantiles </v-list-item-title>
            <v-list-item-subtitle color="white">
              Sistema de registro de incidentes
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="irADashboard" v-if="this.$store.state.uivars.uivars_puedevermenulateral">
          <v-list-item-action>
            <v-icon color="white"> mdi-view-dashboard-variant </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title color="white"> Dashboard </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- <v-list-item @click="irADenuncias">
          <v-list-item-action>
            <v-icon> mdi-alert-circle-outline </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title> Incidentes (Eventual) </v-list-item-title>
          </v-list-item-content>
        </v-list-item> -->

        <v-list-item @click="irAConciencia" v-if="this.$store.state.uivars.uivars_puedevermenulateral">
          <v-list-item-action>
            <v-icon color="white"> mdi-alarm-panel-outline </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title color="white"> Conciencia </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="irAPrevencion" v-if="this.$store.state.uivars.uivars_puedevermenulateral">
          <v-list-item-action>
            <v-icon color="white"> mdi-alarm-panel-outline </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title color="white"> Prevencion </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="irAEstadisticas" v-if="this.$store.state.uivars.uivars_puedevermenulateral">
          <v-list-item-action>
            <v-icon color="white"> mdi-chart-bar </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title color="white"> Estadisticas </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
       
       <!---
        <v-list-item @click="irAconfiguracion" >
          <v-list-item-action>
            <v-icon color="white"> mdi-application-cog </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title color="white"> Configuracion </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        -->

        <v-list-item  @click="cerrarSesion">
          <v-list-item-action>
            <v-icon color="white"> mdi-logout </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title color="white" > Salir </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <!-- -->
      <v-app-bar-nav-icon color="white" @click="drawer = !drawer" />
      <a class="d-inline-block ml-0 mr-2 ml-md-2 router-link-active" href="#" >
            <v-img max-height="50" max-width="120"
                   src="https://www.aldeasinfantiles.org.mx/getmedia/51757cf7-a274-4bdc-b552-4304db77c698/logo-aldeas-mx">
            </v-img>
      </a>
      <v-spacer></v-spacer>
      <v-app-bar-title width="100%" :class="cssResponsiveTexto"
                     
      >
          <span class="bar-title__content_hack">
            <!-- //to-do 
            hacer parametro para cambiar precio
            -->
            Plataforma Interna De Protección Infantil De Aldeas Infantiles
             SOS México IAP
         </span> 
        </v-app-bar-title>
       
    
      
     <ComponenteCardUsuarioLogueado>

     </ComponenteCardUsuarioLogueado>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main class="colorazul">
      <!-- Provides the application the proper gutter -->
      <v-container fluid >
        <!-- If using vue-router -->
        <!--
        <DatosDelUsuarioComponente v-if="this.$store.state.uivars.uivars_hayUnUsuarioLogueado"></DatosDelUsuarioComponente>
         -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
//import DatosDelUsuarioComponente from '@/components/usuarios/componentes/DatosDelUsuarioComponente.vue';
import apiParametros from '@/apialdeas/apiParametros.js';
import controlDeSesion   from '@/sesion/controlDeSesion.js';
import variablesLocales from '@/store/variablesLocales.js';
import ComponenteCardUsuarioLogueado from '@/components/usuarios/componentes/ComponenteCardUsuarioLogueado.vue';

export default {
  name: "App",

  components: {
    //DatosDelUsuarioComponente
    ComponenteCardUsuarioLogueado

  },
 
  computed : {

   /* css(){

         switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 'cssXS_SM'
          case 'sm': return 'cssXS_SM'
          case 'md': return 'cssMD_LG'
          case 'lg': return 'cssMD_LG'
          case 'xl': return 'cssMD_LG'
           default :'cssMD_LG'
        }
    }*/
  },

  data: () => ({
    drawer: false,
    puedeCrearCatalogos: false,
    puedevermenulateral :false,
    imagenLogin: '',
    cssResponsiveTexto : '',
    PuedeVerConfiguracion : false,
  }),
  mounted () {
    this.crearToken();
     this.cargarLosParametros();
    this.mostrarMenuLateral();
    this. claseCss();
    



   },  
  methods: {
   
   claseCss () {
         
         let valor  = '' ; 
         console.log(" >>>>>> VALOR BREAKPOINT.NAME >>>>>> " + this.$vuetify.breakpoint.name);
         switch (this.$vuetify.breakpoint.name) {
          case 'xs': 
           valor =  'cssXS_SM';
           break;
          case 'sm':  valor = 'cssXS_SM';
           break;

          case 'md':  valor = 'cssMD_LG';
          break;
          case 'lg':  valor = 'cssMD_LG';
          break;
          case 'xl':  valor = 'cssMD_LG';
          break;
         
        }
        
        return this.cssResponsiveTexto = valor;
   },

    crearToken(){
       variablesLocales.setearToken('xxxx');
      variablesLocales.setUsuarioId('');
     
    },

    async cargarLosParametros() {

      let p = apiParametros.cargar__todos__los__parametros(this.$store);
      
       p
      .then( response => { console.log(JSON.stringify(response.data));
            
            console.log( response.data[4]['valor'] );
            this.$store.dispatch('actions_uivars_parametro_imagenLogin', response.data[4]['valor']);
            
     
     } )
      .catch( error => { console.log(JSON.stringify(error.data))});
   },
 
    mostrarMenuLateral(){

      let usurio = this.$store.state.usuarios.usuarios_usuariologueado;
      usurio == "" ?  this.puedevermenulateral = false : this.puedevermenulateral = <i class="fas fa-truck-container    "></i>;
   
   

    },
        verificarPermisos() {
    
    let permisosDeRol = this.$store.state.usuarios.usuarios_usuariologueado_rol;
    console.log( permisosDeRol.ALTADECATALOGOS);
  
    
   
    permisosDeRol.ALTADECATALOGOS == "SI" ?  this.puedeCrearCatalogos = true : this.puedeCrearCatalogos = false;
   
      

    },
    cerrarSesion(){



        controlDeSesion.cerrarSesion(this.$store,this.$router);


    },
    irAconfiguracion() {
      this.$router.push("/configuracion");
    },
    irADashboard() {
      this.$router.push("/dashboard");
    },
    irADenuncias() {
      this.$router.push("/denuncias");
    },
    irAConciencia() {
       this.$store.dispatch('actions_uivars_tipo_conciencia_o_prevencion', 'conciencia');
      this.$router.push({ name : 'Conciencia' , params:{ tipo:'c' }});
    },
    irAPrevencion() {
     this.$store.dispatch('actions_uivars_tipo_conciencia_o_prevencion', 'prevencion');
     this.$router.push({ name : 'Prevencion' , params:{ tipo:'p' }});
  
    },
    irAEstadisticas() {
      this.$router.push("/estadisticas");
    },
  },
};
</script>
<style >

.cssMD_LG{
 
  color: white !important;
  /* text-overflow: clip !important;*/
    overflow: unset !important;
    text-overflow: unset !important;
    white-space: nowrap;

}

.cssXS_SM{
 
  color: white !important;
  font-size: 0.65em;
   text-overflow: clip !important;

}
/*
Para eveitar que el titulo de la plataforma muestre los  3 punto 
que se muiestran cuando el text-overflow es igual a elipsis: 

 */
.correcion_titulo_sin_elipsis {
    overflow: unset;
    text-overflow: clip !important;
    white-space: nowrap;
}

/*
La clase a continuacion pertenece a el framework vuetify
 */
 .bar-title__content_hack {
    overflow: unset !important;
    text-overflow: unset !important;
    white-space: nowrap;
}

.v-app-bar-title__placeholder, .v-app-bar-title__content {
    overflow: unset !important;
    text-overflow: ellipsis;
    white-space: nowrap;
}

/*.v-app-bar-title__content{
  color : rgb(237, 238, 234) !important;
  overflow: unset !important;
  text-overflow: unset !important;
  white-space: nowrap;

}*/
.letrasBlancasEnTitulo{
  color: white !important;
}
.colorazul{
 
   background-color: rgb(212,237,250) !important;
}
.theme--light.v-app-bar.v-toolbar.v-sheet {
    background-color: rgb(0,158,224) !important;
}
.theme--light.v-navigation-drawer {
    background-color:rgb(92,197,237) !important;
}
 .v-navigation-drawer__content{

   color : rgb(92,197,237)
 }

</style>
