<template>
<v-container>
    <v-row>
        <v-col cols="12" xs="12" sm="3" md="3" lg="4">
            <v-btn color="primary" 
            dense 
            dark 
            block
            @click="generateReport"
            class="posicionenreporte">
            <v-icon right dark> mdi-printer </v-icon>
             <v-spacer></v-spacer>
              Imprimir
            </v-btn>
        </v-col>
        <v-col cols="12" xs="12" sm="3" md="3" lg="4">
           
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="6" lg="8">

            <BarraDeNavegacion
             activo_ri="1"
             activo_vi="1"
             activo_s="0"
             activo_c="0"
             >
             </BarraDeNavegacion>
       <!-- import BarraDeNavegacion from "@/components/etapas/BarraDeNavegacion.vue";

-->
        </v-col>
    </v-row>
     <!--<CuerpoReporte name="visual"></CuerpoReporte>
       -->
    <v-alert type="info">
     Actualmente esta caracteristica esta en desarrollo.
    </v-alert>
<vue-html2pdf
        :show-layout="true"
        :float-layout="false"
        :enable-download="true"
        :preview-modal="false"
        :paginate-elements-by-height="1400"
        filename="hee hee"
        :pdf-quality="2"
        :manual-pagination="false"
        pdf-format="a4"
        pdf-orientation="landscape"
        pdf-content-width="800px"

        @progress="onProgress($event)"
        @hasStartedGeneration="hasStartedGeneration()"
        @hasGenerated="hasGenerated($event)"
        ref="html2Pdf"
        :html-to-pdf-options ="htmlToPdfOptions"
    >
        <section slot="pdf-content">
            <CuerpoReporteInvestigacion name="impresiones"></CuerpoReporteInvestigacion>

         </section>
        </vue-html2pdf>
</v-container>
</template>

<script>
//import agregarRolComponente from '@/components/usuarios/agregarRolComponente.vue';
import CuerpoReporteInvestigacion from '../components/reporteimpresion/CuerpoReporteInvestigacion.vue';
import BarraDeNavegacion from "@/components/etapas/BarraDeNavegacion.vue";

import VueHtml2pdf from 'vue-html2pdf';
    export default {

        name : 'ReporteImpresion',

        components :{ CuerpoReporteInvestigacion, VueHtml2pdf,BarraDeNavegacion },

        data() {
            return {
                vi:false,
                integral :false,
                seguimiento :false,
                cierre : false,
                denuncia : false,
                investigacion: false,
htmlToPdfOptions: {
    margin: 0,

    filename: 'ReporteInvestigacion.pdf',

    image: {
        type: 'jpeg', 
        quality: 0.98
    },

    enableLinks: false,

    html2canvas: {
        scale: 1,
        useCORS: true
    },

    jsPDF: {
        unit: 'in',
        format: 'a4',
        orientation: 'portrait'
    }
}
                
            }
        },

        

        methods: {
         //   this.generateReport();    
        generateReport () {
            this.$refs.html2Pdf.generatePdf()
        },

        },
        
    }
</script>

<style scoped>

</style>