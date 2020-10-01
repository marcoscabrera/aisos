<template>
  <v-container name="contenedorCargos">
      <cargosCRUD></cargosCRUD>
  </v-container>
</template>
<script>
import cargosCRUD from '@/components/cargos/cargosCRUD.vue';

export default {
  name: "Cargos",
  components : {
      cargosCRUD
  },

  data() {
    return {};
  },

  methods: {
    saludo() {
      console.log("saludos estas en cargos");
    },
  },

  mounted() {
    this.saludo();
  },
};
</script>

<style scoped>
</style>