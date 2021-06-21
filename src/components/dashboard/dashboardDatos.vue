<!-- 

 Corregir la secuencia  etap 1-2, respuesta ,3,4

 correguir abordaje interno

-->
 <template>

  <v-data-table width ="100%"

    :headers="headers"
    :items="incidentes"
    :single-expand="singleExpand"
    :expanded.sync="expanded"
    item-key="id"
    
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
    class="elevation-1"
    :loading="cargandoDatos"
    loading-text="Cargando... por favor sea paciente"
   
  >


    <template v-slot:item.activo="{ item }">
      <v-simple-checkbox v-model="item.activo" enabled></v-simple-checkbox>
    </template>

    <template v-slot:expanded-item="{ headers, item }">
      <td :colspan="headers.length">
        Descripcion de los hechos : {{ item.registrohechos }}
      </td>
    </template>


    <template v-slot:top>
      
          <v-toolbar flat color="white">

              <v-toolbar-title>Incidentes</v-toolbar-title>
              <v-divider class="mx-4 d-none d-sm-flex d-sm-none d-md-flex" inset vertical></v-divider>
              <v-spacer></v-spacer>


              <v-btn color="primary"   
              dark 
              class="mb-2 d-none d-sm-flex d-sm-none d-md-flex" 
              @click="togglecols">
                <v-icon>
                  mdi-toggle-switch
                </v-icon>
              </v-btn>

            <v-divider class="mb-2 d-none d-sm-flex d-sm-none d-md-flex mx-2"    inset vertical></v-divider>


              <v-btn v-if="mostrarBotonDeBusquedas"
                 color="primary" 
                 dark class="mb-2 margen_5px" 
                 @click="mostrarLasBarrasDeBusqueda">
                 <v-icon>
                 mdi-file-find
                </v-icon>
                 <span class="d-none d-md-flex ">
                Busquedas
                </span>
              </v-btn>

              <v-divider class="mb-2 d-none d-sm-flex d-sm-none d-md-flex mx-2"    inset vertical></v-divider>


              <v-btn color="primary" 
               dark class="mb-2 margen_5px" 
               @click="cargarTodosLosIncidentes">
                 <v-icon>
                 mdi-update
                </v-icon>
                <span class="d-none d-md-flex ">
                Actualizar
                </span>
              </v-btn>

              <v-divider class="mb-2 d-none d-sm-flex d-sm-none d-md-flex mx-2"    inset vertical></v-divider>

              <v-btn color="primary" 
               v-if="puedeCrearUnNuevoIncidente"
                dark 
                class="mb-2 margen_5px" 
                @click="irADenuncias">
                <v-icon class="d-flex d-sm-flex d-md-none">
                  mdi-text-box-plus-outline
                </v-icon>
                <span class="d-none d-md-flex ">
                   Nuevo Incidente
                </span>
               
              </v-btn>
        


          </v-toolbar>

 

          <!--  v-if="mostrarBusquedas" -->
          <v-toolbar  v-if="mostrarBusquedas" flat color="white">

            <v-toolbar-items >

              <v-row >
                  <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                      <v-row>
                            <v-col cols="6" xs="6" sm="6" md="6" lg="6">
                              <v-text-field
                              v-model="busquedaArealizar"
                              dense
                              label=""
                              clearable
                              prefix="Folio"
                              prepend-icon="mdi-magnify"
                              >
                              </v-text-field>
                            </v-col>

                            <v-col cols="6" xs="6" sm="6" md="6" lg="6">
                              <v-btn
                              dark
                              dense
                              color ="primary"
                              block
                              @click="busquedaPorFolio"
                              >
                              <v-icon>
                                mdi-magnify
                              </v-icon>

                            </v-btn>
                            </v-col>

                      </v-row>
                  </v-col>


                  <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                      <v-row>
                          <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                    
                                  <v-select 
                                  v-model="tipoDePrograma"
                                  block
                                    label ="Programas"
                                  :items = "itemsProgramas">
                                    Programas
                                  </v-select> 
                          </v-col>

                          <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                                <v-select
                                v-model="tipoDeEstado"
                                block
                                  label="Estado"
                                  :items = "itemsEstados">
                                  Estados
                                  </v-select>  
                          </v-col>

                          <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                              <v-select 
                              v-model="tipoDeRespuesta"
                                block
                                label="Respuestas"
                                :items = "itemsRespuestas">
                                Respuestas
                              </v-select> 
                          </v-col>

                          <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                             <v-btn
                              color="primary"
                              dark
                              dense
                              block
                              @click="filtrarEnBaseDeDatos"
                              >
                              <v-icon>
                                mdi-magnify
                              </v-icon>
                              
                              </v-btn>
                          </v-col>
                      </v-row>
                  </v-col>
              </v-row>
  
            </v-toolbar-items>
 


          </v-toolbar>
   
         


          <br>
     
    </template>
    <!--
      
     -->
    <template v-slot:item.fechaAlta="{ item }">
      {{ item.fechaAlta | quitarCeros }}
    </template>
      

    <template v-slot:item.incidenteconfirmado="{ item }">
      <v-icon color="red" v-if="item.incidenteconfirmado == 'SI'">
        mdi-checkbox-marked-circle</v-icon
      >
      <v-icon color="green" v-if="item.incidenteconfirmado == 'NO'"
        >mdi-close-circle</v-icon
      >
      <v-icon color="yellow" v-if="item.incidenteconfirmado == 'POR CONFIRMAR'"
        >mdi-timer</v-icon
      >
    </template>

    <!-- confirmaciones -->
    <template   v-slot:item.confirmaincidente="{ item }">
      <v-icon color="red" v-if="item.confirmaincidentenumerico == 2">
        mdi-checkbox-marked-circle</v-icon
      >
      <v-icon color="green" v-if="item.confirmaincidentenumerico == 1"
        >mdi-close-circle</v-icon
      >
      <v-icon color="yellow" v-if="item.confirmaincidentenumerico == 0"
        >mdi-timer</v-icon
      >
    </template>
     
     <!-- Tipo de respuesta    v-if="item.estado == 'En Proceso de Valoracion'"-->

    <template v-slot:item.tipoderespuesta="{ item }" >

      <v-btn  v-if="item.tipoderespuesta == 'INVESTIGACION INTERNA'"
        x-small 
        block  
       :color="item.colorestadorespuesta"
       dark 
       dense
       class="letrasNegras"
       @click="ir_a_respuesta(item)"


        >

       <span color="black"> Investigacion </span>
      </v-btn>

      <v-btn  v-if="item.tipoderespuesta == 'ABORDAJE INTERNO'"
          x-small
          :color="item.colorestadorespuesta"
          dark
          block
          
          dense
          class="letrasNegras"
           @click="ir_a_respuesta(item)"
      >
         Abordaje Interno
      </v-btn>

       <v-btn  v-if="item.tipoderespuesta == 'DENUNCIA LEGAL'"
          x-small
          :color="item.colorestadorespuesta"
          dark
          block
          dense
          class="letrasNegras"
           @click="ir_a_respuesta(item)"
        
      >
         Denuncia
      </v-btn>


    </template>
    <!-- termina tipo de respuesta -->

    <!-- Estado  -->

  <template v-slot:item.estado="{ item }" >
      <v-btn v-if="item.estado == 'cerrado_x_ni'" 
      color="green"
       dark dense 
       block
       class="letrasNegras"
       @click="irAnoesunincidente(item)">
        NO ES UN INCIDENTE
      </v-btn>

      <v-btn v-if="item.estado == 'cerrado'"
       
        color="green"
        dark
        dense
        block
        class="letrasNegras"
        @click="irACierre(item.id)"
      >
         CERRADO
      </v-btn>

    <v-btn v-if="item.estado == 'en espera de valoracion'"
       
        color="yellow"
        dark
        dense
        block
        class="letrasNegras"
        @click="irAValoracionIntegral(item.id)"
      >
        EN ESPERA DE VALORACION INTEGRAL
      </v-btn>

      <v-btn v-if="item.estado == 'en llenado de respuesta'"
       
        color="yellow"
        dark
        dense
        block
        class="letrasNegras"
        @click="ir_a_respuesta(item)"
      >
        EN {{item.tipoderespuesta}}
      </v-btn>

      <v-btn v-if="item.estado == 'en llenado de seguimiento'"
       
        color="yellow"
        dark
        dense
        block
        class="letrasNegras"
       @click="irASeguimiento(item.id)"
      >
       EN SEGUIMIENTO
      </v-btn>


       <v-btn v-if="item.estado == 'en espera de cierre'"
       
        color="yellow"
        dark
        dense
        block
        class="letrasNegras"
     @click="irACierre(item.id)"
      >
       EN ESPERA DE CIERRE
      </v-btn>    
    </template>




    <template v-slot:item.etapauno="{ item }">
      <v-btn 
    
        x-small
        fab
        :class="item.etapauno"
        :color="item.coloretapauno"
        dark
        
        @click="irAValoracionInicial(item.id)"
      >
       <span class="letrasNegras">
         VI
       </span>
       </v-btn
      >
    </template>

    <template v-slot:item.etapados="{ item }">
      <v-btn 
     
        :class="item.etapados"
        x-small
        fab
        :color="item.coloretapados"
        dark
        @click="irAValoracionIntegral(item.id)"
      >
       <span class="letrasNegras">
        VI
       </span>
       
       </v-btn
      >
    </template>

    <template v-slot:item.etapatres="{ item }">
      <v-btn  
     
        :class="item.etapatres"
        x-small
        fab
        :color="item.coloretapatres"
        dark
        @click="irASeguimiento(item.id)"
      >
       <span class="letrasNegras">         
        S
       </span>
       </v-btn >
    </template>

    <template v-slot:item.etapacuatro="{ item }">
      <v-btn 
     
        :class="item.etapacuatro"
        x-small
        fab
        :color="item.coloretapacuatro"
        dark
        @click="irACierre(item.id)"
      >
          <span class="letrasNegras">
            C
          </span>
        </v-btn
      >
    </template>

    <!-- etapas -->
    <template v-slot:item.actions="{ item }">
      <v-btn
      
        x-small
        fab
        :color="colorvi"
        dark
        @click="irAValoracionInicial(item.id)"
      >
        vI</v-btn
      >
      <v-btn
        :v-if="item.etapados"
        x-small
        fab
        :color="colorvintegral"
        @click="irAValoracionIntegral(item.id)"
        >VI</v-btn
      >
      <v-btn
        :v-if="item.etapatres"
        x-small
        fab
        :color="colors"
        @click="irA('/seguimiento')"
        >S</v-btn
      >
      <v-btn
        :v-if="item.etapacuatro"
        x-small
        fab
        :color="colorc"
        @click="irACierre(item.id)"
        >C</v-btn
      >
    </template>
  </v-data-table>
</template>



<script>

import apiIncidentes from "@/apialdeas/apiIncidentes.js";
import apiProgramas from  "@/apialdeas/apiProgramas.js"; 
import validacionSeguimiento from '@/components/etapas/validaciones/validacionSeguimiento.js';
//import PanelDenunciaComponentes from '@/components/usuarios/componentes/PanelDenunciaComponentes.vue';


export default {
  data: () => ({

     /*Variables para ordenar los datos del dashboard y se utilizan 
     para configurar el Header */
     sortBy  : 'id',
     sortDesc : true,

    /* variables para ui */
    //visualiza u oculta el boton para mostrar el Boton de busquedas.
    mostrarBotonDeBusquedas : false,

   /* Valores para las combos que realizan la busqueda */
    tipoDePrograma  : 'TODOS' ,
    tipoDeEstado : 'TODOS' ,
    tipoDeRespuesta : 'TODOS',


    mostrarBusquedas:false,
    itemsFolios :['Folio', 'Todos'],
    itemsProgramas :[],
    itemsEstados : ['TODOS','CERRADOS' ,'ABIERTOS','CERRADOS POR NO SER INCIDENTE'],
    itemsRespuestas  : ['TODOS','DENUNCIA LEGAL', 'INVESTIGACIÓN INTERNA', 'ABORDAJE INTERNO'],
    prefijo : 'Folio',
    busquedaArealizar : '',
    mostarBarraBusquedas : false,
    ocultar : false,
    puedeCrearUnNuevoIncidente  :  false,
    puedeVerValoracionInicial  :  false,
    puedeverValoracionIntegral  :  false ,
    puedeVerSeguimiento  :  false ,
    puedeVerCierre :  false,

    colorvi: "yellow",
    colorvintegral: "yellow",
    colors: "yellow",
    colorc: "yellow",

    etapaIntegral: false,
    etapaSeguimiento: false,
    etapaCierre: false,

    cargandoDatos: false,
    dialog: false,
    expanded: [],
    singleExpand: false,
    headers :[],

    headers2: [
      /* {
        text: "id",
        align: "start",
        sortable: false,
        value: "id",
      },*/
      {
        text: "Folio",
        value: "folio",
      },
      //{ text: "Programa", value: "programa" },
      { text: "Fecha", value: "fechaAlta" },


    
      //{ text: "Hechos", value: "data-table-expand" },
      // { text: "Activo", value: "activo" },
     
      { text: "V Inicial", value: "etapauno" },
      { text: "V Integral", value: "etapados" },
      { text: "Respuesta", value: "tipoderespuesta" },
      { text: "Seguimiento", value: "etapatres" },
      { text: "Cierre", value: "etapacuatro" },
      { text: "Estado", value: "estado" },
      //{ text: "Etapas", value: "actions", sortable: false },
    ],
    headers1: [
      /* {
        text: "id",
        align: "start",
        sortable: false,
        value: "id",
      },*/
      {
        text: "Folio",
        value: "folio",
      },
      //{ text: "Programa", value: "programa" },
      { text: "Fecha", value: "fechaAlta" },
      { text: "¿Incidente?", value: "incidenteconfirmado" },
      { text: "Confirmacion", value: "confirmaincidente" },

      { text: "Respuesta", value: "tipoderespuesta" },
      //{ text: "Hechos", value: "data-table-expand" },
      // { text: "Activo", value: "activo" },
     
      { text: "V Inicial", value: "etapauno" },
      { text: "V Integral", value: "etapados" },
      { text: "Seguimiento", value: "etapatres" },
      { text: "Cierre", value: "etapacuatro" },
       { text: "Estado", value: "estado" },
      //{ text: "Etapas", value: "actions", sortable: false },
    ],
    incidentes: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      descripcion: "",
      activo: "",
    },
    defaultItem: {
      name: "",
      descripcion: "",
      activo: "",
    },
  }),
  filters: {
    quitarCeros: function (value) {
      return value.replace(/00:00:00/, "");
    },
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nuevo Incidente " : "Editar Incidente";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
  },


  created() {
    //lo primero que se ejecuta
    this.initialize();
  },

  methods: {



    filtrarEnBaseDeDatos(){


       let usuarioLogueadoID = this.$store.state.usuarios.usuarios_usuariologueado.id;
     
       if( this.tipoDeEstado.length == 0 ) { this.tipoDeEstado = 'TODOS' }
       if( this.tipoDePrograma.length == 0 ) { this.tipoDePrograma = 'TODOS' }
       if( this.tipoDeRespuesta.length == 0 ) { this.tipoDeRespuesta = 'TODOS' }

      let valor ='';
      switch(this.tipoDeEstado)
        {
          case 'TODOS':
           valor ='TODOS';
           break;
        case 'CERRADOS':
          valor = 'cerrado';
        break;
        case 'ABIERTOS':
          valor = 'abierto';
        break;
        case 'CERRADOS POR NO SER INCIDENTE':
          valor = 'cerrado_x_ni';
        break;
        }

        

      var parametros = {

        idusuario : usuarioLogueadoID,
        tipoDePrograma :  this.tipoDePrograma,
        tipoDeEstado   :  valor,
        tipoDeRespuesta : this.tipoDeRespuesta

      };

      let p = apiIncidentes.buscarIncidente_parametros(parametros, this.$store);

       p
      .then( response => {
         console.log(JSON.stringify(response.data));
           this.incidentes = response.data;
         })
      .catch( error => { console.log(JSON.stringify(error.data))});
        



    },

    filtrar(){
     
     console.log(this.tipoDePrograma + ' - ' + this.tipoDeEstado +' - ' + this.tipoDeRespuesta);
     
     let tempArray=[];
      // itemsEstados : ['TODOS','CERRADOS' ,'ABIERTOS','CERRADO POR NO SER INCIDENTE'],
   
     tempArray =  this.incidentes.map(  function(item, index)  {
        typeof index;
       // console.log(item.estado +' - ' + this.tipoDeEstado);

        var i = item;
        
       if ( this.tipoDeEstado == 'TODOS' )
        { return i ;}

        var valor = '';
        
        switch(this.tipoDeEstado)
        {
          case 'TODOS':
           valor ='todos';
           break;
        case 'CERRADOS':
          valor = 'cerrado';
        break;
        case 'ABIERTOS':
          valor = 'abierto';
        break;
        case 'CERRADOS POR NO SER INCIDENTE':
          valor = 'cerrado_x_ni';
        break;
        }
        
       // console.log("antes _ item " +  i.estado );

       // console.log("antes _" + valor); 

   

        if (i.estado == valor)
        {
            console.log("return " +  i.estado );
            console.log("return " + valor);
              console.log("item " + i);
            return i;
        
        }
     });


     console.log(tempArray);
     this.incidentes =tempArray;

  },

    cargarTodosLosProgramas(){

      let programaid =  this.$store.state.usuarios.usuarios_usuariologueado_rol.VISIBILIDADDEINCIDENTES;
      
      console.log("valor de store.state.usuarios.usuarios_usuariologueado_rol.VISIBILIDADDEINCIDENTES : " + programaid);
   

     let promesa = apiProgramas.cargar__todo__los__programas_columna(this.$store);
      
       promesa
      .then( response => {
         console.log(JSON.stringify(response.data));
           
           this.itemsProgramas = response.data;
           this.itemsProgramas.push("TODOS");

         } )
      .catch( error => { console.log(JSON.stringify(error.data))});


    },
     cargarTodosLosIncidentes(){
        this.initialize();
     },
     busquedaPorFolio(){

     let f  =  this.busquedaArealizar;

     console.log(">>>>>>>>>>>> " + f);
       
       let incidenteBuscado = apiIncidentes.buscarIncidente(f, this.$store );
       
       incidenteBuscado
      .then( response => { 

        console.log(response.data);
         
        this.incidentes = response.data;

        } )
      .catch( error => { console.log(JSON.stringify(error.data))});
       
     },

    mostrarLasBarrasDeBusqueda(){

      this.mostrarBusquedas == false ? 
      this.mostrarBusquedas = true : 
      this.mostrarBusquedas= false;

       this.buscarVersionViewport( this.mostrarBusquedas);

    },
    //convertir a mobile 

    cssXS_SM(){
      try {
  //utyilizar 
  // https://stackoverflow.com/questions/49551205/best-way-to-dynamically-change-theme-of-my-vue-js-spa
    // var elemente = document.getElementsByClassName('v-data-table__wrapper')[1];
    
    var elemente =  document.querySelector("div.v-data-table__wrapper");

     console.log(elemente);
     //elemente.style.marginTop ="300 px"; 
     this.mostrarBusquedas==true 
     ? elemente.classList.add("agregar_300px_margintop")
     :elemente.classList.remove("agregar_300px_margintop")
    
      }catch(error){
        console.log(" errore en cssxm_sm " + error);
      }
    },

    cssMD_LG(){
     
     var elemente =  document.querySelector("div.v-data-table__wrapper");

     this.mostrarBusquedas==true 
     ? elemente.classList.add("agregar_50px_margintop")
     :elemente.classList.remove("agregar_50px_margintop")
    
    
    },
    
    buscarVersionViewport( mb) {
        typeof mb;
        

         console.log(" <<<<<< VALOR BREAKPOINT.NAME >>>>>> " + this.$vuetify.breakpoint.name);
         
         switch (this.$vuetify.breakpoint.name) {
            case 'xs': 
            this.cssXS_SM();
            break;

            case 'sm':  
            this.cssXS_SM();
            break;

            case 'md':  
           this.cssMD_LG();
            break;

            case 'lg':  
            this.cssMD_LG();
            break;

            case 'xl':  
           this.cssMD_LG();
            break;
        }
    },
    buscarPor(tema){
         this.prefijo = 'Folio';
        switch(tema) {

          case  'usuarios' : 
           this.prefijo = 'usuario :';
          break;

          case  'programas' : 
           this.prefijo = 'programa :';
          break;

          case 'fecha':
          this.prefijo = 'fecha :';
          break;

          case 'folio':
            this.prefijo = 'folio';
          break;
        }

    },
    togglecols(){
       
       this.ocultar == false ? this.ocultar=true : this.ocultar=false;

       this.ocultar ==true ? this.headers= this.headers2 : this.headers =this.headers1;

    },
    verificarPermisos() {
    
    let permisosDeRol = this.$store.state.usuarios.usuarios_usuariologueado_rol;
   
    console.log(" permisosDeRol.ALTADEVALORACIONINICIAL=   " + permisosDeRol.ALTADEVALORACIONINICIAL);
    console.log( permisosDeRol.ALTADEVALORACIONINTEGRAL);
    console.log(permisosDeRol.VISUALIZACIONVALORACIONINICIAL);
    console.log(permisosDeRol.VISUALIZACIONVALORACIONINTEGRAL);
    console.log(permisosDeRol.VISUALIZACIONDESEGUIMIENTO);
    console.log(permisosDeRol.VISUALIZACIONDECIERRE);
    console.log( this.puedeCrearUnNuevoIncidente);
    console.log( this.puedeVerValoracionInicial);
    console.log(this.puedeverValoracionIntegral);
    console.log(this.puedeVerSeguimiento);
    console.log(this.puedeVerCierre);
    
    permisosDeRol.ALTADEVALORACIONINICIAL == "SI" ?  this.puedeCrearUnNuevoIncidente = true : this.puedeCrearUnNuevoIncidente = false;
    
    console.log("   this.puedeCrearUnNuevoIncidente : " + this.puedeCrearUnNuevoIncidente);

    //permisosDeRol.ALTADEVALORACIONINTEGRAL == "SI" ?  this.puedeCrearUnNuevoIncidente = true : this.puedeCrearUnNuevoIncidente = false;
   
                  
    permisosDeRol.VISUALIZACIONVALORACIONINICIAL == "SI" ?  this.puedeVerValoracionInicial = true : this.puedeVerValoracionInicial = false;
 
    permisosDeRol.VISUALIZACIONVALORACIONINTEGRAL == "SI" ?  this.puedeverValoracionIntegral = true : this.puedeverValoracionIntegral = false;
 

    permisosDeRol.VISUALIZACIONDESEGUIMIENTO == "SI" ?  this.puedeVerSeguimiento = true : this.puedeVerSeguimiento = false;

    permisosDeRol.VISUALIZACIONDECIERRE == "SI" ?  this.puedeVerCierre = true : this.puedeVerCierre = false;

    permisosDeRol. VISIBILIDADDEINCIDENTES == "TODOS" ? this.mostrarBotonDeBusquedas = true : this.mostrarBotonDeBusquedas = false;
     

    console.log( this.puedeCrearUnNuevoIncidente);
    console.log( this.puedeVerValoracionInicial);
    console.log(this.puedeverValoracionIntegral);
    console.log(this.puedeVerSeguimiento);
    console.log(this.puedeVerCierre);

    },
    
    mostarBarraBusquedas_proceso(){
       this.mostarBarraBusquedas = true ;
       this.buscarVersionViewport();
    },

    ir_a_respuesta(valor) {
      /* 
        "DENUNCIA PENAL",
        "INVESTIGACION INTERNA",
        "ABORDAJE INTERNO", 
        "EN PROCESO DE VALORACION",*/

      console.log("ir a " + valor.tipoderespuesta);

      // var ruta = '';

      if (valor.tipoderespuesta == "DENUNCIA LEGAL") {

        this.$store.dispatch("setear_Incidente",valor.id);

        this.$router.push({
          name: "DenunciaLegal",
          params: { denunciaId: valor.id },
        });
        // this.$router.push('/denuncialegal');
      }
      if (valor.tipoderespuesta == "INVESTIGACION INTERNA") {

        this.$store.dispatch("setear_Incidente",valor.id);

        this.$router.push({
          name: "InvestigacionInterna",
          params: { incidenteId: valor.id },
        });
        //this.$router.push('/investigacioninterna');
      }
      if (valor.tipoderespuesta == "ABORDAJE INTERNO") {
        this.$store.dispatch("setear_Incidente",valor.id);

         this.$router.push(
           { name: "AbordajeInterno", 
           params: { incidenteId: valor.id } });
       
      }
      
       if (valor.tipoderespuesta == "En Proceso de Valoracion") {
         this.$store.dispatch("setear_Incidente",valor.id);

         console.log("en proceso de valoracion ");
         console.log(" valor de id " +  valor.id);
         
        // this.$router.push({ name: "DenunciasDetalle", params: { id: ruta } });
       this.irAValoracionIntegral(valor.id);
      }

       if (valor.tipoderespuesta == "NO ES UN INCIDENTE") {
         this.$store.dispatch("setear_Incidente",valor.id);

          this.$router.push({
          name: "Notificacioncerrado" });
         }
    },

    irAnoesunincidente(valor) {
      typeof valor;
      this.$router.push({ name: "Notificacioncerrado" });
    },


    irA(ruta) {
      this.$router.push(ruta);
    },
    irAValoracionInicial(ruta) {
      
      
      this.$store.dispatch("setear_Incidente",ruta);

      if(   this.puedeVerValoracionInicial  != false){
        console.log("is a visitar " + ruta);
          let r = "/denuncias/" + ruta;
          console.log(r);
          // named route
          this.$router.push({ name: "DenunciasDetalle", params: { id: ruta } });

      }
 
      },
    irAValoracionIntegral(id) {

      console.log(" puedeverValoracionIntegral: " + this.puedeverValoracionIntegral );
      console.log(" id : " + id );

      this.$store.dispatch("setear_Incidente",id);


       if(   this.puedeverValoracionIntegral  != false){
            this.$router.push({ name: "ValoracionIntegral", params: { id: id } });
       }


      // named route
        },
    irASeguimiento(id) {
         this.$store.dispatch("setear_Incidente",id);

         validacionSeguimiento.inicializar_captura_De_errores(this.$store);
      if(   this.puedeVerSeguimiento  != false){
            console.log(" valor de id :  " + id);
            this.$router.push({ name: "Seguimiento", params: { id: id } });
       }

    
    },

    irACierre(id) {
      this.$store.dispatch("setear_Incidente",id);


            if(   this.puedeVerCierre  != false){
            this.$router.push({ name: "Cierre", params: { incidenteId: id } });
       }

    
    },
    inicializar_incidente(){
       


  this.$store.dispatch('setear_Involucrados','');
  
  this.$store.dispatch('setear_Elaboro','');
  this.$store.dispatch('setear_cargos','');

  this.$store.dispatch('setear_RegistroHechos','');
 
  this.$store.dispatch('setear_PerfilDelAgresor','');
  this.$store.dispatch('setear_Paadultocolaborador','');
  this.$store.dispatch('setear_Paadultocolaboradortipo','');
  this.$store.dispatch('setear_Familiaorigen','');

  this.$store.dispatch('setear_familiatipo','');
  
  this.$store.dispatch('setear_paadultoexterno','');
  this.$store.dispatch('setear_nnj','');
  this.$store.dispatch('setear_perfilvictima','');
   
  this.$store.dispatch('setear_recibeayuda','');
   
  this.$store.dispatch('setear_medidasproteccion','');
  this.$store.dispatch('setear_incidenteconfirmado','');
  
  this.$store.dispatch('setear_testigos','');


  this.$store.dispatch('action_textocierre','');

this.$store.dispatch('action_folio','');
this.$store.dispatch('action_etapainicial_testigoscierre','');


this.$store.dispatch('action_etapainicial_actavaloracion','');



this.$store.dispatch('action_etapainicial_actavaloracion_docto','');

  


    },///////termina
    irADenuncias() {
      //antes de ir a denuncias ,debemos inicializar la variable 
      //del estado en cuanto a incidentes.

      this.inicializar_incidente();
      this.$router.push("/denuncias");
    },
    guardar__iradenuncias() {
      this.$router.push("/dashboard");
    },
    

    initialize() {
      
      this.cargandoDatos = true; //esto activa la animacion de loading de la tabla
      
      /*
      Se solicita en el backend los incidentes y en el backend se envian los 
      incidentes dependiendo los permisos del usuario que realize la peticion
      Revisar clsIncidentes_todosLosIncidetes.php
      */
      let usuarioLogueadoID = this.$store.state.usuarios.usuarios_usuariologueado.id;
    
      let getIncidentes = apiIncidentes.recuperarTodosLosIncidentes(
        usuarioLogueadoID ,this.$store
      );

      getIncidentes
        .then((response) => {
          //console.table(response.data);

          this.incidentes = response.data;

          this.ocultar ==false ? this.headers =this.headers2 : this.headers= this.headers1;
         
          this.cargandoDatos = false; //termina la animacion de la tabla loading
         
         // ser verifican los permisos del usuario 
          this.verificarPermisos();
          this.cargarTodosLosProgramas();
    })
        .catch((error) => {
          console.log("mensaje de error :" + error.response);
          this.cargandoDatos = false; //termina la animacion de la tabla loading
        });
      /*
      ]*/
    }, // termina funcion.

    editItem(item) {
      this.editedIndex = this.incidentes.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.incidentes.indexOf(item);
      confirm("¿Estas seguro de eliminar este incidente ? ") &&
        this.incidentes.splice(index, 1);
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.incidentes[this.editedIndex], this.editedItem);
      } else {
        this.incidentes.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>


<style scoped >

  .margen_5px{
    margin-left: 5px;
  } 

 .agregar_300px_margintop {
      margin-top:  300px !important;
   }
 .agregar_50px_margintop {
      margin-top:  50px !important;
   }
  .letrasNegras {
    color: black !important;
}


</style>