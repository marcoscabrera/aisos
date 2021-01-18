import apiUsuarios from '@/apialdeas/apiUsuarios.js';
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
            <v-text-field v-model="email" label="Email"
            @input="limpiarResponse"></v-text-field>
          </v-list-item>

          <v-list-item>
            <v-text-field v-model="pass" label="Password"
            @input="limpiarResponse"></v-text-field>
          </v-list-item>

          <v-list-item>

            <v-alert v-if="verError"
              dense
              outlined
              type="error"
            >
                 {{response}}
              
           </v-alert>


          </v-list-item>
          <v-card-actions>
            <v-btn
              mall
              color="primary"
              dark
              block
              :loading="loading"
              @click="getPerfil"
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
import apiUsuarios from '@/apialdeas/apiUsuarios.js';

import controlDeSesion from '@/sesion/controlDeSesion.js';


export default {
  data: function () {
    return {
      apiUsuarios,
      conectarA: null,

      email: null,

      pass: null,

      response: null,
      usuarioId: null,
      usuario: [],
      loading: false,

      verError : false
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
    
    mostrarMenuLateral(){

      let usurio = this.$store.state.usuarios.usuarios_usuariologueado;
      console.log(" usurio : " + usurio.id);
      usurio.id == "" ? this.$store.dispatch('actions_uuivars_puedevermenulateral',false) : this.$store.dispatch('actions_uuivars_puedevermenulateral',TextTrackCueList);
      
     
    

    },
    limpiarResponse(){
      this.response="";
      this.verError= false;
    },
    acuerdo() {
        
        this.$router.push('Acuerdo');
    },
    borrarResponse() {
      this.response = "";
    },

    crearCuenta() {
      this.$router.push("/usuarios/crearusuario");
    },

    asignarValoresDeUsuarios(response){

       this.$store.dispatch('action_usuarios_usuariologueado',response.data["usuario"]);
       this.$store.dispatch('action_usuarios_usuariologueado_rol',response.data["rol"]);
      
      //revisar la variables para mostrar el menu latreral
      this.mostrarMenuLateral();
       //this.mandamos a mostrar el acuerdo
       this.acuerdo();
       
    },

    errorEnLogin() {

      console.log("error en login ");

      this.loading = false ;
      this.response ="No existe el usuario o tus credenciales son incorrenctas.";
      this.verError= true;

    

     
    } ,

    getPerfil () {
      
      this.loading = true ;
     let promesa =  controlDeSesion.loginUsuario(this.email, this.pass, this.$store);

      promesa
     .then( response => {
        console.log(JSON.stringify(response.data));
        console.log("mensaje : " + response.data["msg"]);
        console.log("usuario : " + response.data["usuario"]["id"]);
        console.log("roles : " + response.data["rol"]);

        let msg =  response.data["msg"] ;

        msg =="Datos del registro" ? this.asignarValoresDeUsuarios(response) :this.errorEnLogin();
      
         this.loading = false ;
       
        }
      )
     .catch( error => { 
       console.log(JSON.stringify(error.data));

        this.errorEnLogin() 

       });


    }, // termina getPerfil

    
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