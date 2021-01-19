<template>
  <v-container name="componenteProgramas">
    <h2>Programas</h2>
    <crudProgramas> </crudProgramas>
  </v-container>
</template>

<script>
import crudProgramas from "@/components/catalogos/crudProgramas.vue";
import controlDeSesion from '@/sesion/controlDeSesion.js';

export default {
  name: "Programas",
  components: {
    crudProgramas,
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

<style scoped>
</style>