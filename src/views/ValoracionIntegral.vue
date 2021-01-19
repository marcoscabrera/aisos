<template>
  <v-container name="contenedorvaloracioninicial">
    <!-- <h2>Valoracion Inicial</h2> -->
    <valoracionIntegralEtapa></valoracionIntegralEtapa>
  </v-container>
</template>
<script>
import valoracionIntegralEtapa from "@/components/etapas/valoracionIntegralEtapa.vue";
import controlDeSesion from '@/sesion/controlDeSesion.js';

export default {
  name: "Denuncias",

  components: { valoracionIntegralEtapa },

  data() {
    return {};
  },

  methods: {
    permiso() {
      if (controlDeSesion.tienePermisoParaAcceder("VISUALIZACIONVALORACIONINTEGRAL", this.$store) == false ){
          this.$router.push("/notificaionnoautorizado");
      }
    }
  },
  mounted () {
    this.permiso();
  },
};
</script>

<style scoped>
</style>