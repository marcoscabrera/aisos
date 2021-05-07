<template>
  <v-data-table
    :headers="headers"
    :items="usuarios"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Catalogo de Usuarios</v-toolbar-title>
        
        <v-spacer></v-spacer>
            <v-btn color="primary" dark class="mb-2" @click="iraConfig">
              <v-icon>
                mdi-cog
              </v-icon>
              Configuracion
            </v-btn>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-btn color="primary" dark class="mb-2" @click="agregarNuevoUsuario"
              >Nuevo Usuario
              </v-btn >

      </v-toolbar>
    </template>
    <template v-slot:item.actions_editar="{ item }">
      <v-btn color="primary" dark dense @click="editItem(item)">
      <v-icon small class="mr-2" > mdi-pencil </v-icon>
      Editar
      </v-btn>
    </template>
    <template v-slot:item.actions_activar="{ item }">
        <v-switch
                  :input-value="item.activo==1 ? true : false"
                  class="mx-2"
                  color="green"
                  @change="activar($event,item)"
        ></v-switch>
     </template>
     
   <!--  <template v-slot:item.activo="{ item }">
      <v-icon color="green" v-if="item.activo == 1">
        mdi-checkbox-marked-circle
      </v-icon>
      <v-icon color="red" v-if="item.activo == 0">mdi-close-circle </v-icon>
    </template> -->
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">No hay Usuarios</v-btn>
    </template>
  </v-data-table>
</template>


<script>
/*

        usuarios_id: null,  
        usuarios_nombre: null  ,
        usuarios_email: null  ,
        usuarios_password: null  ,
        usuarios_rol: null  ,
        usuarios_programa: null  ,
        usuarios_fechaCreacion: null  ,
        usuarios_activo: null  ,
*/
import apiUsuarios from '@/apialdeas/apiUsuarios.js';
export default {
  data: () => ({
    dialog: false,
    usuarios:[],
    cargos: [],
    roles: [],
    headers: [
      {
        text: "#",
        align: "start",
        sortable: false,
        value: "id",
      },
       { text: "Nombre", value: "nombre" },
        { text: "Correo", value: "email" },
       { text: "Programa", value: "programa" },
       //{ text: "Cargo", value: "cargo" },
       { text: "Rol", value: "rol" },
     

      { text: "Edicion", value: "actions_editar", sortable: false },
      { text: "Activa", value: "actions_activar", sortable: false },
    ],
   
    editedIndex: -1,
    /*editedItem: {
      name: "",
      email: "",
      cargo: "",
      rol: "",
    },
    defaultItem: {
      name: "",
      email: "",
      cargo: "",
      rol: "",
    },*/
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nuevo Usuario" : "Editar Usuario";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
  },

  created() {
    this.initialize();
  },

    /* 
    Esta funcion nos lleva al menu de configuracion
    */
   methods : {
    iraConfig(){

      this.$router.push({name:'Configuracion'});

    },
    activar(event,item) {
      
      console.log("valor de event " + event);

      let valorActivo = 0;

      event == 1? valorActivo =1 :  valorActivo =0;

       let parametros = {
        id :  item.id,
        nombre:      item.nombre,
        email: item.email,
        password: item.password,
        rol: item.rol,
        programa: item.programa,
        activo: valorActivo,

      } ;

      let promesa = apiUsuarios.update__usuarios(parametros,this.$store);
       promesa
      .then( response => { console.log(JSON.stringify(response.data))} )
      .catch( error => { console.log(JSON.stringify(error.data))});
      

    } ,
    initialize() {
     this.poblarGrid();
    },
       async poblarGrid(){

        let TodosLosUsuarios = apiUsuarios.cargar__todos__los__usuarios(this.$store);

         TodosLosUsuarios
        .then( response => { 
          console.log(JSON.stringify(response.data));
          this.usuarios = response.data;
        } )
        .catch( error => { console.log(JSON.stringify(error.data))});
    },

     agregarNuevoUsuario(){

      console.log("agregando nuevo usuarios");

      this.$store.dispatch('action_usuarios_id',0);

      this.$router.push('Nuevousuario');

   },

    editItem(item) {
      
      console.log("editando usuario");

      /* probando otras opciones */

      this.$store.dispatch('action_usuarios_id',item.id)

      let promesa = apiUsuarios.cargar__usuarios(item.id,this.$store);

      promesa
      .then( response => {
         console.log(JSON.stringify(response.data[0]));
         console.log("valor de usuario " + response.data[0]['nombre']);

         let activoTemp = true;

         response.data[0]["activo"]== 1 ? activoTemp = true : activoTemp= false;
            
        this.$store.dispatch('action_usuario_id',item.id);
        this.$store.dispatch('action_usuarios_activo', activoTemp);
        this.$store.dispatch('action_usuarios_nombre', response.data[0]['nombre']);
        this.$store.dispatch('action_usuarios_password', response.data[0]['password']);
       
       this.$store.dispatch('action_usuarios_email', response.data[0]['email']);
        this.$store.dispatch('action_usuarios_rol', response.data[0]['rol']);
        this.$store.dispatch('action_usuarios_programa', response.data[0]['programa']);
        this.$router.push('Nuevousuario'); } )
       .catch( error => { console.log(JSON.stringify(error.data))});

  

    },

    deleteItem(item) {
  
      let r = confirm("¿Estas seguro de eliminar este usuario ? ") ;

         if (r == true) {
          console.log("el vlaor de r : " + r);
          apiUsuarios.Delete__usuarios(item.id, this.$store);
          this.poblarGrid();

         }
    },


    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.usuarios[this.editedIndex], this.editedItem);
      } else {
        this.usuarios.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>