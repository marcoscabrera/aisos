<template>
 <v-container name ="visor">

     <cp></cp> 

 </v-container>
</template>

<script>

//import  prueba from '@/components/manipulacionArchivos/prueba.vue'; 
//import ComponentePDFvuever from  '@/components/manipulacionArchivos/ComponentePDFvuever.vue';
 import cp from  '@/components/manipulacionArchivos/cp.vue';
 
 export default {

        data() {
            return {
                src: ''
            }
        },

        components :{ cp
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
            this.cargarDocto();
        },
        
    }
</script>

<style scoped>

</style>