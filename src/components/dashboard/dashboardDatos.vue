
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

    <template v-slot:item.etapauno="{ item }">
      <v-btn
        x-small
        :class="item.etapauno"
        :color="item.coloretapauno"
        dark
        @click="irAValoracionInicial(item.id)"
      >
        1</v-btn
      >
    </template>

    <template v-slot:item.etapados="{ item }">
      <v-btn
        :class="item.etapados"
        x-small
        :color="item.coloretapados"
        dark
        @click="irAValoracionIntegral(item.id)"
      >
        1</v-btn
      >
    </template>

    <template v-slot:item.etapatres="{ item }">
      <v-btn
        :class="item.etapatres"
        x-small
        :color="item.coloretapatres"
        dark
        @click="irAValoracionInicial(item.id)"
      >
        1</v-btn
      >
    </template>

    <template v-slot:item.etapacuatro="{ item }">
      <v-btn
        :class="item.etapacuatro"
        x-small
        :color="item.coloretapacuatro"
        dark
        @click="irAValoracionInicial(item.id)"
      >
        1</v-btn
      >
    </template>

    <!-- etapas -->
    <template v-slot:item.actions="{ item }">
      <v-btn
        x-small
        :color="colorvi"
        dark
        @click="irAValoracionInicial(item.id)"
      >
        1</v-btn
      >
      <v-btn
        :v-if="item.etapados"
        x-small
        :color="colorvintegral"
        @click="irAValoracionIntegral(item.id)"
        >2</v-btn
      >
      <v-btn
        :v-if="item.etapatres"
        x-small
        :color="colors"
        @click="irA('/seguimiento')"
        >3</v-btn
      >
      <v-btn
        :v-if="item.etapacuatro"
        x-small
        :color="colorc"
        @click="irA('/cierre')"
        >4</v-btn
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
      {
        text: "id",
        align: "start",
        sortable: false,
        value: "id",
      },
      {
        text: "Folio",
        value: "folio",
      },
      { text: "Programa", value: "programa" },
      { text: "Fecha", value: "fechaAlta" },
      { text: "¿Incidente?", value: "incidenteconfirmado" },

      { text: "Hechos", value: "data-table-expand" },
      { text: "Activo", value: "activo" },
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
          console.log(response.data);

          this.incidentes = response.data;
          this.cargandoDatos = false; //termina la animacion de la tabla loading
        })
        .catch((error) => {
          console.log(error.data);
          this.cargandoDatos = false; //termina la animacion de la tabla loading
        });
      /*
      this.incidentes = [
        {
          id: "1",
          folio: "000-00-00",
          unidad: "PROGRAM CIUDAD",
          fecha: "12-05-2020",
          hechos: "AQUI VIENE UNA DESCRIP---",
          hechoslargos:
            "1ESTA ES UNA DESCRIPCION QUE CONTIENE ALREDEDOR DE 200 PALABRAS MAS PALABRAS MENOS ,Y ESTE TEXTO ES PARA PROBAR LO LARGO QUE PODRIA SER LA DESCRIPCION DE  HECHOS. AHORA PROCEDEREMOS A PEGAR UN TEXTO Los Derechos Humanos de niñas, niños y adolescentes están previstos en la Constitución Política de los Estados Unidos Mexicanos, en los tratados internacionales y en las demás leyes aplicables, esencialmente en la Convención sobre los Derechos del Niño y en la Ley General de los Derechos de Niñas, Niños y Adolescentes (publicada el 4 de diciembre de 2014), la cual reconoce a niñas, niños y adolescentes como titulares de derechos y, en su artículo 13, de manera enunciativa y no limitativa señala los siguientes:                          Los Derechos Humanos de niñas, niños y adolescentes están previstos en la Constitución Política de los Estados Unidos Mexicanos, en los tratados internacionales y en las demás leyes aplicables, esencialmente en la Convención sobre los Derechos del Niño y en la Ley General de los Derechos de Niñas, Niños y Adolescentes (publicada el 4 de diciembre de 2014), la cual reconoce a niñas, niños y adolescentes como titulares de derechos y, en su artículo 13, de manera enunciativa y no limitativa señala",
          activo: true,
          incidente: "Si",
        },
        {
          id: "2",
          folio: "000-00-00",
          unidad: "PROGRAM CIUDAD",
          fecha: "12-05-2020",
          hechos: "AQUI VIENE UNA DESCRIP---",
          hechoslargos:
            "2ESTA ES UNA DESCRIPCION QUE CONTIENE ALREDEDOR DE 200 PALABRAS MAS PALABRAS MENOS ,Y ESTE TEXTO ES PARA PROBAR LO LARGO QUE PODRIA SER LA DESCRIPCION DE  HECHOS. AHORA PROCEDEREMOS A PEGAR UN TEXTO Los Derechos Humanos de niñas, niños y adolescentes están previstos en la Constitución Política de los Estados Unidos Mexicanos, en los tratados internacionales y en las demás leyes aplicables, esencialmente en la Convención sobre los Derechos del Niño y en la Ley General de los Derechos de Niñas, Niños y Adolescentes (publicada el 4 de diciembre de 2014), la cual reconoce a niñas, niños y adolescentes como titulares de derechos y, en su artículo 13, de manera enunciativa y no limitativa señala los siguientes:                          Los Derechos Humanos de niñas, niños y adolescentes están previstos en la Constitución Política de los Estados Unidos Mexicanos, en los tratados internacionales y en las demás leyes aplicables, esencialmente en la Convención sobre los Derechos del Niño y en la Ley General de los Derechos de Niñas, Niños y Adolescentes (publicada el 4 de diciembre de 2014), la cual reconoce a niñas, niños y adolescentes como titulares de derechos y, en su artículo 13, de manera enunciativa y no limitativa señala",
          activo: true,
          incidente: "Si",
        },
        {
          id: "3",
          folio: "000-00-00",
          unidad: "PROGRAM CIUDAD",
          fecha: "12-05-2020",
          hechos: "AQUI VIENE UNA DESCRIP---",
          hechoslargos:
            "3ESTA ES UNA DESCRIPCION QUE CONTIENE ALREDEDOR DE 200 PALABRAS MAS PALABRAS MENOS ,Y ESTE TEXTO ES PARA PROBAR LO LARGO QUE PODRIA SER LA DESCRIPCION DE  HECHOS. AHORA PROCEDEREMOS A PEGAR UN TEXTO Los Derechos Humanos de niñas, niños y adolescentes están previstos en la Constitución Política de los Estados Unidos Mexicanos, en los tratados internacionales y en las demás leyes aplicables, esencialmente en la Convención sobre los Derechos del Niño y en la Ley General de los Derechos de Niñas, Niños y Adolescentes (publicada el 4 de diciembre de 2014), la cual reconoce a niñas, niños y adolescentes como titulares de derechos y, en su artículo 13, de manera enunciativa y no limitativa señala los siguientes:                          Los Derechos Humanos de niñas, niños y adolescentes están previstos en la Constitución Política de los Estados Unidos Mexicanos, en los tratados internacionales y en las demás leyes aplicables, esencialmente en la Convención sobre los Derechos del Niño y en la Ley General de los Derechos de Niñas, Niños y Adolescentes (publicada el 4 de diciembre de 2014), la cual reconoce a niñas, niños y adolescentes como titulares de derechos y, en su artículo 13, de manera enunciativa y no limitativa señala",
          activo: true,
          incidente: "No",
        },
        {
          id: "4",
          folio: "000-00-00",
          unidad: "PROGRAM CIUDAD",
          fecha: "12-05-2020",
          hechos: "AQUI VIENE UNA DESCRIP---",
          hechoslargos:
            "4ESTA ES UNA DESCRIPCION QUE CONTIENE ALREDEDOR DE 200 PALABRAS MAS PALABRAS MENOS ,Y ESTE TEXTO ES PARA PROBAR LO LARGO QUE PODRIA SER LA DESCRIPCION DE  HECHOS. AHORA PROCEDEREMOS A PEGAR UN TEXTO Los Derechos Humanos de niñas, niños y adolescentes están previstos en la Constitución Política de los Estados Unidos Mexicanos, en los tratados internacionales y en las demás leyes aplicables, esencialmente en la Convención sobre los Derechos del Niño y en la Ley General de los Derechos de Niñas, Niños y Adolescentes (publicada el 4 de diciembre de 2014), la cual reconoce a niñas, niños y adolescentes como titulares de derechos y, en su artículo 13, de manera enunciativa y no limitativa señala los siguientes:                          Los Derechos Humanos de niñas, niños y adolescentes están previstos en la Constitución Política de los Estados Unidos Mexicanos, en los tratados internacionales y en las demás leyes aplicables, esencialmente en la Convención sobre los Derechos del Niño y en la Ley General de los Derechos de Niñas, Niños y Adolescentes (publicada el 4 de diciembre de 2014), la cual reconoce a niñas, niños y adolescentes como titulares de derechos y, en su artículo 13, de manera enunciativa y no limitativa señala",
          activo: true,
          incidente: "N0",
        },
        {
          id: "5",
          folio: "000-00-00",
          unidad: "PROGRAM CIUDAD",
          fecha: "12-05-2020",
          hechos: "AQUI VIENE UNA DESCRIP---",
          hechoslargos:
            "5ESTA ES UNA DESCRIPCION QUE CONTIENE ALREDEDOR DE 200 PALABRAS MAS PALABRAS MENOS ,Y ESTE TEXTO ES PARA PROBAR LO LARGO QUE PODRIA SER LA DESCRIPCION DE  HECHOS. AHORA PROCEDEREMOS A PEGAR UN TEXTO Los Derechos Humanos de niñas, niños y adolescentes están previstos en la Constitución Política de los Estados Unidos Mexicanos, en los tratados internacionales y en las demás leyes aplicables, esencialmente en la Convención sobre los Derechos del Niño y en la Ley General de los Derechos de Niñas, Niños y Adolescentes (publicada el 4 de diciembre de 2014), la cual reconoce a niñas, niños y adolescentes como titulares de derechos y, en su artículo 13, de manera enunciativa y no limitativa señala los siguientes:                          Los Derechos Humanos de niñas, niños y adolescentes están previstos en la Constitución Política de los Estados Unidos Mexicanos, en los tratados internacionales y en las demás leyes aplicables, esencialmente en la Convención sobre los Derechos del Niño y en la Ley General de los Derechos de Niñas, Niños y Adolescentes (publicada el 4 de diciembre de 2014), la cual reconoce a niñas, niños y adolescentes como titulares de derechos y, en su artículo 13, de manera enunciativa y no limitativa señala",
          activo: true,
          incidente: "Si",
        },
        {
          id: "6",
          folio: "000-00-00",
          unidad: "PROGRAM CIUDAD",
          fecha: "12-05-2020",
          hechos: "AQUI VIENE UNA DESCRIP---",
          hechoslargos:
            "6ESTA ES UNA DESCRIPCION QUE CONTIENE ALREDEDOR DE 200 PALABRAS MAS PALABRAS MENOS ,Y ESTE TEXTO ES PARA PROBAR LO LARGO QUE PODRIA SER LA DESCRIPCION DE  HECHOS. AHORA PROCEDEREMOS A PEGAR UN TEXTO Los Derechos Humanos de niñas, niños y adolescentes están previstos en la Constitución Política de los Estados Unidos Mexicanos, en los tratados internacionales y en las demás leyes aplicables, esencialmente en la Convención sobre los Derechos del Niño y en la Ley General de los Derechos de Niñas, Niños y Adolescentes (publicada el 4 de diciembre de 2014), la cual reconoce a niñas, niños y adolescentes como titulares de derechos y, en su artículo 13, de manera enunciativa y no limitativa señala los siguientes:                          Los Derechos Humanos de niñas, niños y adolescentes están previstos en la Constitución Política de los Estados Unidos Mexicanos, en los tratados internacionales y en las demás leyes aplicables, esencialmente en la Convención sobre los Derechos del Niño y en la Ley General de los Derechos de Niñas, Niños y Adolescentes (publicada el 4 de diciembre de 2014), la cual reconoce a niñas, niños y adolescentes como titulares de derechos y, en su artículo 13, de manera enunciativa y no limitativa señala",
          activo: true,
          incidente: "Si",
        },
      ];*/
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