<template>
 <v-col cols="12">
        <v-textarea
          filled
          name="input-7-4"
          label="REGISTRO DEL STATUS (250 PALABRAS)"
          :value="texto"
          @input="asignarValor($event)"
        >
        </v-textarea>
</v-col>
</template>

<script>

    export default {
        name: 'textAreaRegistroDelEstatus',

         props  :['texto'],

         methods : {

             asignarValor(evento){
    
             this.$store.dispatch('action_status',evento);


         }
        
       }
    }
</script>

<style scoped>

</style>