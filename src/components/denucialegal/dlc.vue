<template>
  <v-container name="denuncialegal">
    <v-row>
      <v-col cols="12" xs="12" md="6">
        <v-label filled> FOLIO # AAA-000-20 </v-label>
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

    <v-row>
      <v-card width="100%">
        <v-card-title>CONSENSO NACIONAL PARA DENUNCIA </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" xs="12" sm="12" md="4">
              <v-checkbox label="SI"></v-checkbox>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="4">
              <v-checkbox label="NO"></v-checkbox>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="4">
              <v-checkbox label="EN PROCESO"></v-checkbox>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" xs="12" sm="12" md="12">
              <v-file-input
                v-model="files"
                placeholder=" Adjuntar  minuta de reunion de valoracion integral con Concenso y firmas"
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
    <br />

    <v-row>
      <v-card width="100%">
        <v-card-title>SOPORTE DE UN ASESOR LEGAL </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" xs="12" sm="12" md="4">
              <v-select :items="itemsCargos" label="CONTACTO" dense filled>
              </v-select>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="4">
              <v-select
                :items="itemsCargos"
                label="ASESORIA Y ACOMPAÑAMIENTO ANTES"
                dense
                filled
              >
              </v-select>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="4">
              <v-select
                :items="itemsCargos"
                label="ASESORIA Y ACOMPAÑAMIENTO DURANTE"
                dense
                filled
              >
              </v-select>
            </v-col>
          </v-row>

          <!--   <v-row>
            <v-col cols="12" xs="12" sm="12" md="12">
              <v-file-input
                v-model="files"
                placeholder=" Adjuntar  minuta de reunion de valoracion integral con Concenso y firmas"
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
          </v-row> -->
        </v-card-text>
      </v-card>
    </v-row>

    <br />

    <v-row>
      <v-card width="100%">
        <v-card-title
          >SOPORTE EMOCIONAL PARA LOS NNAJ INVOLUCRADOS
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" xs="12" sm="12" md="4">
              <v-select :items="itemsCargos" label="CONTACTO" dense filled>
              </v-select>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="4">
              <v-select
                :items="itemsCargos"
                label="ASESORIA Y ACOMPAÑAMIENTO ANTES"
                dense
                filled
              >
              </v-select>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="4">
              <v-select
                :items="itemsCargos"
                label="ASESORIA Y ACOMPAÑAMIENTO DURANTE"
                dense
                filled
              >
              </v-select>
            </v-col>
          </v-row>

          <!--   <v-row>
            <v-col cols="12" xs="12" sm="12" md="12">
              <v-file-input
                v-model="files"
                placeholder=" Adjuntar  minuta de reunion de valoracion integral con Concenso y firmas"
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
          </v-row> -->
        </v-card-text>
      </v-card>
    </v-row>

    <br />
    <v-row>
      <v-card width="100%">
        <v-card-title
          >IMPLEMENTAR MEDIDAS DISCIPLINARIAS LIGADAS AL RESULTADO DE LAS
          DENUNCIAS
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" xs="12" sm="12" md="4">
              <v-checkbox label="SI"></v-checkbox>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="4">
              <v-checkbox label="NO"></v-checkbox>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="4">
              <v-checkbox label="EN PROCESO"></v-checkbox>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" xs="12" sm="12" md="12">
              <v-file-input
                v-model="files"
                placeholder=" Adjuntar  Reportes y firmas"
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

    <br />
    <v-row>
      <v-col cols="12">
        <v-textarea
          filled
          name="input-7-4"
          label="ACERCA DE LAS MEDIDAS (250 PALABRAS)"
          value=""
        >
        </v-textarea>
      </v-col>
    </v-row>
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
export default {
  data() {
    return {
      itemsCargos: ["SI", "NO", "EN PROCESO"],
    };
  },
};
</script>