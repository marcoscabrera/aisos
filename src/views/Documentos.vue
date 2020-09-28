<template>
  <v-container name="container_documentos">
    <documentosCRUD></documentosCRUD>
   </v-container>
</template>
<script>
import documentosCRUD from "@/components/documentos/documentosCRUD.vue";
export default {
  name: "Documentos",
  components : {
    documentosCRUD
  }
};
</script>
<style >
</style>