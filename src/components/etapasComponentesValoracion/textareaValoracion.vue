<template>
  <v-col cols="12">
    <v-textarea
      filled
      name="input-7-4"
      label="VALORACIÓN INICIAL (250 PALABRAS)"
      :value="texto"
      @input="asignarValor($event)"
    >
    </v-textarea>
  </v-col>
</template>
<script>
export default {
  name: "textareaValoracion",

  props  :['texto'],

  methods : {

    asignarValor(evento){
    
     this.$store.dispatch('action_textovi',evento);


    }


  },

  data() {
    return {
      textovi: "",
    };
  },
};
</script>