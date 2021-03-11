<template>
<v-container>
    <v-alert type="info">
     Actualmente esta caracteristica esta en desarrollo.
    </v-alert>

  <v-data-table
    :headers="headers"
    :items="evidencias"
    sort-by="id"
    class="elevation-1"
    @dblclick:row="dblclickRow"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title> Folio Investigacion # {{ folio }}</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-btn color="red" dark class="mb-2" @click="regresarInvestigacion">
          ir a Investigacion
        </v-btn>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-btn color="primary" dark class="mb-2" @click="agegarEvidencia"
          >+ Agregar Evidencia
        </v-btn>
      </v-toolbar>
    </template>

      <!-- campo para ver la evidencia -->
    <template v-slot:item.ubicacion="{ item }">

     <v-btn color ="primary" dark dense @click="verEvidencia(item)"> Ver Evidencia </v-btn>
    </template>


    <template v-slot:item.tipo="{ item }">

      <v-icon color="green" v-if="item.tipo == 'Documento'">
        mdi-file-pdf
      </v-icon>
      <v-icon color="green" v-if="item.tipo == 'Imagen'">
        mdi-file-image
      </v-icon>
      <v-icon color="green" v-if="item.tipo == 'Video'">
        mdi-video
      </v-icon>
      <v-icon color="green" v-if="item.tipo == 'Audio'">
        mdi-audiobook
      </v-icon>
    </template>

      <!-- campo para activos -->
    <template v-slot:item.activo="{ item }">

      <v-icon color="green" v-if="item.activo == 1">
        mdi-checkbox-marked-circle
      </v-icon>
      <v-icon color="red" v-if="item.activo == 0">mdi-close-circle
       </v-icon>
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
//import apiTestigos from "@/apialdeas/apiTestigos.js";
import apiEvidencias from "@/apialdeas/apiEvidencias.js";

export default {
  name: "evidenciasCRUD",
  props: { folioinvestigacionid: { type: String }, testigos: { type: Array } },
  components: {},
  data: () => ({
    evidencias: [],
    dialog: false,
    folio: "",
    tipos: ["Documento", "Imagen", "Audio", "Video"],

    headers: [
      {
        text: "id",
        align: "start",
        sortable: false,
        value: "id",
      },
      { text: "Nombre", value: "nombre" },
      { text: "Descripcion", value: "descripcion" },
     { text: "ir a Evidencia", value: "ubicacion" },
      { text: "tipo", value: "tipo" },
      { text: "Activo", value: "activo" },
      { text: "acciones", value: "actions", sortable: false },
    ],
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
      return this.editedIndex === -1 ? "Nuevo Evidencia" : "Editar Evidencia";
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
    verEvidencia(item){
      console.log(" ir a evidencia : " + item.ubicacion);
      window.location.href =  item.ubicacion;
    },
    dblclickRow(){
      alert(" saldus");
    },
    regresarInvestigacion() {
      let id = this.$route.params.incidenteid;
      this.$router.push({
        name: "InvestigacionInterna",
        params: { incidenteId: id },
      });
    },

    agegarEvidencia() {
      let id = this.$route.params.denunciaId;
      console.log("=============");
      console.log(" id : " + id);
      console.log("=============");
      this.$router.push({
        name: "EvidenciasAgregar",
        params: { denunciaId: id },
      });
    },

    initialize() {
      
    },
    poblarGrid() {

      let id = this.$store.state.investigacion.investigacion_id;
     // testigos????
      let testigos = apiEvidencias.cargar__todas__las__evidencias_de_una__investigacion(
        id,
        this.$store
      );

      testigos
        .then((response) => {
          this.evidencias = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    editItem(item) {
      this.editedIndex = this.evidencias.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      console.log("valor dei en borrar item.id " + item.id);

      var opcion = confirm("¿Estas seguro de eliminar esta evidencia ? ");

      var promesa;
      opcion == true
        ? (promesa = apiEvidencias.Delete__evidencias(item.id, this.$store))
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

    },

    save() {
      //console.log("valor del id " + this.editedItem.id);


    },
  },
};
</script>