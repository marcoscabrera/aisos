<template>
  <vue-pdf-app :v-if="seve" 
  :pdf="impresion"></vue-pdf-app>
</template>

<script>
import apiBajarPdf from '@/apialdeas/apiBajarPdf.js';
import VuePdfApp from "vue-pdf-app";
// import this to use default icons for buttons
//import "vue-pdf-app/dist/icons/main.css";

export default {
  components: {
    VuePdfApp
  }, 
  data() {
      
      return  {

            impresion : 'http://127.0.0.1/apialdeas/uploads/medidasintegrales/99191869d74d9ca7c5b4c76b4968ac16f00cc453.pdf',

            seve : true,

      }


  },

  mounted(){
      this.imprimir();

  },

  methods : {

      sop(){

          //          this.impresion = 'http://127.0.0.1/apialdeas/uploads/medidasintegrales/99191869d74d9ca7c5b4c76b4968ac16f00cc453.pdf';

            this.seve = true;

      },

      imprimir()  {


         //  this.impresion = this.$store.state.uivars.uivars_docto_a_ver;

           let p =  apiBajarPdf.bajarPdf2(this.$store.state.uivars.uivars_docto_a_ver,this.$store);

            p
           .then( response => { 
               console.log(JSON.stringify(response.data));
               
               let data64 =  response.data.pdf;

               typeof data64;

               let mostrar = atob(  response.data.pdf );

               console.log( " variable mostrar "  + typeof mostrar);
                
                this.impresion = mostrar;

                this.seve = true;

               } )
           .catch( error => { 
               console.log(JSON.stringify(error.data))});
      }
  }
};
</script>