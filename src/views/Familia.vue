<template>
  <v-container name="contenedorFamilia">
      <familiaCRUD></familiaCRUD>
  </v-container>
</template>
<script>
import familiaCRUD from '@/components/familia/familiaCRUD.vue';

export default {
  name: "Familia",
  components : {
      familiaCRUD
  },

  data() {
    return {};
  },

  methods: {
    saludo() {
      console.log("saludos estas en familia");
    },
  },

  mounted() {
    this.saludo();
  },
};
</script>

<style scoped>
</style>