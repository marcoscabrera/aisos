<template>
  <v-container name="contenedordasboard">
    <h2>en Dashboard</h2>
    <dashboardVista></dashboardVista>
  </v-container>
</template>
<script>
import dashboardVista from '@/components/dashboard/dashboardVista.vue';
export default {
  name: "Dasboard",

  components : {
    dashboardVista
  },

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