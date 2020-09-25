<template>
  <v-container name="contenedorconciencias">
    <h2>en conciencia</h2>
  </v-container>
</template>
<script>
export default {
  name: "Conciencia",

  data() {
    return {};
  },

  methods: {
    saludo() {
      console.log("saludos estas en Conciencia");
    },
  },

  mounted() {
    this.saludo();
  },
};
</script>

<style scoped>
</style>