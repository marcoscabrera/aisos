<template>
  <v-container name="componenteProgramas">
    <h2>Programas</h2>
    <crudProgramas> </crudProgramas>
  </v-container>
</template>

<script>
import crudProgramas from "@/components/catalogos/crudProgramas.vue";
export default {
  name: "Programas",
  components: {
    crudProgramas,
  },
};
</script>

<style scoped>
</style>