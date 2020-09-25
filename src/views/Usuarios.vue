<template>
  <v-container name="container_usuarios">
    <usuarioCRUD></usuarioCRUD>
  </v-container>
</template>
<script>
import usuarioCRUD from "@/components/usuarios/usuarioCRUD.vue";
export default {
  name: "Usuarios",
  components: {
    usuarioCRUD,
  },
};
</script>
<style >
</style>