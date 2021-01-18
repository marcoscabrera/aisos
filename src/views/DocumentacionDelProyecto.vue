<template>
  <v-container name="DocumentacionProyecto">
    <prop-doc :component="MiBotonDePrueba"></prop-doc>
  </v-container>
</template>
<script>
import propDoc from 'propdoc';
import MiBotonDePrueba from '@/components/MiBotonDePrueba.vue';

export default {
  name: "Cargos",
  components : {
      propDoc
  },

  data() {
    return {
        MiBotonDePrueba
    };
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