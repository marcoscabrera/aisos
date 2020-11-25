<template>
  <v-container name="contenedordenuncias">
    <!-- <h2>Valoracion Inicial</h2> -->
    <reporteInicialEtapa2></reporteInicialEtapa2>
  </v-container>
</template>
<script>
import reporteInicialEtapa2 from "@/components/etapas/reporteInicialEtapa2.vue";
export default {
  name: "Denuncias",

  components: {
    reporteInicialEtapa2,
  },

  data() {
    return {};
  },

  methods: {
    saludo() {
      console.log("saludos estas en denuncias");
    },
  },

  mounted() {
    this.saludo();
  },
};
</script>

<style scoped>
</style>