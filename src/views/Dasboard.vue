<template>
  <!-- <v-container name="contenedordasboard">
    <h2>Dashboard</h2> 
    <dashboardVista></dashboardVista>-->
 <!--  </v-container> -->

 <dashboardDatos></dashboardDatos>

</template>
<script>
//import dashboardVista from '@/components/dashboard/dashboardVista.vue';
import dashboardDatos from '@/components/dashboard/dashboardDatos.vue';

export default {
  name: "Dasboard",

  components : {
    dashboardDatos
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