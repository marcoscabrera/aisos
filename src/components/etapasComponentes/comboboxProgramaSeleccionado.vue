<template>
  <v-col cols="12" xs="12" md="6">
    <v-select
      :value="programa"
      :item-value="programa"
      :items="itemsUnidades"
      label="PROGRAMA"
      dense
      filled
      @change="asignarValor($event)"
    >
    </v-select>
  </v-col>
</template>

<script>

export default {
  name: "comboProgramaSeleccionado",

  props: ["programa"],
  data() {
    return {
      programaSeleccionado: "",
      itemsUnidades: ["AF-TIJUANA", "AF-MORELIA", "AF-CDMX", "AF-TUXTLA", 
      "AF-COMITÁN" ,"FF-HUEHUETOCA", "FF-TEHUACÁN", "F-COMITÁN"],
    };
  },
  created() {
    //this.prop_a_local();
  },
  methods: {
    prop_a_local() {
      this.programaSeleccionado = this.programa;
    },
    asignarValor(evento) {
      /* el $event que se manda como parametro 
      es el que trae el valor del combo actual. */
      console.log(
        "valor del combobox de programa en etapa inicial:_ " +
        evento
      );
       
       console.log(evento);
      /*almacenamos en variable global */
      this.$store.dispatch("setear_programa",evento);

      console.log("valor de etapainicial_programa  " + this.$store.state.incidentes.etapainicial_programa);
    },
  },
};
</script>