<template>
 <v-data-table
    :headers="headers"
    :items="unidades"
    sort-by="id"
    class="elevation-1"
  >
    <template v-slot:item.activo="{ item }">
        <v-simple-checkbox v-model="item.activo" disabled></v-simple-checkbox>
     </template>

     
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Catalogo de Unidades</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on"
              >Nueva Unidad</v-btn
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
                      v-model="editedItem.name"
                      label="Nombre de la unidad"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" xs="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.descripcion"
                      label="descripcion"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" xs="12" sm="6" md="4">

                    <v-switch v-model="editedItem.activo"
                     class="mx-2" 
                     label="En uso ">
                     </v-switch>

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
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
  </v-data-table>
</template>


<script>
export default {
  data: () => ({
    dialog: false,

  
    headers: [
      {
        text: "Nombre",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "Descripcion", value: "descripcion" },
      { text: "en uso", value: "activo" },
      { text: "acciones", value: "actions", sortable: false },
    ],
    unidades: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      descripcion: "",
      activo: ""
    },
    defaultItem: {
      name: "",
      descripcion: "",
      activo: ""
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nueva Unidad" : "Editar Unidad";
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
      this.unidades = [
        {
          name: "Unidad",
          descripcion: "descripcion del Unidad",
          activo: true

        },
        {
          name: "Unidad",
          descripcion: "descripcion del Unidad",
          activo: true

        },
        {
          name: "Unidad",
          descripcion: "descripcion del Unidad",
          activo: true

        },
        {
          name: "Unidad",
          descripcion: "descripcion del Unidad",
          activo: false

        },
        {
          name: "Unidad",
          descripcion: "descripcion del Unidad",
          activo: true

        },
        {
          name: "Unidad",
          descripcion: "descripcion del Unidad",
          activo: true
        },
      ];
    },

    editItem(item) {
      this.editedIndex = this.usuarios.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.usuarios.indexOf(item);
      confirm("¿Estas seguro de eliminar este Unidad ? ") &&
        this.usuarios.splice(index, 1);
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
        Object.assign(this.unidades[this.editedIndex], this.editedItem);
      } else {
        this.unidades.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>
