<template>
  <v-card width="100%">
    <v-card-title> PERFIL DE LA VICTIMA <span class="paraCardTitulo"> Seleccione si es niño o niña y si recibe ayuda o no de Aldeas Infantiles </span></v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12" xs="12" sm="12" md="6">
          <v-select
            :value="perfilvictima"
            :item-value="perfilvictima"
            :items="items_perfildelavictima"
            label="PERFIL DE LA VICTIMA"
            dense
            filled
            @change="cambioEnPerfil($event)"
          >
          </v-select>

        <v-alert v-if="this.$store.state.uivars.uivars_error_comboPerfilvictima" type="error">
         Debe de escoger una opcion   
        </v-alert>


        </v-col>

        <v-col cols="12" xs="12" sm="12" md="6">
          <v-select
            :value="recibeayuda"
            :item-value="recibeayuda"
            :items="items_recibeayuda"
            label="RECIBE AYUDA"
            dense
            filled
             @change="cambioEnRecibeAyuda($event)"
          >
          </v-select>

          <v-alert v-if="this.$store.state.uivars.uivars_error_comboRecibeAyuda" type="error">
             Debe de escoger una opcion   
          </v-alert>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "cardPerfilVictima",

  props: ["perfilvictima", "recibeayuda"],

  data() {
    return {
     
      items_recibeayuda: ["RECIBE AYUDA SOS", "NO RECIBE AYUDA SOS"],
      items_perfildelavictima: ["NIÑA", "NIÑO"],
    };
  },
  methods: {
    //   actions_uivars_error_comboRecibeAyuda
    //actions_uivars_error_comboPerfilvictima
    cambioEnPerfil(evento) {
     this.$store.dispatch('setear_perfilvictima',evento);
     this.$store.dispatch('actions_uivars_error_comboPerfilvictima',false);
    },
    cambioEnRecibeAyuda(evento){
      this.$store.dispatch('setear_recibeayuda', evento);
      this.$store.dispatch('actions_uivars_error_comboRecibeAyuda',false);
    }
  },
};
</script>

<style>
.paraCardTitulo {
  border: 1px;
  border-color :black;
  padding-left: 15px;
  color: rgba(255, 0, 0, 0.6) !important;
  font-size: 1.05rem;
  text-transform: none
}

</style>
    
