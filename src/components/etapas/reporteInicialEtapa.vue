<template>
  <v-container>
    <h2>Valoracion Inicial</h2>

    <v-row>
      <v-col cols="12" xs="12" md="6">
        <v-label filled> FOLIO # {{ folio }} </v-label>
      </v-col>

      <v-col cols="12" xs="12" md="6">
        <barraDocumentosVue></barraDocumentosVue>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" xs="12" md="6">
        <v-select
          v-model="programaSeleccionado"
          :item-value="programaSeleccionado"
          :items="itemsUnidades"
          label="PROGRAMA"
          dense
          filled
        >
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

    <v-row>
      <v-col cols="12">
        <v-textarea
          filled
          name="input-7-4"
          label="INVOLUCRADOS (500 PALABRAS)"
          v-model="involucrados"
        >
        </v-textarea>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" xs="12" md="6">
        <v-text-field label="ELABORO" v-model="elaboro" filled> </v-text-field>
      </v-col>
      <v-col cols="12" xs="12" md="6">
        <v-select
          v-model="cargo"
          :items="itemsCargos"
          :item-value="cargo"
          label="CARGO"
          dense
          filled
        >
        </v-select>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-textarea
          filled
          name="input-7-4"
          label="REGISTRO DE HECHOS (500 PALABRAS)"
          v-model="registrohechos"
        >
        </v-textarea>
      </v-col>
    </v-row>

    <!-- =============================================== -->

    <v-row>
      <v-card width="100%">
        <v-card-title> PERFIL DEL AGRESOR </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" xs="12" sm="6" md="6">
              <v-checkbox
                label="ADULTO A NIÑA O NIÑO"
                :model="adulto"
                :input-value="adulto"
                @click="seleccionar('adulto')"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" xs="12" sm="6" md="6">
              <v-checkbox
                label="ENTRE PARES"
                :model="pares"
                :input-value="pares"
                @click="seleccionar('pares')"
              ></v-checkbox>
            </v-col>
          </v-row>

          <v-row v-if="adulto">
            <v-col cols="12" xs="12" sm="12" md="4">
              <v-checkbox
                color="primary"
                :input-value="colaboradorsos"
                @click="
                  seleccionar_colaborador_famorig_adulext('colaboradorsos')
                "
                label="COLABORADOR SOS"
              >
              </v-checkbox>

              <v-select
                v-model="perfilcolaboradorsos"
                :item-value="perfilcolaboradorsos"
                :items="itemsCargos"
                dense
                filled
              >
              </v-select>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="4">
              <v-checkbox
                color="primary"
                :input-value="familiaorigen"
                @click="
                  seleccionar_colaborador_famorig_adulext('familiaorigen')
                "
                label="FAMILIA DE ORIGEN"
              >
              </v-checkbox>

              <v-select
                v-model="perfilfamiliaorigen"
                :item-value="perfilfamiliaorigen"
                :items="itemsFamilia"
                dense
                filled
              >
              </v-select>
            </v-col>

            <v-col cols="12" xs="12" sm="12" md="4">
              <v-checkbox
                color="primary"
                :input-value="adultoexterno"
                @click="
                  seleccionar_colaborador_famorig_adulext('adultoexterno')
                "
                label="ADULTO EXTERNO"
              >
              </v-checkbox>
            </v-col>
          </v-row>

          <v-row v-if="pares">
            <v-col cols="12" xs="12" sm="12" md="6">
              <v-checkbox
                color="primary"
                :input-value="nnjs"
                label="NIÑOS, NIÑAS Y JOVENES SOS"
                @click="seleccionar_nnjs_o_nnje('nnjs')"
              >
              </v-checkbox>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="6">
              <v-checkbox
                :input-value="nnje"
                color="primary"
                label="NIÑOS, NIÑAS Y JOVENES EXTERNOS"
                @click="seleccionar_nnjs_o_nnje('nnje')"
              >
              </v-checkbox>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-row>

    <!-- =============================================== -->

    <v-row>
      <v-card width="100%">
        <v-card-title> PERFIL DE LA VICTIMA</v-card-title>
        <v-card-text>
          <v-row>
            <v-radio-group width="100%" v-model="perfilAgresor" row>
              <v-col cols="12" xs="12" sm="12" md="6">
                <v-checkbox
                  :input-value="perfilnina"
                  color="primary"
                  label="NIÑA"
                  @click="seleccionar_perfilnina_o_perfilnino('perfilnina')"
                >
                </v-checkbox>
              </v-col>

              <v-col cols="12" xs="12" sm="12" md="6">
                <v-checkbox
                  :input-value="perfilnino"
                  color="primary"
                  label="NIÑO"
                  @click="seleccionar_perfilnina_o_perfilnino('perfilnino')"
                >
                </v-checkbox>
              </v-col>
            </v-radio-group>
          </v-row>

          <v-row>
            <v-radio-group width="100%" v-model="perfilAgresor" row>
              <v-col cols="12" xs="12" sm="12" md="6">
                <v-checkbox
                  :input-value="sirecibeayudasos"
                  color="primary"
                  label="SI RECIBE APOYO DE SOS"
                  @click="seleccionar_recibeayuda('sirecibeayudasos')"
                >
                </v-checkbox>
              </v-col>

              <v-col cols="12" xs="12" sm="12" md="6">
                <v-checkbox
                  :input-value="norecibeayudasos"
                  color="primary"
                  label="NO RECIBE APOYO DE SOS"
                  @click="seleccionar_recibeayuda('norecibeayudasos')"
                >
                </v-checkbox>
              </v-col>
            </v-radio-group>
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
          label="MEDIDAS DE PROTECCIÓN INMEDIATA (500 PALABRAS)"
          v-model="medidasproteccion"
        >
        </v-textarea>
      </v-col>
    </v-row>

    <v-row>
      <v-card width="100%">
        <v-card-title>
          ¿ES UN INCIDENTE DE DESPROTECCION INFANTIL?
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" xs="12" sm="12" md="4">
              <v-checkbox
                color="primary"
                label="SI"
                :input-value="esincidente"
                @click="seleccionar_siesincidente('esincidente')"
              >
              </v-checkbox>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="4">
              <v-checkbox
                color="primary"
                label="NO"
                :input-value="noesincidente"
                @click="seleccionar_siesincidente('noesincidente')"
              >
              </v-checkbox>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="4">
              <v-checkbox
                color="primary"
                :input-value="porconfirmar"
                @click="seleccionar_siesincidente('porconfirmar')"
                label="POR CONFIRMAR"
              >
              </v-checkbox>
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
          label="TESTIGOS (500 PALABRAS)"
          v-model="testigos"
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
          @click="guardar_incidente"
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
import apiIncidentes from "@/apialdeas/apiIncidentes.js";

export default {
  components: { barraDocumentosVue },

  methods: {
    guardar__iraDashboard() {
      this.$router.push("/dashboard");
    },
    guardar_incidente() {
      apiIncidentes.hola();

      console.log("valor de programa " + this.programaSeleccionado);
      console.log("valor de fecha creacion " + this.date);
      console.log("valor de involucrados" + this.involucrados);
      console.log("valor de elaboiro" + this.elaboro);
      console.log("valor de cargo" + this.cargo);
      console.log("valor de registrohechos" + this.registrohechos);
      console.log("valor de perfil agresor");

      var perfildelagresor = "";
      var perfilvictima = "";
      var recibeayuda = "";
      var incidenteconfirmado = "";

      if (this.adulto == true) {
        perfildelagresor = "adulto";
        console.log("valor de perfil agresor -Adulot" + this.adulto);
        console.log(
          "valor de perfil agresor -colaboradorsos" + this.colaboradorsos
        );
        console.log(
          "valor de perfil agresor -perfilcolaboradorsos" +
            this.perfilcolaboradorsos
        );
        console.log(
          "valor de perfil agresor -familiaorigen" + this.familiaorigen
        );
        console.log(
          "valor de perfil agresor -perfilfamiliaorigen" +
            this.perfilfamiliaorigen
        );
        console.log(
          "valor de perfil agresor -adultoexterno" + this.adultoexterno
        );
      } else {
        perfildelagresor = "pares";
      }

      if (this.pares == true) {
        console.log("valor de perfil agresor -pares" + this.pares);
      }

      console.log(
        "valor de perfil victima " + this.perfilnina + " o " + this.perfilnino
      );

      if (this.perfilnina == true) {
        perfilvictima = "niña";
      } else {
        perfilvictima = "niño";
      }

      console.log(
        "valor de recibe apoyo  -" +
          this.sirecibeayudasos +
          " 0 " +
          this.norecibeayudasos
      );

      if (this.sirecibeayudasos == true) {
        recibeayuda = "Si";
      } else {
        recibeayuda = "No";
      }
      console.log("valor de recibe medidas  -" + this.medidasproteccion);

      console.log(
        "valor de es un incidente de desproteccion  -" +
          this.esincidente +
          " - " +
          this.noesincidente +
          "- " +
          this.porconfirmar
      );

      if (this.esincidente == true) {
        incidenteconfirmado = "Si";
      }

      if (this.noesincidente == true) {
        incidenteconfirmado = "No";
      }

      if (this.porconfirmar == true) {
        incidenteconfirmado = "por confirmar";
      }

      console.log("valor detestigos  -" + this.testigos);
      /* usuario creador es el usuario logueado. */
      var usuarioCreador = "1";
      var etapa = 1;

      var parametros = {
        programa: this.programaSeleccionado,
        fechaAlta: this.date,
        fechaUpdate: this.date,
        usuarioCreador: usuarioCreador,
        involucrados: this.involucrados,
        elaboro: this.elaboro,
        cargousuario: this.cargo,
        registrohechos: this.registrohechos,

        perfildelagresor: perfildelagresor,
        paadultocolaborador: this.colaboradorsos,
        paadultocolaboradortipo: this.perfilcolaboradorsos,
        pafamilia: this.familiaorigen,
        pafamiliatipo: this.perfilfamiliaorigen,
        adultoexterno: this.perfiladultoexterno,
        perfilvictima: perfilvictima,
        recibeayuda: recibeayuda,
        medidasproinmediatasdiatas: this.medidasproteccion,
        incidenteconfirmado: incidenteconfirmado,
        etapa: etapa,
      };

      console.log("== valores del incidente ==");
      console.log(JSON.stringify(parametros));

      let x = apiIncidentes.nuevoIncidente(parametros, this.$store);
      //let x = apiIncidentes.saludo(this.$store);
      // let x = apiIncidentes.nuevoUsuario(parametros, this.$store);
      x.then((response) => {
        console.log(response.data);
      }).catch((error) => {
        console.log(error.data);
      });
    },

    seleccionar(valor) {
      // esta funcion selecciona entre el perfil del agresor-
      if (valor == "adulto") {
        this.adulto = true;
        this.pares = false;
      }

      if (valor == "pares") {
        this.adulto = false;
        this.pares = true;
      }
    },

    seleccionar_nnjs_o_nnje(valor) {
      if (valor == "nnjs") {
        this.nnjs = true;
        this.nnje = false;
      } else {
        this.nnjs = false;
        this.nnje = true;
      }
    },

    seleccionar_colaborador_famorig_adulext(valor) {
      if (valor == "colaboradorsos") {
        this.colaboradorsos = true;
        this.familiaorigen = false;
        this.adultoexterno = false;
      }

      if (valor == "familiaorigen") {
        this.colaboradorsos = false;
        this.familiaorigen = true;
        this.adultoexterno = false;
      }

      if (valor == "adultoexterno") {
        this.colaboradorsos = false;
        this.familiaorigen = false;
        this.adultoexterno = true;
      }
    },

    seleccionar_perfilnina_o_perfilnino(valor) {
      if (valor == "perfilnina") {
        this.perfilnina = true;
        this.perfilnino = false;
      } else {
        this.perfilnino = true;
        this.perfilnina = false;
      }
    },

    seleccionar_recibeayuda(valor) {
      if (valor == "sirecibeayudasos") {
        this.sirecibeayudasos = true;
        this.norecibeayudasos = false;
      } else {
        this.sirecibeayudasos = false;
        this.norecibeayudasos = true;
      }
    },

    seleccionar_siesincidente(valor) {
      if (valor == "esincidente") {
        this.esincidente = true;
        this.noesincidente = false;
        this.porconfirmar = false;
      }

      if (valor == "noesincidente") {
        this.esincidente = false;
        this.noesincidente = true;
        this.porconfirmar = false;
      }

      if (valor == "porconfirmar") {
        this.esincidente = false;
        this.noesincidente = false;
        this.porconfirmar = true;
      }
    },
  },

  data() {
    return {
      perfilcolaboradorsos: "",
      perfilfamiliaorigen: "",
      perfiladultoexterno: "",

      elaboro: "",
      cargo: "",

      medidasproteccion: "",
      testigos: "",

      esincidente: false,
      noesincidente: false,
      porconfirmar: false,

      perfilnina: false,
      perfilnino: false,

      sirecibeayudasos: false,
      norecibeayudasos: false,

      colaboradorsos: false,
      familiaorigen: false,
      adultoexterno: false,

      nnjs: false,

      nnje: false,
      folio: "000-nan-000",

      involucrados: "",

      registrohechos: "",

      loading: false,

      adulto: false,

      pares: false,

      itemsUnidades: ["Unidad SOS Tijuana", "Unidad SOS CDMX"],

      programaSeleccionado: "",

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

      perfilAgresor: "",

      date: new Date().toISOString().substr(0, 10),

      menu2: false,
    };
  },
};
</script>

