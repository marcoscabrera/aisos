
<template>
    <div>
        <canvas id="micanvas"></canvas>
    </div>
</template>

<script>
//https://www.youtube.com/watch?v=1ZNeP7cjADo
   import pdfjsLib from 'pdfjs-dist/build/pdf';
   //https://cdn.jsdelivr.net/npm/pdfjs-dist@2.6.347/build/pdf.min.js
    export default {
    
data() {
    return {
        pdf: null,pdfjs :''
    }
},

  props: {
      link: {
          type: String,
          default:  ''
      },
  },

   methods: {
       c2(){


        console.log("dentro de cargaDocto");
/*pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://cdn.jsdelivr.net/npm/pdfjs-dist@2.0.943/build/pdf.worker.min.js";
*/
  console.log("despiues del woek de cargaDocto");

  //
  // Asynchronous download PDF
  //""
  console.log(">>link " +this.$store.state.uivars.uivars_docto_a_ver);
  
        import('pdfjs-dist/webpack').
        then(
            pdfjs =>  pdfjs.getDocument(this.$store.state.uivars.uivars_docto_a_ver)

            ).
        then(pdf => (this.pdf = pdf));

        //console.log(pdfjs );

//  var loadingTask = pdfjs.getDocument( this.$store.state.uivars.uivars_docto_a_ver);
 
 /*this.pdfjs.promise.then(function(pdf) {
    //
    // Fetch the first page
    //
    pdf.getPage(1).then(function(page) {
      var scale = 1.5;
      var viewport = page.getViewport({ scale: scale, });

      //
      // Prepare canvas using PDF page dimensions
      //
      var canvas = document.getElementById('micanvas');
      var context = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      //
      // Render PDF page into canvas context
      //
      var renderContext = {
        canvasContext: context,
        viewport: viewport,
      };
      page.render(renderContext);
    });
  });*/
         

       },
       cargarDocto() {

        console.log("dentro de cargaDocto");
/*pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://cdn.jsdelivr.net/npm/pdfjs-dist@2.0.943/build/pdf.worker.min.js";
*/
  console.log("despiues del woek de cargaDocto");

  //
  // Asynchronous download PDF
  //""
  console.log(">>link " +this.$store.state.uivars.uivars_docto_a_ver);
  
  var loadingTask = pdfjsLib.getDocument( this.$store.state.uivars.uivars_docto_a_ver);
  loadingTask.promise.then(function(pdf) {
    //
    // Fetch the first page
    //
    pdf.getPage(1).then(function(page) {
      var scale = 1.5;
      var viewport = page.getViewport({ scale: scale, });

      //
      // Prepare canvas using PDF page dimensions
      //
      var canvas = document.getElementById('micanvas');
      var context = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      //
      // Render PDF page into canvas context
      //
      var renderContext = {
        canvasContext: context,
        viewport: viewport,
      };
      page.render(renderContext);
    });
  });
           
       }
   },
    mounted() {
         this.c2();
    },
        
    }
</script>

<style scoped>

</style>