<template>
  <v-container name="container_unidades"> 
    <unidadesCRUD></unidadesCRUD>
  </v-container>
</template>
<script>

import unidadesCRUD from '@/components/unidades/unidadesCRUD.vue';

export default {
  name: "Unidades",
  components : {
    unidadesCRUD
  }
};
</script>
<style >
</style>