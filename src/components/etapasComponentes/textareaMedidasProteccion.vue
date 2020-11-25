<template>
  <v-col cols="12">
    <v-textarea
      filled
      name="input-7-4"
      label="MEDIDAS DE PROTECCIÓN INMEDIATA (500 PALABRAS)"
      :value="texto"
      @input="asignarValor($event)"
    >
    </v-textarea>
  </v-col>
</template>

<script>
export default {
  name: "textareaMedidasProteccion",

  props: ["texto"],

  methods:  {
    asignarValor(evento){
      console.log(evento);
      this.$store.dispatch('setear_medidasproteccion',evento)
    }
  },

  data() {
    return {
      medidasproteccion: '',
    };
  },
};
</script>