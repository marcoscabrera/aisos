<template>
  <v-container name="contenedordasboard">
    <h2>en Dasboard</h2>
  </v-container>
</template>
<script>
export default {
  name: "Dasboard",

  data() {
    return {};
  },

  methods: {
    saludo() {
      console.log("saludos estas en dasboard");
    },
  },

  mounted() {
    this.saludo();
  },
};
</script>

<style scoped>
</style>