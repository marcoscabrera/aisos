<template>

  <v-row>
    
    <v-col cols="12" xs="12" sm="6" md="12">
      <v-card>
        <v-card-title>Imagen en login</v-card-title>
        <v-card-text>Direccion de la imagen que se mostrara en login</v-card-text>
        <v-list-item>
          <v-text-field v-model="imagenEnLogin" label="direccion de imagen"></v-text-field>
        </v-list-item>
        <v-card-actions>
          <v-btn
            primary
            block
            :loading="loading"
            :disabled="loading"
            @click="guardarParametro('imagenEnLogin',imagenEnLogin)"
          >guardar</v-btn>
        </v-card-actions>
      </v-card>
      <!-- termina v-card -->
    </v-col>

    <v-col cols="12" xs="12" sm="6" md="12">
      <v-card>
        <v-card-title>Correo Soporte</v-card-title>
        <v-card-text>correo electronico para soporte</v-card-text>
        <v-list-item>
          <v-text-field v-model="correosoporte" label="correo para soporte"></v-text-field>
        </v-list-item>
        <v-card-actions>
          <v-btn
            primary
            block
            :loading="loading"
            :disabled="loading"
            @click="guardarParametro('correosoporte',correosoporte)"
          >guardar</v-btn>
        </v-card-actions>
      </v-card>
      <!-- termina v-card -->
    </v-col>

    <v-col cols="12" xs="12" sm="6" md="12">
      <v-card>
        <v-card-title>Version</v-card-title>
        <v-card-text>version actual de la Aplicacion</v-card-text>
        <v-list-item>
          <v-text-field v-model="versionapp" label="version de la app"></v-text-field>
        </v-list-item>
        <v-card-actions>
          <v-btn
            primary
            block
            :loading="loading"
            :disabled="loading"
            @click="guardarParametro('versionapp',versionapp)"
          >guardar</v-btn>
        </v-card-actions>
      </v-card>
      <!-- termina v-card -->
    </v-col>


    <v-col cols="12" xs="12" sm="6" md="12">
      <v-card>
        <v-card-title>Correos</v-card-title>
        <v-card-text>Habilitar el envio de correos</v-card-text>
        <v-list-item>
          <v-text-field v-model="enviarcorreos" label="Habilitar el envio de correos"></v-text-field>
        </v-list-item>
        <v-card-actions>
          <v-btn
            primary
            block
            :loading="loading"
            :disabled="loading"
            @click="guardarParametro('enviarcorreos',enviarcorreos)"
          >guardar</v-btn>
        </v-card-actions>
      </v-card>
      <!-- termina v-card -->
    </v-col>

     <v-col cols="12" xs="12" sm="6" md="12">
      <v-card>
        <v-card-title>Acuerdo </v-card-title>
        <v-card-text>Acuerdo de confidencialidad</v-card-text>
        <v-list-item>
         <!-- <v-text-field v-model="acuerdoprivacidad" label="acuerdo de privacidad"></v-text-field> -->
           <wysiwyg v-model="acuerdoprivacidad" />
        </v-list-item>
        <v-card-actions>
          <v-btn
            primary
            block
            :loading="loading"
            :disabled="loading"
            @click="guardarParametro('acuerdoprivacidad',acuerdoprivacidad)"
          >guardar</v-btn>
        </v-card-actions>
      </v-card>
      <!-- termina v-card -->
    </v-col>

     <v-col cols="12" xs="12" sm="6" md="12">
      <v-card>
        <v-card-title>Cadena SAS </v-card-title>
        <v-card-text>Conexion a Azure Storage account</v-card-text>
        <v-list-item>
         <!-- <v-text-field v-model="acuerdoprivacidad" label="acuerdo de privacidad"></v-text-field> -->
           <wysiwyg v-model="cadenasas" />
        </v-list-item>
        <v-card-actions>
          <v-btn
            primary
            block
            :loading="loading"
            :disabled="loading"
            @click="guardarParametro('cadenasas',cadenasas)"
          >guardar</v-btn>
        </v-card-actions>
      </v-card>
      <!-- termina v-card -->
    </v-col>

    <!-- ----- -->
  </v-row>
</template>
<script>
import apiParametros from "@/apialdeas/apiParametros.js";

export default {
  name: "componenteParametros",

  data() {
    return {
      numerow: "",

      loading: false,

      correosoporte: "",

      versionapp: "",

      acuerdoprivacidad : "",

      cadenasas : ""
    };
  },

  mounted() {
    this.cargarParametros();
  },

  methods: {
    guardarParametro(nombreParametro, valor) {

       console.log("valor del parametro : " + valor);
      var parametros = { parametro: nombreParametro, valor: valor };

      this.loading = true;

      var res = apiParametros.updateParametro(parametros, this.$store);
      res
        .then((response) => {
          console.log(response);

          this.loading = false;
        })
        .catch();
    },

    cargarParametros() {
      var az = apiParametros.getParametro("imagenEnLogin", this.$store);
      az.then((response) => {
        console.log(response.data.valor);

        this.imagenEnLogin = response.data.valor;
      }).catch((error) => {
        console.log(error);
      });
      /* -----------------------------------------------------*/
      var az1 = apiParametros.getParametro("correosoporte", this.$store);
      az1
        .then((response) => {
          console.log(response.data.valor);

          this.correosoporte = response.data.valor;
        })
        .catch((error) => {
          console.log(error);
        });
      /* -----------------------------------------------------*/
      var az2 = apiParametros.getParametro("versionapp", this.$store);
      az2
        .then((response) => {
          console.log(response.data.valor);

          this.versionapp = response.data.valor;
        })
        .catch((error) => {
          console.log(error);
        });
      /* -----------------------------------------------------*/
              var az3 = apiParametros.getParametro("acuerdoprivacidad", this.$store);
      az3
        .then((response) => {
          console.log(response.data.valor);

          this.acuerdoprivacidad = response.data.valor;
        })
        .catch((error) => {
          console.log(error);
        });
       /* -----------------------------------------------------*/
      var az4 = apiParametros.getParametro("enviarcorreos", this.$store);
      az4
        .then((response) => {
          console.log(response.data.valor);

          this.enviarcorreos = response.data.valor;
        })
        .catch((error) => {
          console.log(error);
        });
       /* -----------------------------------------------------*/
        var az5 = apiParametros.getParametro("cadenasas", this.$store);
      az5
        .then((response) => {
          console.log(response.data.valor);

          this.cadenasas = response.data.valor;
        })
        .catch((error) => {
          console.log(error);
        });
       /* -----------------------------------------------------*/
    
    },
  },
};
</script>
<style>
@import "~vue-wysiwyg/dist/vueWysiwyg.css";
</style>