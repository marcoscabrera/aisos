<template>
  <v-card width="100%">
    <v-card-title> TIPO DE CASO </v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12" xs="12" sm="6" md="6"> </v-col>
        <v-col cols="12" xs="12" sm="6" md="6">
          <v-select
            :value="tipo"
            :item-value="tipo"
            :items="itemsTipoDeCaso"
            label="TIPOS DE CASO"
            dense
            filled
            @change="asignarValor($event)"
          >
          </v-select>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "cardTipoCaso",

  props :['tipo'],

  methods :{
    asignarValor(event){
      this.$store.dispatch('action_tipodecaso',event);
    }
  },

  data() {
    return {
      tipodecaso: "",

      itemsTipoDeCaso: [
        " ABUSO FISICO",
        "ABUSO SEXUAL",
        "ABUSO EMOCIONAL",
        "NEGLIGENCIA Y/O TRATO NEGLIGENTE",
        "VIOLACION DE LA PRIVACIDAD DE LOS NIÑOS Y NIÑAS",
      ],
    };
  },
};
</script>