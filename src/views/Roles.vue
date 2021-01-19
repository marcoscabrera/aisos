<template>
  <v-container name="container_roles">
    <rolesCRUD></rolesCRUD>
  </v-container>
</template>
<script>
import rolesCRUD from "@/components/usuarios/rolesCRUD.vue";
import controlDeSesion from '@/sesion/controlDeSesion.js';

export default {
  name: "Roles",
  components: {
    rolesCRUD,
  },
  methods: {
    permiso() {
      if (controlDeSesion.tienePermisoParaAcceder("ALTADECATALOGOS", this.$store) == false ){
          this.$router.push("/notificaionnoautorizado");
      }
    }
  },
  mounted () {
    this.permiso();
  },
};
</script>
<style >
</style>