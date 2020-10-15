<template>
  <v-container name="contenedorvaloracioninicial">
    <!-- <h2>Valoracion Inicial</h2> -->
    <valoracionIntegralEtapa></valoracionIntegralEtapa>
  </v-container>
</template>
<script>
import valoracionIntegralEtapa from "@/components/etapas/valoracionIntegralEtapa.vue";
export default {
  name: "Denuncias",

  components: { valoracionIntegralEtapa },

  data() {
    return {};
  },

  methods: {
    saludo() {
      console.log("saludos estas en valoracion inicial");
    },
  },

  mounted() {
    this.saludo();
  },
};
</script>

<style scoped>
</style>