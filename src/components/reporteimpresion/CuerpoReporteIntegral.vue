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
          <p class="text-center"> Valoracion Integral </p>
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
         <strong>Valoracion :</strong>
        </v-col>

    </v-row>

     <v-row>
        <v-col cols="12" xs="12"  sm="12" md="12" lg="12">
          {{this.$store.state.valoracion.etapavaloracion_textovi}}
        </v-col>

    </v-row>
       <!-- es un valoracion  -->
    <v-row>
        <v-col cols="12" xs="12"  sm="12" md="12" lg="12">
         <strong>Se confirma incidente :</strong> {{this.$store.state.valoracion.etapavaloracion_confirmaincidente}}
        </v-col>

    </v-row>

    <!-- tipologia -->
    <v-row>
        <v-col cols="12" xs="12"  sm="12" md="12" lg="12">
         <strong>Tipologia del Incidente : </strong>{{this.$store.state.valoracion.etapavaloracion_tipologiadelincidente}}
         </v-col>
    </v-row>

    <!-- Nivel del incidente -->
    <v-row>
        <v-col cols="12" xs="12"  sm="12" md="12" lg="12">
         <strong>Nivel del Incidente : </strong>{{this.$store.state.valoracion.etapavaloracion_niveldelincidente}}
         </v-col>
    </v-row>

    <!-- Tipo de caso -->
    <v-row>
        <v-col cols="12" xs="12"  sm="12" md="12" lg="12">
         <strong>Tipo de caso : </strong>{{this.$store.state.valoracion.etapavaloracion_tipodecaso}}
         </v-col>
    </v-row>
    <!-- Tipo de respuesta -->
    <v-row>
        <v-col cols="12" xs="12"  sm="12" md="12" lg="12">
         <strong>Tipo de Respuesta : </strong>{{this.$store.state.valoracion.etapavaloracion_tipoderespuesta}}
         </v-col>
    </v-row>

    <!-- Tipo de respuesta -->
    <v-row>
        <v-col cols="12" xs="12"  sm="12" md="12" lg="12">
         <strong>Medidas Integrales : </strong>{{this.$store.state.valoracion.etapavaloracion_medidasintegrales_docto}}
         </v-col>
    </v-row>
    <!--  Registro de hechos -->

  


</v-container>
</template>

<script>
// leer este ejemplo
//https://github.com/MrRio/jsPDF/blob/master/examples/html2pdf/pdf2.html

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