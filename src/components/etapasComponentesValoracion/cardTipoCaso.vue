<template>
  <v-card width="100%">
    <v-card-title> </v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12" xs="12" sm="6" md="6"               
               > 
             
              <v-text-field 
              value="Tipo de Caso"
                        label="Solo"
                        solo
                        readonly
                ></v-text-field>
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="6">
          <v-select
            :value="tipo"
            :item-value="tipo"
            :items="itemsTipoDeCaso"
            label="TIPOS DE CASO"
            dense
            filled
            @change="asignarValor($event)"
          >
          </v-select>

        <v-alert v-if="this.$store.state.uivars.uivars_error_cardTipoCaso" type="error">
           Debe de seleccionar una opcion.
        </v-alert>

          
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "cardTipoCaso",

  props :['tipo'],

  methods :{
    asignarValor(event){
      this.$store.dispatch('action_tipodecaso',event);

      this.$store.dispatch('actions_uivars_error_cardTipoCaso',false);
    }
  },

  data() {
    return {
      tipodecaso: "",

      itemsTipoDeCaso: [
        " ABUSO FISICO",
        "ABUSO SEXUAL",
        "ABUSO EMOCIONAL",
        "NEGLIGENCIA Y/O TRATO NEGLIGENTE",
        "VIOLACION DE LA PRIVACIDAD DE LOS NIÑOS Y NIÑAS",
      ],
    };
  },
};
</script>

<style >
.marginTop{
    margin-top: 14px !important;
}
</style>