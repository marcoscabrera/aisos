<template>
<v-container name="cuerporeporte">
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
          <p class="text-center"> Valoracion Inicial </p>
         </v-col>

    </v-row>
    <br>
     <v-row>
        <v-col cols="12" xs="4"  sm="4" md="4" lg="4">
         FOLIO #    {{this.$store.state.incidentes.etapainicial_folio}}
        </v-col>
        <v-col cols="12" xs="4"  sm="4" md="4" lg="4">
          Programa : {{this.$store.state.incidentes.etapainicial_programa}}
         </v-col>
        <v-col cols="12" xs=""  sm="" md="" lg="">
         Fecha de inicio #   {{this.$store.state.incidentes.etapainicial_fecha}}
        </v-col>
    </v-row>

    <!--   -->
      <v-row>
        <v-col cols="12" xs="12"  sm="12" md="12" lg="12">
         <strong>Involucrados :</strong>
        </v-col>

    </v-row>

     <v-row>
        <v-col cols="12" xs="12"  sm="12" md="12" lg="12">
          {{this.$store.state.incidentes.etapainicial_involucrados}}
        </v-col>

    </v-row>

    <!-- DENUNCIANTE Y CARGO -->
    <v-row>
        <v-col cols="12" xs="12"  sm="12" md="12" lg="12">
         <strong>Denunciante : </strong>{{this.$store.state.incidentes.etapainicial_elaboro}}
           <strong>Cargo :</strong> {{this.$store.state.incidentes.etapainicial_cargos}}
        </v-col>
    </v-row>

    <!--  Registro de hechos -->
      <v-row>
        <v-col cols="12" xs="12"  sm="12" md="12" lg="12">
         <strong>Registro de los hechos :</strong>
        </v-col>

    </v-row>

     <v-row>
        <v-col cols="12" xs="12"  sm="12" md="12" lg="12">
        {{this.$store.state.incidentes.etapainicial_registrohechos}}
            </v-col>

    </v-row>

    <div class="html2pdf__page-break"/>
    <!-- PERFIL DEL AGRESOR  -->
    <v-row>
        <v-col cols="12" xs="12"  sm="12" md="12" lg="12">
         <strong>Perfil del agresor :</strong> {{ this.$store.state.incidentes.etapainicial_perfildelagresor}} - {{this.$store.state.incidentes.etapainicial_paadultocolaborador}} - {{this.$store.state.incidentes.etapainicial_paadultocolaboradortipo}}
        </v-col>

    </v-row>
    <!-- PERFIL DEL victima  -->
    <v-row>
        <v-col cols="12" xs="12"  sm="12" md="12" lg="12">
         <strong>Perfil de la victima :</strong> {{this.$store.state.incidentes.etapainicial_perfilvictima}} -{{this.$store.state.incidentes.etapainicial_recibeayuda}}
        </v-col>

    </v-row>
    <!--  Medidas de proteccion -->
      <v-row>
        <v-col cols="12" xs="12"  sm="12" md="12" lg="12">
         <strong>Medidas de proteccion inmediatas :</strong>
        </v-col>

    </v-row>

     <v-row>
        <v-col cols="12" xs="12"  sm="12" md="12" lg="12">
        {{this.$store.state.incidentes.etapainicial_medidasproteccion}}
             </v-col>

    </v-row>

   <!-- es un incidentes  -->
    <v-row>
        <v-col cols="12" xs="12"  sm="12" md="12" lg="12">
         <strong>¿Es un incidentes de desproteccion infantil? :</strong> {{this.$store.state.incidentes.etapainicial_incidentesconfirmado}}
        </v-col>

    </v-row>

    <!--  tettigos -->
      <v-row>
        <v-col cols="12" xs="12"  sm="12" md="12" lg="12">
         <strong>Testigos. :</strong>
        </v-col>

    </v-row>

     <v-row>
        <v-col cols="12" xs="12"  sm="12" md="12" lg="12">
       {{this.$store.state.incidentes.etapainicial_testigos}}
     </v-col>

    </v-row>


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