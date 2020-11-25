<template>
  <v-col cols="12" xs="12" md="6">
    <v-select
      :value="quecargo"
      :items="itemsCargos"
      :item-value="quecargo"
      label="CARGO"
      dense
      filled
      @change="asignarValor($event)"
    >

    </v-select>
  </v-col>
</template>
<script>
export default {
  name: "comboboxCargos",
  props: ["quecargo"],

  data() {
    return {
      itemsCargos: ["COLABORADOR SOS", "CUIDADORA DE ATENCION DIRECTA",
       "NIÑA O NIÑO PARTICIPANTE" ,"PERSONA ANONIMA","PERSONA EXTERNA","OTRO"],
      cargo: this.quecargo,
    };
  },

  methods :{
    asignarValor(evento){
      console.log("cargo : " + evento);
      this.$store.dispatch('setear_cargos',evento);
      console.log("cargo en state : " + this.$store.state.incidentes.etapainicial_cargos);
    }
  }
};
</script>