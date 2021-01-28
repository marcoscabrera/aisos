<template>
  <v-card width="100%">
    <v-card-title> CLASIFICACION DE PLAN DE PROTECCION INFANTIL </v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12" xs="12" sm="6" md="6"> </v-col>
        <v-col cols="12" xs="12" sm="6" md="6">
          <v-select
            :item-value="this.$store.state.conciencia.conciencia_clasificacion"
            :items="itemsOpciones"
            label="ESTATUS"
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
/* NOTA :


     <!--:value='this.$store.state.conciencia.conciencia_clasificacion' 
             -->*/
export default {
  props: ["confirmacion"],
  methods: {
    asignarValor(event) {
       this.$store.dispatch('action_conciencia_clasificacion',event );  
   }
  },
  data() {
    return {
     
      itemsOpciones: ["SI", "NO", "PENDIENTE"],
    }
  }
}

</script>