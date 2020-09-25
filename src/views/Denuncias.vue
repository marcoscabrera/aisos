<template>
  <v-container name="contenedordenuncias">
    <h2>en denuncias</h2>
  </v-container>
</template>
<script>
export default {
  name: "Denuncias",

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