<template>
  <v-col cols="12">
    <v-textarea
      filled
      name="input-7-4"
      label="INVOLUCRADOS (500 PALABRAS)"
      :clearable="limpiar"
      
      :value="texto"
      @input="guardandoTexto($event)"
    >
    </v-textarea>
  </v-col>
</template>
<script>
export default {
  name: "textareaInvolucrados",
  props: ["texto"],

  methods: {
    prop_to_local() {
      this.involucrados = this.texto;
      console.log("asignando valor de :" + this.texto);
      console.log("a valor de :" + this.involucrados);
    },
    guardandoTexto(contenido) {
     // console.log("=====>valor del contendio en $event " + contenido);
      this.involucrados = contenido;
      //console.log("este es el valor de involucrados :" + this.involucrados);
      ///console.log("este es el valor de text :" + this.texto);
        
      this.$store.dispatch('setear_Involucrados',contenido);
      //console.log("valor de involucrados en state " + this.$store.state.incidentes.etapainicial_involucrados);

    },

    up() {
      /* igualamos los props con el texto. */
      this.involucrados = this.texto;
      console.table([this.texto, this.involucrados]);
    },
  },
  mounted() {
    console.log("ejecutando mounted");
   // this.up();
  },
  updated() {
    //console.log("ejecutando updated");
    //this.up();
  },
  computed: {},

  data() {
    return {
      limpiar: true,
      involucrados: "",
    };
  },
};
</script>
    
