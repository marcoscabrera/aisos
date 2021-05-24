<template>
  <div id="app" style="height:593px">
    <PDFView
      :src.sync="archivo" 
      ref="pdfView"
      
      sidebarFeatureVisible="true"
      :downloadFeatureVisible="false" 
      :dropzoneFeatureVisible="false" 
      toolbarVisible="true" 
      scale.sync="scale" 
    > 
        <template slot="right-toolbox"></template> <!-- Add more buttons/features on the right side of the toolbar -->
        <template slot="left-toolbox"></template> <!-- Add more buttons/features on the left side of the toolbar -->
        <template slot="error"></template> <!-- Change the error message design -->
        <template slot="loading"></template> <!-- Change the pdf loader design -->
    </PDFView>
  </div>
</template>
<script>
import apiBajarPdf from '@/apialdeas/apiBajarPdf.js';
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
    }
  },

  mounted(){

     this.imprimir();

  },

  methods : {

       imprimir() {

           let imp =  apiBajarPdf.bajarPdf2(this.$store.state.uivars.uivars_docto_a_ver,this.$store);

            imp
           .then( response => { 
               
               console.log(JSON.stringify(response.data));
               
              this.archivo  = this.$store.state.uivars.uivars_docto_a_ver;
           } )
           .catch( error => { console.log(JSON.stringify(error.data))});
         
       }
  

  }
}
</script>