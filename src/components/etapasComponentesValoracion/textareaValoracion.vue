<template>
<v-row>
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
                <template v-slot:prepend>
                  <v-icon color="blue"
                      @click="showAyuda = !showAyuda">
                      mdi-help-circle
                  </v-icon>
              </template>
    </v-textarea>

    <v-alert v-if="this.$store.state.uivars.uivars_error_textareaValoracion" type="error">
      Este Campo no debe de ir vacio y no debe de exceder el numero maximo de palabras
    </v-alert>

    <v-alert v-if="showAyuda" type="info">
    Anote la valoracion integral, atendiendo los siguientes puntos: <br>
    <ol>
      <li>a) Describa </li>
      <li>b) enfatize </li>
       <li>c) concluya </li>
    </ol>
    </v-alert>

  </v-col>
</v-row>
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

     
     this.errores.length>0 ?  //tal vez deberia cerciorarme que el texto existe
     this.$store.dispatch('actions_uivars_error_textareaValoracion',true):
     this.$store.dispatch('actions_uivars_error_textareaValoracion',false);


    },
    cuentaPalabras(texto) {

      let numeroPalabras = texto.split(" ");
      let cuantos = numeroPalabras.length;

      let m= ` VALORACIÓN  (MAXIMO 250 PALABRAS)  PALABRAS #${cuantos}`;
       

      this.mensaje = m;

     // console.log(this.mensaje);
      
      return cuantos;
    }


  },

  data() {
    return {
      showAyuda :false,
      textovi: "",
      numeroPalabras: 0,
      mensaje : ' VALORACIÓN INTEGRAL (MAXIMO 250 PALABRAS) ',
      errores : ''
    };
  },
};
</script>