<template>
  <v-data-table
    :headers="headers"
    :items="conciencia"
    sort-by="id"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>{{tipo}}</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
            <v-btn color="primary" dark class="mb-2" @click="agregarNuevoConciencia"
              >Agregar {{tipo}}
              </v-btn >

      </v-toolbar>
    </template>

    <!-- clasificacion -->
  
      <template v-slot:item.clasificacion="{ item }">

          <v-chip v-if="item.clasificacion=='NO'"
            color="red"
          >NO</v-chip>
          
          <v-chip v-if="item.clasificacion=='Pendiente'"
            color="yellow"
          >Pendiente</v-chip>
          
          <v-chip v-if="item.clasificacion=='SI'"
            color="green"
          >SI</v-chip>

     </template>

    <!-- estatus del plan  -->
    <template v-slot:item.estatusplan="{ item }">

          <v-chip v-if="item.estatusplan=='Pendiente'"
            color="red"
          >Pendiente</v-chip>
          
          <v-chip v-if="item.estatusplan=='En Proceso'"
            color="yellow"
          >En Proceso</v-chip>
          
          <v-chip v-if="item.estatusplan=='Terminado'"
            color="green"
          >Terminado</v-chip>

     </template>
    <template v-slot:item.actions_editar="{ item }">
      <v-btn color="primary" dark dense @click="editItem(item)">
      <v-icon small class="mr-2" > mdi-pencil </v-icon>
      Editar
      </v-btn>
    </template>
    <template v-slot:item.actions_activar="{ item }">
        <v-switch
                  :input-value="item.activo==1 ? true : false"
                  class="mx-2"
                  color="green"
                  @change="activar($event,item)"
        ></v-switch>
     </template>


    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">No hay Conciencia</v-btn>
    </template>
  </v-data-table>
</template>


<script>

import apiConciencia from '@/apialdeas/apiConciencia.js';
export default {
  props: {
    tipo: {
      type: String,
      default: ''
    },
  },
  data: () => ({
    dialog: false,
    conciencia:[],

    headers: [
      {
        text: "#",
        align: "start",
        sortable: false,
        value: "id",
      },

        { text: 'id', value: 'id' },
        { text: 'estatus', value: 'estatus' },
       // { text: 'clasificacion', value: 'clasificacion' },
        { text: 'Estado del Plan', value: 'estatusplan' },
        //{ text: 'activo', value: 'activo' },
//{ text: 'tipo', value: 'tipo' },

       

      
      { text: "Edicion", value: "actions_editar", sortable: false },
      { text: "Activa", value: "actions_activar", sortable: false },
 
    ],
   
    editedIndex: -1,
    /*editedItem: {
      name: "",
      email: "",
      cargo: "",
      rol: "",
    },
    defaultItem: {
      name: "",
      email: "",
      cargo: "",
      rol: "",
    },*/
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nueva Conciencia" : "Editar Conciencia";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
     this.poblarGrid();
    },
      
      esConciencia(registro){
        console.log("registro " + registro);
        return registro.tipo=="Conciencia";

      },
       esPrevencion(registro){

        return registro.tipo=="Prevencion";

      },

       async poblarGrid(){

         this.tipo = this.$store.state.uivars.uivars_tipo_conciencia_o_prevencion;

         console.log("valor de this.tipo en asyn poblarGrid " + this.tipo);

         var t = this.tipo.toLowerCase()

                                                
         let TodosLosConciencia = apiConciencia.cargar__todos__los__conciencia(this.$store);

         TodosLosConciencia
        .then( response => { 
          console.log(JSON.stringify(response.data));

          let contenedor =response.data;

           console.log("valor de t  " + t);

          t=='conciencia' ? this.conciencia = contenedor.filter(this.esConciencia):this.conciencia = contenedor.filter(this.esPrevencion);
  
         this.$store.dispatch('actions_uivars_tipo_conciencia_o_prevencion', this.tipo);

        } )
        .catch( error => { console.log(JSON.stringify(error.data))});
    },

    inicializando_uivar_errors_A_false(){
   let r= false;
   this.$store.dispatch('actions_uivars_error_conciencia_estatus',r);   
   this.$store.dispatch('actions_uivars_error_conciencia_clasificacion',r);   
   this.$store.dispatch('actions_uivars_error_conciencia_docto',r);   
   this.$store.dispatch('actions_uivars_error_conciencia_estatusplan',r);   



    },

     agregarNuevoConciencia(){

      console.log("agregando nuevo conciencia");
      this.inicializando_vuex_valores();
      this.inicializando_uivar_errors_A_false();
      this.$router.push('/nuevaconciencia');

   },

    inicializando_vuex_valores(){
      this.$store.dispatch('action_conciencia_id',0);
      this.$store.dispatch('action_conciencia_activo','');
      this.$store.dispatch('action_conciencia_estatus', '');
      this.$store.dispatch('action_conciencia_clasificacion', '');
      this.$store.dispatch('action_conciencia_activo', '');
      this.$store.dispatch('action_conciencia_tipo', '');
    },

    editItem(item) {
      
      console.log("editando conciencia");

      /* probando otras opciones */

      this.$store.dispatch('action_conciencia_id',item.id)

      let promesa = apiConciencia.cargar__conciencia(item.id,this.$store);

      promesa
      .then( response => {

         console.log(JSON.stringify(response.data[0]));
       
         let activoTemp = true;
         response.data[0]["activo"]== 1 ? activoTemp = true : activoTemp= false;
         this.$store.dispatch('action_conciencia_id',item.id);
         this.$store.dispatch('action_conciencia_activo', activoTemp);

         this.$store.dispatch('action_conciencia_estatus', response.data[0]['estatus']);
         this.$store.dispatch('action_conciencia_clasificacion', response.data[0]['clasificacion']);
        //this.$store.dispatch('action_conciencia_activo', response.data[0]['activo']);
         this.$store.dispatch('action_conciencia_tipo', response.data[0]['tipo']);
         this.$store.dispatch('action_conciencia_docto', response.data[0]['docto']);
         this.$store.dispatch('action_conciencia_estatusplan', response.data[0]['estatusplan']);
    
      this.$router.push('/nuevaconciencia'); //agregar ruta en vue router
       })
       .catch( error => { console.log(JSON.stringify(error.data))});
 

    },

    deleteItem(item) {
  
      let r = confirm("¿Estas seguro de eliminar este registro ? ") ;

         if (r == true) {
          console.log("el vlaor de r : " + r);
          apiConciencia.Delete__conciencia(item.id, this.$store);
          this.poblarGrid();

         }
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
        Object.assign(this.conciencia[this.editedIndex], this.editedItem);
      } else {
        this.conciencia.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>