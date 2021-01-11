<template>
  <v-col cols="12">
    <v-textarea
      filled
      name="input-7-4"
      :label="mensaje"
       auto-grow
      :value="texto"
      @input="asignarValor($event)"
      :error-messages="errores"
      
    >
    </v-textarea>
  </v-col>
</template>
<script>
export default {
  name: "textareaValoracion",

  props  :['texto'],

  methods : {
    
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

      let m= ` VALORACIÓN INICIAL (MAXIMO 250 PALABRAS)  PALABRAS #${cuantos}`;
       

      this.mensaje = m;

      console.log(this.mensaje);
      
      return cuantos;
    }


  },

  data() {
    return {
      textovi: "",
      numeroPalabras: 0,
      mensaje : ' VALORACIÓN INICIAL (MAXIMO 250 PALABRAS) ',
      errores : ''
    };
  },
};
</script>