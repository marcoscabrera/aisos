<template>
  <v-data-table
    :headers="headers"
    :items="roles"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:item.at="{ item }">
      <v-simple-checkbox v-model="item.at" disabled></v-simple-checkbox>
    </template>

    <template v-slot:item.ar="{ item }">
      <v-simple-checkbox v-model="item.ar" disabled></v-simple-checkbox>
    </template>

    <template v-slot:item.it="{ item }">
      <v-simple-checkbox v-model="item.it" disabled></v-simple-checkbox>
    </template>

    <template v-slot:item.ir="{ item }">
      <v-simple-checkbox v-model="item.ir" disabled></v-simple-checkbox>
    </template>

    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Catalogo de roles</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on"
              >Nuevo rol</v-btn
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
                      label="Nombre de rol"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" xs="12" sm="12" md="12">
                    <v-text-field
                      v-model="editedItem.email"
                      label="Descripcion"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" xs="12" sm="6" md="4">
                    <v-checkbox
                      v-model="editedItem.at"
                      label="acceso total"
                    ></v-checkbox>
                  </v-col>
                  <v-col cols="12" xs="12" sm="6" md="4">
                    <v-checkbox
                      v-model="editedItem.ar"
                      label="acceso restringido"
                    ></v-checkbox>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12" xs="12" sm="6" md="4">
                    <v-checkbox
                      v-model="editedItem.it"
                      label="impresion total"
                    ></v-checkbox>
                  </v-col>
                  <v-col cols="12" xs="12" sm="6" md="4">
                    <v-checkbox
                      v-model="editedItem.ir"
                      label="impresion restringido"
                    ></v-checkbox>
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
    cargos: ["puesto en Aldeas 1", "puesto en Aldeas 2", "cargo en ALDEAS SOS"],
    roles: ["PFN", "PFL", "PL", "ELPI"],
    headers: [
      {
        text: "Nombre",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "Descripcion", value: "descripcion" },
      { text: "acceso total", value: "at" },
      { text: "acceso restringido", value: "ar" },
      { text: "impresion total", value: "it" },
      { text: "impresion restringida", value: "ir" },

      { text: "acciones", value: "actions", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      descripcion: "",
      at: false,
      ar: false,
      it: false,
      if: false,
    },
    defaultItem: {
      name: "",
      descripcion: "",
      at: false,
      ar: false,
      it: false,
      if: false,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nuevo rol" : "Editar rol";
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
      this.roles = [
        {
          name: "PFN",
          descripcion: "A Nivel Nacional",
          at: true,
          ar: true,
          it: true,
          if: true,
        },
        {
          name: "PFL",
          descripcion: "A Nivel Local o de unidad",
          at: false,
          ar: true,
          it: false,
          if: true,
        },
        {
          name: "ELPI",
          descripcion: "A Nivel local",
          at: false,
          ar: false,
          it: false,
          if: false,
        },
        {
          name: "ELPIL",
          descripcion: "A Nivel local",
          at: false,
          ar: false,
          it: false,
          if: false,
        },
      ];
    },

    editItem(item) {
      this.editedIndex = this.roles.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.roles.indexOf(item);
      confirm("¿Estas seguro de eliminar este rol ? ") &&
        this.roles.splice(index, 1);
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
        Object.assign(this.roles[this.editedIndex], this.editedItem);
      } else {
        this.roles.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>