<template>
  <v-container>
    <h2>Seguimiento</h2>

    <v-row>
      <v-col cols="12" xs="12" md="6">
        <v-label filled> FOLIO # AAA-000-20 </v-label>
      </v-col>

      <v-col cols="12" xs="12" md="6">
        <barraDocumentosVue></barraDocumentosVue>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" xs="12" md="6">
        <!--<v-select :items="itemsUnidades" label="PROGRAMA" dense filled hidden>
        </v-select> -->
      </v-col>

      <v-col cols="12" xs="12" md="6">
        <v-menu
          v-model="menu2"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              label="Fecha"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
        </v-menu>
      </v-col>
    </v-row>

    <!-- =============================================== -->

    <v-row>
      <v-card width="100%">
        <v-card-title> </v-card-title>
        <v-card-text>
          <seguimientoCRUD></seguimientoCRUD>
        </v-card-text>
      </v-card>
    </v-row>

    <!-- =============================================== -->

    <br />

    <v-row>
      <v-col cols="12" xs="12" sm="12" md="4">
        <v-btn
          :loading="loading"
          :disabled="loading"
          color="primary"
          @click="loader = 'loading'"
          block
        >
          <v-icon right dark> mdi-printer </v-icon>
          <v-spacer></v-spacer>
          Imprimir
        </v-btn>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="4">
        <!-- <v-btn
          :loading="loading"
          :disabled="loading"
          color="red"
          @click="guardar__iraDashboard"
          block
        >
          <v-icon right dark> mdi-close </v-icon>
          <v-spacer></v-spacer>
          Cancelar
        </v-btn> -->
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="4">
        <!-- <v-btn
          :loading="loading"
          :disabled="loading"
          color="green"
          @click="guardar__iraDashboard"
          block
        >
          <v-icon right dark> mdi-check </v-icon>
          <v-spacer></v-spacer>
          Guardar
        </v-btn> -->
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import barraDocumentosVue from "../barradocumentos/barraDocumentos.vue";
import seguimientoCRUD from "@/components/seguimiento/seguimientoCRUD.vue";
export default {
  components: { barraDocumentosVue, seguimientoCRUD },

  methods: {
    guardar__iraDashboard() {
      this.$router.push("/dashboard");
    },

    seleccionar(valor) {
      if (valor == "adulto") {
        this.adulto = true;
        this.pares = false;
      }

      if (valor == "pares") {
        this.adulto = false;
        this.pares = true;
      }
    },
  },

  data() {
    return {
      adulto: false,

      pares: false,

      itemsUnidades: ["Unidad SOS Tijuana", "Unidad SOS CDMX"],

      itemsCargos: ["Cuidador", "Mamá SOS", "Papá SOS"],
      itemsFamilia: [
        "Papá",
        "Mamá",
        "Hermano",
        "Hermana",
        "Padrastro",
        "Madrastra",
        "Tio",
      ],

      perfilAgresor: null,

      date: new Date().toISOString().substr(0, 10),

      menu2: false,
    };
  },
};
</script>

