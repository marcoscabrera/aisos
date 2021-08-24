<template>
<v-container>
    <v-row>

       <v-col cols="12" xs="12" sm="12" md="4" lg="4">

       </v-col>



       <v-col cols="12" xs="12" sm="12" md="4" lg="4">
         </v-col>




      <v-col cols="12" xs="12" sm="12" md="4" lg="4">
               
            <v-btn id="xx"
                      color="primary"
                      :loading="loading"
                      block
                      @click="regresar"
                      >

              Regresar a la pantalla anterior

          </v-btn>


                   
                 <!--    <v-btn id="xx"
                      color="primary"
                      :loading="loading"
                      @click="imprimir_el_canvas"
                      >

                        <v-icon>
                          mdi-print-file
                        </v-icon>
                       Imprimir

                  </v-btn>  -->
         

             </v-col>
    </v-row>


    <!-- 

         downloadFeatureVisible="false"
        <template slot="right-toolbox"></template> Add more buttons/features on the right side of the toolbar 
        <template slot="left-toolbox"></template>  Add more buttons/features on the left side of the toolbar 
        <template slot="error"></template> Change the error message design 
        <template slot="loading"></template>  Change the pdf loader design
      --> 
       <div id="app" style="width:100%" v-if="verPDf">

    <PDFView
      :src.sync="archivo" 
      ref="pdfView"
      :downloadFeatureVisible="false"
      sidebarFeatureVisible=false
      dropzoneFeatureVisible=false
      toolbarVisible=false
      scale.sync="scale" 
    > 
    <template slot="left-toolbox">

    </template>
    </PDFView>
  </div>


  <embed id="pdfin" :src="elArchivo" type="application/pdf" width="100%" height="600px" />
  </v-container>
</template>
<script>
import printJS from 'print-js';
//import apiBajarPdf from '@/apialdeas/apiBajarPdf.js';
import {PDFView} from 'vue_pdfjs_viewer';
export default {
  components:{
  // ...
    PDFView
  },
  data(){
    return {
      scale: "1.25",
      archivo : '',
      elArchivo : '',
      loading : false,
      verPDf :true
    }
  },

  mounted(){

     this.hardcode();

  },

  methods : {

     regresar (){

       let r = this.$store.state.uivars.regresar_A_despues_de_impresion;
       let id = this.$store.state.uivars.id_regresar_A_despues_de_impresion;

        typeof r ;
        typeof id;

        this.$router.push(r);
     },
      
      /* ESTE ES EL METODO ACTUAL*/
      hardcode(){
           this.archivo  = this.$store.state.uivars.uivars_docto_a_ver;
      },

      imprimir_el_canvas(){


         // printJS(this.archivo, 'pdf');

          printJS('page-1', 'html');


      },

       imprimircadena(){


         printJS({printable: this.archivo, type: 'pdf', base64: true});

      


      },

       imprimir() {


           this.loading=true;

              var bin = atob(this.archivo);
            this.elArchivo = 'data:application/pdf;base64,' + bin + "#toolbar=0";


             this.loading=false;
             this.verPDf = false;
           //this.imprimircadena();

         /*  let imp =  apiBajarPdf.bajarPdf2(this.$store.state.uivars.uivars_docto_a_ver,this.$store);

            imp
           .then( response => { 
               
               console.log(JSON.stringify(response.data));
               var b64 = response.data.pdf;
               var bin = atob(b64);
            console.log('File Size:', Math.round(bin.length / 1024), 'KB');
            console.log('PDF Version:', bin.match(/^.PDF-([0-9.]+)/)[1]);
           */
            // Embed the PDF into the HTML page and show it to the user
           /* var obj = document.createElement('object');
            obj.style.width = '100%';
            obj.style.height = '842pt';
            obj.type = 'application/pdf';
            obj.data = 'data:application/pdf;base64,' + b64 +"#toolbar=0";
            document.body.appendChild(obj);*/
           

          /*   this.loading=false;
             this.verPDf = false;*/
               
             
           /*} )
           .catch( error => { 
               console.log(JSON.stringify(error.data));
                this.loading=false;
               });*/
         
       }

  }
}
</script>
<style scope>

#download {

display: none !important;


}
#app {
   
  width: 100%;

}

</style>