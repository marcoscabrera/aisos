
<template>
  <v-banner
    single-line
   
  >
    <v-icon
      slot="icon"
      color="warning"
      size="36"
    >
      mdi-account-circle
    </v-icon>
   {{this.$store.state.usuarios.usuarios_usuariologueado.nombre}} - <strong>
     Programa : {{this.$store.state.usuarios.usuarios_usuariologueado.programa}}</strong> 
     <strong>
   Rol:
   </strong>
   {{this.$store.state.usuarios.usuarios_usuariologueado_rol.NOMBREDELROL}}-
    <template v-slot:actions>
      <v-btn
        color="primary"
        text
        @click="cerrarSesion"
      >
        Salir
      </v-btn>
    </template>
  </v-banner>
</template>



<script>
//import controlDeSesion from '@/sesion/controlDeSesion.js';

import controlDeSesion from '@/sesion/controlDeSesion.js';
export default {
 
 methods: {
   cerrarSesion(){
    

      controlDeSesion.cerrarSesion(this.$store,this.$router);

    },
 },
}
</script>

<style lang="scss" scoped>

</style>