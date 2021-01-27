<template>
  <div class="pdf-document">
    <PDFPage
      v-for="page in pages"
      v-bind="{page, scale}"
      :key="page.pageNumber"
    />
  </div>
</template>
<script>
import PDFPage  from '@/components/manipulacionArchivos/PDFPage.vue'
import range from 'lodash/range';
export default {
  //...
  data(){
      return {
         pages : []
      }
  },
  components :{ PDFPage },
  props: {
      link: {
          type: String,
          default: ''
      },
  },
  created() {
    this.fetchPDF();
  },

  methods: {
    fetchPDF() {

      console.log(" valor the link " + this.link );
      import('pdfjs-dist/webpack').
        then(
            pdfjs => pdfjs.getDocument(this.link)
            ).
        then(pdf => (this.pdf = pdf));
    },
  },
  watch: {
    pdf(pdf) {
      
      const promises = range(1, pdf.numPages).
        map(number => pdf.getPage(number));

      Promise.all(promises).
        then(pages => (this.pages = pages));
    },
  },
  };

  </script>