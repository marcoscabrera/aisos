<template>
  <v-card width="100%">
    <v-card-title> </v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12" xs="12" sm="6" md="6"  
               class ="text-center font-weight-black px-4 pt-4 pb-3"> 
              <h6>Nivel del Incidente</h6>
         </v-col>

        <v-col cols="12" xs="12" sm="6" md="6">
          <v-select
            :value="nivel"
            :item-value="nivel"
            :items="itemsnIVELES"
            label="NIVELES"
            dense
            filled
            @change="asignarValor($event)"
          ></v-select>

        <v-alert v-if="this.$store.state.uivars.uivars_error_cardNivelIncidente" type="error">
           Debe de seleccionar una opcion.
        </v-alert>

        
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "cardNivelIncidente",

  props:['nivel'],
  
  methods : {

    asignarValor(evento){
      this.$store.dispatch('action_niveldelincidente',evento);

      this.$store.dispatch('actions_uivars_error_cardNivelIncidente',false);
    }

  },

  data() {
    return {
      itemsnIVELES: [
        "Comportamiento Inapropiado",
         "Comportamiento Abusivo",
          "Comportamiento Problemático A-N (Adulto-Niño)",
          "Comportamiento abusivo N-N (Niño-Niño)",
          "Crítico",
          "De alto Perfil"]
    };
  },
};
</script>