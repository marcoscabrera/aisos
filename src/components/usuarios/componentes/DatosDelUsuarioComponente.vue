import controlDeSesion from '@/sesion/controlDeSesion.js';
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


export default {
 
 methods: {
   cerrarSesion(){

       this.$store.dispatch('action_usuarios_usuariologueado',null);
       this.$store.dispatch('action_usuarios_usuariologueado_rol',null);
       this.$store.dispatch('actions_uuivars_puedevermenulateral',false);
       this.$store.dispatch('actions_uivars_hayUnUsuarioLogueado',false);
        
      this.$router.push("/login");

    },
 },
}
</script>

<style lang="scss" scoped>

</style>