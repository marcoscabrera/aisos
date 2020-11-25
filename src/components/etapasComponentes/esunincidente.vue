<template>
  <v-card width="100%">
    <v-card-title> ¿ES UN INCIDENTE DE DESPROTECCION INFANTIL? </v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12" xs="12" sm="12" md="4"> </v-col>

        <v-col cols="12" xs="12" sm="12" md="4">
          <v-select
            :value="incidente"
            :item-value="incidente"
            :items="items_esincidente"
            label="¿ES UN INCIDENTE ?"
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
  name: "esunincidente",
  props:['incidente'],
  methods : {
    asignarValor(event) {
      this.$store.dispatch('setear_incidenteconfirmado',event);
    }
  },
  data() {
    return {
      esincidente: "",
      items_esincidente: ["SI", "NO", "POR CONFIRMAR"],
    };
  },
};
</script>