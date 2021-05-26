<template>
  <v-container name="contenedornotificacion">
    <v-row>
      <h2 class="text-center">
        <v-col> Gracias, los datos se han actualizado</v-col>
      </h2>
    </v-row>
    <v-row>
    
      <v-col>
        <p class="text-center" >

             {{this.$store.state.notificacion.notificacion_texto_respuesta}}
        </p>
    
        <p>
         <!-- Reporte # <strong>{{folio}}</strong> -->
        </p>
      </v-col>
      
    </v-row>

    <v-row>
      <v-col>
        <v-btn color="blue" block
        
        @click="irADashboard"> Dashboard </v-btn>
      </v-col>

      <v-col>
        <v-btn @click="irARespuesta" color="blue" block>
           Regresar a {{this.$store.state.notificacion.notificacion_respuesta}} </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
//import dashboardVista from '@/components/dashboard/dashboardVista.vue';
export default {
  name: "Dasboard",

  data() {
    return {
      folio: '',
      esIncidente :''
    };
  },

  mounted(){

   // this.recuperarParametros();
  },

  methods: {

    recuperarParametros(){

      this.folio   = this.$route.params.folion;
      this.esIncidente = this.$route.params.esincidente;

      console.log( this.folio + ' -- ' +this.esIncidente)

    },

    irADashboard(){

      this.$router.push('/dashboard');
    },
    irAdenuncia() {
         
         let idRecuperado = this.$route.params.incidenteId;
         this.$router.push({ name: "ValoracionIntegral", params: { id: idRecuperado } });
   
    },

    irARespuesta(){
      try {

        var respuesta  = this.$store.state.notificacion.notificacion_respuesta;
      console.log("Notificacion Respuesta : " + respuesta);
      
      var parametro  = this.$store.state.notificacion.notificacion_incidenteid;

        switch (respuesta) {
            case 'investigacion':
                   this.$router.push({ name: "InvestigacionInterna", params: { incidenteId: parametro } });
  
                break;
            case 'abordaje':
                   this.$router.push({ name: "AbordajeInterno", params: { incidenteId: parametro } });
  
                break;
           case 'denuncia':
                   this.$router.push({ name: "DenunciasDetalle", params: { id: parametro } });
  
                break;
           case 'seguimiento':

                   var id  = this.$store.state.incidentes.etapainicial_incidente;
                   this.$router.push({ name: "Seguimiento", params: { id: id } });
                break;
        
            default:
                break;
        }
      }catch(error){

        console.log("error en ir a respiuesta : "  + error);

      }
    },
    saludo() {
      console.log("saludos estas en dasboard");
    },
  },

  updated() {
    this.saludo();
    
  },
};
</script>

<style scoped>
</style> 