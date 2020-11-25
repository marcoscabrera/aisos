<template>
  <v-col cols="12" xs="12" md="6">
    <v-menu
      v-model="menu2"
      :close-on-content-click="false"
      :nudge-right="40"
      transition="scale-transition"
      offset-y
      min-width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          :value ="fecha"
         
          label="Fecha"
          prepend-icon="mdi-calendar"
          readonly
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker v-model="date" @input="asignarFecha($event)"></v-date-picker>
    </v-menu>
  </v-col>
</template>
<script>
export default {
  name: "calendario",

  props: ["fecha"],

  data() {
    return {
      date: null,
      menu2: false,
    };
  },

  methods :{
    asignarFecha(evento){
     this.menu2=false;
      console.log("este es el valor de $event en calendario " + evento);

      
      
      this.$store.dispatch('setear_FechaInicial',evento);

      console.log("valor de la fecha : " + this.$store.state.incidentes.etapainicial_fecha);

    }
  }
};
</script>