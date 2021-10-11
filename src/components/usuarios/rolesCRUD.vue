<template>
  <v-data-table
    :headers="headers"
    :items="roles"
    sort-by="id"
    class="elevation-1"
  >

 
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title> **</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
            <v-btn color="primary" dark class="mb-2" @click="iraConfig">
              <v-icon>
                mdi-cog
              </v-icon>
              Configuracion
            </v-btn>
            <v-divider class="mx-4" inset vertical></v-divider>
 
            <v-btn color="primary" dark class="mb-2" @click="agregarNuevoRol"
              >+ Agregar Rol</v-btn
            >        

      </v-toolbar>
    </template>


    <template v-slot:item.ACTIVO="{ item }">
      <v-icon color="green" v-if="item.ACTIVO == 1">
        mdi-checkbox-marked-circle
      </v-icon>
      <v-icon color="red" v-if="item.ACTIVO == 0">mdi-close-circle </v-icon>
    </template>

   

    <template v-slot:item.actions_editar="{ item }">
      <v-btn color="primary" dark dense @click="editItem(item)">
      <v-icon small class="mr-2" > mdi-pencil </v-icon>
      Editar
      </v-btn>
    </template>

    <template v-slot:item.actions_activar="{ item }">
        <v-switch
                  :input-value="item.ACTIVO==1 ? true : false"
                  class="mx-2"
                  color="green"
                  @change="activar($event,item)"
        ></v-switch>
     </template>

    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">No existen Roles</v-btn>
    </template>
  </v-data-table>
</template>


<script>
import apiRoles from '@/apialdeas/apiRoles.js';
export default {
  data: () => ({
    dialog: false,
     roles: [],
    headers: [
      {
        text: "id",
        align: "start",
        sortable: false,
        value: "id",
      },
      { text: "Rol", value: "NOMBREDELROL" },
      { text: "Edicion", value: "actions_editar", sortable: false },
      { text: "Activa", value: "actions_activar", sortable: false },

   
    ],
    editedIndex: -1,
    editedItem: {

    },
    defaultItem: {

    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nuevo rol" : "Editar rol";
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

  methods: {
    /* 
    Esta funcion nos lleva al menu de configuracion
    */
    iraConfig(){

      this.$router.push({name:'Configuracion'});

    },
    
activar(event,item) {
      
      console.log("valor de event " + event);

      let valorActivo = 0;

      event == 1? valorActivo =1 :  valorActivo =0;

       let parametros = {
        id                                        :  item.id,
        NOMBREDELROL                              :  item.NOMBREDELROL,
        ALTADECATALOGOS                           : item.ALTADECATALOGOS,
        BAJADECATALOGOS                           : item.BAJADECATALOGOS,
        MODIFICACIOnDECATALOGOS                   : item.MODIFICACIOnDECATALOGOS,
        ALTADEUSUARIOS                            : item.ALTADEUSUARIOS,
        BAJADEUSUARIOS                            : item.BAJADEUSUARIOS,
        MODIFICACIONDEUSUARIOS                    : item.MODIFICACIONDEUSUARIOS,
        ALTADEROL                                 : item.ALTADEROL,
        BAJADEROL                                 : item.BAJADEROL,
        MODIFICACIONDEROL                         : item.MODIFICACIONDEROL,
        ALTADEVALORACIONINICIAL                   : item.ALTADEVALORACIONINICIAL,
        MODIFICACIONREAPERTURAVALORACIONINICIAL   : item.MODIFICACIONREAPERTURAVALORACIONINICIAL,
        EDITARANTESDECIERREDELAVALORACIONINICIAL  : item.EDITARANTESDECIERREDELAVALORACIONINICIAL,
        BAJAVALORACIONINICIAL                     : item.BAJAVALORACIONINICIAL,
        IMPRESIONVALORACIONINICIAL                : item.IMPRESIONVALORACIONINICIAL,
        VISUALIZACIONVALORACIONINICIAL            : item.VISUALIZACIONVALORACIONINICIAL,
        ALTADEVALORACIONINTEGRAL                  : item.ALTADEVALORACIONINTEGRAL,
        MODIFICACIONREAPERTURAVALORACIONINTEGRAL  : item.MODIFICACIONREAPERTURAVALORACIONINTEGRAL,
        EDITARANTESDECIERREDELAVALORACIONINTEGRAL : item.EDITARANTESDECIERREDELAVALORACIONINTEGRAL,
        BAJAVALORACIONINTEGRAL                    : item.BAJAVALORACIONINTEGRAL,
        IMPRESIONVALORACIONINTEGRAL               : item.IMPRESIONVALORACIONINTEGRAL,
        VISUALIZACIONVALORACIONINTEGRAL           : item.VISUALIZACIONVALORACIONINTEGRAL,
        ALTADESEGUIMIENTO                         : item.ALTADESEGUIMIENTO,
        MODIFICACIONDESEGUIMIENTO                 : item.MODIFICACIONDESEGUIMIENTO,
        EDITARDESEGUIMIENTO                       : item.EDITARDESEGUIMIENTO,
        BAJADESEGUIMIENTO                         : item.BAJADESEGUIMIENTO,
        IMPRESIONDESEGUIMIENTO                    : item.IMPRESIONDESEGUIMIENTO,
        VISUALIZACIONDESEGUIMIENTO                : item.VISUALIZACIONDESEGUIMIENTO,
        ALTADECIERRE                              : item.ALTADECIERRE,
        MODIFICACIONDECIERRE                      : item.MODIFICACIONDECIERRE,
        EDICIONDECIERRE                           : item.EDICIONDECIERRE,
        BAJADECIERRE                              : item.BAJADECIERRE,
        IMPRESIONDECIERRE                         : item.IMPRESIONDECIERRE,
        VISUALIZACIONDECIERRE                     : item.VISUALIZACIONDECIERRE,
        ALTADENUNCIA                              : item.ALTADENUNCIA,
        MODIFCACIONDENUNCIA                       : item.MODIFCACIONDENUNCIA,
        EDICIONDENUNCIA                           : item.EDICIONDENUNCIA,
        BAJADENUNCIA                              : item.BAJADENUNCIA,
        IMPRESIONDENUNCIA                         : item.IMPRESIONDENUNCIA,
        VISUALIZACIONDENUNCIA                     : item.VISUALIZACIONDENUNCIA,
        ALTAINVESTIGACION                         : item.ALTAINVESTIGACION,
        MODIFICACIONINVESTIGACION                 : item.MODIFICACIONINVESTIGACION,
        EDICIONINVESTIGACION                      : item.EDICIONINVESTIGACION,
        BAJAINVESTIGACION                         : item.BAJAINVESTIGACION,
        IMPRESIONINVESTIGACION                    : item.IMPRESIONINVESTIGACION,
        VISUALIZACIONINVESTIGACION                : item.VISUALIZACIONINVESTIGACION ,
        ALTAEVIDENCIA                             : item.ALTAEVIDENCIA,
        MODIFCACIONEVIDENCIA                      : item.MODIFCACIONEVIDENCIA,
        EDICIONEVIDENCIA                          : item.EDICIONEVIDENCIA,
        BAJAEVIDENCIA                             : item.BAJAEVIDENCIA,
        IMPRESIONEVIDENCIA                        : item.IMPRESIONEVIDENCIA,
        VISUALIZACIONEVIDENCIA                    : item.VISUALIZACIONEVIDENCIA,
        ALTADEARCHIVOS                            : item.ALTADEARCHIVOS,
        MODIFICACIONARCHIVOS                      : item.MODIFICACIONARCHIVOS,
        IMPRESIONARCHIVOS                         : item.IMPRESIONARCHIVOS,
        VISUALIZACIONARCHIVOS                     : item.VISUALIZACIONARCHIVOS,
        RECIBECORREOS                             : item.RECIBECORREOS,
        ACTIVO                                    : valorActivo,

      } ;

   

      let promesa = apiRoles.update__roles(parametros,this.$store);
       promesa
      .then( response => { console.log(JSON.stringify(response.data))} )
      .catch( error => { console.log(JSON.stringify(error.data))});
      

    } ,
   async poblarGrid(){

        let TodosLosroles = apiRoles.cargar__todos_los_roles(this.$store);

         TodosLosroles
        .then( response => { 
          console.log(JSON.stringify(response.data));
          this.roles = response.data;
        } )
        .catch( error => { console.log(JSON.stringify(error.data))});
    },

    agregarNuevoRol(){

      console.log("agregando nuevo rol");

      this.$store.dispatch('action_roles_id',0);

      this.$router.push('Nuevorol');

   },

    initialize() {
      //this.roles = [ ];
      this.poblarGrid();
    },


    editItem(item) {
      
      console.log("agregando nuevo rol");

      /* probando otras opciones */

      this.$store.dispatch('action_roles_id',item.id)

      let promesa = apiRoles.cargar__roles(item.id,this.$store);

 

       promesa
      .then( response => {
         console.log(JSON.stringify(response.data[0]));
         console.log("no seas mamaon " + response.data[0]['NOMBREDELROL']);
            
        this.$store.dispatch('action_roles_id',item.id);
        this.$store.dispatch('action_NOMBREDELROL',response.data[0]['NOMBREDELROL']);
        this.$store.dispatch('action_ALTADECATALOGOS',response.data[0]['ALTADECATALOGOS']);
        this.$store.dispatch('action_BAJADECATALOGOS',response.data[0]['BAJADECATALOGOS']);
        this.$store.dispatch('action_MODIFICACIOnDECATALOGOS',response.data[0]['MODIFICACIOnDECATALOGOS']);
        this.$store.dispatch('action_ALTADEUSUARIOS',response.data[0]['ALTADEUSUARIOS']);
        this.$store.dispatch('action_BAJADEUSUARIOS',response.data[0]['BAJADEUSUARIOS']);
        this.$store.dispatch('action_MODIFICACIONDEUSUARIOS',response.data[0]['MODIFICACIONDEUSUARIOS']);
        this.$store.dispatch('action_ALTADEROL',response.data[0]['ALTADEROL']);
        this.$store.dispatch('action_BAJADEROL',response.data[0]['BAJADEROL']);
        this.$store.dispatch('action_MODIFICACIONDEROL',response.data[0]['MODIFICACIONDEROL']);
        this.$store.dispatch('action_ALTADEVALORACIONINICIAL',response.data[0]['ALTADEVALORACIONINICIAL']);
        this.$store.dispatch('action_MODIFICACIONREAPERTURAVALORACIONINICIAL',response.data[0]['MODIFICACIONREAPERTURAVALORACIONINICIAL']);
        this.$store.dispatch('action_EDITARANTESDECIERREDELAVALORACIONINICIAL',response.data[0]['MODIFICACIONREAPERTURAVALORACIONINICIAL']);
        this.$store.dispatch('action_BAJAVALORACIONINICIAL',response.data[0]['BAJAVALORACIONINICIAL']);
        this.$store.dispatch('action_IMPRESIONVALORACIONINICIAL',response.data[0]['IMPRESIONVALORACIONINICIAL']);
        this.$store.dispatch('action_VISUALIZACIONVALORACIONINICIAL',response.data[0]['VISUALIZACIONVALORACIONINICIAL']);
        this.$store.dispatch('action_ALTADEVALORACIONINTEGRAL',response.data[0]['ALTADEVALORACIONINTEGRAL']);
        this.$store.dispatch('action_MODIFICACIONREAPERTURAVALORACIONINTEGRAL',response.data[0]['MODIFICACIONREAPERTURAVALORACIONINTEGRAL']);
        this.$store.dispatch('action_EDITARANTESDECIERREDELAVALORACIONINTEGRAL',response.data[0]['EDITARANTESDECIERREDELAVALORACIONINTEGRAL']);
        this.$store.dispatch('action_BAJAVALORACIONINTEGRAL',response.data[0]['BAJAVALORACIONINTEGRAL']);
        this.$store.dispatch('action_IMPRESIONVALORACIONINTEGRAL',response.data[0]['IMPRESIONVALORACIONINTEGRAL']);
        this.$store.dispatch('action_VISUALIZACIONVALORACIONINTEGRAL',response.data[0]['VISUALIZACIONVALORACIONINTEGRAL']);
        this.$store.dispatch('action_ALTADESEGUIMIENTO',response.data[0]['ALTADESEGUIMIENTO']);
        this.$store.dispatch('action_MODIFICACIONDESEGUIMIENTO',response.data[0]['MODIFICACIONDESEGUIMIENTO']);
        this.$store.dispatch('action_EDITARDESEGUIMIENTO',response.data[0]['EDITARDESEGUIMIENTO']);
        this.$store.dispatch('action_BAJADESEGUIMIENTO',response.data[0]['BAJADESEGUIMIENTO']);
        this.$store.dispatch('action_IMPRESIONDESEGUIMIENTO',response.data[0]['IMPRESIONDESEGUIMIENTO']);
        this.$store.dispatch('action_VISUALIZACIONDESEGUIMIENTO',response.data[0]['VISUALIZACIONDESEGUIMIENTO']);
        this.$store.dispatch('action_ALTADECIERRE',response.data[0]['ALTADECIERRE']);
        this.$store.dispatch('action_MODIFICACIONDECIERRE',response.data[0]['MODIFICACIONDECIERRE']);
        this.$store.dispatch('action_EDICIONDECIERRE',response.data[0]['EDICIONDECIERRE']);
        this.$store.dispatch('action_BAJADECIERRE',response.data[0]['BAJADECIERRE']);
        this.$store.dispatch('action_IMPRESIONDECIERRE',response.data[0]['IMPRESIONDECIERRE']);
        this.$store.dispatch('action_VISUALIZACIONDECIERRE',response.data[0]['VISUALIZACIONDECIERRE']);
        this.$store.dispatch('action_ALTADENUNCIA',response.data[0]['ALTADENUNCIA']);
        this.$store.dispatch('action_MODIFCACIONDENUNCIA',response.data[0]['ALTADENUNCIA']);
        this.$store.dispatch('action_EDICIONDENUNCIA',response.data[0]['EDICIONDENUNCIA']);
        this.$store.dispatch('action_BAJADENUNCIA',response.data[0]['BAJADENUNCIA']);
        this.$store.dispatch('action_IMPRESIONDENUNCIA',response.data[0]['IMPRESIONDENUNCIA']);
        this.$store.dispatch('action_VISUALIZACIONDENUNCIA',response.data[0]['VISUALIZACIONDENUNCIA']);
        this.$store.dispatch('action_ALTAINVESTIGACION',response.data[0]['ALTAINVESTIGACION']);
        this.$store.dispatch('action_MODIFICACIONINVESTIGACION',response.data[0]['MODIFICACIONINVESTIGACION']);
        this.$store.dispatch('action_EDICIONINVESTIGACION',response.data[0]['EDICIONINVESTIGACION']);
        this.$store.dispatch('action_BAJAINVESTIGACION',response.data[0]['BAJAINVESTIGACION']);
        this.$store.dispatch('action_IMPRESIONINVESTIGACION',response.data[0]['IMPRESIONINVESTIGACION']);
        this.$store.dispatch('action_VISUALIZACIONINVESTIGACION',response.data[0]['VISUALIZACIONINVESTIGACION']);
        this.$store.dispatch('action_ALTAEVIDENCIA',response.data[0]['ALTAEVIDENCIA']);
        this.$store.dispatch('action_MODIFCACIONEVIDENCIA',response.data[0]['MODIFCACIONEVIDENCIA']);
        this.$store.dispatch('action_EDICIONEVIDENCIA',response.data[0]['EDICIONEVIDENCIA']);
        this.$store.dispatch('action_BAJAEVIDENCIA',response.data[0]['BAJAEVIDENCIA']);
        this.$store.dispatch('action_IMPRESIONEVIDENCIA',response.data[0]['IMPRESIONEVIDENCIA']);
        this.$store.dispatch('action_VISUALIZACIONEVIDENCIA',response.data[0]['VISUALIZACIONEVIDENCIA']);
        this.$store.dispatch('action_ALTADEARCHIVOS',response.data[0]['ALTADEARCHIVOS']);
        this.$store.dispatch('action_MODIFICACIONARCHIVOS',response.data[0]['MODIFICACIONARCHIVOS']);
        this.$store.dispatch('action_IMPRESIONARCHIVOS',response.data[0]['IMPRESIONARCHIVOS']);
        this.$store.dispatch('action_VISUALIZACIONARCHIVOS',response.data[0]['VISUALIZACIONARCHIVOS']);
        
        this.$store.dispatch('action_roles_RECIBECORREOS',response.data[0]['RECIBECORREOS']);
     
        this.$store.dispatch('action_roles_VISIBILIDADDEINCIDENTES',response.data[0]['VISIBILIDADDEINCIDENTES']);
     
        this.$store.dispatch('action_roles_AUTORIZAIMPRESION',response.data[0]['AUTORIZAIMPRESION']);
     


        let tempActivo = true;
        response.data[0]['ACTIVO'] == 1 ? tempActivo = true : tempActivo = false
        this.$store.dispatch('action_roles_activo',tempActivo);

        this.$router.push('Nuevorol');
} )
      .catch( error => { console.log(JSON.stringify(error.data))});

      this.$router.push('Editarol');

    },


    deleteItem(item) {
      const index = this.roles.indexOf(item);
      let r = confirm("¿Estas seguro de eliminar este rol ? ") &&
        this.roles.splice(index, 1);

         if (r == true) {

          apiRoles.Delete__roles(item.id, this.$store);
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
        Object.assign(this.roles[this.editedIndex], this.editedItem);
      } else {
        this.roles.push(this.editedItem);
      }
      this.close();
    },


  },
};
</script>