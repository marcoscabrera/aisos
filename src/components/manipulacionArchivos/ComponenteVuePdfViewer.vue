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
                      @click="imprimir"
                      >

                        <v-icon>
                          mdi-print-file
                        </v-icon>
                       Imprimir

                  </v-btn>
         

             </v-col>
    </v-row>

  <div id="app" style="height:593px" v-if="verPDf">
    <PDFView
      :src.sync="archivo" 
      ref="pdfView"
      
      sidebarFeatureVisible="true"
      downloadFeatureVisible="true" 
      dropzoneFeatureVisible="true" 
      toolbarVisible="true" 
      scale.sync="scale" 
    > 
        <template slot="right-toolbox"></template> <!-- Add more buttons/features on the right side of the toolbar -->
        <template slot="left-toolbox"></template> <!-- Add more buttons/features on the left side of the toolbar -->
        <template slot="error"></template> <!-- Change the error message design -->
        <template slot="loading"></template> <!-- Change the pdf loader design -->
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

      hardcode(){
 this.archivo  = this.$store.state.uivars.uivars_docto_a_ver;
      },

      imprimir_el_canvas(){


          printJS(this.archivo, 'pdf');

      


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
<style>

#download {

display: none !important;


}

</style>