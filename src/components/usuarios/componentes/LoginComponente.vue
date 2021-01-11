<template>
  <v-container name="x">
    <v-row>
      <v-col cols="12" xs="12" md="3"> </v-col>
      <v-col cols="12"  xs="12" md="6" >
        <v-card height="100%" outlined>
                <v-img
                height="250"
                src="https://www.aldeasinfantiles.org.mx/getmedia/51757cf7-a274-4bdc-b552-4304db77c698/logo-aldeas-mxg"
                ></v-img>
          <v-list-item two-line>
            <v-list-item-content>
              <div class="overline mb-4">Login de Usuario</div>

             <!--<v-card-text class="font-bold">
                ¡Hola!, Para poder hacer uso de esta
                herramienta te pedimos que inicies
                sesion y en caso de no estar registrado,
                te invitamos a registrarte.
                ¡Muchas Gracias!
              </v-card-text> -->
              <v-img>

              </v-img>
            </v-list-item-content>
          </v-list-item>
          <v-list-item></v-list-item>

          <v-list-item>
            <v-text-field v-model="email" label="Email"></v-text-field>
          </v-list-item>

          <v-list-item>
            <v-text-field v-model="password" label="Password"></v-text-field>
          </v-list-item>

          <v-list-item>{{response}}</v-list-item>
          <v-card-actions>
            <v-btn
              mall
              color="primary"
              dark
              block
              :loading="loading"
              @click="acuerdo"
            >Iniciar Sesion</v-btn>
          </v-card-actions>
          <!--<v-card-actions>
            <v-btn mall color="primary" dark block @click="crearCuenta">Quiero crear una cuenta.</v-btn>
          </v-card-actions> -->
          <!--<v-card-actions v-if='response'>
				<v-btn mall color="success" dark block> 

					<router-link to='/usuario/editar/'>
								editar usuario
					</router-link>
				</v-btn>
				</v-card-actions>
				<v-card-actions v-if='response'>
				<v-btn mall color="success" 
					dark 
					block
					@click="getPerfil"> 
					
					obtener perfil

				</v-btn>
          </v-card-actions>-->
        </v-card>
      </v-col>
      <v-col cols="12" xs="12" md="3" > </v-col>

      <!--

				Aqui vienen la descripcion de API

      -->
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      conectarA: null,

      email: null,

      password: null,

      response: null,

      usuarioId: null,

      usuario: [],
      loading: false,
    };
  },

  mounted: function () {
    console.log("Component loginUsuario montado");
  },

  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      this.loader = null;
    },
  },

  

  methods: {
    acuerdo() {
        
        this.$router.push('Acuerdo');
    },
    borrarResponse() {
      this.response = "";
    },

    crearCuenta() {
      this.$router.push("/usuarios/crearusuario");
    },

    getPerfil: function () {
      var token = this.$store.state.tokenUsuario;

      var urlServidor = this.$store.state.urlServidor;

      var idusuario = this.$store.state.idUsuario;

      var urlapi = urlServidor + "/api/v1/perfil/" + idusuario;

      console.log("valor de urlapi : " + urlapi);

      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      axios.defaults.withCredentials = true;

      axios
        .get(urlapi)
        .then((response) => {
          console.log(" perfil " + JSON.stringify(response));
        })
        .catch((error) => {
          console.log("Error : " + JSON.stringify(error));
        });
    }, // termina getPerfil

    loguearUsuarioEnAPI: function () {
      this.loading = true;

      if (this.email.length == 0 || this.email.length < 10) {
        this.response = "Olvidaste escribir tu email o es demasiado corto";

        return;
      }

    

      var apidir = this.$store.state.urlServidor + "/api/v1/login";

      axios
        .post(
          apidir,
          {
            email: this.email,

            password: this.password,

            device_name: "browser",
          },
          {
            headers: {
              "X-Requested-With": "XMLHttpRequest",
            },
            withCredentials: true,
          }
        )
        .then((response) => {
          this.response = response;

          if (response.status === 404) {
            console.log(response.message);

            this.loading = false;

            return;
          }

          //si tiene exito
          console.log("valor del token obtenido : " + response.data.data.token);

          this.$store.dispatch("setarTokenUsuario", response.data.data.token);

          this.$store.dispatch("setearIdUsuario", response.data.data.id);

          //this.$store.dispatch('setearUrlServidor',this.conectarA);

          this.$store.dispatch("setearEmailUsuario", this.email);

          this.$store.dispatch("setearPasswordUsuario", this.password);

          this.$store.dispatch("setearNombreUsuario", response.data.data.name);

          this.$store.dispatch("setearLogueado", true);
          //------------------------------------------------------
          // activando algos menus
          //------------------------------------------------------
          let usuariodios = response.data.data.level_access;

          if (usuariodios == "root") {
            this.$store.state.verusuarios = true;
            this.$store.state.verdirecciones = true;
            this.$store.state.versucursales = true;
            this.$store.state.verproducto = true;
            this.$store.state.verpedidos = true;
            this.$store.state.verpagos = true;
            this.$store.state.vermonitor = true;
          }

          if (usuariodios == "USUARIOAPP") {
            this.$store.state.verusuarios = false;
            this.$store.state.verdirecciones = false;
            this.$store.state.versucursales = false;
            this.$store.state.verproducto = false;
            this.$store.state.verpedidos = false;
            this.$store.state.verpagos = false;
            this.$store.state.vermonitor = false;
          }

          //this.$router.push('/pedidos');

          this.$router.push("/usuarios/usuarioapp");

          //------------------------------------------------------
          //guardando algunos datos en localStorage
          //------------------------------------------------------

          /*localStorage.setItem("idusuario", response.data.data.id);

					localStorage.setItem("tokenusuario", response.data.data.token);

					console.log("grabando servidor en localStorage : " +  this.conectarA);
					localStorage.setItem("servidor", this.conectarA);*/
        })
        .catch((error) => {
          this.loading = false;
          if (error.status === 404) {
            console.log(" error " + error.message);
          }

          this.response = error.message;

          console.log("msg" + JSON.stringify(error));
        });
    },
  },
};
</script>
<style scoped>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}

.pre {
  display: block;
  padding: 9.5px;
  margin: 0 0 10px;
  font-size: 13px;
  line-height: 1.42857143;
  color: #333;
  word-break: break-all;
  word-wrap: break-word;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: auto;
}
</style>