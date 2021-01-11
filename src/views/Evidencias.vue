<template>
  <v-container>
    <v-container name="contenedorEvidencias">
   
      <evidenciasCRUD></evidenciasCRUD>

    </v-container>
  </v-container>
</template>
<script>
import evidenciasCRUD from "@/components/evidencias/evidenciasCRUD.vue";

export default {

  name: "Evidencias",

  components: { evidenciasCRUD },

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