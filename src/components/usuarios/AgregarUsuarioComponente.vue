<template>
  <v-card>
    <v-card-title>
      <span class="headline"> Nuevo Usuario </span>
    </v-card-title>

    <v-card-text>
      <v-container>


         <v-row>
           <v-col>
            <v-text-field
            label="Nombre"
            value="Nombre completo del usuario"
            filled
            dense
            readOnly>

            </v-text-field>
           </v-col>
           <v-col>
             <v-text-field
              :value="this.$store.state.usuarios.usuarios_nombre"
               placeholder="Nombre del Usuario"
               label="Nombre de usuario"
               
               filled
               dense
               @change="asginarValorNombre($event)">

             </v-text-field>
           </v-col>
         </v-row>

         <!-- ******* -->
         <v-row>
           <v-col>
            <v-text-field
            label="Email"
            value="Correo del usuario"
            filled
            dense
            readOnly>

            </v-text-field>
           </v-col>
           <v-col>
             <v-text-field
              :value="this.$store.state.usuarios.usuarios_email"
               placeholder="Email"
               label="Email"
               :rules="emailRules"
               filled
               dense
               @change="asginarValorEmail($event)">

             </v-text-field>
           </v-col>
         </v-row>

         <!-- ******* -->
         <v-row>
           <v-col>
            <v-text-field
            label="Password"
            value="Password del usuario"
            filled
            dense
            readOnly>

            </v-text-field>
           </v-col>
           <v-col>
             <v-text-field
              :value="this.$store.state.usuarios.usuarios_password"
               placeholder="Password"
               label="Password"
                type="password"
               filled
               dense
               @change="asginarValorPassowrd($event)">

             </v-text-field>
                          
           </v-col>
         </v-row>

         <!-- ******* -->
         <v-row>
           <v-col>
            <v-text-field
            label="Programa"
            value="Es usuario pertener al Programa"
            filled
            dense
            readOnly>

            </v-text-field>
           </v-col>
           <v-col>
             <!--<v-text-field
              :value="this.$store.state.usuarios.usuarios_programa"
               placeholder="Programa"
               label="Programa"

               filled
               dense
               @change="asginarValorPrograma($event)">

             </v-text-field> -->
             <v-select
                :value="this.$store.state.usuarios.usuarios_programa"
                :item-value="this.$store.state.usuarios.usuarios_programa"
                :items="itemsProgramas"
                label="PROGRAMA"
                dense
                filled
                @change="asginarValorPrograma($event)"
              >
              </v-select>
           </v-col>
         </v-row>
         <!-- ******* -->
         <v-row>
           <v-col>
            <v-text-field
            label="Rol"
            value="El rol de este usuario es"
            filled
            dense
            readOnly>

            </v-text-field>
           </v-col>
           <v-col>
             <!--<v-text-field
              :value="this.$store.state.usuarios.usuarios_rol"
               placeholder="Rol"
               label="Rol"

               filled
               dense
               @change="asginarValorRol($event)">

             </v-text-field> -->
             <v-select
                :value="this.$store.state.usuarios.usuarios_rol"
                :item-value="this.$store.state.usuarios.usuarios_rol"
                :items="itemsRoles"
                label="ROL"
                dense
                filled
                @change="asginarValorRol($event)"
              >
              </v-select>
           </v-col>
         </v-row>


        <v-row>
            <v-col>
                <v-switch
                  :value="this.$store.state.usuarios.usuarios_activo"
                  class="mx-2"
                  label="Activo "
                
                  @change="asignarValorInput($event)"
                ></v-switch>
            </v-col>
        </v-row>
      </v-container>
    </v-card-text>

    <v-card-actions>
      <v-row>
        <v-col>
            <v-btn block color="red" dark @click="close">Cancelar </v-btn>
        </v-col>
        <v-col>
            <v-btn block color="green" :loading="loading" dark @click="save">
            Guardar
            </v-btn>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>

import apiUsuarios from '@/apialdeas/apiUsuarios.js';
import apiProgramas from '@/apialdeas/apiProgramas.js';
import apiRoles from '@/apialdeas/apiRoles.js';


//import panelCatalgosComponente from '@/components/usuarios/componentes/panelCatalgosComponentes.vue';
//import valoracionIntegralEtapa from '@/components/etapas/valoracionIntegralEtapa.vue';
    

export default {
  name: "agregarUsuarioComponente",

  components: {

  },

  mounted(){
   
   
   if (this.$store.state.usuarios.usuarios_id ==0 ){
      this.iniciaalizarVariables() 
   }
  
  this.cargarProgramas();
  


  },

  methods: {


     async cargarRoles() {

        console.log("ejecutando todos los cargarRoles");
        var promesax  = apiRoles.cargar__todos_los_roles(this.$store);

         promesax
        .then( response => { 

           console.log("response todos los cargarRoles");
          console.log(JSON.stringify(response.data));

          let items= response.data;

            this.itemsRoles = items.map((item, index) => {
            console.log(index);
            console.log("nombre del rol " + item.NOMBREDELROL);
            return item.NOMBREDELROL;
          });
          
          } )
        .catch( error => { 
           console.log("en error todos los cargarRoles");
          console.log(JSON.stringify(error.data))});
    } ,


    async cargarProgramas() {
        let promesa  = apiProgramas.cargar__todo__los__programas(this.$store);

         promesa
        .then( response => { 
          console.log(JSON.stringify(response.data));

          
          
          let items= response.data;

            this.itemsProgramas = items.map((item, index) => {
            console.log(index);
            return item.programa;
          });
          
          this.itemsProgramas.push("TODOS");
          this.cargarRoles();
      

          
          
          } )
        .catch( error => { console.log(JSON.stringify(error.data))});
    } ,
    asginarValorNombre(event){

       this.$store.dispatch('action_usuarios_nombre',event );

    },
    asginarValorEmail(event){
       this.$store.dispatch('action_usuarios_email',event );
    },

    asginarValorPassowrd(event){
      this.$store.dispatch('action_usuarios_password',event );
    },

    asginarValorPrograma(event){
      this.$store.dispatch('action_usuarios_programa',event );
    },

    asginarValorRol(event)
    {
       this.$store.dispatch('action_usuarios_rol',event );
    },
    

    asignarValorInput(evento){

      console.log(" evento del switch " + evento);
     

      this.$store.dispatch('action_usuarios_activo',evento );
       console.log(" VALOR DESPUES DE ASIGNAR EVENTO  " + this.$store.state.usuarios.usuarios_activo);

    },
    iniciaalizarVariables(){

        this.$store.dispatch('action_usuarios_id',0);
        this.$store.dispatch('action_usuarios_nombre','NO');
        this.$store.dispatch('action_usuarios_email','NO');
        this.$store.dispatch('action_usuarios_password','NO');
        this.$store.dispatch('action_usuarios_rol','NO');
        this.$store.dispatch('action_usuarios_programa','0');
        //this.$store.dispatch('action_usuarios_fechaCreacion','NO');
        this.$store.dispatch('action_usuarios_activo', true);
      

       
},


    asignarValor(event){
      console.log(" event " + event );

    },
    cambiarInput(evento) {
      this.evidencia.tipo = evento;
    

    },
    close() {

      this.$router.push("usuarios")
     },
    save() {

      this.loading=true;

      console.log(" **** valro de usuario a editar = " +  this.$store.state.usuarios.usuarios_id);
      let parametros = {
        id :  this.$store.state.usuarios.usuarios_id,
        nombre:      this.$store.state.usuarios.usuarios_nombre,
        email: this.$store.state.usuarios.usuarios_email,
        password: this.$store.state.usuarios.usuarios_password,
        rol: this.$store.state.usuarios.usuarios_rol,
        programa: this.$store.state.usuarios.usuarios_programa,
        activo: this.$store.state.usuarios.usuarios_activo,

      } ;
    
    console.log(" cual es el valor del usuarios_activo : " +  this.$store.state.usuarios.usuarios_activo);
    
    this.$store.state.usuarios.usuarios_activo

    console.log(" this.UsuarioId :  " + this.UsuarioId)

    let promesa ;

     this.$store.state.usuarios.usuarios_id == 0 ? promesa = apiUsuarios.nuevo__usuarios(parametros,this.$store) :
    promesa =apiUsuarios.update__usuarios(parametros,this.$store) ;


     promesa
    .then( response => { 
      console.log(" valor de : ");
      console.log(response.data["id"]);
      this.UsuarioId = response.data["id"];
      this.$store.dispatch("action_usuarios_id",this.UsuarioId);
      console.log(" Valor de UsuarioId : " +  this.UsuarioId);
      } )
    .catch( error => { console.log(JSON.stringify(error.data))});

     this.loading= false;


    },
  },

  data() {
    return {
      UsuarioId  : '0',
      loading: false,
      itemsOpciones:["SI","NO"],
      itemsProgramas:[],
      itemsRoles:[],
      nombreRol : '',
      emailRules: [ 
        v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail debe de ser valido'
      ]

    };
  },
};
</script>

<style scoped>
</style>