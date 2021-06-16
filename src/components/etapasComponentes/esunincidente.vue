<template>
  <v-card width="100%">
    <v-card-title> ¿ES UN INCIDENTE DE DESPROTECCIÓN INFANTIL?
        <span class="paraCardTitulo">
          Seleccione una opcion
        </span>
      
       </v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12" xs="12" sm="12" md="4"> </v-col>

        <v-col cols="12" xs="12" sm="12" md="4">
          <v-select
            :value="incidente"
            :item-value="incidente"
            :items="items_esincidente"
            label="¿ ES UN INCIDENTE ?"
            dense
            filled
            @change="asignarValor($event)"
          >
          </v-select>


            <v-alert v-if="this.$store.state.uivars.uivars_error_comboesunincidente" type="error">
             Debe de seleccionar una opción
           </v-alert>


        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "esunincidente",
  props:['incidente'],
  methods : {
    asignarValor(event) {
      this.$store.dispatch('setear_incidenteconfirmado',event);
      this.$store.dispatch('actions_uivars_error_comboesunincidente',false);
      
    }
  },
  data() {
    return {
      esincidente: "",
      items_esincidente: ["SI", "NO", "POR CONFIRMAR"],
    };
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