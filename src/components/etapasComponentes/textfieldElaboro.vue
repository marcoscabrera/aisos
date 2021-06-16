<template>
  <v-col cols="12" xs="12" md="6">
    <v-text-field label="DENUNCIANTE" :value="quienelaboro"
     filled
     @input="asignarValor($event)">
     
     <template v-slot:prepend>
        <v-icon color="blue"
            @click="showAyuda = !showAyuda">
            mdi-help-circle
        </v-icon>

      </template>
     
     
      </v-text-field>

     <v-alert v-if="this.$store.state.uivars.uivars_error_textDenunciante" type="error">
      Este Campo no debe de ir vacio 
    </v-alert>
         <v-alert v-if="showAyuda" type="info">
          En este apartado anote quien esta haciendo el reporte
        </v-alert>

  </v-col>
</template>
<script>
export default {
  name: "textfieldElaboro",

  props: ["quienelaboro"],

  data() {
    return {
      elaboro: this.quienelaboro,
      showAyuda : false
    };
  },
  methods : {

    asignarValor(valor){
      //console.log("valor de elaboro en componente" + valor);
      this.$store.dispatch('setear_Elaboro',valor);
     
      valor.length > 0 ?
      this.$store.dispatch('actions_uivars_error_textDenunciante',false): 
      this.$store.dispatch('actions_uivars_error_textDenunciante',true)
      
      //console.log("valor de elaboro en state" + this.$store.state.incidentes.etapainicial_elaboro);
    }

  }
};
</script>