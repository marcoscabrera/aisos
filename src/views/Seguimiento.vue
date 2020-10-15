<template>
  <v-container name="contenedorseguimiento">
    <!-- <h2>Valoracion Inicial</h2> -->
    <seguimientoEtapa></seguimientoEtapa>
  </v-container>
</template>
<script>
import seguimientoEtapa from "@/components/etapas/seguimientoEtapa.vue";
export default {
  name: "Denuncias",

  components: { seguimientoEtapa },

  data() {
    return {};
  },

  methods: {
    saludo() {
      console.log("saludos estas en seguimiento");
    },
  },

  mounted() {
    this.saludo();
  },
};
</script>

<style scoped>
</style>