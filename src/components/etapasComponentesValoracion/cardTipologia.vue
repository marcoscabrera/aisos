<template>
  <v-card width="100%">
    <v-card-title>  </v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols  ="12" xs="12" sm="6" md="6"
               class ="text-center font-weight-black px-4 pt-4 pb-3"> 
             <h6>Tipologia del Incidente</h6>
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="6">
          <v-select
            :value="tipologia"
            :item-value="tipologia"
            :items="itemsOpciones"
            filled
            dense
            label="TIPOLOGIAS"
            @change="asignarValor($event)"
          >
          </v-select>

         <v-alert v-if="this.$store.state.uivars.uivars_error_cardTipologia" type="error">
           Debe de seleccionar una opcion.
        </v-alert>


        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "cardTipologia",

  props :['tipologia'],

  methods :{

      asignarValor(event){

        this.$store.dispatch('action_tipologiadelincidente',event);
         this.$store.dispatch('action_uivars_error_cardTipologia',false);
      }

  },

  data() {
    return {
      tipoexterno: "",
      tipointerno: "",
      itemseleccionado: "",
      itemsOpciones: ["INTERNO", "EXTERNO"],
    };
  },
};
</script>