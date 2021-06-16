<template>
 <v-col cols="12">
        <v-textarea
          filled
          :label="mensaje"
          name="input-7-4"
         
          :value="texto"
          @input="asignarValor($event)"
        >
                        <template v-slot:prepend>
                <v-icon color="blue"
                    @click="showAyuda = !showAyuda">
                    mdi-help-circle
                </v-icon>
        </template>
        </v-textarea>

    <v-alert v-if="this.$store.state.abordaje.abordaje_validacion_status" type="error">
     Este Campo no debe de ir vacio y no debe de exceder el numero maximo de palabras

    </v-alert>

     <v-alert v-if="showAyuda" type="info">
     Anote , de acuerdo a lo siguiente <br>
     <ol>
         <li>
             a)opciona a
         </li>
         <li>
             b)opcionab
         </li>
          <li>
             c)opciona c
         </li>
     </ol>
    </v-alert>
</v-col>
</template>

<script>

    export default {
        name: 'textAreaRegistroDelEstatus',

        data(){
            return {
                showAyuda :false,
                textovi: "",
                numeroPalabras: 0,
                mensaje : '  (MAXIMO 250 PALABRAS) ',
                errores : ''

            }
        },

         props  :['texto'],

         methods : {

             asignarValor(evento){
    
            // this.$store.dispatch('action_abordaje_status',evento);
            // this.$store.dispatch('action_abordaje_validacion_status',true)


                this.$store.dispatch('action_abordaje_status',evento);
                let cuantos = this.cuentaPalabras(evento);
                let m1 = "HA EXCEDIDO EL NUMERO MAXIMO DE PALABRAS PERMITIDAS =";
                cuantos >250 ? this.errores = m1 :
                this.errores ='' 

                
                this.errores.length>0 ?  //tal vez deberia cerciorarme que el texto existe
                this.$store.dispatch('action_abordaje_validacion_status',true):
                this.$store.dispatch('action_abordaje_validacion_status',false);


         },

     cuentaPalabras(texto) {

      let numeroPalabras = texto.split(" ");
      let cuantos = numeroPalabras.length;

      let m= ` VALORACIÓN  (MAXIMO 250 PALABRAS)  PALABRAS #${cuantos}`;
       

      this.mensaje = m;

     // console.log(this.mensaje);
      
      return cuantos;
    }
        
       }
    }
</script>

<style scoped>

</style>