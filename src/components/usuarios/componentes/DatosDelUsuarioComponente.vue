
<template>
  <v-banner
    single-line
  class ="textoSombreado"
  >
    <v-icon
      slot="icon"
      color="warning"
      size="36"
    >
      mdi-account-circle
    </v-icon>
     <strong>
       {{this.$store.state.usuarios.usuarios_usuariologueado.nombre}} 
    </strong> 
     - {{this.programa}}
   
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
        Cerrar Sesión
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
      programa :''

    }
  },

  mounted () {
    this.verprograma();
  },
 
 methods: {
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

.textoSombreado{

  text-shadow: 0.3px 0.3px #0e0000;
}

</style>