<template>
  <v-container name="contenedorprevencion">
    <h2>Prevencion</h2>
    <statusConciencia></statusConciencia>
    <componentecardclasificacionplan></componentecardclasificacionplan>
    <br />
    <componenteDocumentoConciencia></componenteDocumentoConciencia>

    <v-row>
      <v-col cols="12" xs="12" sm="12" md="4">
        <v-btn
          :loading="loading"
          :disabled="verBotonImpresion"
          color="primary"
          @click="loader = 'loading'"
          block
        >
          <v-icon right dark> mdi-printer </v-icon>
          <v-spacer></v-spacer>
          Imprimir
        </v-btn>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="4">
        <v-btn
          :loading="loading"
          :disabled="loading"
          color="red"
          @click="guardar__iraDashboard"
          block
        >
          <v-icon right dark> mdi-close </v-icon>
          <v-spacer></v-spacer>
          Cancelar
        </v-btn>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="4">
        <v-btn
          :loading="loadingGuardar"
          :disabled="loadingGuardar"
          color="green"
          @click="guardar_incidente"
          block
        >
          <v-icon right dark> mdi-check </v-icon>
          <v-spacer></v-spacer>
          Guardar
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import statusConciencia from "@/components/componentesConciencia/statusConciencia.vue";
import ComponenteDocumentoConciencia from "../components/componentesConciencia/componenteDocumentoConciencia.vue";
import componentecardclasificacionplan from "../components/componentesConciencia/componente-card-clasificacion-plan.vue";

export default {
  name: "Conciencia",

  components: {
    statusConciencia,
    ComponenteDocumentoConciencia,
    componentecardclasificacionplan,
  },

  data() {
    return {};
  },

  methods: {
    saludo() {
      console.log("saludos estas en Conciencia");
    },
  },

  mounted() {
    this.saludo();
  },
};
</script>

<style scoped>
</style>