<template>
  <v-container>
    <h2>Cierre</h2>

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
        <v-select :items="itemsUnidades" label="PROGRAMA" dense filled>
        </v-select>
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

    <!--  <v-row>
      <v-col cols="12">
        <v-textarea
          filled
          name="input-7-4"
          label="VALORACIÓN INICIAL (250 PALABRAS)"
          value=""
        >
        </v-textarea>
      </v-col>
    </v-row> -->

    <v-row>
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
          label=" DECLARATORIA (250 PALABRAS) "
          value=""
        >
        </v-textarea>
      </v-col>
    </v-row>

    <!-- =============================================== -->

    <h4>ACCIONES REALIZADAS PARA CIERRE DE INCIDENTE</h4>

    <!-- =============================================== -->

    <v-row>
      <v-card width="100%">
        <v-card-title> </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" xs="12" sm="6" md="6">
              <v-checkbox
                label="SE NOTIFICO AL SISTEMA DIF O PROCURADURIA"
                :model="adulto"
                @click="seleccionar('adulto')"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" xs="12" sm="6" md="6">
              <v-file-input
                v-model="files"
                placeholder="Adjunta tu documento"
                label="Archivo"
                multiple
                prepend-icon="mdi-paperclip"
              >
                <template v-slot:selection="{ text }">
                  <v-chip small label color="primary">
                    {{ text }}
                  </v-chip>
                </template>
              </v-file-input>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-row>

    <!-- =============================================== -->
    <br />

    <!-- =============================================== -->

    <v-row>
      <v-card width="100%">
        <v-card-title> </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" xs="12" sm="6" md="6">
              <v-checkbox
                label="SE NOTIFICÓ A LA AUTORIDAD CORRESPONDIENTE"
                :model="adulto"
                @click="seleccionar('adulto')"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" xs="12" sm="6" md="6">
              <v-file-input
                v-model="files"
                placeholder="Adjunta tu documento"
                label="Archivo"
                multiple
                prepend-icon="mdi-paperclip"
              >
                <template v-slot:selection="{ text }">
                  <v-chip small label color="primary">
                    {{ text }}
                  </v-chip>
                </template>
              </v-file-input>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-row>

    <!-- =============================================== -->
    <br />
    <!-- =============================================== -->

    <v-row>
      <v-card width="100%">
        <v-card-title> </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" xs="12" sm="6" md="6">
              <v-checkbox
                label="SE NOTIFICÓ Al PFN O AL ELPI"
                :model="adulto"
                @click="seleccionar('adulto')"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" xs="12" sm="6" md="6">
              <v-file-input
                v-model="files"
                placeholder="Adjunta tu documento"
                label="Archivo"
                multiple
                prepend-icon="mdi-paperclip"
              >
                <template v-slot:selection="{ text }">
                  <v-chip small label color="primary">
                    {{ text }}
                  </v-chip>
                </template>
              </v-file-input>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-row>

    <!-- =============================================== -->
    <br />
    <!-- =============================================== -->

    <v-row>
      <v-card width="100%">
        <v-card-title> </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" xs="12" sm="6" md="6">
              <v-checkbox
                label="SE NOTIFICÓ A LA PERSONA DENUNCIANTE"
                :model="adulto"
                @click="seleccionar('adulto')"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" xs="12" sm="6" md="6">
              <v-file-input
                v-model="files"
                placeholder="Adjunta tu documento"
                label="Archivo"
                multiple
                prepend-icon="mdi-paperclip"
              >
                <template v-slot:selection="{ text }">
                  <v-chip small label color="primary">
                    {{ text }}
                  </v-chip>
                </template>
              </v-file-input>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-row>

    <!-- =============================================== -->
    <br />
    <!-- =============================================== -->

    <v-row>
      <v-card width="100%">
        <v-card-title> </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" xs="12" sm="6" md="6">
              <v-checkbox
                label="SE CUENTA CON EL LLENADO DEL ACTA DE VALORACIÓN DEL/DE LOS INCIDENTES/S"
                :model="adulto"
                @click="seleccionar('adulto')"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" xs="12" sm="6" md="6">
              <v-file-input
                v-model="files"
                placeholder="Adjunta tu documento"
                label="Archivo"
                multiple
                prepend-icon="mdi-paperclip"
              >
                <template v-slot:selection="{ text }">
                  <v-chip small label color="primary">
                    {{ text }}
                  </v-chip>
                </template>
              </v-file-input>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-row>

    <!-- =============================================== -->
    <br />
    <!-- =============================================== -->

    <v-row>
      <v-card width="100%">
        <v-card-title> </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" xs="12" sm="6" md="6">
              <v-checkbox
                label="SE CUENTA CON UN PLAN DE RECUPERACIÓN EMOCIONAL CON SEGUIMIENTO"
                :model="adulto"
                @click="seleccionar('adulto')"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" xs="12" sm="6" md="6">
              <v-file-input
                v-model="files"
                placeholder="Adjunta tu documento"
                label="Archivo"
                multiple
                prepend-icon="mdi-paperclip"
              >
                <template v-slot:selection="{ text }">
                  <v-chip small label color="primary">
                    {{ text }}
                  </v-chip>
                </template>
              </v-file-input>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-row>

    <!-- =============================================== -->
    <br />
    <!-- =============================================== -->

    <v-row>
      <v-card width="100%">
        <v-card-title>
          NOMBRE, CARGO Y FIRMA DE QUIEN ELABORA EL ACTA DE CIERRE
        </v-card-title>
        <v-card-text>
          <usuariosCierre></usuariosCierre>
        </v-card-text>
      </v-card>
    </v-row>

    <br />

    <!-- =============================================== -->

    <!-- =============================================== -->
    <br />
    <!-- =============================================== -->

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
import usuariosCierre from "@/components/usuarios/usuariosCierre.vue";
export default {
  components: { barraDocumentosVue, usuariosCierre },

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

