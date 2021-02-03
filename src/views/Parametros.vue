<template>
  <v-container name="container_parametros">
    <ParametrosPrincipal></ParametrosPrincipal>
  </v-container>
</template>
<script>
import ParametrosPrincipal from "@/components/catalogos/ParametrosPrincipal.vue";
import controlDeSesion from '@/sesion/controlDeSesion.js';

export default {
  name: "Parametros",
  components: {
    ParametrosPrincipal,
  },
  methods: {
    permiso() {
      if (controlDeSesion.tienePermisoParaAcceder("ALTADECATALOGOS", this.$store) == false ){
          this.$router.push("/notificaionnoautorizado");
      }
    }
  },
  mounted () {
    this.permiso();
  },
};
</script>
<style >
</style>