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
    }

  },

  data() {
    return {
      itemsnIVELES: ["BAJO NIVEL", "ALTO NIVEL", "CRITICO"],
    };
  },
};
</script>