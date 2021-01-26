<template>
  <v-card width="100%">
    <v-card-title> NIVEL DEL INCIDENTE </v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12" xs="12" sm="6" md="6"> </v-col>

        <v-col cols="12" xs="12" sm="6" md="6">
          <v-select
            :value="nivel"
            :item-value="nivel"
            :items="itemsnIVELES"
            label="NIVELES"
            dense
            filled
            @change="asignarValor($event)"
          ></v-select>

        <v-alert v-if="this.$store.state.uivars.uivars_error_cardNivelIncidente" type="error">
           Debe de seleccionar una opcion.
        </v-alert>

        
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "cardNivelIncidente",

  props:['nivel'],
  
  methods : {

    asignarValor(evento){
      this.$store.dispatch('action_niveldelincidente',evento);

      this.$store.dispatch('actions_uivars_error_cardNivelIncidente',false);
    }

  },

  data() {
    return {
      itemsnIVELES: ["BAJO NIVEL", "ALTO NIVEL", "CRITICO"],
    };
  },
};
</script>