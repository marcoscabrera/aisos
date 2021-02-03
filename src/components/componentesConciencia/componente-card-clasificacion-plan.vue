<template>
  <v-card width="100%">
    <v-card-title> CLASIFICACION DE PLAN DE PROTECCION INFANTIL </v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12" xs="12" sm="6" md="6"> </v-col>
        <v-col cols="12" xs="12" sm="6" md="6">
          <v-select
          :value="this.$store.state.conciencia.conciencia_clasificacion"
            :item-value="this.$store.state.conciencia.conciencia_clasificacion"
            :items="itemsOpciones"
            label="ESTATUS"
            dense
            filled
            @change="asignarValor($event)"
          >
          </v-select>

          <v-alert v-if="this.$store.state.uivars.uivars_error_conciencia_clasificacion" type="error">
             Debe de seleccionar un campo
          </v-alert>
          
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
/* NOTA :


     <!--:value='this.$store.state.conciencia.conciencia_clasificacion' 
             -->*/
export default {
  props: ["confirmacion"],
  methods: {
    asignarValor(event) {
       this.$store.dispatch('action_conciencia_clasificacion',event );  
       this.$store.dispatch('actions_uivars_error_conciencia_clasificacion',false ); 
       
   }
  },
  data() {
    return {
     
      itemsOpciones: ["SI", "NO", "PENDIENTE"],
    }
  }
}

</script>