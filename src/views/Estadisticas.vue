<template>
  <v-container name="contenedorestadisticas">
    <h2>en Estadisticas</h2>
  </v-container>
</template>
<script>
export default {
  name: "Estadisticas",

  data() {
    return {};
  },

  methods: {
    saludo() {
      console.log("saludos estas en Estadisticas");
    },
  },

  mounted() {
    this.saludo();
  },
};
</script>

<style scoped>
</style>