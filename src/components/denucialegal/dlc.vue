<template>
  <v-container name="denuncialegal">
    <!-- pediente la fecha -->
    <FoliosComponente :folio="folio"
    :foliodenuncia ='denuncia.foliodenuncia'
    tipofolio="DENUNCIA">
    </FoliosComponente>

  <!--  
          consensoArchivo_id:'',
      consensoArchivo_nombreArchivo :'',
      consensoArchivo_sihayarchivo : false -->
    <v-row>
      <v-col>

      </v-col>
      <v-col>
        <barraDocumentos :files="files">

        </barraDocumentos>
      </v-col>
    </v-row>
    <ConsensoComponente
          :valorcombo = "denuncia.consenso"  
          :incidenteId ="denuncia.incidenteid"
          :archivoId ="consensoArchivo_id"   
          action_plan="action_consensodocto"   
          :nombreDelArchivo="consensoArchivo_nombreArchivo"
          :sihayarchivo="consensoArchivo_sihayarchivo"
    ></ConsensoComponente> 

    <br/>
     <SoporteLegalComponente
       :valorComboAsesorDurante="denuncia.soportedurante"
       :valorComboAsesorAntes="denuncia.soporteantes"
       :valorComboAsesorContacto="denuncia.soportecontacto"
     
     ></SoporteLegalComponente>
    <br />
    <SoporteEmocionalComponente
       :valorComboAsesorDurante="denuncia.soporteemocionaldurante"
       :valorComboAsesorAntes="denuncia.soporteemocionalantes"
       :valorComboAsesorContacto="denuncia.soporteemocionalcontacto"
    ></SoporteEmocionalComponente>
    <br />

    <MedidasDisciplinariasComponente
          :valorcombo = "denuncia.medidasd"  
          :incidenteId ="denuncia.incidenteid"
          :archivoId ="medidasArchivo_id"   
          :nombreDelArchivo="medidasArchivo_nombreArchivo"
          :sihayarchivo="medidasArchivo_sihayarchivo"
    ></MedidasDisciplinariasComponente>

    <br />
    <TextoAcercaDeLasMedidas
    :texto="denuncia.medidastexto"></TextoAcercaDeLasMedidas>

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
          @click="guardarDenuncia"
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
import barraDocumentos  from "@/components/barradocumentos/barraDocumentos.vue";

export default {

  components : {
    FoliosComponente,barraDocumentos,
    ConsensoComponente : () => import('./componentesDenunciaLegal/ConsensoComponente.vue'),
    SoporteLegalComponente  : () => import('./componentesDenunciaLegal/SoporteLegalComponente.vue'),
    SoporteEmocionalComponente : () => import('./componentesDenunciaLegal/SoporteEmocionalComponente.vue'),
    MedidasDisciplinariasComponente : () => import('./componentesDenunciaLegal/MedidasDisciplinariasComponente.vue'),
    TextoAcercaDeLasMedidas : () => import('./componentesDenunciaLegal/TextoAcercaDeLasMedidas.vue')
},
  data() {
    return {
      itemsCargos: ["SI", "NO", "EN PROCESO"],
      loading: false,

      folio :'',
      foliodenuncia :'',
      denuncia :[],

      consensoArchivo_id:'',
      consensoArchivo_nombreArchivo :'',
      consensoArchivo_sihayarchivo : false,

      medidasArchivo_id: '',
      medidasArchivo_nombreArchivo :'',
      medidasArchivo_sihayarchivo: false,

                files: [
        {
          color: 'blue',
          icon: 'mdi-adobe',
          subtitle: 'Descripcion breve de este docto',
          title: 'Manual de investigación interna',
          link :'https://onedrive.live.com/?authkey=%21AhxF5wMG%5FSJ00H0&cid=D1B73E758E4318E6&id=D1B73E758E4318E6%21718&parId=D1B73E758E4318E6%21690&o=OneUp'
        },
        {
          color: 'blue',
          icon: 'mdi-adobe',
          subtitle: 'Descripcion breve de este docto',
          title: 'Herramientas para investigacion interna',
          link :'https://onedrive.live.com/?authkey=%21AhxF5wMG%5FSJ00H0&cid=D1B73E758E4318E6&id=D1B73E758E4318E6%21709&parId=D1B73E758E4318E6%21690&o=OneUp'
        },
       
      ],
  
    };
  },

  methods: {
    hola() {
      console.log("montnado dlc");
      apiIncidentes.hola();
    },
    asignarVariables(datos){
  this.$store.dispatch('action_id',datos.id);
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
    guardarDenuncia(){

       let denunciaObj = this.$store.state.denuncias;



       let parametros = {

          id : denunciaObj.denuncialegal_id,

          incidenteid: denunciaObj.denuncialegal_incidenteid,

          foliodenuncia: denunciaObj.denuncialegal_foliodenuncia,

          consenso: denunciaObj.denuncialegal_consenso,

          consensodocto: denunciaObj.denuncialegal_consensodocto,

          soportecontacto: denunciaObj.denuncialegal_soportecontacto,

          soporteantes: denunciaObj.denuncialegal_soporteantes,

          soportedurante: denunciaObj.denuncialegal_soportedurante,

          soporteemocionalcontacto: denunciaObj.denuncialegal_soporteemocionalcontacto,

          soporteemocionalantes: denunciaObj.denuncialegal_soporteemocionalantes,

          soporteemocionaldurante: denunciaObj.denuncialegal_soporteemocionaldurante,

          medidasd: denunciaObj.denuncialegal_medidasd,

          medidasd_docto: denunciaObj.denuncialegal_medidasd_docto,

          medidastexto: denunciaObj.denuncialegal_medidastexto,

          fechaCreacion: denunciaObj.denuncialegal_fechaCreacion,

          fechaUpdate: denunciaObj.denuncialegal_fechaUpdate,

          estado: denunciaObj.denuncialegal_estado
                  

       };
       
       let guardar  = apiDenuncias.update__denuncialegal(parametros, this.$store);

       guardar.then(
         response=>{

           console.log(JSON.stringify(response.data));

         }
       ).catch(
         error=> {
           console.log(error);
         }
       );
       
    },
    cargarDenuncia(){
      let denunciaId = this.$route.params.denunciaId;
      
      let denuncia = apiDenuncias.cargar__denuncialegal(denunciaId,this.$store)
      
      
      denuncia
      .then( response => {
        console.log(JSON.stringify(response.data));
        this.folio = response.data[0]["folio"];
        this.denuncia=response.data[0];
        
      this.consensoArchivo_id= this.denuncia.consensoArchivo.id;
      this.consensoArchivo_nombreArchivo =this.denuncia.consensoArchivo.nombreOriginal;
      this.consensoArchivo_sihayarchivo=  this.denuncia.consensoArchivo.hayArchivo;

      this.medidasArchivo_id= this.denuncia.medidasArchivo.id;
      this.medidasArchivo_nombreArchivo =this.denuncia.medidasArchivo.nombreOriginal;
      this.medidasArchivo_sihayarchivo=  this.denuncia.medidasArchivo.hayArchivo;


        console.log("valor de nombre archivo consensodocto" +this.denuncia.consensoArchivo.nombreOriginal);
       console.log("valor de nombre archivo medidas" +this.denuncia.medidasArchivo.nombreOriginal);
       
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