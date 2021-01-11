<template>
  <v-card>
    <v-card-title>
      <span class="headline">Nueva Evidencia</span>
    </v-card-title>

    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12" xs="12" sm="12" md="12">
            <v-text-field
              v-model="evidencia.nombre"
              label="Nombre del Documento"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" xs="12" sm="12" md="12">
            <v-text-field
              v-model="evidencia.descripcion"
              label="Descripcion del Documento"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" xs="12" sm="6" md="6">
            <v-select
              :items="tipos"
              label="Tipo de evidencia"
              dense
              filled
              @change="cambiarInput($event)"
            >
            </v-select>
          </v-col>
          <v-col cols="12" xs="12" sm="6" md="6">
            <uploadFile2
              v-if="archivo"
              directorio="/uploads/investigacion/evidencias"
              :HayArchivo="hayArchivo"
              nombreArchivo="Sin nombre del Archivo"
              :incidenteid="incidenteId"
              archivoId="0"
              action_a_Ejecutar="action_ubicacion"
              modulo="investigacion"
              campoState="ubicacion"
            >
            </uploadFile2>

            <v-text-field v-else v-model='ubicacion' label="Ubicacion"></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="red" dark @click="close">Cancelar </v-btn>

      <v-btn color="green" :loading="loading" dark @click="save">
        Guardar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import uploadFile2 from "@/components/manipulacionArchivos/uploadFile2.vue";

import apiEvidencias from "@/apialdeas/apiEvidencias.js";

export default {
  name: "agregarEvidenciaComponente",

  components: {
    uploadFile2,
  },

  mounted(){


  },

  methods: {
    cambiarInput(evento) {
      this.evidencia.tipo = evento;
      
      //mostrar componente inputFIle si es un docto  o una imagen 
      //y mostrar componentar de texto si es un audio o video ubicado
      // en otro lugar fuera de la plataforma
      this.incidenteId = this.$store.state.investigacion.investigacion_incidenteid;
      console.log("=================");
      console.log(" incidenteId : " + this.incidenteId);
      console.log("=================");

      evento =='Documento'  ? this.archivo = true :
      evento == 'Imagen' ? this.archivo = true : this.archivo =false;
  

      

    },
    close() {
      let id = this.$route.params.incidentid;
      this.$router.push({ name: "Evidencias", params: { denunciaId: id } });
    },
    save() {
      console.log(this.evidencia);
      let id = this.$store.state.investigacion.investigacion_id;

      let ubicacion_a_guardar = '';
      console.log(ubicacion_a_guardar);

      this.archivo == false ? ubicacion_a_guardar= this.ubicacion :
      ubicacion_a_guardar = this.$store.state.evidencias.evidencias_ubicacion;

      console.log(" id de la investigacion   ==> " + id);
      let parametros = {
        nombre: this.evidencia.nombre,
        descripcion: this.evidencia.descripcion,
        ubicacion: ubicacion_a_guardar,
        tipo: this.evidencia.tipo,
        investigacionid: id,
        activo: 1,
      };
      let guardar = apiEvidencias.nuevo__evidencias(parametros, this.$store);

      guardar
        .then((response) => {
          console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(JSON.stringify(error.data));
        });
    },
  },

  data() {
    return {
      loading: false,
      hayArchivo: false,
      evidencia: [],
      tipos: ["Documento", "Imagen", "Audio", "Video"],
      archivo: false,
      incidenteId:'0'
    };
  },
};
</script>

<style scoped>
</style>