<template>
  <v-container>
    <h2>Valoracion Integral</h2>

    <v-row>
      <v-col cols="12" xs="12" md="6">
        <v-label filled> FOLIO # AAA-000-20 </v-label>
      </v-col>

      <v-col cols="12" xs="12" md="6">
        <barraDocumentosVue></barraDocumentosVue>
      </v-col>
    </v-row>

    <v-row>
      <!--  <v-col cols="12" xs="12" md="6">
        <v-select :items="itemsUnidades" label="PROGRAMA" dense filled>
        </v-select>
      </v-col> -->

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

    <v-row>
      <v-col cols="12">
        <v-textarea
          filled
          name="input-7-4"
          label="VALORACIÓN INICIAL (250 PALABRAS)"
          value=""
        >
        </v-textarea>
      </v-col>
    </v-row>

    <!-- <v-row>
      <v-col cols="12" xs="12" md="6">
        <v-text-field label="ELABORO" filled> </v-text-field>
      </v-col>
      <v-col cols="12" xs="12" md="6">
        <v-select :items="itemsCargos" label="CARGO" dense filled> </v-select>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-textarea
          filled
          name="input-7-4"
          label="REGISTRO DE HECHOS (500 PALABRAS)"
          value=""
        >
        </v-textarea>
      </v-col>
    </v-row> -->

    <!-- =============================================== -->

    <v-row>
      <v-card width="100%">
        <v-card-title> TIPOLOGIA DEL INCIDENTE </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" xs="12" sm="6" md="6">
              <v-checkbox
                label="INTERNO"
                :model="adulto"
                @click="seleccionar('adulto')"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" xs="12" sm="6" md="6">
              <v-checkbox
                label="EXTERNO"
                :model="pares"
                @click="seleccionar('pares')"
              ></v-checkbox>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-row>

    <!-- =============================================== -->
    <br />
    <!--
    <v-row>
      <v-card width="100%">
        <v-card-title> PERFIL DE LA VICTIMA</v-card-title>
        <v-card-text>
          <v-row>
            <v-radio-group width="100%" v-model="perfilAgresor" row>
              <v-col cols="12" xs="12" sm="12" md="6">
                <v-radio label="NIÑA" value="NIÑA"> </v-radio>
              </v-col>

              <v-col cols="12" xs="12" sm="12" md="6">
                <v-radio label="NIÑO" value="NIÑO"> </v-radio>
              </v-col>
            </v-radio-group>
          </v-row>

          <v-row>
            <v-radio-group width="100%" v-model="perfilAgresor" row>
              <v-col cols="12" xs="12" sm="12" md="6">
                <v-radio label="SI RECIBE APOYO DE SOS" value="SI"> </v-radio>
              </v-col>

              <v-col cols="12" xs="12" sm="12" md="6">
                <v-radio label="NO RECIBE APOYO SOS" value="NO"> </v-radio>
              </v-col>
            </v-radio-group>
          </v-row>
        </v-card-text>
      </v-card>
    </v-row> -->

    <br />

    <!--
    <v-row>
      <v-col cols="12">
        <v-textarea
          filled
          name="input-7-4"
          label="MEDIDAS DE PROTECCIÓN INMEDIATA (500 PALABRAS)"
          value=""
        >
        </v-textarea>
      </v-col>
    </v-row> -->

    <v-row>
      <v-card width="100%">
        <v-card-title> NIVEL DEL INCIDENTE </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" xs="12" sm="12" md="4">
              <v-checkbox color="primary" label="BAJO PERFIL"> </v-checkbox>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="4">
              <v-checkbox color="primary" label="CRITICO"> </v-checkbox>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="4">
              <v-checkbox color="primary" label="ALTO PERFIL"> </v-checkbox>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-row>

    <br />
    <!-- =============================================== -->

    <v-row>
      <v-card width="100%">
        <v-card-title> TIPO DE CASO </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" xs="12" sm="6" md="6">
              <v-checkbox
                label="ABUSO FISICO"
                :model="adulto"
                @click="seleccionar('adulto')"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" xs="12" sm="6" md="6">
              <v-checkbox
                label="ABUSO SEXUAL"
                :model="pares"
                @click="seleccionar('pares')"
              ></v-checkbox>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" xs="12" sm="6" md="6">
              <v-checkbox
                label="ABUSO EMOCIONAL"
                :model="adulto"
                @click="seleccionar('adulto')"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" xs="12" sm="6" md="6">
              <v-checkbox
                label="NEGLIGENCIA Y/O TRATO NEGLIGENTE"
                :model="pares"
                @click="seleccionar('pares')"
              ></v-checkbox>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" xs="12" sm="6" md="6">
              <v-checkbox
                label="VIOLACION DE LA PRIVACIDAD DE LOS NIÑOS Y NIÑAS"
                :model="adulto"
                @click="seleccionar('adulto')"
              ></v-checkbox>
            </v-col>
            <!---  <v-col cols="12" xs="12" sm="6" md="6">
              <v-checkbox
                label="ABUSO SEXUAL"
                :model="pares"
                @click="seleccionar('pares')"
              ></v-checkbox>
            </v-col> -->
          </v-row>
        </v-card-text>
      </v-card>
    </v-row>

    <!-- =============================================== -->
    <br />
    <!-- =============================================== -->

    <v-row>
      <v-card width="100%">
        <v-card-title> TIPO DE ABORDAJE </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" xs="12" sm="6" md="6">
              <v-checkbox
                label="DENUNCIA PENAL"
                :model="adulto"
                @click="seleccionar('adulto')"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" xs="12" sm="6" md="6">
              <v-checkbox
                label="INVESTIGACION INTERNA"
                :model="pares"
                @click="seleccionar('pares')"
              ></v-checkbox>
            </v-col>
          </v-row>
          <!-- <v-row>
            <v-col cols="12" xs="12" sm="6" md="6">
              <v-checkbox
                label="ABUSO EMOCIONAL"
                :model="adulto"
                @click="seleccionar('adulto')"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" xs="12" sm="6" md="6">
              <v-checkbox
                label="NEGLIGENCIA Y/O TRATO NEGLIGENTE"
                :model="pares"
                @click="seleccionar('pares')"
              ></v-checkbox>
            </v-col>
          </v-row> -->
          <!-- <v-row>
            <v-col cols="12" xs="12" sm="6" md="6">
              <v-checkbox
                label="VIOLACION DE LA PRIVACIDAD DE LOS NIÑOS Y NIÑAS"
                :model="adulto"
                @click="seleccionar('adulto')"
              ></v-checkbox>
            </v-col> -->
          <!---  <v-col cols="12" xs="12" sm="6" md="6">
              <v-checkbox
                label="ABUSO SEXUAL"
                :model="pares"
                @click="seleccionar('pares')"
              ></v-checkbox>
            </v-col> 
          </v-row> -->
        </v-card-text>
      </v-card>
    </v-row>

    <!-- =============================================== -->
    <br />
    <!-- =============================================== -->

    <v-row>
      <v-card width="100%">
        <v-card-title>
          ¿SE CONFIRMA QUE EL EVENTO ES UN INCIDENTE ?
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" xs="12" sm="6" md="6">
              <v-checkbox
                label=" SI ES UN INCIDENTE"
                :model="adulto"
                @click="seleccionar('adulto')"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" xs="12" sm="6" md="6">
              <v-checkbox
                label="NO ES UN INCIDENTE"
                :model="pares"
                @click="seleccionar('pares')"
              ></v-checkbox>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-textarea
          filled
          name="input-7-4"
          label="PARTICIPANTES (250 PALABRAS)"
          value=""
        >
        </v-textarea>
      </v-col>
    </v-row>

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
        <v-btn
          :loading="loading"
          :disabled="loading"
          color="red"
          @click="guardar__iraDashboard"
          block
        >
          <v-icon right dark> mdi-close </v-icon>
          <v-spacer></v-spacer>
          Cancelar
        </v-btn>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="4">
        <v-btn
          :loading="loading"
          :disabled="loading"
          color="green"
          @click="guardar__iraDashboard"
          block
        >
          <v-icon right dark> mdi-check </v-icon>
          <v-spacer></v-spacer>
          Guardar
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import barraDocumentosVue from "../barradocumentos/barraDocumentos.vue";

export default {
  components: { barraDocumentosVue },

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

