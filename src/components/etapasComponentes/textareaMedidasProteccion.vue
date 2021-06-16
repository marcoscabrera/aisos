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

    <v-alert v-if="this.$store.state.uivars.uivars_error_textareaMedidas" type="error">
      Este Campo no debe de ir vacio y no debe de exceder el numero maximo de palabras
    </v-alert>
    <v-alert v-if="showAyuda" type="info">
      Anote las medidas que se llevaran a cabo <br>Ejemplo : <br>
      <ol>
        <li>Se realiza visita al domicilio del niño o niña en cuestion</li>
        <li>Se manda a revision medica si es necesario</li>
      </ol>
    </v-alert>
  </v-col>
</template>

<script>
export default {
  name: "textareaMedidasProteccion",

  props: ["texto"],

  methods:  {
    asignarValor(evento){
     // console.log(evento);
      this.$store.dispatch('setear_medidasproteccion',evento)
     let cuantos = this.cuentaPalabras(evento);
     let m1 = "HA EXCEDIDO EL NUMERO MAXIMO DE PALABRAS PERMITIDAS =";
     cuantos >250 ? this.errores = m1 :
     this.errores ='' 

     
     this.errores.length>0 ?  //tal vez deberia cerciorarme que el texto existe
     this.$store.dispatch('actions_uivars_error_textareaMedidas',true):
     this.$store.dispatch('actions_uivars_error_textareaMedidas',false);

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

      let m= `MEDIDAS DE PROTECCIÓN INMEDIATA  PALABRAS #${cuantos}`;
         
      this.mensaje = m;

      
      return cuantos;
    },

  },

  data() {
    return {
      showAyuda:false,
      medidasproteccion: '',
      mensaje :'MEDIDAS DE PROTECCIÓN INMEDIATA (250 PALABRAS)',
      errores:'',
      numeroPalabras : 0
    };
  },
};
</script>