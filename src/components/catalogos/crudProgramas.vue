<template>
  <v-container name="crudProgramas">
    <v-data-table
      :headers="headers"
      :items="programas"
      sort-by="descripcion"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title> **</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
            <v-btn color="primary" dark class="mb-2" @click="iraConfig">
              <v-icon>
                mdi-cog
              </v-icon>
              Configuracion
            </v-btn>
            <v-divider class="mx-4" inset vertical></v-divider>   
            
                   <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">

               
              <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on"
                >+ Agregar Programa</v-btn
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
                        v-model="editedItem.programa"
                        label="Nombre del Programa"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" xs="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.abreviatura"
                        label="Abreviatura"
                        dense
                      >
                      </v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" xs="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.prefijofolio"
                        label="Prefijo"
                        dense
                      >
                      </v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close"
                  >Cancelar</v-btn
                >
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
  </v-container>
</template>



<script>
import apiProgramas from "@/apialdeas/apiProgramas.js";
//import apiTestigos from "@/apialdeas/apiTestigos.js";

export default {
  name: "crudProgramas",

  data: () => ({
    programas: [],
    dialog: false,

    headers: [
      {
        text: "id",
        align: "start",
        sortable: false,
        value: "id",
      },
      { text: "Programa", value: "programa" },

      { text: "Descripcion", value: "abreviatura" },

      { text: "Prefifo", value: "prefijofolio" },

      { text: "acciones", value: "actions", sortable: false },
    ],

    editedIndex: -1,
    editedItem: {
      id: "",
      programa: "",
      abreviatura: "",
      prefijofolio: "",
    },
    defaultItem: {
      id: "",
      programa: "",
      abreviatura: "",
      prefijofolio: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nuevo Programa" : "Editar Programa";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
  },

  created() {
    //this.initialize();
    console.log(apiProgramas);
    this.$nextTick(() => {
      this.poblarGrid();
    });
  },

  methods: {

    iraConfig() {

        this.$router.push({name: 'Configuracion'})

    },
    initialize() {},
    poblarGrid() {
      let datos = apiProgramas.cargar__todo__los__programas(this.$store);

      datos
        .then((response) => {
          this.programas = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    editItem(item) {
      this.editedIndex = this.programas.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      console.log("valor dei en borrar item.id " + item.id);

      var opcion = confirm("¿Estas seguro de eliminar este Programa ? ");

      var promesa;
      opcion == true
        ? (promesa = apiProgramas.Delete__programas(item.id, this.$store))
        : this.close();

      promesa
        .then((response) => {
          console.log(response);
          this.poblarGrid();
          this.close();
        })
        .catch((error) => {
          console.log(error);
          alert("La operacion no se ha podido realizar");
        });
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

      let operacion = "";

      idCount == 0 ? (operacion = "nuevo") : (operacion = "editar");

      let parametros = {
        id: this.editedItem.id,
        programa: this.editedItem.programa,
        abreviatura: this.editedItem.abreviatura,
        prefijofolio: this.editedItem.prefijofolio,
      };
      //console.log("valor del parametros " + parametros);

      let insertar;

      operacion === "nuevo"
        ? (insertar = apiProgramas.nuevo__programas(parametros, this.$store))
        : (insertar = apiProgramas.update__programas(parametros, this.$store));

      insertar
        .then((response) => {
          console.log("valor de la operacion : " + operacion);
          console.log(response.data);

          this.poblarGrid();
          this.close();
        })
        .catch((error) => {
          console.log(JSON.stringify(error.data));
        });
    },
  },
};
</script>

<style scoped>
</style>