<template>
 <v-container name ="visor">
    <!-- <PDFDocument :link="src"/> -->
    <!--<PdfViewer :link="src"/> -->
  <!--  <PDFV2 :link="src"/>  -->
<prueba></prueba>
 </v-container>
</template>

<script>
///import PdfViewer from '@/components/manipulacionArchivos/PdfViewer.vue';
//import PdfViewer from '@/components/manipulacionArchivos/PdfViewer.vue';
//import  PDFV2 from '@/components/manipulacionArchivos/PDFV2.vue'; 
import  prueba from '@/components/manipulacionArchivos/prueba.vue'; 

    export default {

        data() {
            return {
                src: ''
            }
        },

        components :{
            prueba
               //PDFDocument
           // PDFV2,
             //PdfViewer ,
       
        },

        methods: {
            cargarDocto() {
                 
                 this.src = this.$store.state.uivars.uivars_docto_a_ver ;
                console.log("================");
                console.log(this.src);
                console.log("================");
            }
        },
        mounted () {
            this.cargarDocto();
        },
        
    }
</script>

<style scoped>

</style>