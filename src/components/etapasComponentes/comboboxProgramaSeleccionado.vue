import apiProgramas from '@/apialdeas/apiProgramas.js';
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
import apiProgramas from "@/apialdeas/apiProgramas.js";
export default {
  name: "comboProgramaSeleccionado",

  props: ["programa"],
  data() {
    return {
      programaSeleccionado: "",
      itemsUnidades: [],
    };
  },
  created() {
    //this.prop_a_local();
    this.cargarProgramas();
  },
  methods: {
    async cargarProgramas() {
      let promesa = apiProgramas.cargar__todo__los__programas(this.$store);

      promesa
        .then((response) => {
          console.log(response.data);
          let programs = response.data;

          this.itemsUnidades = programs.map((program, index) => {
            console.log(index);
            return program.abreviatura;
          });

          console.table(this.itemsUnidades);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    prop_a_local() {
      this.programaSeleccionado = this.programa;
    },
    asignarValor(evento) {
      /* el $event que se manda como parametro 
      es el que trae el valor del combo actual. */
      console.log(
        "valor del combobox de programa en etapa inicial:_ " + evento
      );

      console.log(evento);
      /*almacenamos en variable global */
      this.$store.dispatch("setear_programa", evento);

      console.log(
        "valor de etapainicial_programa  " +
          this.$store.state.incidentes.etapainicial_programa
      );
    },
  },
};
</script>