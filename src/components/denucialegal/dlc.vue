<template>
  <v-container name="denuncialegal">
    <FoliosComponente folio="0001"
    foliodenuncia ='00002'>
    </FoliosComponente>

    <ConsensoComponente></ConsensoComponente>

    <br/>
     <SoporteLegalComponente></SoporteLegalComponente>
    <br />
    <SoporteEmocionalComponente></SoporteEmocionalComponente>
    <br />
    <MedidasDisciplinariasComponente></MedidasDisciplinariasComponente>

    <br />
    <TextoAcercaDeLasMedidas></TextoAcercaDeLasMedidas>

    <br />
    <v-row>
      <v-col cols="12" xs="12" sm="12" md="4">
        <v-btn
          :loading="loading"
          :disabled="loading"
          color="primary"
          @click="loader = 'loading'"
          block
        >
          <v-icon right dark> mdi-printer </v-icon>
          <v-spacer></v-spacer>
          Imprimir
        </v-btn>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="4">
        <v-btn
          :loading="loading"
          :disabled="loading"
          color="red"
          @click="guardar__iraDashboard"
          block
        >
          <v-icon right dark> mdi-close </v-icon>
          <v-spacer></v-spacer>
          Cancelar
        </v-btn>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="4">
        <v-btn
          :loading="loading"
          :disabled="loading"
          color="green"
          @click="guardar__iraDashboard"
          block
        >
          <v-icon right dark> mdi-check </v-icon>
          <v-spacer></v-spacer>
          Guardar
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import apiIncidentes from "@/apialdeas/apiIncidentes.js";
import apiDenuncias from "@/apialdeas/apiDenuncias.js";
import FoliosComponente  from "./componentesDenunciaLegal/FoliosComponente.vue";

export default {

  components : {
    FoliosComponente,
    ConsensoComponente : () => import('./componentesDenunciaLegal/ConsensoComponente.vue'),
    SoporteLegalComponente  : () => import('./componentesDenunciaLegal/SoporteLegalComponente.vue'),
    SoporteEmocionalComponente : () => import('./componentesDenunciaLegal/SoporteLegalComponente.vue'),
    MedidasDisciplinariasComponente : () => import('./componentesDenunciaLegal/MedidasDisciplinariasComponente.vue'),
    TextoAcercaDeLasMedidas : () => import('./componentesDenunciaLegal/TextoAcercaDeLasMedidas.vue')
},
  data() {
    return {
      itemsCargos: ["SI", "NO", "EN PROCESO"],
      loading: false,

      folio :'',
      foliodenuncia :'',
      denuncia :[]
    };
  },

  methods: {
    hola() {
      console.log("montnado dlc");
      apiIncidentes.hola();
    },
    asignarVariables(datos){

  this.$store.dispatch('action_incidenteid',datos.incidenteid);
  this.$store.dispatch('action_foliodenuncia',datos.foliodenuncia);
  this.$store.dispatch('action_consenso',datos.consenso);
  this.$store.dispatch('action_consensodocto',datos.consensodocto);
  this.$store.dispatch('action_soportecontacto',datos.soportecontacto);
  this.$store.dispatch('action_soporteantes',datos.soporteantes);
  this.$store.dispatch('action_soportedurante',datos.soportedurante);
  this.$store.dispatch('action_soporteemocionalcontacto',datos.soporteemocionalcontacto);
  this.$store.dispatch('action_soporteemocionalantes',datos.soporteemocionalantes);
  this.$store.dispatch('action_soporteemocionaldurante',datos.soporteemocionaldurante);
  this.$store.dispatch('action_medidasd',datos.medidasd);
  this.$store.dispatch('action_medidasd_docto',datos.medidasd_docto);
  this.$store.dispatch('action_medidastexto',datos.medidastexto);
  this.$store.dispatch('action_fechaCreacion',datos.fechaCreacion);
  this.$store.dispatch('action_fechaUpdate',datos.fechaUpdate);
  this.$store.dispatch('action_estado',datos.estado);
    },
    cargarDenuncia(){
      let denunciaId = this.$route.params.denunciaId;
      
      let denuncia = apiDenuncias.cargar__denuncialegal(denunciaId,this.$store)
      
      
      denuncia
      .then( response => {
        console.log(JSON.stringify(response.data));
        this.folio = response.data[0]["folio"];
        this.denuncia=response.data[0];
        this.asignarVariables(this.denuncia);
      })
      .catch( error => {
        console.log(error);
      })
    }
  },

  mounted() {
  //  this.hola();
    this.$nextTick( function(){
      this.cargarDenuncia();
    });
  },
};
</script>