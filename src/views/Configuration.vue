<template>
  <v-container name="vprincipal.">
    <h2>Configuración</h2>
    <detalleConfiguracion></detalleConfiguracion>
  </v-container>
</template>
<script>
import detalleConfiguracion from "@/components/detalleConfiguracion.vue";
export default {
  name: "Configuration",

  components: {
    detalleConfiguracion,
  },

  data() {
    return {};
  },

  methods: {
    saludo() {
      console.log("saludo");
    },
  },

  mounted() {
    this.saludo();
  },
};
</script>

<style scoped>
</style>