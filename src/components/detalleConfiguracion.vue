<template>
  <v-container name="cardCatalogos">
      <v-row>
      <cardConfiguracion titulo="Usuarios" ruta="usuarios">

      </cardConfiguracion>
     <!-- <cardConfiguracion titulo="Roles" ruta="roles"></cardConfiguracion>
      <cardConfiguracion
        titulo="Documentos"
        ruta="documentos"
      ></cardConfiguracion>-->
    </v-row> 
    <v-row>
       <cardConfiguracion
        titulo="Roles"
        ruta="roles"
      ></cardConfiguracion> 
      <cardConfiguracion
        titulo="Unidades SOS"
        ruta="catalogos/programas"
      ></cardConfiguracion>

      <cardConfiguracion titulo="Cargos SOS" ruta="cargos"> </cardConfiguracion>
    </v-row>
    <v-row>
      <cardConfiguracion
        titulo="Parametros"
        ruta="parametros"
      ></cardConfiguracion>
    </v-row>
    <v-row>
      <cardConfiguracion
        titulo="Documentos de Apoyo"
        ruta="doctosapoyos"
      ></cardConfiguracion>
            <cardConfiguracion
        titulo="mantenimiento"
        ruta="mantenimiento"
      ></cardConfiguracion>
    </v-row>
    <!--<v-row>
      <cardConfiguracion titulo="Parentescos" ruta="parentesco">
      </cardConfiguracion>
    </v-row> -->
  </v-container>
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