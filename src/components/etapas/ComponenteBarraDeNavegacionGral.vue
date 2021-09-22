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
          <v-row>
              <v-col cols=12 xs="12" sm="12" md="4" lg="4">
                <span class="text-h4 mb-1" >
                  {{titulo}}
                </span>
              </v-col>
              <v-col cols=12 xs="12" sm="12" md="8" lg="8">

                  <v-row>
                        <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                              
                              <v-text-field  v-if="verFolio"
                                  id="labelFolio"
                                  class=" text-h6 mb-1 posicion_15" 
                                  :value="folio"
                                  label="FOLIO"
                                  filled
                                  background-color="white"
                                >
                              
                                </v-text-field>
                        </v-col>

                        <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                              <v-text-field v-if="verFolioRespuesta"
                                  id="labelFolio_respuesta"
                                  class="  text-h6 mb-1 posicion_15"
                                  :value="folioRespuesta"
                                  :label="folioRespuesta_texto"
                                  filled
                                  background-color="white"
                                >
                              
                                </v-text-field>
                        </v-col>

                        <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                              <v-text-field v-if="verFecha"
                                :value ="fecha"
                                class=" text-h6 mb-1 posicion_15"
                                label="Creado"
                                prepend-icon="mdi-calendar"
                                readonly
                                filled

                              ></v-text-field>
                        </v-col>

                        <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                              <v-text-field v-if="verFechaUpdate"
                                :value ="fechaUpdate"
                                class=" text-h6 mb-1 posicion_15 "
                                label="Actualizado"
                                prepend-icon="mdi-calendar"
                                readonly
                                filled

                              ></v-text-field>
                        </v-col>


                  </v-row>

              </v-col>
          </v-row>


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
          opciones       : { type : Object}

 
        },

        watch : {
        
        opciones(newValue) {
               this.verFolio             =newValue.verFolio;
               this.verFolioRespuesta     =newValue.verFolioRespuesta;
               this.verFecha              =newValue.verFecha;
               this.verFechaUpdate        =newValue.verFechaUpdate;
               this.folio                 =newValue.folio;
               this.folioRespuesta        =newValue.folioRespuesta;
               this.fecha                 =newValue.fecha;
               this.fechaUpdate           =newValue.fechaUpdate;
               this.folioRespuesta_texto = newValue.folioRespuesta_texto
               console.log("===>>> valores de opciones <<<=== " );
               console.log(newValue);
        }
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
              verFolio          : false,
              verFolioRespuesta : false,
              verFecha          : false,
              verFechaUpdate    : false, 
              folio             : '',
              folioRespuesta    : '',
              fecha             : '',
              fechaUpdate       : '',
              folioRespuesta_texto : '',
              id                : 0,
              claseResponsive   : '',
              verSeg            : true,
              verIni            : true,
              verInt            : true,
              verRes            : true,
              verC              : true,
              breakpoints       : {'xs' : 'minimoBotonEnBarra',
                                  'sm' : 'minimoBotonEnBarra',
                                  'md' :  '',
                                  'lg' :  '',
                                  'xl' :  ''},
             tipoRespuestas     :  {
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
              this.inicializarBarra();
              this.buscarVersionViewport( ) ;
            },


        methods: {

          inicializarBarra() {
                   
                   

               this.verFolio              =this.opciones.verFolio;
               this.verFolioRespuesta     =this.opciones.verFolioRespuesta;
               this.verFecha              =this.opciones.verFecha;
               this.verFechaUpdate        =this.opciones.verFechaUpdate;
               this.folio                 =this.opciones.folio;
               this.folioRespuesta        =this.opciones.folioRespuesta;
               this.fecha                 =this.opciones.fecha;
               this.fechaUpdate           =this.opciones.fechaUpdate;
               this.folioRespuesta_texto = this.opciones.folioRespuesta_texto

                console.log("valores de opciones en mounted " );
               console.log(this.opciones);
        

          },

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

.posicion_15{
  margin-top : -15px !important;
}
</style>