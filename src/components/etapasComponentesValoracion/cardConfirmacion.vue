<template>
  <v-card width="100%">
    <v-card-title> ¿SE CONFIRMA QUE EL EVENTO ES UN INCIDENTE ? </v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12" xs="12" sm="6" md="6"> </v-col>
        <v-col cols="12" xs="12" sm="6" md="6">
          <v-select
            :value="confirmacion"
            :item-value="confirmacion"
            :items="itemsOpciones"
            label="CONFIRMAR INCIDENTE"
            dense
            filled
            @change="asignarValor($event)"
          >
          </v-select>
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
    asignarValor(event){
      this.$store.dispatch('action_confirmaincidente',event);

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