<template>
  <v-data-table
    :headers="headers"
    :items="usuarios"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title> **</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on"
              >+ Agregar Testigo</v-btn
            >
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" xs="12" sm="12" md="12">
                    <v-text-field
                      v-model="editedItem.nombre"
                      label="Nombre del testigo"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" xs="12" sm="6" md="4">
                    <v-select
                     
                      v-model="editedItem.cargo"
                      :items="itemsCargos"
                      label="Cargo"
                      dense
                    >
                    </v-select>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancelar</v-btn>
              <v-btn color="blue darken-1" text @click="save">Guardar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
      <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
    </template>
    <template v-slot:no-data>
     <!-- <v-btn color="primary" @click="initialize">Reset</v-btn>
     -->
    </template>
  </v-data-table>
</template>


<script>

import apiTestigos from '@/apialdeas/apiTestigos.js';
export default {
  props : { incidenteid : { type:String},
            testigos : {type: Array}},
  data: () => ({
    usuarios :[],
    dialog: false,
   itemsCargos: ["COLABORADOR SOS", "CUIDADORA DE ATENCION DIRECTA",
       "NIÑA O NIÑO PARTICIPANTE" ,"PERSONA EXTERNA","OTRO"] ,
        roles: ["PFN", "PFL", "PL", "ELPI"],
    headers: [
      {
        text: "id",
        align: "start",
        sortable: false,
        value: "id",
      },
      { text: "Nombre", value: "nombre" },

      { text: "Cargo", value: "cargo" },

      { text: "acciones", value: "actions", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      id: "",
      name: "",
      cargo: "",
    
    },
    defaultItem: {
      id: "",
      name: "",
      cargo: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nuevo Testigo" : "Editar Testigo";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
  },

  created() {
    //this.initialize();
      this.$nextTick(() => {
          this.poblarGrid();
      });
   
  },

  methods: {

    initialize() {
        this.usuarios = this.testigos;
    },
   poblarGrid () {

     let id = this.incidenteid;
      
      let testigos = apiTestigos.cargarTestigos(id,this.$store);

      testigos.then(
        response => {
            this.usuarios = response.data;
        }
      ).catch(
        error=>{
          console.log(error);
        }
      );
      
    },

    editItem(item) {
      this.editedIndex = this.usuarios.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      
    console.log("valor dei en borrar item.id " + item.id);

     var opcion =  confirm("¿Estas seguro de eliminar este testigo ? ");
      
      var promesa;
      opcion== true  ? 
      promesa =  apiTestigos.DeleteTestigo(item.id, this.$store) :
      this.close();

      promesa
      .then(
        response =>{
          console.log(response);
          this.poblarGrid();
          this.close();
        }
      ).catch(
        error => {
          console.log(error);
          alert("La operacion no se ha podido realizar");
        }
      );
      
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
   
      //console.log("valor del id " + this.editedItem.id);

      let idCount = 0;
      idCount = this.editedItem.id.length;

      let operacion =''

      idCount==0 ? operacion ='nuevo' : operacion='editar';

      let parametros = {   
             'id' : this.editedItem.id,
             'nombre' : this.editedItem.nombre,
             'cargo' : this.editedItem.cargo,
             'incidenteid' :this.incidenteid
      };
      //console.log("valor del parametros " + parametros);

      let insertar;

      operacion==='nuevo' ? 
       insertar = apiTestigos.nuevoTestigo(parametros,this.$store) :
       insertar = apiTestigos.updateTestigo(parametros,this.$store);

      insertar.then(
        response =>{
          console.log("valor de la operacion : " + operacion);
          console.log(response.data);

          this.poblarGrid();
         this.close();

        }
      ).catch(
                error =>{
          console.log(JSON.stringify(error.data));
        }
      );
     
    },
  },
};
</script>