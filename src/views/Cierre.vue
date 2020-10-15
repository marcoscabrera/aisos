<template>
  <v-container>
    <v-container name="contenedorCierre">
      <!-- <h2>Valoracion Inicial</h2> -->
      <cierreEtapa></cierreEtapa>
    </v-container>
  </v-container>
</template>
<script>
import cierreEtapa from "@/components/etapas/cierreEtapa.vue";
export default {
  name: "Cierre",

  components: { cierreEtapa },

  data() {
    return {};
  },

  methods: {
    saludo() {
      console.log("saludos estas en cierre");
    },
  },

  mounted() {
    this.saludo();
  },
};
</script>

<style scoped>
</style>