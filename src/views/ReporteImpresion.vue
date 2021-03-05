<template>
<v-container>
    <v-row>
        <v-col>
            <v-btn color="primary" 
            dense 
            dark 
            @click="generateReport">
            <v-icon right dark> mdi-printer </v-icon>
              Imprimir
            </v-btn>
        </v-col>
    </v-row>
     <!--<CuerpoReporte name="visual"></CuerpoReporte>
       -->

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
          <CuerpoReporte  name="impresiones"></CuerpoReporte> 

         </section>
        </vue-html2pdf>
</v-container>
</template>

<script>
//import agregarRolComponente from '@/components/usuarios/agregarRolComponente.vue';
import CuerpoReporte from '../components/reporteimpresion/CuerpoReporte.vue';
import VueHtml2pdf from 'vue-html2pdf';
    export default {

        name : 'ReporteImpresion',

        components :{ CuerpoReporte, VueHtml2pdf },

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

    filename: 'ReporteValoracionInicial.pdf',

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