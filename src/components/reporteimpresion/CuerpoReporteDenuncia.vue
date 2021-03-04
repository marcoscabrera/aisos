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
          <p class="text-center"> Denuncia </p>
         </v-col>

    </v-row>
    <br>
     <v-row>
        <v-col cols="12" xs="4"  sm="4" md="4" lg="4">
         FOLIO DENUNCIA #    {{this.$store.state.denuncias.denuncialegal_foliodenuncia}}
        </v-col>
        <v-col cols="12" xs="4"  sm="4" md="4" lg="4">
          FOLIO #    {{this.$store.state.incidentes.etapainicial_folio}}
               </v-col>
        <v-col cols="12" xs=""  sm="" md="" lg="">
         <!--Fecha de inicio #   {{this.$store.state.incidentes.etapainicial_fecha}} -->
        </v-col>
    </v-row>



       <!-- CONSENSO NACIONAL   -->
    <v-row>
        <v-col cols="12" xs="12"  sm="12" md="12" lg="12">
         <strong>Consenso Nacional para denuncia :</strong> {{this.$store.state.denuncias.denuncialegal_consenso}}
       <!-- ojo-->  - {{ this.$store.state.denuncias.denuncialegal_consensoArchivo_nombre}}
       </v-col>
           </v-row>

    <!-- soporte de un asesor legal -->
    <v-row>
        <v-col cols="12" xs="12"  sm="12" md="12" lg="12">
         <strong>Soporte de un Asesor legal : </strong>
         Contacto :  {{ this.$store.state.denuncias.denuncialegal_soportecontacto}} <br>
         Asesoria y acompañamiento antes : {{ this.$store.state.denuncias.denuncialegal_soporteantes}}<br>
         Asesoria y acompañamiento durante : {{ this.$store.state.denuncias.denuncialegal_soportedurante}}<br>

         </v-col>
    </v-row>

    <!-- soporte emocional -->
    <v-row>
        <v-col cols="12" xs="12"  sm="12" md="12" lg="12">
         <strong>Soporte Emocional para los NNAJ Involucrados : </strong>
         Contacto :  {{ this.$store.state.denuncias.denuncialegal_soporteemocionalcontacto}} <br>
         Asesoria y acompañamiento antes : {{ this.$store.state.denuncias.denuncialegal_soporteemocionalantes}}<br>
         Asesoria y acompañamiento durante : {{ this.$store.state.denuncias.denuncialegal_soporteemocionaldurante}}<br>

         </v-col>
    </v-row>

    
       <!-- CONSENSO NACIONAL   -->
    <v-row>
        <v-col cols="12" xs="12"  sm="12" md="12" lg="12">
         <strong>Implementación de medidas disciplinarias :</strong> {{this.$store.state.denuncias.denuncialegal_medidasd}}
       <!-- ojo-->  - {{ this.$store.state.denuncias.denuncialegal_medidasarchivo_nombre}}
       </v-col>

    </v-row>

    <!--   -->
      <v-row>
        <v-col cols="12" xs="12"  sm="12" md="12" lg="12">
         <strong>Acerca de las medidas :</strong>
        </v-col>

    </v-row>

     <v-row>
        <v-col cols="12" xs="12"  sm="12" md="12" lg="12">
          {{this.$store.state.denuncias.denuncialegal_medidastexto}}
        </v-col>

    </v-row>


</v-container>
</template>

<script>

import { jsPDF } from "jspdf";

    export default {
        name : 'CuerpoReporteDenuncias',

      mounted () {
            this.consola();
        },

        methods: {
            consola() {


            console.log(" MED :   " +this.$store.state.denuncias.denuncialegal_medidastexto);

 
            },
            print() {

                var print= new jsPDF();
                print.fromHTML
                
            }
        },
        
    }
</script>

<style scoped>

</style>