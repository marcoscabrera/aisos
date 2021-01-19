<template>
  <v-container name="container_usuarios">
    <usuarioCRUD></usuarioCRUD>
  </v-container>
</template>
<script>
import usuarioCRUD from "@/components/usuarios/usuarioCRUD.vue";
import controlDeSesion from '@/sesion/controlDeSesion.js';

export default {
  name: "Usuarios",
  components: {
    usuarioCRUD,
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