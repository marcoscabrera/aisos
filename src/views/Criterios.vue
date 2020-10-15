<template>
  <v-container name="container_criterios">
    <criteriosCRUD></criteriosCRUD>
  </v-container>
</template>
<script>
import criteriosCRUD from "@/components/criterios/criteriosCRUD.vue";
export default {
  name: "Criterios",
  components: {
    criteriosCRUD,
  },
};
</script>
<style >
</style>