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
         <template v-slot:prepend>
        <v-icon color="blue"
            @click="showAyuda = !showAyuda">
            mdi-help-circle
        </v-icon>

      </template>
    </v-textarea>

    <v-alert v-if="this.$store.state.uivars.uivars_error_textareaRegistros" type="error">
      Este Campo no debe de ir vacio y no debe de exceder el numero maximo de palabras
    </v-alert>

    <v-alert v-if="showAyuda" type="info">
      Aqui cuenta hasta con 250 palabras para describir los hechos <br>
      de la siguiente manera:<br>
      <ul>
        <li>¿Cuales fueron los hechos?</li>
        <li>¿En que fecha fue realizado?</li>
        <li>¿Quienes participaron?</li>

      </ul>

    </v-alert>

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

     this.errores.length>0 ?  //tal vez deberia cerciorarme que el texto existe
     this.$store.dispatch('actions_uivars_error_textareaRegistros',true):
     this.$store.dispatch('actions_uivars_error_textareaRegistros',false);



    },

    cuentaPalabras(texto) {

      let numeroPalabras = texto.split(" ");
      let cuantos = numeroPalabras.length;

      let m= `REGISTRO DE HECHOS (250 PALABRAS)  PALABRAS #${cuantos}`;
         
      this.mensaje = m;

      //console.log(this.mensaje);
      
      return cuantos;
    },

  },
  data() {
    return {
      showAyuda:false,
      limpiar: true,
      registrohechos: this.texto,
      mensaje :'REGISTRO DE HECHOS (250 PALABRAS)',
      errores : '',
      numeroPalabras : 0
    };
  },
};
</script>