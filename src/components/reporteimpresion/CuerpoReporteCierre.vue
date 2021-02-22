<template>
<v-container name="cuerporeporteseguimiento">
    <v-row>
        <v-col cols="12" xs="2" sm="2" md="2" lg="2">
            <v-img src="https://www.aldeasinfantiles.org.mx/getmedia/51757cf7-a274-4bdc-b552-4304db77c698/logo-aldeas-mx">

            </v-img>
        </v-col>
        <v-col cols="12" xs="8" sm="8" md="8" lg="8">
            <h3 class="text-center">Plataforma de Desproteccion Infantil</h3>
        </v-col>
        <v-col cols="12" xs="2"  sm="2" md="2" lg="2">
            <v-row>
                <v-col>Fecha : </v-col>
            </v-row>
        </v-col>
    </v-row>

    <v-row>
        <v-col cols="12" xs="12"  sm="12" md="12" lg="12">
          <p class="text-center"> Cierre </p>
         </v-col>

    </v-row>
    <br>
     <v-row>
        <v-col cols="12" xs="4"  sm="4" md="4" lg="4">
         FOLIO #    {{this.$store.state.incidentes.etapainicial_folio}}
        </v-col>
        <v-col cols="12" xs="4"  sm="4" md="4" lg="4">
        <!--  Programa : {{this.$store.state.incidentes.etapainicial_programa}} -->
         </v-col>
        <v-col cols="12" xs=""  sm="" md="" lg="">
         <!--Fecha de inicio #   {{this.$store.state.incidentes.etapainicial_fecha}} -->
        </v-col>
    </v-row>

    <!--   -->
      <v-row>
        <v-col cols="12" xs="12"  sm="12" md="12" lg="12">
         <strong>Declaratoria :</strong>
        </v-col>

    </v-row>

     <v-row>
        <v-col cols="12" xs="12"  sm="12" md="12" lg="12">
          {{this.$store.state.seguimiento.seguimiento_status}}
        </v-col>

    </v-row>
       <!-- es un valoracion  -->
    <v-row>
        <v-col cols="12" xs="12"  sm="12" md="12" lg="12">
         <strong>Plan en Ejecución :</strong> {{this.$store.state.seguimiento.seguimiento_plan}}
         - {{ this.$store.state.seguimiento.seguimiento_plan_docto_nombre}}
       </v-col>

    </v-row>

    <!-- Documentos Oficiales de respaldo -->
    <v-row>
        <v-col cols="12" xs="12"  sm="12" md="12" lg="12">
         <strong>Documentos Oficiales de respaldo : </strong>{{this.$store.state.seguimiento.seguimiento_documentos}}
         - {{ this.$store.state.seguimiento.seguimiento_documentos_docto_nombre}}
         </v-col>
    </v-row>

    <!-- Notificación al DIF -->
    <v-row>
        <v-col cols="12" xs="12"  sm="12" md="12" lg="12">
         <strong>Notificación al DIF : </strong>{{this.$store.state.seguimiento.seguimiento_notificaciondif}}
         - {{ this.$store.state.seguimiento.seguimiento_notificaciondif_docto_nombre}}
         </v-col>
    </v-row>

    <!-- Notificación a la Fiscalia -->
    <v-row>
        <v-col cols="12" xs="12"  sm="12" md="12" lg="12">
         <strong>Notificación a la Fiscalia : </strong>{{this.$store.state.seguimiento.seguimiento_notificacionautoridad}}
         - {{ this.$store.state.seguimiento.seguimiento_notificacionautoridad_docto_nombre}}
 
         </v-col>
    </v-row>
    <!-- Notificación al PFN -->
    <v-row>
        <v-col cols="12" xs="12"  sm="12" md="12" lg="12">
         <strong>Notificación al PFN : </strong>{{this.$store.state.seguimiento.seguimiento_notificacionpfn}}
         -{{ this.$store.state.seguimiento.seguimiento_notificacionpfn_docto_nombre}}
         </v-col>
    </v-row>

    <!-- Notificación a la persona denunciante -->
    <v-row>
        <v-col cols="12" xs="12"  sm="12" md="12" lg="12">
         <strong>Notificación a la persona denunciante : </strong>{{this.$store.state.seguimiento.seguimiento_notificaciodenunciante}}
         
          - {{ this.$store.state.seguimiento.seguimiento_notificaciodenunciante_docto_nombres           }}
 
         
         </v-col>
    </v-row>


      <!-- Se cuenta con el llenado del acta de valoración : -->
    <v-row>
        <v-col cols="12" xs="12"  sm="12" md="12" lg="12">
         <strong>Se cuenta con el llenado del acta de valoración : </strong>{{this.$store.state.seguimiento.seguimiento_actavaloracion}}
          -{{ this.$store.state.seguimiento.seguimiento_actavaloracion_docto_nombre}}
  </v-col>
    </v-row>-

      <!-- Se cuenta con un pla de recuperacíon emocional de seguimiento -->
    <v-row>
        <v-col cols="12" xs="12"  sm="12" md="12" lg="12">
         <strong>Se cuenta con un pla de recuperacíon emocional de seguimiento : </strong>
         {{this.$store.state.seguimiento.seguimiento_planrecuperacion}} -
         {{this.$store.state.seguimiento.seguimiento_planrecuperacion_docto_nombre}}
         </v-col>
    </v-row>

        <!-- Tipo de respuesta -->
    <v-row>
        <v-col cols="12" xs="12"  sm="12" md="12" lg="12">
         <strong>Se cuenta con protocolo SOS : </strong>{{this.$store.state.seguimiento.seguimiento_protocolosos}}
         </v-col>
    </v-row>
  
</v-container>
</template>

<script>
/*






--------------------------------------------------------------

          seguimiento_status: null,
        seguimiento_plan: null,
        seguimiento_documentos: null,
        seguimiento_notificaciondif: null,
        seguimiento_notificacionautoridad: null,
        seguimiento_notificacionpfn: null,
        seguimiento_notificaciodenunciante: null,
        seguimiento_actavaloracion: null,
        seguimiento_planrecuperacion: null,
        seguimiento_protocolosos       :null,



        seguimiento_planrecuperacion_docto_nombre      :null,
        seguimiento_actavaloracion_docto_nombre        :null,
        seguimiento_notificaciodenunciante_docto_nombre :null,
        seguimiento_plan_docto_nombre: null,
        seguimiento_documentos_docto_nombre           :null,
        seguimiento_notificaciondif_docto_nombre      :null,
        seguimiento_notificacionautoridad_docto_nombre:null,
        seguimiento_notificacionpfn_docto_nombre      :null,
        */
// leer este ejemplo
//https://github.com/MrRio/jsPDF/blob/master/examples/html2pdf/pdf2.html

import { jsPDF } from "jspdf";

    export default {
        name : 'CuerpoReporteCierre',

        methods: {
            print() {

                var print= new jsPDF();
                print.fromHTML
                
            }
        },
        
    }
</script>

<style scoped>

</style>