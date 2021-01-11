<template>
  <v-col cols="12">
    <v-textarea
      filled
      name="input-7-4"
      :label="mensaje"
     
      :clearable="limpiar"
     
      :value="texto"
      @input="guardandoTexto($event)"
      auto-grow
      :error-messages="errores"
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
     
     let cuantos = this.cuentaPalabras(contenido);
     let m1 = "HA EXCEDIDO EL NUMERO MAXIMO DE PALABRAS PERMITIDAS =";
     cuantos >250 ? this.errores = m1 :
     this.errores ='' 
    },

    cuentaPalabras(texto) {

      let numeroPalabras = texto.split(" ");
      let cuantos = numeroPalabras.length;

      let m= `REGISTRO DE HECHOS (250 PALABRAS)  PALABRAS #${cuantos}`;
         
      this.mensaje = m;

      console.log(this.mensaje);
      
      return cuantos;
    },

  },
  data() {
    return {
       limpiar: true,
      registrohechos: this.texto,
      mensaje :'REGISTRO DE HECHOS (250 PALABRAS)',
      errores : '',
      numeroPalabras : 0
    };
  },
};
</script>