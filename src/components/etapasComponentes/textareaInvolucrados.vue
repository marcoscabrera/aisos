<template>
  <v-col cols="12">
    <v-textarea
      filled
      name="input-7-4"
      
      :clearable="limpiar"
      
      :value="texto"
      @input="guardandoTexto($event)"
       :label="mensaje"
       auto-grow
       :error-messages="errores"
    >
    </v-textarea>

     <v-alert v-if="this.$store.state.uivars.uivars_error_textAreaInvolucrados" type="error">
      Este Campo no debe de ir vacio y no debe de exceder el numero maximo de palabras
    </v-alert>
  </v-col>
</template>
<script>
export default {
  name: "textareaInvolucrados",
  props: ["texto"],

  methods: {

   /*
          numeroPalabras: 0,
      mensaje : ' VALORACIÓN INICIAL (MAXIMO 250 PALABRAS) ',
      errores : ''


      ccomponentes
      :label="mensaje"
       auto-grow
       :error-messages="errores"
       */
    asignarValor(evento){
    
     this.$store.dispatch('action_textovi',evento);
     let cuantos = this.cuentaPalabras(evento);
     let m1 = "HA EXCEDIDO EL NUMERO MAXIMO DE PALABRAS PERMITIDAS =";
     cuantos >250 ? this.errores = m1 :
     this.errores ='' 

    },
    cuentaPalabras(texto) {

      let numeroPalabras = texto.split(" ");
      let cuantos = numeroPalabras.length;

      let m= `INVOLUCRADOS (250 PALABRAS)  PALABRAS #${cuantos}`;
         
      this.mensaje = m;

      //console.log(this.mensaje);
      
      return cuantos;
    },


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
     let cuantos = this.cuentaPalabras(contenido);
     let m1 = "HA EXCEDIDO EL NUMERO MAXIMO DE PALABRAS PERMITIDAS =";
     cuantos >250 ? this.errores = m1 :
     this.errores ='' 

     this.errores.length>0 ?  //tal vez deberia cerciorarme que el texto existe
     this.$store.dispatch('actions_uivars_error_textAreaInvolucrados',true):
     this.$store.dispatch('actions_uivars_error_textAreaInvolucrados',false);

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
             numeroPalabras: 0,
      mensaje : 'INVOLUCRADOS (250 PALABRAS)',
      errores : ''
    }
  },
}
</script>
    
