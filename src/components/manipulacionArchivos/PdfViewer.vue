<template>
  <div id="pageContainer">
    <div id="viewer" class="pdfViewer"></div>
  </div>
</template>

<script>
import pdfjsLib from "pdfjs-dist/build/pdf";
import { PDFViewer } from "pdfjs-dist/web/pdf_viewer";
import "pdfjs-dist/web/pdf_viewer.css";

pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://cdn.jsdelivr.net/npm/pdfjs-dist@2.0.943/build/pdf.worker.min.js";


export default {
  name: "PdfViewer",

  data(){
      return {
          
      }
  },
  props : ["link"],
  mounted() {
    this.getPdf(this.link);
  },
  methods: {
   async getPdf(link) {

    console.log(" getPdf ");

     console.log(" link :" + link );
      let container = document.getElementById("pageContainer");

      let pdfViewer = new PDFViewer({
        container: container
      });

      let loadingTask = pdfjsLib.getDocument(link);

      let pdf =  await loadingTask.promise;

      pdf.then(
          response => {
              console.log(response.data);
              // pdfViewer.setDocument(response);
          }
      ).catch( error => { console.log(error )});

      return pdfViewer;
      
    }
  }
};
</script>

<style>
#pageContainer {
  margin: auto;
  width: 80%;
}

div.page {
  display: inline-block;
}
</style>