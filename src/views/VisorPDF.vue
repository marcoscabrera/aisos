<template>
 <v-container name ="visor">

 <!-- <cp></cp> 
<ComponentePDFVueApp></ComponentePDFVueApp>-->
   
   
   <!-- esta el que funciona bien -->
   <ComponenteVuePdfViewer v-if="this.$store.state.uivars.verComponenteVuePdfViewer"
   ></ComponenteVuePdfViewer>

 </v-container>
</template>

<script>

//import  prueba from '@/components/manipulacionArchivos/prueba.vue'; 
//import ComponentePDFvuever from  '@/components/manipulacionArchivos/ComponentePDFvuever.vue';
//import cp from  '@/components/manipulacionArchivos/cp.vue';

//import ComponentePDFVueApp from '@/components/manipulacionArchivos/ComponentePDFVueApp.vue';

//este es el que funciona
import ComponenteVuePdfViewer from '@/components/manipulacionArchivos/ComponenteVuePdfViewer.vue';
 export default {

        data() {
            return {
                src: ''
            }
        },

        components :{
            
       ComponenteVuePdfViewer
             //ComponentePDFVueApp
           // cp
          // prueba
               //PDFDocument
           // PDFV2,
           // PdfViewer ,
       
        },

        methods: {
            cargarDocto() {
                
                console.log("montnado el contro");
                this.src = this.$store.state.uivars.uivars_docto_a_ver ;
                console.log("================");
                console.log(this.src);
                console.log("================");
            }
        },
        mounted () {
            this.$store.dispatch("action_uivar_verComponenteVuePdfViewer",true);
            this.cargarDocto();
        },
         
        
    }
</script>

<style scoped>

</style>