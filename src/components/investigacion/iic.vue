<template>
  <v-container name="investigacion">
    <!-- pediente la fecha -->
        <v-row>
        <v-col cols="12" xs="12" sm="6" md="6">
           <h2>Investigacion Interna</h2>
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="6">


            <BarraDeNavegacion
             activo_ri="true"
             activo_vi="true"
             activo_s="true"
             activo_c="true"
             ></BarraDeNavegacion>

        </v-col>
    </v-row>
    <FoliosComponente
      :folio="investigacion.folio"
      :foliodenuncia="investigacion.folioinvestigacion"
      tipofolio="INVESTIGACIÓN"
    >
    </FoliosComponente>
    <br />

    <v-row>
      <v-col cols="12" xs="12" sm="6" md="6"> </v-col>
      <v-col cols="12" xs="12" sm="6" md="6">
        <barraDocumentos :files="files"> </barraDocumentos>
      </v-col>
    </v-row>
     <br>

    <RegistroIncidenteComponente
      :texto="investigacion.registroincidentes_docto"
    >
    </RegistroIncidenteComponente>

    <br>

    <ArchivoImpresionComponente
      name="carta"
      titulo="CARTA DE AUTORIZACION"
      :incidenteId="investigacion.incidenteId"
      :archivoId="carta_archivoId"
      :nombreDelArchivo="carta_NombreArchivo"
      :sihayarchivo="carta_siHayArchivo"
      action_a_ejecutar="action_cartautorizacion_docto"
      campo="investigacion_cartautorizacion_docto"
    >
    </ArchivoImpresionComponente>

    <br >
    <ArchivoImpresionComponente
      name="terminos"
      titulo="TERMINOS DE REFERENCIA"
      :incidenteId="investigacion.incidenteId"
      :archivoId="terminosreferencia_archivoId"
      :nombreDelArchivo="terminosreferencia_NombreArchivo"
      :sihayarchivo="terminosreferencia_siHayArchivo"
      action_a_ejecutar="action_terminosreferencia_doctp"
      campo="investigacion_terminosreferencia_doctp"
    >
    </ArchivoImpresionComponente>
    <br >

    <ArchivoImpresionComponente
      name="plan"
      titulo="PLAN DE INVESTIGACION CON CRONOGRAMA"
      :incidenteId="investigacion.incidenteId"
      :archivoId="plan_archivoId"
      :nombreDelArchivo="plan_NombreArchivo"
      :sihayarchivo="plan_siHayArchivo"
      action_a_ejecutar="action_plan_docto"
      campo="investigacion_plan_docto"
    >
    </ArchivoImpresionComponente>

    <br >

    <br >

    <ArchivoImpresionComponente
      name="plan"
      titulo="INFORME DE HALLAZGOS, CONCLUSIONES Y RECOMENDACIONES"
      :incidenteId="investigacion.incidenteId"
      :archivoId="informe_archivoId"
      :nombreDelArchivo="informe_NombreArchivo"
      :sihayarchivo="informe_siHayArchivo"
      action_a_ejecutar="action_informe_docto"
      campo="investigacion_informe_docto"
    >
    </ArchivoImpresionComponente>
    <br>
    <br>

    <v-row>
      <v-card width="100%">
        <v-card-title> EVIDENCIAS DE LA INVESTIGACIÓN</v-card-title>
        <v-card-text>
          <v-row>
            <v-col> ENTREVISTAS, BITACORAS, GRABACIONES, FOTOGRAFIAS </v-col>
            <v-col>
              <v-btn color="primary" block dense dark @click="irAevidencias">
                 Evidencias
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-row>
    <br >

    <v-row>
      <v-col cols="12" xs="12" sm="12" md="4">
        <v-btn
          :loading="loading"
          :disabled="loading"
          color="primary"
          @click="permisoImpresion"
          block
        >
          <v-icon right dark> mdi-printer </v-icon>
          <v-spacer></v-spacer>
          Imprimir
        </v-btn>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="4">
        <v-btn color="red" @click="irADash" block>
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
          @click="guardar"
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
import FoliosComponente from "@/components/denucialegal/componentesDenunciaLegal/FoliosComponente.vue";
import RegistroIncidenteComponente from "@/components/investigacion/componentesInvestigacion/RegistroIncidenteComponente.vue";
import ArchivoImpresionComponente from "@/components/investigacion/componentesInvestigacion/ArchivoImpresionComponente.vue";
import apiInvestigacion from "@/apialdeas/apiInvestigacion.js";
import barraDocumentos from "@/components/barradocumentos/barraDocumentos.vue";
import BarraDeNavegacion from "@/components/etapas/BarraDeNavegacion.vue";

import solicitudPermisoImpresion from '@/components/permisosimpresion/solicitudPermisoImpresion.js';

export default {
  components: {
    FoliosComponente,
    RegistroIncidenteComponente,
    ArchivoImpresionComponente,
    barraDocumentos,BarraDeNavegacion
  },
  data() {
    return {
      folio: "",
      folioinvestigacion: "",
      siHayArchivo: false,
      itemsCargos: ["SI", "NO", "EN PROCESO"],
      investigacion: [],
      loading: false,

      carta_archivoId: "0",
      carta_NombreArchivo: "",
      carta_siHayArchivo: false,

      terminosreferencia_archivoId: "0",
      terminosreferencia_NombreArchivo: "",
      terminosreferencia_siHayArchivo: false,

      plan_archivoId: "0",
      plan_NombreArchivo: "",
      plan_siHayArchivo: false,

      informe_archivoId: "0",
      informe_NombreArchivo: "",
      informe_siHayArchivo: false,

      files: [
        {
          color: "blue",
          icon: "mdi-adobe",
          subtitle: "Descripcion breve de este docto",
          title: "Manual de investigación interna",
          link:
            "https://onedrive.live.com/?authkey=%21AhxF5wMG%5FSJ00H0&cid=D1B73E758E4318E6&id=D1B73E758E4318E6%21718&parId=D1B73E758E4318E6%21690&o=OneUp",
        },
        {
          color: "blue",
          icon: "mdi-adobe",
          subtitle: "Descripcion breve de este docto",
          title: "Herramientas para investigacion interna",
          link:
            "https://onedrive.live.com/?authkey=%21AhxF5wMG%5FSJ00H0&cid=D1B73E758E4318E6&id=D1B73E758E4318E6%21709&parId=D1B73E758E4318E6%21690&o=OneUp",
        },
      ],
    };
  },
  methods: {
         permisoImpresion(){
           
      console.log(" Permiso IMPRESIONINVESTIGACION  "  +  this.$store.state.usuarios.usuarios_usuariologueado_rol.IMPRESIONINVESTIGACION)      ;

     if ( this.$store.state.usuarios.usuarios_usuariologueado_rol.IMPRESIONINVESTIGACION=='SI'){
    // impreseion 
       
         this.$router.push({
          name: "ReporteImpresionInvestigacion"
        });

     }else {
       /* En caso de que no se tenga permiso */

      //realizamos la solicitud del permiso//
       let idRecuperado = this.$route.params.id;
       let usuario = this.$store.state.usuarios.usuarios_usuariologueado.id ;
       let incidenteid =idRecuperado ;
       let etapa="Investigacion Interna";
       let s= this.$store;
       solicitudPermisoImpresion.solicitudImpresion(usuario,incidenteid,etapa,s);
       //-------------------------------------------------------------
        
        //redirrecionamos al usuario hacia la pantalla de notificacion de permisos
        this.$router.push({
          name: "PermisoImpresion",
          params: { incidenteId: idRecuperado },
        });
    }

    },
    guardar() {
      console.log(" guardar esta info");

      let parametros = {
        id: this.investigacion.id,
        folioinvestigacion: this.$store.state.investigacion
          .investigacion_folioinvestigacion_docto,
        registroincidentes_docto: this.$store.state.investigacion
          .investigacion_registroincidentes_docto,
        cartautorizacion_docto: this.$store.state.investigacion
          .investigacion_cartautorizacion_docto,
        terminosreferencia_doctp: this.$store.state.investigacion
          .investigacion_terminosreferencia_doctp,
        plan_docto: this.$store.state.investigacion.investigacion_plan_docto,
        informe_docto: this.$store.state.investigacion
          .investigacion_informe_docto,
      };

      console.log("valores de investigacion para actualizar");
      console.log(JSON.stringify(parametros));

      let update = apiInvestigacion.update__investigacion(
        parametros,
        this.$store
      );

      update
        .then((response) => {
          console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(JSON.stringify(error.data));
        });
    }, //termina upodate

    irADash() {
      this.$router.push("/dashboard");
    },

    asignarVariables(investigacion) {
      this.folio = investigacion.folio;

      this.folioinvestigacion = investigacion.folioinvestigacion;
      console.log("**************************");
      console.log("investigacion.incidenteId : " + investigacion.incidenteid);
      console.log("**************************");
      this.$store.dispatch("action_investigacion_incidenteid", investigacion.incidenteid);

      this.$store.dispatch("action_id", investigacion.id);

      this.$store.dispatch(
        "action_registroincidentes_docto",
        investigacion.registroincidentes_docto
      );

      this.$store.dispatch(
        "action_folioinvestigacion_docto",
        this.folioinvestigacion
      );

      /*
    action_investigacion_evidencias
    action_investigacion_registroincidentes_docto_nombre
    action_investigacion_cartautorizacion_docto_nombre
    action_investigacion_terminosreferencia_doctp_nombre
    action_investigacion_plan_docto_nombre
  

    action_investigacion_informe_docto_nombre
 */
      (this.carta_archivoId = investigacion.cartautorizacion_doctoArchivo.id),
        (this.carta_NombreArchivo =
          investigacion.cartautorizacion_doctoArchivo.nombreOriginal),
        (this.carta_siHayArchivo =
          investigacion.cartautorizacion_doctoArchivo.hayArchivo),

        this.$store.dispatch("action_investigacion_cartautorizacion_docto_nombre",this.carta_NombreArchivo);
        this.$store.dispatch(
          "action_cartautorizacion_docto",
          this.carta_archivoId
        );

      (this.terminosreferencia_archivoId =
        investigacion.terminosreferencia_doctpArchivo.id),
        (this.terminosreferencia_NombreArchivo =
          investigacion.terminosreferencia_doctpArchivo.nombreOriginal),
        (this.terminosreferencia_siHayArchivo =
          investigacion.terminosreferencia_doctpArchivo.hayArchivo),

        this.$store.dispatch("action_investigacion_terminosreferencia_doctp_nombre",this.terminosreferencia_NombreArchivo);
     
        this.$store.dispatch(
          "action_terminosreferencia_doctp",
          this.terminosreferencia_archivoId
        );

      (this.plan_archivoId = investigacion.plan_docto_Archivo.id),
        (this.plan_NombreArchivo =
          investigacion.plan_docto_Archivo.nombreOriginal),
        (this.plan_siHayArchivo = investigacion.plan_docto_Archivo.hayArchivo),

        this.$store.dispatch("action_investigacion_terminosreferencia_doctp_nombre",this.terminosreferencia_NombreArchivo);
        this.$store.dispatch("action_plan_docto", this.plan_archivoId);



      (this.informe_archivoId = investigacion.informe_docto_Archivo.id),
        (this.informe_NombreArchivo =
          investigacion.informe_docto_Archivo.nombreOriginal),
        (this.informe_siHayArchivo =
          investigacion.informe_docto_Archivo.hayArchivo);

      this.$store.dispatch("action_investigacion_informe_docto_nombre",this.this.informe_NombreArchivo);
       this.$store.dispatch("action_informe_docto", this.informe_archivoId);
    },

    irAevidencias() {
      let evidenciaId = this.$route.params.evidenciaId;

      this.$router.push({
        name: "Evidencias",
        params: { denunciaId: evidenciaId },
      });
    },

    getInvestigacion() {
      let id = this.$route.params.incidenteId;

      let p = apiInvestigacion.cargar__investigacion_x_incidenteID(
        id,
        this.$store
      );

      p.then((response) => {
        console.log(JSON.stringify(response.data));
        this.investigacion = response.data[0];
        this.asignarVariables(this.investigacion);
      }).catch((error) => {
        console.log(JSON.stringify(error.data));
      });
    },
  },

  mounted() {
    this.$nextTick(function () {
      this.getInvestigacion();
    });
  },
};
</script>