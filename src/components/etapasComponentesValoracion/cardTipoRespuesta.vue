<template>
  <v-card width="100%">
    <v-card-title> TIPO DE RESPUESTA </v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12" xs="12" sm="6" md="6">
        <!--  <v-btn color="blue" v-if="verBotonDP" @click="irADenuncia">
            Denuncia Penal
          </v-btn> -->
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="64">
          <v-select
            :value="respuesta"
            :item-value="respuesta"
            :items="itemsOpciones"
            label="TIPOS DE RESPUESTA"
            dense
            filled
            @change="asignarValor($event)"
          >
          </v-select>
        <v-alert v-if="this.$store.state.uivars.uivars_error_cardTipoRespuesta" type="error">
           Debe de seleccionar una opcion.
        </v-alert>

          <!--<v-btn color="blue" v-if="verBotonInvI" @click="irAInvestigacion">
            Investigacion Interna
          </v-btn> -->
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props :['respuesta'],
  methods : {

      asignarValor(event) {

        this.$store.dispatch('action_tipoderespuesta',event);
        this.$store.dispatch('actions_uivars_error_cardTipoRespuesta',false);

        

      }
  },
  data() {
    return {
      
      itemsOpciones: [
        "DENUNCIA PENAL",
        "INVESTIGACION INTERNA",
        "ABORDAJE INTERNO",
      ],
      seleccionDP: "",
    };
  },
};
</script>

<style scoped>
</style>