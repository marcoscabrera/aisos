<template>
  <v-container name="contenedordenuncias">
    <h2>Reporte Inicial</h2>
    <reporteInicialEtapa></reporteInicialEtapa>
  </v-container>
</template>
<script>
import reporteInicialEtapa from '@/components/etapas/reporteInicialEtapa.vue';
export default {
  name: "Denuncias",

  components : {  reporteInicialEtapa } 

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