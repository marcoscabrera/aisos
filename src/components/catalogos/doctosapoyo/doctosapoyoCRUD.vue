<template>
  <v-data-table
    :headers="headers"
    :items="doctosapoyo"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Catalogo de doctosapoyo</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
            <v-btn color="primary"
            dark class="mb-2" 
            @click="agregar">
            + agregrar Documento
             </v-btn >

      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
      <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
    </template>
        <template v-slot:item.activo="{ item }">
      <v-icon color="green" v-if="item.activo == 1">
        mdi-checkbox-marked-circle
      </v-icon>
      <v-icon color="red" v-if="item.activo == 0">mdi-close-circle </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">No hay doctosapoyo</v-btn>
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

  </v-data-table>
</template>


<script>

import apidoctosapoyo from '@/apialdeas/apiDoctosApoyo.js';

export default {

  data: () => ({
    dialog: false,
    doctosapoyo:[],

    headers: [
      {
        text: "#",
        align: "start",
        sortable: false,
        value: "id"
       },
       { text: 'id', value: 'id' },
       { text: 'Nombre', value: 'nombredocto' },
       { text: 'Descripcion', value: 'descripcion' },
       { text: 'Link', value: 'link' },
       { text: 'Categoria', value: 'categoria' },
     
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
      return this.editedIndex === -1 ? "Nuevo doctosapoyo" : "Editar doctosapoyo";
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

    activar(valor , item){

      console.log(" valor _ " + valor);
      console.log(" id      " + item.id );


      let parametros     = { operacion : 'activar' ,activo : valor ,id :item.id };

      let promesa=  apidoctosapoyo.update__doctosapoyo(parametros,this.$store)
      
       promesa
      .then( response => { console.log(JSON.stringify(response.data))} )
      .catch( error => { console.log(JSON.stringify(error.data))});

    },
    agregar(){

       console.log("AGREGAR UN DOCUMENTOE");
       this.$store.dispatch('action_doctosapoyo_id',0);
       this.$router.push('Nuevodoctosapoyo');


    },
    initialize() {
     this.poblarGrid();
    },
       async poblarGrid(){

        let TodosLosdoctosapoyo = apidoctosapoyo.cargar__todos__los__doctosapoyo(this.$store);

         TodosLosdoctosapoyo
        .then( response => { 
          console.log(JSON.stringify(response.data));
          this.doctosapoyo = response.data;
        } )
        .catch( error => { console.log(JSON.stringify(error.data))});
    },

     agregarNuevodoctosapoyo(){

      console.log("agregando nuevo doctosapoyo");

      this.$store.dispatch('action_doctosapoyo_id',0);

      this.$router.push('Nuevodoctosapoyo');

   },

    editItem(item) {
      
      console.log("editando doctosapoyo");

      /* probando otras opciones */

      this.$store.dispatch('action_doctosapoyo_id',item.id)

      let promesa = apidoctosapoyo.cargar__doctosapoyo(item.id,this.$store);

      promesa
      .then( response => {

         console.log(JSON.stringify(response.data[0]));
       
         let activoTemp = true;

         response.data[0]["activo"]== 1 ? activoTemp = true : activoTemp= false;

        
            
        this.$store.dispatch('action_doctosapoyo_id',item.id);
        this.$store.dispatch('action_doctosapoyo_activo', activoTemp);


        this.$store.dispatch('action_doctosapoyo_id', response.data[0]['id']);
        this.$store.dispatch('action_doctosapoyo_nombredocto', response.data[0]['nombredocto']);
        this.$store.dispatch('action_doctosapoyo_incidenteid', response.data[0]['incidenteid']);
        this.$store.dispatch('action_doctosapoyo_descripcion', response.data[0]['descripcion']);
        this.$store.dispatch('action_doctosapoyo_link', response.data[0]['link']);
        this.$store.dispatch('action_doctosapoyo_categoria', response.data[0]['categoria']);
        this.$store.dispatch('action_doctosapoyo_activo', response.data[0]['activo']);


     

        
        this.$router.push('Nuevodoctosapoyo'); //agregar ruta en vue router

       })
       .catch( error => { console.log(JSON.stringify(error.data))});

  

    },

    deleteItem(item) {
  
      let r = confirm("¿Estas seguro de eliminar este registro ? ") ;

         if (r == true) {
          console.log("el vlaor de r : " + r);
          apidoctosapoyo.Delete__doctosapoyo(item.id, this.$store);
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
        Object.assign(this.doctosapoyo[this.editedIndex], this.editedItem);
      } else {
        this.doctosapoyo.push(this.editedItem);
      }
      this.close();
    }

  }//termina methods
};

</script>