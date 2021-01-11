<template>

    <v-container name="contenedorEvidenciasAgregar">

        <agregarEvidenciaComponente></agregarEvidenciaComponente>

    </v-container>
   
     


</template>
<script>
import agregarEvidenciaComponente from "@/components/evidencias/agregarEvidenciaComponente.vue";

export default {

  name: "Evidencias",

  components: { agregarEvidenciaComponente },

  data() {
    return {};
  },

  methods: {
    saludo() {
      console.log("saludos estas en evidencias");
    },
  },

  mounted() {
    this.saludo();
  },
};
</script>

<style scoped>

</style>