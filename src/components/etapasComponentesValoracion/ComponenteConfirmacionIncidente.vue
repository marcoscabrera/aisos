<template>
  <v-card width="100%">
    <v-card-title> ¿SE CONFIRMA QUE EL EVENTO ES UN INCIDENTE ? </v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12" xs="12" sm="6" md="6">
          <v-btn color="green" dark dense block
          @click="confirmacionIclick('NO ES UN INCIDENTE')">
            No es un incidente     
          </v-btn>    
        
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="6">

           <v-btn color="red" dark dense block
           @click="confirmacionIclick('SI ES UN INCIDENTE')">
           Si es un incidente     
          </v-btn>  
        <!--  <v-select
            :value="confirmacion"
            :item-value="confirmacion"
            :items="itemsOpciones"
            label="CONFIRMAR INCIDENTE"
            dense
            filled
            @change="asignarValor($event)"
          >
          </v-select> -->

         <v-alert v-if="this.$store.state.uivars.uivars_error_cardConfirmacion" type="error">
           Debe de confirmar si es un incidente o no .
        </v-alert>

        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
/* NOTA :  */
export default {
  props:['confirmacion'],
  methods :{

    confirmacionIclick(respuesta){

       if (respuesta == "SI ES UN INCIDENTE") {

           this.$store.dispatch('action_confirmaincidente',respuesta);

       }else {
             this.$store.dispatch('action_confirmaincidente',respuesta);

 
       }

             respuesta=="SI ES UN INCIDENTE" ? 
      this.$store.dispatch("actions_uivars_esincidente",true) :
      this.$store.dispatch("actions_uivars_esincidente",false)

   },

    asignarValor(event){

      this.$store.dispatch('action_confirmaincidente',event);

      this.$store.dispatch('actions_uivars_error_cardConfirmacion',false);

      /* aplicacion de operador ternario */
      /* #ternario #if */
      event=="SI ES UN INCIDENTE" ? 
      this.$store.dispatch("actions_uivars_esincidente",true) :
      this.$store.dispatch("actions_uivars_esincidente",false)
    }
  },
  data() {
    return {
      noesincidente: "",
      itemsOpciones: ["NO ES UN INCIDENTE", "SI ES UN INCIDENTE"],
    };
  },
};
</script>