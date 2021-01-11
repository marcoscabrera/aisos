
  <template>
  <v-data-table
    :headers="headers"
    :items="incidentes"
    :single-expand="singleExpand"
    :expanded.sync="expanded"
    item-key="id"
    show-expand
    sort-by="id"
    class="elevation-1"
    :loading="cargandoDatos"
    loading-text="Cargando... por favor sea paciente"
  >
    <template v-slot:item.activo="{ item }">
      <v-simple-checkbox v-model="item.activo" disabled></v-simple-checkbox>
    </template>

    <template v-slot:expanded-item="{ headers, item }">
      <td :colspan="headers.length">
        Descripcion de los hechos : {{ item.registrohechos }}
      </td>
    </template>

    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Incidentes</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <!-- <v-chip>1.- Valoración Inicial</v-chip>
        <v-chip>2.- Valoración Integral</v-chip>
        <v-chip>3.- Seguimiento</v-chip>
        <v-chip>4.- Cierre</v-chip> -->
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>

        <v-btn color="primary" dark class="mb-2" @click="irADenuncias">
          Nuevo Incidente
        </v-btn>
      </v-toolbar>
    </template>
    <!--
      
     -->
    <template v-slot:item.fechaAlta="{ item }">
      {{ item.fechaAlta | quitarCeros }}
    </template>
    <template v-slot:item.incidenteconfirmado="{ item }">
      <v-icon color="red" v-if="item.incidenteconfirmado == 'SI'">
        mdi-checkbox-marked-circle</v-icon
      >
      <v-icon color="green" v-if="item.incidenteconfirmado == 'NO'"
        >mdi-close-circle</v-icon
      >
      <v-icon color="yellow" v-if="item.incidenteconfirmado == 'POR CONFIRMAR'"
        >mdi-timer</v-icon
      >
    </template>

    <!-- confirmaciones -->
    <template v-slot:item.confirmaincidente="{ item }">
      <v-icon color="red" v-if="item.confirmaincidentenumerico == 2">
        mdi-checkbox-marked-circle</v-icon
      >
      <v-icon color="green" v-if="item.confirmaincidentenumerico == 1"
        >mdi-close-circle</v-icon
      >
      <v-icon color="yellow" v-if="item.confirmaincidentenumerico == 0"
        >mdi-timer</v-icon
      >
    </template>

    <template v-slot:item.tipoderespuesta="{ item }">
      <v-btn v-if="item.estado == 'cerrado_x_ni'" color="green" dark dense>
        NO ES UN INCIDENTE
      </v-btn>

      <v-btn
        v-else
        :color="item.coloretapacuatro"
        dark
        dense
        @click="ir_a_respuesta(item)"
      >
        {{ item.tipoderespuesta }}
      </v-btn>
    </template>

    <template v-slot:item.etapauno="{ item }">
      <v-btn
        x-small
        fab
        :class="item.etapauno"
        :color="item.coloretapauno"
        dark
        @click="irAValoracionInicial(item.id)"
      >
        <!-- <v-icon>mdi-file-document</v-icon>
       --></v-btn
      >
    </template>

    <template v-slot:item.etapados="{ item }">
      <v-btn
        :class="item.etapados"
        x-small
        fab
        :color="item.coloretapados"
        dark
        @click="irAValoracionIntegral(item.id)"
      >
        .</v-btn
      >
    </template>

    <template v-slot:item.etapatres="{ item }">
      <v-btn
        :class="item.etapatres"
        x-small
        fab
        :color="item.coloretapatres"
        dark
        @click="irASeguimiento(item.id)"
      >
        .</v-btn
      >
    </template>

    <template v-slot:item.etapacuatro="{ item }">
      <v-btn
        :class="item.etapacuatro"
        x-small
        fab
        :color="item.coloretapacuatro"
        dark
        @click="irACierre(item.id)"
      >
        .</v-btn
      >
    </template>

    <!-- etapas -->
    <template v-slot:item.actions="{ item }">
      <v-btn
        x-small
        fab
        :color="colorvi"
        dark
        @click="irAValoracionInicial(item.id)"
      >
        .</v-btn
      >
      <v-btn
        :v-if="item.etapados"
        x-small
        fab
        :color="colorvintegral"
        @click="irAValoracionIntegral(item.id)"
        >.</v-btn
      >
      <v-btn
        :v-if="item.etapatres"
        x-small
        fab
        :color="colors"
        @click="irA('/seguimiento')"
        >.</v-btn
      >
      <v-btn
        :v-if="item.etapacuatro"
        x-small
        fab
        :color="colorc"
        @click="irACierre(item.id)"
        >.</v-btn
      >
    </template>
  </v-data-table>
</template>



<script>
import apiIncidentes from "@/apialdeas/apiIncidentes.js";
export default {
  data: () => ({
    colorvi: "yellow",
    colorvintegral: "yellow",
    colors: "yellow",
    colorc: "yellow",

    etapaIntegral: false,
    etapaSeguimiento: false,
    etapaCierre: false,

    cargandoDatos: false,
    dialog: false,
    expanded: [],
    singleExpand: false,

    headers: [
      /* {
        text: "id",
        align: "start",
        sortable: false,
        value: "id",
      },*/
      {
        text: "Folio",
        value: "folio",
      },
      //{ text: "Programa", value: "programa" },
      { text: "Fecha", value: "fechaAlta" },
      { text: "¿Incidente?", value: "incidenteconfirmado" },
      { text: "Confirmacion", value: "confirmaincidente" },

      { text: "Respuesta", value: "tipoderespuesta" },
      { text: "Hechos", value: "data-table-expand" },
      // { text: "Activo", value: "activo" },
      { text: "V Inicial", value: "etapauno" },
      { text: "V Integral", value: "etapados" },
      { text: "Seguimiento", value: "etapatres" },
      { text: "Cierre", value: "etapacuatro" },
      //{ text: "Etapas", value: "actions", sortable: false },
    ],
    incidentes: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      descripcion: "",
      activo: "",
    },
    defaultItem: {
      name: "",
      descripcion: "",
      activo: "",
    },
  }),
  filters: {
    quitarCeros: function (value) {
      return value.replace(/00:00:00/, "");
    },
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nuevo Incidente " : "Editar Incidente";
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
    ir_a_respuesta(valor) {
      /* 
              "DENUNCIA PENAL",
        "INVESTIGACION INTERNA",
        "ABORDAJE INTERNO", */

      console.log("ir a " + valor.tipoderespuesta);

      // var ruta = '';

      if (valor.tipoderespuesta == "DENUNCIA PENAL") {
        this.$router.push({
          name: "DenunciaLegal",
          params: { denunciaId: valor.id },
        });
        // this.$router.push('/denuncialegal');
      }
      if (valor.tipoderespuesta == "INVESTIGACION INTERNA") {
        this.$router.push({
          name: "InvestigacionInterna",
          params: { incidenteId: valor.id },
        });
        //this.$router.push('/investigacioninterna');
      }
      if (valor.tipoderespuesta == "ABORDAJE INTERNO") {
        // this.$router.push({ name: "DenunciasDetalle", params: { id: ruta } });
        console.log("no genera ningun movimiento");
      }
    },
    irA(ruta) {
      this.$router.push(ruta);
    },
    irAValoracionInicial(ruta) {
      console.log("is a visitar " + ruta);
      let r = "/denuncias/" + ruta;
      console.log(r);
      // named route
      this.$router.push({ name: "DenunciasDetalle", params: { id: ruta } });
    },
    irAValoracionIntegral(id) {
      // named route
      this.$router.push({ name: "ValoracionIntegral", params: { id: id } });
    },
    irASeguimiento(id) {
      this.$router.push({ name: "Seguimiento", params: { id: id } });
    },

    irACierre(id) {
      this.$router.push({ name: "Cierre", params: { incidenteId: id } });
    },
    irADenuncias() {
      this.$router.push("/denuncias");
    },
    guardar__iradenuncias() {
      this.$router.push("/dashboard");
    },
    initialize() {
      this.cargandoDatos = true; //esto activa la animacion de loading de la tabla

      let getIncidentes = apiIncidentes.recuperarTodosLosIncidentes(
        this.$store
      );

      getIncidentes
        .then((response) => {
          console.log(JSON.stringify(response.data));

          this.incidentes = response.data;
          this.cargandoDatos = false; //termina la animacion de la tabla loading
        })
        .catch((error) => {
          console.log(error.data);
          this.cargandoDatos = false; //termina la animacion de la tabla loading
        });
      /*
      ]*/
    },

    editItem(item) {
      this.editedIndex = this.incidentes.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.incidentes.indexOf(item);
      confirm("¿Estas seguro de eliminar este incidente ? ") &&
        this.incidentes.splice(index, 1);
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
        Object.assign(this.incidentes[this.editedIndex], this.editedItem);
      } else {
        this.incidentes.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>