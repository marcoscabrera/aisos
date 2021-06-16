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
            <template v-slot:prepend>
                <v-icon color="blue"
                    @click="showAyuda = !showAyuda">
                    mdi-help-circle
                </v-icon>
        </template>
    </v-textarea>

    <v-alert v-if="this.$store.state.uivars.uivars_error_textareaTestigos" type="error">
     Este Campo no debe de ir vacio y no debe de exceder el numero maximo de palabras
  
    </v-alert>
        <v-alert v-if="showAyuda" type="info">
         Enliste los testigos que dieron fe de los actos <br> Ejemplo : <br>
         <ol>
           <ul>Sr. Julian Rojas -- Vecino </ul>
           <ul>Sra. Rigoberta Menchu -- Vecina</ul>
         </ol>
       </v-alert>
  </v-col>
</template>

<script>
export default {
  name: "textareaTestigos",

  props: ["texto"],

  methods:  {
    asignarValor(evento){
    //  console.log(evento);
      this.$store.dispatch('setear_testigos',evento)
     let cuantos = this.cuentaPalabras(evento);
     let m1 = "HA EXCEDIDO EL NUMERO MAXIMO DE PALABRAS PERMITIDAS =";
     cuantos >250 ? this.errores = m1 :
     this.errores ='' 

     this.errores.length>0 ?  //tal vez deberia cerciorarme que el texto existe
     this.$store.dispatch('actions_uivars_error_textareaTestigos',true):
     this.$store.dispatch('actions_uivars_error_textareaTestigos',false);


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
      showAyuda:false,
      medidasproteccion: '',
      mensaje :'TESTIGO (250 PALABRAS)',
      errores:'',
      numeroPalabras : 0
    };
  },
};
</script>