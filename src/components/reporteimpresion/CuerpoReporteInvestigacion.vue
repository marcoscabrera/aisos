<template>
<v-container name="cuerporeporteintegral">
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
          <p class="text-center"> Investigación </p>
         </v-col>

    </v-row>
    <br>
     <v-row>
        <v-col cols="12" xs="4"  sm="4" md="4" lg="4">
         FOLIO INVESTIGACION #    {{this.$store.state.incidentes.etapainicial_folio}}
        </v-col>
        <v-col cols="12" xs="4"  sm="4" md="4" lg="4">
        <!--  Programa : {{this.$store.state.incidentes.etapainicial_programa}} -->
         </v-col>
        <v-col cols="12" xs=""  sm="" md="" lg="">
         <!--Fecha de inicio #   {{this.$store.state.incidentes.etapainicial_fecha}} -->
        </v-col>
    </v-row>


      
    <v-row>
        <v-col cols="12" xs="12"  sm="12" md="12" lg="12">
         <strong>Carta de Autorización :</strong> {{this.$store.state.investigacion.investigacion_cartautorizacion_docto_nombre}}
        </v-col>

    </v-row>


        <!--  -->
    <v-row>
        <v-col cols="12" xs="12"  sm="12" md="12" lg="12">
         <strong> Terminos de referenecia : </strong>{{this.$store.state.investigacion.investigacion_terminosreferencia_doctp_nombre}}
         </v-col>
    </v-row>


    <!--  -->
    <v-row>
        <v-col cols="12" xs="12"  sm="12" md="12" lg="12">
         <strong> Plan de investigacion con Cronograma : </strong>{{this.$store.state.investigacion.investigacion_plan_docto_nombre}}
         </v-col>
    </v-row>

    <!--  -->
    <v-row>
        <v-col cols="12" xs="12"  sm="12" md="12" lg="12">
         <strong> Informe de Hallaszgos, conclusiones y recomendaciones : </strong>{{this.$store.state.investigacion.investigacion_informe_investigacion_informe_docto_nombredocto_nombre}}
         </v-col>
    </v-row>

        <v-row>
        <v-col cols="12" xs="12"  sm="12" md="12" lg="12">
         <strong> Evidencias : </strong>
         </v-col>
    </v-row>


</v-container>
</template>

<script>
/*

investigacion_evidencias :[],
investigacion_registroincidentes_docto_nombre:'' ,
 :'',
:'' ,
investigacion_plan_docto_nombre:'' ,
investigacion_informe_docto_nombre:'' ,
*/
import { jsPDF } from "jspdf";

    export default {
        name : 'CuerpoReporte',

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