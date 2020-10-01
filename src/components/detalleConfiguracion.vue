<template>
  <v-row>
    <cardConfiguracion titulo="Usuarios" ruta="usuarios"></cardConfiguracion>
    <cardConfiguracion titulo="Roles" ruta="roles"></cardConfiguracion>
    <cardConfiguracion
      titulo="Documentos"
      ruta="documentos"
    ></cardConfiguracion>

    <cardConfiguracion titulo="Criterios" ruta="criterios"></cardConfiguracion>
    <cardConfiguracion
      titulo="Unidades SOS"
      ruta="unidades"
    ></cardConfiguracion>
      <cardConfiguracion
      titulo="Cargos SOS"
      ruta="cargos"
    ></cardConfiguracion>

      <cardConfiguracion
      titulo="Parentescos"
      ruta="parentesco"
    ></cardConfiguracion>
  </v-row>
</template>
<script>
import cardConfiguracion from "@/components/cards/cardConfiguracion.vue";
export default {
  name: "detalleConfiguracion",
  components: {
    cardConfiguracion,
  },
};
</script>
<style>
</style>