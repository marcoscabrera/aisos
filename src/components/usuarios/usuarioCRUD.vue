<template>
  <v-data-table
    :headers="headers"
    :items="usuarios"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Catalogo de Usuarios</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on"
              >Nuevo Usuario</v-btn
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
                      label="Nombre de usuario"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" xs="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.email"
                      label="email"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" xs="12" sm="6" md="4">
                    <v-select
                      v-model="editedItem.cargo"
                      :items="cargos"
                      label="Cargo"
                      dense
                    >
                    </v-select>
                  </v-col>
                  <v-col cols="12" xs="12" sm="6" md="4">
                    <v-select
                      v-model="editedItem.rol"
                      :items="roles"
                      label="Rol"
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
      { text: "Email", value: "email" },
      { text: "Cargo", value: "cargo" },
      { text: "Rol", value: "rol" },

      { text: "acciones", value: "actions", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
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
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nuevo Usuario" : "Editar Usuario";
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
      this.usuarios = [
        {
          name: "nombre de Usuario 1",
          email: "usuario1@aldeassos.com",
          cargo: "ELPI",
          rol: "PFN",
          protein: 4.0,
        },
        {
          name: "nombre de Usuario 1",
          email: "usuario1@aldeassos.com",
          cargo: "ELPI",
          rol: "PFN",
        },
        {
          name: "nombre de Usuario 2",
          email: "usuario2@aldeassos.com",
          cargo: "ELPI",
          rol: "PFN",
        },
        {
          name: "nombre de Usuario 3",
          email: "usuario3@aldeassos.com",
          cargo: "cargo en ALDEAS SOS",
          rol: "PFN",
        },
        {
          name: "nombre de Usuario 4",
          email: "usuario4@aldeassos.com",
          cargo: "cargo en ALDEAS SOS",
          rol: "PFN",
        },
        {
          name: "nombre de Usuario 5",
          email: "usuario5@aldeassos.com",
          cargo: "cargo en ALDEAS SOS",
          rol: "PFN",
        },
        {
          name: "nombre de Usuario 6",
          email: "usuario6@aldeassos.com",
          cargo: "cargo en ALDEAS SOS",
          rol: "PFN",
        },
        {
          name: "nombre de Usuario 7",
          email: "usuario7@aldeassos.com",
          cargo: "cargo en ALDEAS SOS",
          rol: "PFN",
        },
        {
          name: "nombre de Usuario 8",
          email: "usuario8@aldeassos.com",
          cargo: "cargo en ALDEAS SOS",
          rol: "PFN",
        },
        {
          name: "nombre de Usuario 9",
          email: "usuario9@aldeassos.com",
          cargo: "cargo en ALDEAS SOS",
          rol: "PFN",
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
      confirm("¿Estas seguro de eliminar este usuario ? ") &&
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
        Object.assign(this.usuarios[this.editedIndex], this.editedItem);
      } else {
        this.usuarios.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>