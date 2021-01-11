<template>
    <v-row>
      <v-col cols="12">
        <v-textarea
          filled
          name="input-7-4"
          label="ACERCA DE LAS MEDIDAS (250 PALABRAS)"
           :value="texto"
           @input="asignarValor($event)"
        >
        </v-textarea>
      </v-col>
    </v-row>
</template>

<script >
   
    export default {
        name : 'TextoAcercaDeLasMedidas',

        props :{
          texto : { 
            type:String
          }
        },

        methods : {

          asignarValor(evento){

            this.$store.dispatch("action_medidastexto",evento);

          }
        }
    }
</script>

<style scoped>

</style>