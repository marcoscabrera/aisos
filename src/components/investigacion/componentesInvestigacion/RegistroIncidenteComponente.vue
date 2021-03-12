<template>
 <v-card>
   <v-card-title>
     
   </v-card-title>
   <v-card-text>
    <v-row>
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
    </v-row>
    </v-card-text>
  </v-card>
</template>

<script >
   
    export default {
        name : 'RegistroIncidenteComponente',

        data () {

          return {
         mensaje  : 'REGISTRO DE LOS INCIDENTES A INVESTIGAR (150 PALABRAS)',
         errores :  '',
         numeroPalabras : 0  
          }

        },

        props :{
          texto : { 
            type:String
          }
        },

        methods : {

          asignarValor(evento){

            this.$store.dispatch("action_registroincidentes_docto",evento);


            let cuantos = this.cuentaPalabras(evento);
            let m1 = "HA EXCEDIDO EL NUMERO MAXIMO DE PALABRAS PERMITIDAS =";
            cuantos >150 ? this.errores = m1 :
            this.errores ='' 

          },
             /*
          numeroPalabras: 0,
      mensaje : ' VALORACIÓN INICIAL (MAXIMO 250 PALABRAS) ',
      errores : ''


      ccomponentes
      :label="mensaje"
       auto-grow
       :error-messages="errores"
       */
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

      let m= ` VALORACIÓN INICIAL (MAXIMO 250 PALABRAS)  PALABRAS #${cuantos}`;
       

      this.mensaje = m;

      console.log(this.mensaje);
      
      return cuantos;
    }


        }
    }
</script>

<style scoped>

</style>