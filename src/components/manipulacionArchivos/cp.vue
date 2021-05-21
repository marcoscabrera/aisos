<template>
<v-container>
      <v-row>

       <v-col cols="12" xs="12" sm="12" md="4" lg="4">
          <v-btn id="buttons"
            color="primary"
            @click="page > 1 ? page-- : 1"
            >
            <v-icon>
              mdi-chevron-left
            </v-icon>
               Atras
          </v-btn>
            <a class="ui active item">
              {{page}} / {{ numPages ? numPages : '∞' }}
            </a>
          <v-btn id="buttons"
            color="primary"
            @click="page < numPages ? page++ : 1"
            >
          <v-icon>
            mdi-chevron-right
          </v-icon>
          Adelante
          </v-btn>



       </v-col>



       <v-col cols="12" xs="12" sm="12" md="4" lg="4">
         
          <v-btn id="buttons"
          color="primary"
        @click="scale -= scale > 0.2 ? 0.1 : 0"
          >
          <v-icon>
            mdi-magnify-minus
          </v-icon>
          Zoom in 
          </v-btn>
            <a class="ui active item">
              {{ formattedZoom }} %
            </a>
          <v-btn id="buttons"
          color="primary"
        @click="scale += scale < 2 ? 0.1 : 0"
          >
          <v-icon>
            mdi-magnify-plus
          </v-icon>
          Zoom out
          </v-btn>
       </v-col>




              <v-col cols="12" xs="12" sm="12" md="4" lg="4">



                   <v-btn id="xx"
                      color="primary"
                      @click="imprime_el_canvas"
                      >

                        <v-icon>
                          mdi-print-file
                        </v-icon>
                       Imprimir

                  </v-btn>
         

             </v-col>
    </v-row>
  <div id="pdfvuer">








   <!-- <div id="buttons" class="ui grey three item inverted bottom fixed menu transition hidden">
      <a class="item" @click="page > 1 ? page-- : 1">
        <i class="left chevron icon"></i>
        Back
      </a>
      <a class="ui active item">
        {{page}} / {{ numPages ? numPages : '∞' }}
      </a>
      <a class="item" @click="page < numPages ? page++ : 1">
        Forward
        <i class="right chevron icon"></i>
      </a>
    </div> -->
   <!-- <div id="buttons" class="ui grey three item inverted bottom fixed menu transition hidden">
      <a class="item" @click="scale -= scale > 0.2 ? 0.1 : 0">
        <i class="left chevron icon" />
          Zoom -
      </a>
      <a class="ui active item">
        {{ formattedZoom }} %
      </a>
      <a class="item" @click="scale += scale < 2 ? 0.1 : 0">
        Zoom +
        <i class="right chevron icon" />
      </a>
    </div>-->
    <pdf :src="pdfdata" v-for="i in numPages" :key="i" :id="i" :page="i"
      :scale.sync="scale" style="width:100%;margin:20px auto;">
      <template slot="loading">
        loading content here...
      </template>
    </pdf>
  </div>

</v-container>

</template>

<script>
import printJS from 'print-js'
import pdfvuer from 'pdfvuer'
// import 'pdfjs-dist/build/pdf.worker.entry' // To be uncommented if you get error: Error: Setting up fake worker failed: "window.pdfjsWorker is undefined".
//https://github.com/arkokoley/pdfvuer
export default {
  components: {
    pdf: pdfvuer
  },
  data () {
    return {
      page: 1,
      numPages: 0,
      pdfdata: undefined,
      errors: [],
      scale: 'page-width'
    }
  },
  computed: {
    formattedZoom () {
        return Number.parseInt(this.scale * 100);
    },
  },
  mounted () {
    this.getPdf()
  },
  watch: {
    show: function (s) {
      if(s) {
        this.getPdf();
      }
    },
    page: function (p) {
      if( window.pageYOffset <= this.findPos(document.getElementById(p)) || ( document.getElementById(p+1) && window.pageYOffset >= this.findPos(document.getElementById(p+1)) )) {
        // window.scrollTo(0,this.findPos(document.getElementById(p)));
        document.getElementById(p).scrollIntoView();
      }
    }
  },
  methods: {
    imprime_el_canvas(){
         //printJS('1', 'html');
          printJS(encodeURI(this.$store.state.uivars.uivars_docto_a_ver), 'pdf');
    },
    getPdf () {
      let srcx = this.$store.state.uivars.uivars_docto_a_ver ;  
      var self = this;
      self.pdfdata = pdfvuer.createLoadingTask(srcx);
      self.pdfdata.then(pdf => {
        self.numPages = pdf.numPages;
        window.onscroll = function() { 
          changePage() 
          stickyNav()  
        }

        // Get the offset position of the navbar
        var sticky = document.getElementById('buttons')[0].offsetTop;

        // Add the sticky class to the self.$refs.nav when you reach its scroll position. Remove "sticky" when you leave the scroll position
        function stickyNav() {
          if (window.pageYOffset >= sticky) {
           // $('#buttons')[0].classList.remove("hidden")
           console.log('hidden');
          } else {
            //$('#buttons')[0].classList.add("hidden")
            console.log('add hidden');
          }
        }

        function changePage () {
          var i = 1, count = Number(pdf.numPages);
          do {
            if(window.pageYOffset >= self.findPos(document.getElementById(i)) && 
                window.pageYOffset <= self.findPos(document.getElementById(i+1))) {
              self.page = i
            }
            i++
          } while ( i < count)
          if (window.pageYOffset >= self.findPos(document.getElementById(i))) {
            self.page = i
          }
        }
      });
    },
    findPos(obj) {
      return obj.offsetTop;
    }
  }
}
</script>
<style src="pdfvuer/dist/pdfvuer.css"></style>
<style lang="css" scoped>
  #buttons {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
  /* Page content */
  .content {
    padding: 16px;
  }
</style>