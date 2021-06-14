<template>
  <v-container fluid  name="logincomponente">
    <v-row>
      <v-col cols="12" xs="12" md="3"> </v-col>
      <v-col cols="12"  xs="12" md="6" >
       <v-card height="100%" outlined>
             
        <!--   <v-img
                   src=" https://api.aldeasinfantiles.mx/apialdeas/logo.png"      >
           </v-img> -->

           <v-img
            src = "data:image/jpeg;base64,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">

           </v-img>


      <!--      <v-img
             src="https://api.aldeasinfantiles.mx/apialdeas/ALDEASSOS.jpg" >
                   </v-img>-->
                   
          <v-form  autocomplete="off">

         
          <v-list-item>
<input style="display: none" type="text" name="fakeusernameremembered" />
<input style="display: none" type="password" name="fakepasswordremembered" />
            
          
            <v-text-field
            autocomplete="off"
             v-model="email"
             
             prepend-icon="mdi-at"
            @input="limpiarResponse">
            
            </v-text-field>
          </v-list-item>

          <v-list-item>
            <v-text-field
             prepend-icon="mdi-lock"
           
             v-model="pass"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
             @click:append="show1 = !show1"
            
            @input="limpiarResponse">
            </v-text-field>
          </v-list-item>
           </v-form>
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
    <v-row>
      <v-col>
            Version 1.1.4
      </v-col>
      </v-row>

  </v-container>
</template>

<script>
// //https://www.aldeasinfantiles.org.mx/getmedia/51757cf7-a274-4bdc-b552-4304db77c698/logo-aldeas-mxg
          
import apiUsuarios from '@/apialdeas/apiUsuarios.js';

import controlDeSesion from '@/sesion/controlDeSesion.js';

import variablesLocales from '@/store/variablesLocales.js';



export default {
  data: function () {
    return {
      apiUsuarios,
      conectarA: null,
      show1: false,
      password: 'Password',
      email: null,

      pass: null,

      response: null,
      usuarioId: null,
      usuario: [],
      loading: false,
      imagenLogin :'',
      verError : false,
        emailRules: [ 
        v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail debe de ser valido'
      ]
    };
  },

  mounted: function () {

  //  this.crearToken();
     
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
      usurio.id == "" ? this.$store.dispatch('actions_uuivars_puedevermenulateral',false) : this.$store.dispatch('actions_uuivars_puedevermenulateral',true);
      
     
    

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
       this.$store.dispatch('action_usuarios_tokenUsuario', response.data["token"]);
        variablesLocales.setearToken(response.data["token"]);
        variablesLocales.setUsuarioId(response.data["usuario"]["id"]);
      //revisar la variables para mostrar el menu latreral
      //this.mostrarMenuLateral();
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
       try {
        //console.log(JSON.stringify(response.data));
        console.log("mensaje : " + response.data["msg"]);
        console.log("usuario : " + response.data["usuario"]["id"]);
        console.log("roles : " + response.data["rol"]);

        let msg =  response.data["msg"] ;
              
        msg =="Datos del registro" ? this.asignarValoresDeUsuarios(response) :this.errorEnLogin();
        this.$store.dispatch('actions_uivars_hayUnUsuarioLogueado',true);
        


         this.loading = false ;
       }catch(error){

         console.log(error);
         this.errorEnLogin()
       }
        }
      )
     .catch( error => { 
       console.log(JSON.stringify(error));

        this.errorEnLogin() 

       });


    }, // termina getPerfil

    
  },
};
</script>
<style scoped>
.background { 
  background: url('https://api.aldeasinfantiles.mx/apialdeas/ALDEASSOS.jpg') no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
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