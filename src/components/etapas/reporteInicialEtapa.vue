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
        <v-text-field label="DENUNCIANTE" v-model="elaboro" filled> </v-text-field>
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
                :input-value="perfiladultoexterno"
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
          </v-row>

          <v-row>
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
          :disabled="verBotonImpresion"
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
          :loading="loadingGuardar"
          :disabled="loadingGuardar"
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

import apiIncidentes from "@/apialdeas/apiIncidentes.js";

export default {
  components: { barraDocumentosVue },

  methods: {
    guardar__iraDashboard() {
      this.$router.push("/dashboard");
    },
    nuevo_incidente() {
      this.loadingGuardar = true;
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

      let nnj = "";
      if (this.pares == true) {
        console.log("valor de perfil agresor -pares" + this.pares);

        if (this.nnjs == true) {
          nnj = "nnjs";
        }
        if (this.nnje == true) {
          nnj = "nnje";
        }
      }

      console.log(
        "valor de perfil victima " + this.perfilnina + " o " + this.perfilnino
      );

      if (this.perfilnina == true) {
        perfilvictima = "nina";
      } else {
        perfilvictima = "nino";
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

        nnj: nnj,
        perfilvictima: perfilvictima,
        recibeayuda: recibeayuda,
        medidasproinmediatasdiatas: this.medidasproteccion,
        incidenteconfirmado: incidenteconfirmado,
        testigos: this.testigos,
        etapa: etapa,
        etapauno: "visible",
        etapados: "visible",
        etapatres: "invisible",
        etapacuatro: "invisible",
        coloretapauno: "green",
        coloretapados: "yellow",
        coloretapatres: "yellow",
        coloretapacuatro: "yellow",
      };

      console.log("== valores del incidente ==");
      console.log(JSON.stringify(parametros));

      let x = apiIncidentes.nuevoIncidente(parametros, this.$store);
      //let x = apiIncidentes.saludo(this.$store);
      // let x = apiIncidentes.nuevoUsuario(parametros, this.$store);
      x.then((response) => {
        console.log(response.data);
        this.loadingGuardar = false;
        //redireccionamos

        let a = JSON.parse(response.data);

        let atipo = typeof a;

        console.log(atipo);
        let idRecuperado = a["id"];

        console.log("valor de idRecuperado  : " + idRecuperado);

        this.modo = "update";

        this.folio = a["folio"];

        this.verBotonImpresion = false;

        this.$router.push({
          name: "DenunciasDetalle",
          params: { id: idRecuperado },
        });
      }).catch((error) => {
        console.log(error.data);
        this.loadingGuardar = false;
      });
    }, //termina nuevo_incidente
    update_incidente() {
      console.log("update");
    },
    guardar_incidente() {
      console.log(" valor de this.modo : " + this.modo);
      if (this.modo == "nuevo") {
        this.nuevo_incidente();
      } else {
        this.update_incidente();
      }
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
        this.perfiladultoexterno = false;
      }

      if (valor == "familiaorigen") {
        this.colaboradorsos = false;
        this.familiaorigen = true;
        this.perfiladultoexterno = false;
      }

      if (valor == "adultoexterno") {
        this.colaboradorsos = false;
        this.familiaorigen = false;
        this.perfiladultoexterno = true;
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
      console.log("valor de valor " + valor);
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
    seleccionar_siesincidente_recuperado(valor) {
      console.log("valor de valor " + valor);
      if (valor == "Si") {
        this.esincidente = true;
        this.noesincidente = false;
        this.porconfirmar = false;
      }

      if (valor == "No") {
        this.esincidente = false;
        this.noesincidente = true;
        this.porconfirmar = false;
      }

      if (valor == "por confirmar") {
        this.esincidente = false;
        this.noesincidente = false;
        this.porconfirmar = true;
      }
    },

    perfilAgresor_recuperado(valor) {
      if (valor == "adulto") {
        this.adulto = true;
      }

      if (valor == "pares") {
        this.pares = true;
      }
    },
    perfilvictima_recuperado(valor) {
      if (valor == "nina") {
        this.perfilnina = true;
      }
      if (valor == "nino") {
        this.perfilnino = true;
      }
    },
    recibeayuda_recuperado(valor) {
      if (valor == "Si") {
        this.sirecibeayudasos = true;
        this.norecibeayudasos = false;
      } else {
        this.sirecibeayudasos = false;
        this.norecibeayudasos = true;
      }
    },

    seleccionar_nnjs_o_nnje_recuperar(valor) {
      if (valor == "nnjs") {
        this.nnjs = true;
        this.nnje = false;
      }
      if (valor == "nnje") {
        this.nnjs = false;
        this.nnje = true;
      }
    },

    asignarAVariablesValoresDeConsulta(respuesta) {
      console.log("asignarAVariablesValoresDeConsulta : ");
      console.log(JSON.stringify(respuesta.data));

      var a = respuesta.data;
      this.folio = a[0]["folio"];
      this.date = a[0]["fechaAlta"];

      this.programaSeleccionado = a[0]["programa"];
      console.log(this.date);
      //fechaUpdate: this.date,
      //usuarioCreador: usuarioCreador,
      this.involucrados = a[0]["involucrados"];

      console.log(this.involucrados);

      this.elaboro = a[0]["elaboro"];

      this.cargo = a[0]["cargousuario"];

      this.registrohechos = a[0]["registrohechos"];

      /* perfil del agresor */
      // let pa = a[0]["perfildelagresor"];

      //activa o desactiva el checkbox colaborador sos
      if (a[0]["paadultocolaborador"] == 0) {
        this.colaboradorsos = false;
      } else {
        this.colaboradorsos = true;
      }
      //this.colaboradorsos = a[0]["paadultocolaborador"];
      console.log("valor del check colaboradorsos" + this.colaboradorsos);

      //muestra el valor del    combo de colaboradores
      this.perfilcolaboradorsos = a[0]["paadultocolaboradortipo"];

      //activa o desactiva el check de familia de origen
      if (a[0]["pafamilia"] == 1) {
        this.familiaorigen = true;
      } else {
        this.familiaorigen = false;
      }

      console.log("valor del check familiaorigen" + this.familiaorigen);

      //muestra el valor del combo
      this.perfilfamiliaorigen = a[0]["pafamiliatipo"];

      //activa o desactiva checkbox del adulyto externo
      if (a[0]["adultoexterno"] == 1) {
        this.perfiladultoexterno = true;
      } else {
        this.perfiladultoexterno = false;
      }

      console.log(
        "valor del check perfiladultoexterno" + this.perfiladultoexterno
      );
      /*------------*/

      let nnj = a[0]["nnj"];

      this.seleccionar_nnjs_o_nnje_recuperar(nnj);

      this.medidasproteccion = a[0]["medidasproinmediatas"];

      this.testigos = a[0]["testigos"];

      let v1 = a[0]["incidenteconfirmado"];

      this.seleccionar_siesincidente_recuperado(v1);

      this.perfilAgresor = a[0]["prefildelagresor"];

      this.perfilAgresor_recuperado(this.perfilAgresor);

      let pvivtima = a[0]["perfilvictima"];

      this.perfilvictima_recuperado(pvivtima);

      let ra = a[0]["recibeayuda"];

      this.recibeayuda_recuperado(ra);

      /*  let e1 = a[0]["etapauno"];
          let e2 = a[0]["etapados"];
            let e3 = a[0]["etapatres"];
              let e4 = a[0]["etapcuatro"];*/

      /* elaboro: this.elaboro,
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
      };*/
    },
    escogerProcedimiento() {
      //recuperamos el paraemtro id de la ruta
      let parametroId = 0;
      parametroId = this.$route.params.id;
      console.log(parametroId);
      this.modo = "nuevo";
      if (parametroId == undefined) {
        console.log("valor de parametroID : " + parametroId);
      } else {
        console.log("valor actual de parametroId : " + parametroId);

        let P_incidente = apiIncidentes.recuperarUnIncidente(
          parametroId,
          this.$store
        );

        P_incidente.then((response) => {
          console.log("recuperando los datos del incidente ");
          console.log(JSON.stringify(response.data));
          /** */
          this.asignarAVariablesValoresDeConsulta(response);

          this.modo = "update";
          this.verBotonImpresion = false;
        }).catch((error) => {
          console.log(JSON.stringify(error.response));
          this.modo = "update";
        });
      }
    },
  },

  created() {
    console.log("en created, valor de this.modo : " + this.modo);

      
  /////////////////////////////////////////////
  // valores para regresar a esta pagina si se 
  // tiene que regresar despues de estar en imp
  // siones
  ////////////////////////////////////////////
   let ruta_A_regresar  = this.$route.query.page;
   let ruta_A_regresar2 = window.location.pathname;
   console.log("this.$route.query.page : " + this.$route.query.page);
   console.log(" window.location.pathname : " +ruta_A_regresar2);
    this.$store.dispatch("action_regresar_A_despues_de_impresion",ruta_A_regresar);
   /////////////////////////////////////////////
        
    this.escogerProcedimiento();
  },

  data() {
    return {
      verBotonImpresion: true,
      verBotonCancelar: false,

      modo: "nuevo",
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
      loadingGuardar: false,

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

