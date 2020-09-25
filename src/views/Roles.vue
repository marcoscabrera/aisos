<template>
  <v-container name="container_roles">
    <rolesCRUD></rolesCRUD>
  </v-container>
</template>
<script>
import rolesCRUD from "@/components/usuarios/rolesCRUD.vue";
export default {
  name: "Roles",
  components: {
    rolesCRUD,
  },
};
</script>
<style >
</style>