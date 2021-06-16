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

      <template v-slot:prepend>
        <v-icon color="blue"
        @click="verAyuda = !verAyuda"
        >mdi-help-circle</v-icon>
      </template>
    </v-select>

     <v-alert v-if="this.$store.state.uivars.uivars_error_comboboxCargos" type="error">
     Debe de seleccionar un cargo
    </v-alert>

    <v-alert v-if="verAyuda" type="info">
     Escoga una de las opciones 
    </v-alert>
  </v-col>
</template>
<script>
import apiCargos from "@/apialdeas/apiCargos.js";
export default {
  name: "comboboxCargos",
  props: ["quecargo"],

  data() {
    return {
      itemsCargos: [],
      cargo: this.quecargo,
      verAyuda : false,
    };
  },
  /*"COLABORADOR SOS",
        "CUIDADORA DE ATENCION DIRECTA",
        "NIÑA O NIÑO PARTICIPANTE",
        "PERSONA ANONIMA",
        "PERSONA EXTERNA",
        "OTRO",*/
  mounted() {
    this.cargarCargos();
  },
  methods: {
    async cargarCargos() {
      let promesa = apiCargos.cargar__todos_los_cargos(this.$store);

      promesa
        .then((response) => {
          console.log(response.data);
          let programs = response.data;

          this.itemsCargos = programs.map((program, index) => {
            console.log(index);
            return program.nombrecargo;
          });

         // console.table(this.itemsUnidades);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    asignarValor(evento) {
      //console.log("cargo : " + evento);
      this.$store.dispatch("setear_cargos", evento);

      this.$store.dispatch("actions_uivars_error_comboboxCargos", false);
      
    //  console.log(
     //   "cargo en state : " + this.$store.state.incidentes.etapainicial_cargos
     // );
    },
  },
};
</script>