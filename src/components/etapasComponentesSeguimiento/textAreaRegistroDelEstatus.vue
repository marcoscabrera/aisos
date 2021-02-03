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

    <v-alert v-if="this.$store.state.uivars.uivars_error_seguimiento_seguimiento_status" type="error">
     Este Campo no debe de ir vacio y no debe de exceder el numero maximo de palabras

    </v-alert>
</v-col>
</template>

<script>

    export default {
        name: 'textAreaRegistroDelEstatus',

         props  :['texto'],

         methods : {

             asignarValor(evento){
    
             this.$store.dispatch('action_status',evento);
             this.$store.dispatch('actions_uivars_error_seguimiento_seguimiento_status',false)


         }
        
       }
    }
</script>

<style scoped>

</style>