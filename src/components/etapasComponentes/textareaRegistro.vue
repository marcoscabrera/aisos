<template>
  <v-col cols="12">
    <v-textarea
      filled
      name="input-7-4"
      label="REGISTRO DE HECHOS (500 PALABRAS)"
     
      :clearable="limpiar"
     
      :value="texto"
      @input="guardandoTexto($event)"
    >
    </v-textarea>
  </v-col>
</template>
<script>
export default {
  name: "textareaRegistro",

  props: ["texto"],
  methods :{

      guardandoTexto(contenido) {
     // console.log("=====>valor del contendio en $event " + contenido);
      this.involucrados = contenido;
      //console.log("este es el valor de involucrados :" + this.involucrados);
      ///console.log("este es el valor de text :" + this.texto);
        
      this.$store.dispatch('setear_RegistroHechos',contenido);
      //console.log("valor de involucrados en state " + this.$store.state.incidentes.etapainicial_involucrados);

    },

  },
  data() {
    return {
       limpiar: true,
      registrohechos: this.texto,
    };
  },
};
</script>