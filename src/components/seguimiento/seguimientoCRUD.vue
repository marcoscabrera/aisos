<template>
  <v-data-table
    :headers="headers"
    :items="usuarios"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title> MEDIDAS DE SEGUIMIENTO </v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              disabled
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
              >+ Medida</v-btn
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
                      v-model="editedItem.accion"
                      label="Acción"
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12" xs="12" sm="12" md="12">
                    <v-text-field
                      v-model="editedItem.responsable"
                      label="Responsable"
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12" xs="12" sm="12" md="12">
                    <v-text-field
                      v-model="editedItem.tiempo"
                      label="Duracion"
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12" xs="12" sm="12" md="12">
                    <v-text-field
                      v-model="editedItem.porcentaje"
                      label="%"
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12" xs="12" sm="12" md="12">
                    <v-text-field
                      v-model="editedItem.comentarios"
                      label="comentarios"
                    ></v-text-field>
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
      <!-- <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon> -->
      <v-btn color="blue darken-1" text @click="editItem(item)">agregar</v-btn>

      <!-- <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon> -->
    </template>

    <template v-slot:item.porcentaje="{ item }">
      <v-progress-linear v-model="item.porcentaje" height="25">
        <strong>{{ item.porcentaje }} </strong>
      </v-progress-linear>
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
        text: "Accion",
        align: "start",
        sortable: false,
        value: "accion",
      },

      { text: "Responsable", value: "responsable" },

      { text: "Duración", value: "tiempo" },

      { text: "%", value: "porcentaje" },

      { text: "Comentarios", value: "comentarios" },

      { text: "acciones", value: "actions", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      accion: "",
      responsable: "",
      tiempo: "",
      porcentaje: "",
      comentarios: "",
    },
    defaultItem: {
      accion: "",
      responsable: "",
      tiempo: "",
      porcentaje: "",
      comentarios: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nueva Medida" : "Editar Medida";
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
          accion: "Tomar medidas en aspecto tal",
          responsable: "Rogelio Montesori",
          tiempo: "30 dias habiles",
          porcentaje: "10%",
          comentarios: " Comentarios acerca de esta medida",
        },
        {
          accion: "Tomar medidas en aspecto tal",
          responsable: "Rogelio Montesori",
          tiempo: "40 dias habiles",
          porcentaje: "10%",
          comentarios: " Comentarios acerca de esta medida",
        },
        {
          accion: "Tomar medidas en aspecto tal",
          responsable: "Rogelio Montesori",
          tiempo: "320 dias habiles",
          porcentaje: "40%",
          comentarios: " Comentarios acerca de esta medida",
        },
        {
          accion: "Tomar medidas en aspecto tal",
          responsable: "Rogelio Montesori",
          tiempo: "30 dias habiles",
          porcentaje: "80%",
          comentarios: " Comentarios acerca de esta medida",
        },
        {
          accion: "Tomar medidas en aspecto tal",
          responsable: "Rogelio Montesori",
          tiempo: "30 dias habiles",
          porcentaje: "25%",
          comentarios: " Comentarios acerca de esta medida",
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