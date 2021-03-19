
<template>
  <v-banner
    single-line
    class ="textoSombreado"
  >
    <v-icon
      slot="icon"
      color="warning"
      :size="letraResponsive"
    >
      mdi-account-circle
    </v-icon>
    <span :style="estiloResponsivo">
          <strong >
            {{this.$store.state.usuarios.usuarios_usuariologueado.nombre}} 
          </strong> 
          - {{this.programa}}
   </span>
   <!--
     <strong>
   Rol:
   </strong>
   {{this.$store.state.usuarios.usuarios_usuariologueado_rol.NOMBREDELROL}}-
   -->
  
  
  <template v-slot:actions>
    <!--    <v-badge
        :content="messages"
        :value="messages"
        color="green"
        overlap
      >
        <v-icon large>
          mdi-bell
        </v-icon>
      </v-badge>
      <v-badge
        :content="messages"
        :value="messages"
        color="green"
        overlap
      >
        <v-icon large>
          mdi-newspaper-variant-multiple
        </v-icon>
      </v-badge>
      
      <v-badge

        color="green"
        overlap
      >-->
        <v-icon large
        class="d-none d-sm-flex d-sm-none d-md-flex"
         @click="ir__perfil">
         mdi-cog
        </v-icon>
    <!--  </v-badge> -->


            <!-- Actividades -->
  <!--    <v-badge
        :content="messages"
        :value="messages"
        color="green"
        overlap
      >
          <v-btn
            color="primary"
            dark
            dense
            @click="ir__perfil"
          >
          Actividad
          </v-btn>
      </v-badge> -->
      <!-- -->
      <!-- SOlicitudes -->

      <!-- <v-badge
        :content="messages"
        :value="messages"
        color="green"
        overlap
      >
          <v-btn
            color="primary"
            dark
            dense
            @click="ir__perfil"
          >
          Solicitudes
          </v-btn> 
      </v-badge>-->
      <!-- -->


      <v-btn
        color="primary"
        text
        @click="cerrarSesion"
      >
      <v-icon class="d-flex d-sm-none d-none d-sm-flex d-md-none" large>
        mdi-exit-to-app
      </v-icon>
       <span class="d-none d-sm-flex d-sm-none d-md-flex">
         Cerrar Sesión
       </span>
        
      </v-btn>
    </template>
  </v-banner>
</template>



<script>
//import controlDeSesion from '@/sesion/controlDeSesion.js';

import controlDeSesion from '@/sesion/controlDeSesion.js';
  
export default {
  data() {
    return {
      messages: 0,
      programa :'',
      letraResponsive :36,
      estiloResponsivo :''

    }
  },

  mounted () {
    this.verprograma();
    this.buscarVersionViewport();
  },
 
 methods: {
 
   cssXS_SM(){

      this.letraResponsive =24;
      this.estiloResponsivo ='estiloResponsivo_mobile';

    },
    cssMD_LG(){

       this.letraResponsive =36;
       this.estiloResponsivo ='estiloResponsivo_desktop';

    },
    /* Esta funcion cambia las clases para que el componente sea 
    responsive a  detalle */
    buscarVersionViewport() {
      
        

         console.log(" <<<<<< VALOR BREAKPOINT.NAME >>>>>> " + this.$vuetify.breakpoint.name);
         
         switch (this.$vuetify.breakpoint.name) {
            case 'xs': 
            this.cssXS_SM();
            break;

            case 'sm':  
            this.cssXS_SM();
            break;

            case 'md':  
           this.cssMD_LG();
            break;

            case 'lg':  
            this.cssMD_LG();
            break;

            case 'xl':  
           this.cssMD_LG();
            break;
        }
    },

   verprograma(){
  if (this.$store.state.usuarios.usuarios_usuariologueado.programa == 'TODOS'){
    this.programa ="Equipo Nacional de Protección Infantil ";
  }else{
    this.programa = this.$store.state.usuarios.usuarios_usuariologueado.programa;
  }
   },
   ir__perfil(){
   this.$router.push({name : 'PerfilUsuario'});
   },
   cerrarSesion(){
    

      controlDeSesion.cerrarSesion(this.$store,this.$router);

    },
 },
}
</script>

<style scoped>

.estiloResponsivo_mobile{

  font-size :0.6em;
}
.estiloResponsivo_desktop{

  font-size :1.6em;
}

.textoSombreado{

  text-shadow: 0.3px 0.3px #0e0000;
}

.minimoBotonEnBarra{
  min-width: 55px;
}
</style>