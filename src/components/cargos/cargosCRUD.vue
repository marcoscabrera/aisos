 <template>
  <v-data-table
    :headers="headers"
    :items="cargos"
    sort-by="id"
    class="elevation-1"
  >
    <template v-slot:item.activo="{ item }">
      <v-simple-checkbox v-model="item.activo" disabled></v-simple-checkbox>
    </template>

    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title> Cargos </v-toolbar-title>
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
              >Nuevo Cargo</v-btn
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
                      v-model="editedItem.nombrecargo"
                      label="Nombre del Cargo"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" xs="12" sm="12" md="12">
                    <v-text-field
                      v-model="editedItem.descripcion"
                      label="descripcion"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" xs="12" sm="6" md="4">
                    <v-switch
                      v-model="editedItem.activo"
                      class="mx-2"
                      label="En uso "
                    >
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

    <template v-slot:item.activo="{ item }">
      <v-icon color="green" v-if="item.activo == 1">
        mdi-checkbox-marked-circle
      </v-icon>
      <v-icon color="red" v-if="item.activo == 0">mdi-close-circle </v-icon>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
      <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
    </template>
    <template v-slot:no-data>
      <!--
      <v-btn color="primary" @click="initialize">Reset</v-btn>
      -->
    </template>
  </v-data-table>
</template>


<script>
import apiCargos from "@/apialdeas/apiCargos.js";
export default {
  data: () => ({
    dialog: false,

    headers: [
      {
        text: "#",
        align: "start",
        sortable: false,
        value: "id",
      },
      { text: "Nombre", value: "nombrecargo" },
      { text: "Descripcion", value: "descripcion" },
      { text: "en uso", value: "activo" },
      { text: "acciones", value: "actions", sortable: false },
    ],
    cargos: [],
    editedIndex: -1,
    editedItem: {
      id: "",
      nombrecargo: "",
      descripcion: "",
      activo: "",
    },
    defaultItem: {
      id: "",
      nombrecargo: "",
      descripcion: "",
      activo: "",
    },
  }),

  iraConfig(){
     
     this.$router.push({ name : 'Configuracion'});

  },

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nuevo Cargo" : "Editar Cargo";
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

    editItem(item) {
      this.editedIndex = this.cargos.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem_obsoleto(item) {
      const index = this.cargos.indexOf(item);
      confirm("¿Estas seguro de eliminar este Cargo ? ") &&
        this.cargos.splice(index, 1);
    },
    deleteItem(item) {
      console.log("valor dei en borrar item.id " + item.id);

      var opcion = confirm("¿Estas seguro de eliminar este Cargo ? ");

      var promesa;
      opcion == true
        ? (promesa = apiCargos.Delete__cargos(item.id, this.$store))
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

    save_obsoleto() {
      if (this.editedIndex > -1) {
        Object.assign(this.cargos[this.editedIndex], this.editedItem);
      } else {
        this.cargos.push(this.editedItem);
      }
      this.close();
    },
    poblarGrid() {
      let datos = apiCargos.cargar__todos_los_cargos(this.$store);

      datos
        .then((response) => {
          this.cargos = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    save() {
      //console.log("valor del id " + this.editedItem.id);

      let idCount = 0;
      idCount = this.editedItem.id.length;

      let operacion = "";

      idCount == 0 ? (operacion = "nuevo") : (operacion = "editar");
      let activo = false;
      console.log(
        " valor de  this.editedItem.activo " + this.editedItem.activo
      );
      this.editedItem.activo == "1" ? (activo = true) : (activo = false);
      let parametros = {
        id: this.editedItem.id,
        nombrecargo: this.editedItem.nombrecargo,
        descripcion: this.editedItem.descripcion,
        activo: activo,
      };
      //console.log("valor del parametros " + parametros);

      let insertar;

      operacion === "nuevo"
        ? (insertar = apiCargos.nuevo__cargos(parametros, this.$store))
        : (insertar = apiCargos.update__cargos(parametros, this.$store));

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