<template>
<v-card
    class="mx-auto"
    max-width="100%"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          ETAPA
        </div>
        <v-list-item-title >
          <span class="text-h4 mb-1" >
             {{titulo}}
          </span>

         <!-- <span class="text-h6 mb-1" >
             Folio # sin asignar
          </span>

          <span class="text-h6 mb-1" >
             {{titulo}}
          </span> -->
          
        </v-list-item-title>
        <v-list-item-subtitle>


         
          
          
          </v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
      
      >
           <v-btn
              class="mx-2"
              fab
              dark
              large
              color="green"
              @click.stop="verLaNav"
            >
              <v-icon dark large>
                mdi-navigation
              </v-icon>
           </v-btn>
        
      </v-list-item-avatar>


       <v-list-item-avatar
        tile
        size="80"
        
      >
      <v-btn
      class="mx-2"
      fab
      dark
      large
      color="blue"
      @click.stop="verLaAyuda"
    >
      <v-icon dark large>
        mdi-help-box
      </v-icon>
    </v-btn>
      
      </v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <!-- <v-btn
        outlined
        rounded
        text
      >
        Button
      </v-btn> -->
    </v-card-actions>
  </v-card>

</template>

<script>
import apiIncidentes from '@/apialdeas/apiIncidentes.js';
    export default {

        props: {

          
          verRespuesta   : { type : Boolean ,default : false},
          verSeguimiento : { type : Boolean ,default : false},
          verInicial     : { type : Boolean ,default : false},
          verIntegral    : { type : Boolean ,default : false},
          verCierre      : { type : Boolean ,default : false},
          titulo         : { type : String  , default : '' },
 
        },

        computed : {

   
          inicial() {
            let x = false;
            this.verInicial == true  ? x = true  : x =  false;

            return x;
          },

           integral() {
            let x = false;
            this.verIntegral == true  ? x = true  : x =  false;

            return x;
          },

          seguimiento() {
            let x = false;
            this.verSeguimiento == true  ? x = true  : x =  false;

            return x;
          },
          cierre() {
        
            let x = false;
            this.verCierre == true  ? x = true  : x =  false;

            return x;

          },
          respuesta(){
            let x = false;
            this.verRespuesta == true  ? x = true  : x =  false;

            return x;
          }



        },

        data() {

            return {
              id : 0,
              claseResponsive : '',
              verSeg : true,
              verIni : true,
              verInt :true,
              verRes :true,
              verC : true,
              breakpoints : {'xs' : 'minimoBotonEnBarra',
                             'sm' : 'minimoBotonEnBarra',
                             'md' :  '',
                             'lg' :  '',
                             'xl' :  ''},
             tipoRespuestas :  {
                               'DENUNCIA LEGAL' : {
                                 'name' : 'DenunciaLegal',
                                 'params' : { denunciaId: this.id }
                               },
                                'ABORDAJE INTERNO' : {
                                 'texto' : 'AbordajeInterno',
                                 'valor' : { incidenteId: this.id }
                               },
            },

            }

        },

      /*
            this.$router.push(
                  {        name : "AbordajeInterno", 
                         params : { incidenteId: id 
                  }});
       */

            mounted () {
              //this.actualizarProps();
              this.buscarVersionViewport( ) ;
            },


        methods: {

          verLaNav() {
            
           let v = false ;
           this.$store.state.uivars.uivars_verAsistenteNavegacion == false ? v= true : v= false;
          
           this.$store.dispatch("action_uivars_verAsistenteNavegacion", v);
           console.log(" nav :" + this.$store.state.uivars.uivars_verAsistenteNavegacion);
         
          },

          verLaAyuda() {
           let v = false ;
           this.$store.state.uivars.uivars_verDocumentosAyuda == false ? v= true : v= false;
          
           this.$store.dispatch("action_uivars_verDocumentosAyuda", v);
           console.log(" ayuda :" +this.$store.state.uivars.uivars_verDocumentosAyuda);
          },

          descargarControles() {
             //oculto componentes de abordaje interno
             this.$store.dispatch("action_abordaje_mostrarTodo",false);
          },

          actualizarProps() {
             
        this.verInicial       == true  ? this.verIni = true  : this.verIni = false;
        this.verIntegral      == true  ? this.verInt = true  : this.verInt = false;
        this.verSeguimiento   == true  ? this.verSeg = true  : this.verSeg = false;
        this.verCierre        == true  ? this.verC   = true  : this.verC   = false;
        this.verRespuesta     == true  ?  this.verRes = true : this.verRes = false;
          },
          buscarVersionViewport( ) {
        
        

         console.log(" <<<<<< VALOR BREAKPOINT.NAME >>>>>> " + this.$vuetify.breakpoint.name);
/*         let clase = ''
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
        }*/
        this.claseResponsive =  this.breakpoints[this.$vuetify.breakpoint.name];
    },
        IR_a_ri() {

       // named route
          this.descargarControles();
          console.log(" <<< BARRA DE NAVEGACION >>>> valor incidente >>>" + this.$store.state.incidentes.etapainicial_incidente);

          let id  = this.$store.state.incidentes.etapainicial_incidente;
          this.$router.push({ name: "DenunciasDetalle", params: { id: id } });
         

        },

   ir_al_cierre(){
       
       console.log(" <<< BARRA DE NAVEGACION >>>> valor incidente >>>" + this.$store.state.incidentes.etapainicial_incidente);
        this.descargarControles();
      
       let id  = this.$store.state.incidentes.etapainicial_incidente;
       this.$router.push({ name: "Cierre", params: { incidenteId: id } });
       // this.$router.push({ name: "Actualizacion" });

    },

    IR_a_Respuesta(){

      this.descargarControles();
      let id  = this.$store.state.incidentes.etapainicial_incidente;
     // this.$router.push({ name: "Cierre", params: { incidenteId: id } });
     
      let promesa = apiIncidentes.get_respuesta_al_incidente(id, this.$store);

       promesa
      .then( response => { console.log(JSON.stringify(response.data));

          let respuesta  = JSON.stringify(response.data);


         /*
         asi quedaria ?? */ 

       /*  let valores =  this.tipoRespuestas[respuesta];
         this.$store.dispatch("setear_Incidente",id);
          this.$router.push({
                  name   : valores.name,
                  params : valores.params,
                  });*/

          switch(respuesta){
            case '"DENUNCIA LEGAL"':

              this.$store.dispatch("setear_Incidente",id);
              this.$router.push({
                  name: "DenunciaLegal",
                  params: { denunciaId: id },
                  });
            break;
            case '"ABORDAJE INTERNO"':

                this.$store.dispatch("setear_Incidente",id);
                this.$router.push(
                  {     name: "AbordajeInterno", 
                         params: { incidenteId: id } });

            break;
            case '"INVESTIGACION INTERNA"':
              this.$store.dispatch("setear_Incidente",id);
              this.$router.push({
                  name: "InvestigacionInterna",
                  params: { incidenteId: id },
              });
            break;
            default :
            console.log("sin respuesta");
            break;

          }
      
      
      } )
      .catch( error => { console.log(JSON.stringify(error.data))});


    },
    ir_al_seguimiento(){

        this.descargarControles();
        console.log(" <<< BARRA DE NAVEGACION >>>> valor incidente >>>" + this.$store.state.incidentes.etapainicial_incidente);

        let id  = this.$store.state.incidentes.etapainicial_incidente;
        this.$router.push({ name: "Seguimiento", params: { id: id } });
      
       //this.$router.push({ name: "Actualizacion"});
       
       
    },
      IR_a_vi(){
        
         this.descargarControles();
       console.log(" <<< BARRA DE NAVEGACION >>>> valor incidente >>>" + this.$store.state.incidentes.etapainicial_incidente);

        let id  = this.$store.state.incidentes.etapainicial_incidente;
        //this.$router.push({ name: "ValoracionIntegral", params: { id: this.$route.params.id  });
          this.$router.push({ name: "ValoracionIntegral", params: { id: id } });
      
      },
    IR_a_RUTA() {

     this.descargarControles();
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