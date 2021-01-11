<template>
  <v-col cols="12">
    <v-textarea
      filled
      name="input-7-4"
      :label="mensaje"
      :value="texto"
      @input="asignarValor($event)"

       auto-grow
       :error-messages="errores"

    
    >
    </v-textarea>
  </v-col>
</template>

<script>
export default {
  name: "textareaTestigos",

  props: ["texto"],

  methods:  {
    asignarValor(evento){
      console.log(evento);
      this.$store.dispatch('setear_testigos',evento)
     let cuantos = this.cuentaPalabras(evento);
     let m1 = "HA EXCEDIDO EL NUMERO MAXIMO DE PALABRAS PERMITIDAS =";
     cuantos >250 ? this.errores = m1 :
     this.errores ='' 

    },
        asignarValorx(evento){
    
     this.$store.dispatch('action_textovi',evento);
     let cuantos = this.cuentaPalabras(evento);
     let m1 = "HA EXCEDIDO EL NUMERO MAXIMO DE PALABRAS PERMITIDAS =";
     cuantos >250 ? this.errores = m1 :
     this.errores ='' 

    },
    cuentaPalabras(texto) {

      let numeroPalabras = texto.split(" ");
      let cuantos = numeroPalabras.length;

      let m= `TESTIGOS  PALABRAS #${cuantos}`;
         
      this.mensaje = m;

     
      
      return cuantos;
    },

  },

  data() {
    return {
      medidasproteccion: '',
      mensaje :'TESTIGO (250 PALABRAS)',
      errores:'',
      numeroPalabras : 0
    };
  },
};
</script>