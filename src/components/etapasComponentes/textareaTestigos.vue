<template>
  <v-col cols="12">
    <v-textarea
      filled
      name="input-7-4"
      label="TESTIGOS (500 PALABRAS)"
      :value="texto"
      @input="asignarValor($event)"
    >
    </v-textarea>
  </v-col>
</template>

<script>
export default {
  name: "textareaTestigos",
  props: ["texto"],

  methods : {

    asignarValor(evento){

        this.$store.dispatch('setear_testigos',evento);

    }
  },

  data() {
    return {
      data() {
        return {
          testigos: "",
        };
      },
    };
  },
};
</script>
