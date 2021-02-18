<template>
  <div id="pageContainer">
    <div id="viewer" class="pdfViewer"></div>
  </div>
</template>

<script>
import pdfjsLib from   "pdfjs-dist/build/pdf"
import { PDFViewer } from  "pdfjs-dist/web/pdf_viewer";
import "pdfjs-dist/web/pdf_viewer.css";

//pdfjsLib.GlobalWorkerOptions.workerSrc =
//  "https://cdn.jsdelivr.net/npm/pdfjs-dist@2.0.943/build/pdf.worker.min.js";


export default {
  name: "PdfViewer2",
  mounted() {
    this.getPdf();
  },
  methods: {
    async getPdf() {
      pdfjsLib.GlobalWorkerOptions.workerSrc =
     "https://cdn.jsdelivr.net/npm/pdfjs-dist@2.0.943/build/pdf.worker.min.js";

      let container = document.getElementById("pageContainer");
      let pdfViewer = new PDFViewer({
        container: container
      });
      let src = this.$store.state.uivars.uivars_docto_a_ver ;
      let loadingTask = pdfjsLib.getDocument(src);
      let pdf = await loadingTask.promise;
      pdfViewer.setDocument(pdf);
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