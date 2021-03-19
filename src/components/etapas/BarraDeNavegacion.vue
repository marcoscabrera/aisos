<template>

   <v-bottom-navigation  color="primary">

                   <v-btn 
                    dark
                    small
                    @click="IR_a_RUTA"
                    :clase ="claseResponsive"
                  >
                    <span class ="d-none d-sm-flex" >Dashboard</span>
                    <v-icon dark>
                      mdi-view-dashboard-variant-outline 
                    </v-icon>
                  </v-btn>
    

    <v-btn  @click="IR_a_ri" :clase ="claseResponsive">
      <span class ="d-none d-sm-flex">Inicial</span>

      <v-icon>mdi-file-document-edit-outline</v-icon>
    </v-btn >

    <v-btn    @click="IR_a_vi" :clase ="claseResponsive">
      <span class ="d-none d-sm-flex">Integral</span>

      <v-icon>mdi-file-cog-outline</v-icon>
    </v-btn>

    <v-btn   @click="ir_al_seguimiento"  :clase ="claseResponsive">
      <span class ="d-none d-sm-flex">Seguimiento</span>

      <v-icon>mdi-clipboard-check-outline</v-icon>
    </v-btn>

    <v-btn   @click="ir_al_cierre" :clase ="claseResponsive">
      <span class ="d-none d-sm-flex">Cierre</span>
      <v-icon>mdi-map-marker</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
    export default {

        props: {
            activo_ri: {
               type : String
            },
            activo_vi: {
               type : String
            },
            activo_s: {
               type : String
            },
            activo_c: {
               type : String
            },
        },

        data() {

            return {

              claseResponsive : ''
            }
            },

            mounted () {
              this.buscarVersionViewport( ) ;
            },


        methods: {
  buscarVersionViewport( ) {
        
        

         console.log(" <<<<<< VALOR BREAKPOINT.NAME >>>>>> " + this.$vuetify.breakpoint.name);
         let clase = ''
         switch (this.$vuetify.breakpoint.name) {
            case 'xs': 
            clase ="minimoBotonEnBarra";
            break;

            case 'sm':  
            clase ="minimoBotonEnBarra";
            break;

            case 'md':  
           clase ="";
            break;

            case 'lg':  
            clase ="";
            break;

            case 'xl':  
            clase ="";
            break;
        }
        this.claseResponsive =  clase;
    },
        IR_a_ri() {

       // named route
          
          console.log(" <<< BARRA DE NAVEGACION >>>> valor incidente >>>" + this.$store.state.incidentes.etapainicial_incidente);

          let id  = this.$store.state.incidentes.etapainicial_incidente;
          this.$router.push({ name: "DenunciasDetalle", params: { id: id } });
         

        },

   ir_al_cierre(){
     console.log(" <<< BARRA DE NAVEGACION >>>> valor incidente >>>" + this.$store.state.incidentes.etapainicial_incidente);

      let id  = this.$store.state.incidentes.etapainicial_incidente;
      this.$router.push({ name: "Cierre", params: { incidenteId: id } });
     

    },
    ir_al_seguimiento(){
        console.log(" <<< BARRA DE NAVEGACION >>>> valor incidente >>>" + this.$store.state.incidentes.etapainicial_incidente);

        let id  = this.$store.state.incidentes.etapainicial_incidente;
        this.$router.push({ name: "Seguimiento", params: { id: id } });

       
    },
      IR_a_vi(){
        
       console.log(" <<< BARRA DE NAVEGACION >>>> valor incidente >>>" + this.$store.state.incidentes.etapainicial_incidente);

        let id  = this.$store.state.incidentes.etapainicial_incidente;
        //this.$router.push({ name: "ValoracionIntegral", params: { id: this.$route.params.id  });
          this.$router.push({ name: "ValoracionIntegral", params: { id: id } });
      
      },
    IR_a_RUTA() {
     console.log(" <<< BARRA DE NAVEGACION >>>> valor incidente >>>" + this.$store.state.incidentes.etapainicial_incidente);

      this.$router.push('/dashboard');
    },
        },
        
    }
</script>

<style >
.minimoBotonEnBarra{
  min-width: 52px !important;
}
</style>