<template>
  <pdf name ="visordos" :src="this.$store.state.uivars.uivars_docto_a_ver" :page="1">
    <template slot="loading">
      loading content here...
    </template>
  </pdf>
</template>

<script>
import pdf from 'pdfvuer'
//ComponentePDFvuever
// import 'pdfjs-dist/build/pdf.worker.entry' // To be uncommented if you get error: Error: Setting up fake worker failed: "window.pdfjsWorker is undefined".

export default {
    data() {
        return {
            src: ''
        }
    },
    mounted () {
       this.cargar();
    },
    methods: {
        cargar() {
            this.src = this.$store.state.uivars.uivars_docto_a_ver ;
        }
    },
  components: {
    pdf
  }
}