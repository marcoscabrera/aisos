<template>
<v-container>
    <v-alert type="info">
     Actualmente esta caracteristica esta en desarrollo.
    </v-alert>

  <v-data-table
    :headers="headers"
    :items="evidencias"
    sort-by="id"
    class="elevation-1"
    @dblclick:row="dblclickRow"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title> Evidencias </v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-btn color="red" dark class="mb-2" @click="regresarInvestigacion">
          ir a Investigacion
        </v-btn>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-btn color="primary" dark class="mb-2" @click="agegarEvidencia"
          >+ Agregar Evidencia
        </v-btn>
      </v-toolbar>
    </template>

      <!-- campo para ver la evidencia -->
    <template v-slot:item.ubicacion="{ item }">

     <v-btn color ="primary" dark dense @click="verEvidencia(item)"> Ver Evidencia </v-btn>
    </template>


    <template v-slot:item.tipo="{ item }">

      <v-icon color="green" v-if="item.tipo == 'Documento'">
        mdi-file-pdf
      </v-icon>
      <v-icon color="green" v-if="item.tipo == 'Imagen'">
        mdi-file-image
      </v-icon>
      <v-icon color="green" v-if="item.tipo == 'Video'">
        mdi-video
      </v-icon>
      <v-icon color="green" v-if="item.tipo == 'Audio'">
        mdi-music-note
      </v-icon>
    </template>

      <!-- campo para activos -->
    <template v-slot:item.activo="{ item }">

      <v-icon color="green" v-if="item.activo == 1">
        mdi-checkbox-marked-circle
      </v-icon>
      <v-icon color="red" v-if="item.activo == 0">mdi-close-circle
       </v-icon>
    </template>

    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
      <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
    </template>
    <template v-slot:no-data>
      <!-- <v-btn color="primary" @click="initialize">Reset</v-btn>
     -->
    </template>
  </v-data-table>
  </v-container>
</template>


<script>
//import apiTestigos from "@/apialdeas/apiTestigos.js";
import apiEvidencias from "@/apialdeas/apiEvidencias.js";
import { BlobServiceClient} from "@azure/storage-blob";
import apiDoctos from '@/apialdeas/apiDoctos.js';
export default {
  name: "evidenciasCRUD",
  props: { folioinvestigacionid: { type: String }, testigos: { type: Array } },
  components: {},
  data: () => ({

    recursoURL : '' ,


    datosArchivo : null ,
    blobSasUrl  :'https://demorebelbotstorage.blob.core.windows.net/contenedorpdf?sp=racwdl&st=2021-08-05T18:42:30Z&se=2021-12-02T03:42:30Z&sv=2020-08-04&sr=c&sig=k2gd8q5fNmbasodAAs6ygz%2FXUmFKOWK8EjHpJJqtn40%3D',
    sasToken: 'sp=racwdl&st=2021-08-05T18:42:30Z&se=2021-12-02T03:42:30Z&sv=2020-08-04&sr=c&sig=k2gd8q5fNmbasodAAs6ygz%2FXUmFKOWK8EjHpJJqtn40%3D',

         
    evidencias: [],
    dialog: false,
    folio: "",
    tipos: ["Documento", "Imagen", "Audio", "Video"],

    headers: [
      {
        text: "id",
        align: "start",
        sortable: false,
        value: "id",
      },
      { text: "Nombre", value: "nombre" },
      { text: "Descripcion", value: "descripcion" },
      { text: "ir a Evidencia", value: "ubicacion" },
      { text: "tipo", value: "tipo" },
      { text: "Activo", value: "activo" },
      { text: "acciones", value: "actions", sortable: false },
    ],
    editedIndex: -1,
    editedItem: {
      id: "",
      name: "",
      cargo: "",
    },
    defaultItem: {
      id: "",
      name: "",
      cargo: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nuevo Evidencia" : "Editar Evidencia";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    datosArchivo : function(newValue) {
       
        this.funcion_que_muestra_la_evidencia(newValue);


    }
    
  },

  created() {
    //this.initialize();
   // this.$nextTick(() => {
   //   this.poblarGrid();
   // });
  },

  mounted() {
  
   console.log(" evidenciasCRUD mounted  : " );
  /////////////////////////////////////////////
  // valores para regresar a esta pagina si se 
  // tiene que regresar despues de estar en imp
  // siones
  ////////////////////////////////////////////////////////
   let ruta_A_regresar  = '/evidencias/' + this.$store.state.investigacion.investigacion_id;
    console.log("ruta_A_regresar : " + ruta_A_regresar);
    this.$store.dispatch("action_regresar_A_despues_de_impresion",ruta_A_regresar);
   /////////////////////////////////////////////
   // this.$nextTick(() => {
      this.poblarGrid();
   // });
  },

  methods: {

      bajar_un_blob_and_convertirlo_a_cadena(item) {

        console.log("dentroe de bajar_un_blob_and_convertirlo_a_cadena ");

        console.log(" item.ubication : " + item.ubicacion);
          console.log(" item.tipo : " + item.tipo);

        let recuperar =  apiDoctos.conseguirArchivo(item.ubicacion,this.$store.state);

        recuperar
       .then( response => { 
     
         console.log(JSON.stringify(response.data));
         console.log( response.data[0].nombreOriginal);
        
     
        /*********************************************************** */
        this.datosArchivo =  response.data[0];
   
        })
        .catch( error => { console.log(JSON.stringify(error.data))});

  },
   /******************************************************************* */
   
   queTipoDeDocumento(extension) {
     let res  ='';

     switch(extension) {

       case 'pdf':
         res ="Documento";
         break;
        case 'jpg':
         res ="Imagen";
         break;
         case 'png':
         res ="Imagen";
         break;
         case 'mp4':
         res ="Video";
         break;
         case 'ogg':
         res ="Video";
         break;
         case 'mp3':
         res ="Audio";
         break;
       default :'saludos ';


     }

     return res;
   },

  /******************************************************************* */
      async  funcion_que_muestra_la_evidencia(archivo){
      

       console.log("en funcion_que_muestra_la_evidencia");
       console.log(" archivo.nombreOriginal  : " + archivo.nombreOriginal);
      
      /********************************** */
        let nombreDeArchivo  =archivo.nombreOriginal;
        const containerName = "contenedorpdf";
        const blobName = nombreDeArchivo;
        const blobServiceClient = new BlobServiceClient(this.blobSasUrl);
        const containerClient = blobServiceClient.getContainerClient(containerName);
        const blobClient = containerClient.getBlobClient(blobName);

      /********************************** */

       // Get blob content from position 0 to the end
      // In browsers, get downloaded data by accessing downloadBlockBlobResponse.blobBody
      const downloadBlockBlobResponse = await blobClient.download()
      .then( response => {
            console.log(" exito ");
            console.log( JSON.stringify(response._response.request.url));

            //this.recursoURL = response._response.request.url;

             /********************************** */
      
            let tipoA =archivo.nombreOriginal.split('.');
     
            console.log(tipoA[1]);
            let extension = tipoA[1];
            //----------------------------------------
             
             let tipo ='';
              tipo = this.queTipoDeDocumento(extension);
              console.log("tipo Recuperado :" + tipo);

            //----------------------------------------
            switch(tipo) {
            case 'Documento':
            console.log("ver imagen");
            //this.archivoPdf =this.recursoURL;
              this.$store.dispatch("actions_uivars_docto_a_ver",response._response.request.url);
              this.$store.dispatch("actions_uivars_ir_origen_que_solicito_docto",this.$router.currentRoute.path)
              this.$router.push({name: "VisorPDF"});
            break;
            case 'Imagen':
              this.$store.dispatch("actions_uivars_docto_a_ver",response._response.request.url);
              this.$store.dispatch("actions_uivars_ir_origen_que_solicito_docto",this.$router.currentRoute.path)
              this.$router.push({name: "VisorImagen"});
            console.log("ver imagen");
            break;
            case 'Audio':
              console.log("ver audio");
            //this.extensionPermitida = "audio";
              this.$store.dispatch("actions_uivars_docto_a_ver",response._response.request.url);
              this.$store.dispatch("actions_uivars_ir_origen_que_solicito_docto",this.$router.currentRoute.path)
              this.$router.push({name: "VisorAudio"});
            break;
            case 'Video':
              this.$store.dispatch("actions_uivars_docto_a_ver",response._response.request.url);
              this.$store.dispatch("actions_uivars_ir_origen_que_solicito_docto",this.$router.currentRoute.path)
              this.$router.push({name: "VisorVideo"});
            console.log("ver video");
            //this.extensionPermitida = "video";
            break;
            default:
              console.log("no se puede valirda");

          }

            /************************************************ */

      }).catch(

        error => {
              
              console.log(" error ");
              console.log( JSON.stringify(error));
        }
      );

      typeof downloadBlockBlobResponse;




  },
  /************************************************************ */
    verEvidencia(item){
      console.log(" ir a evidencia : " + item.ubicacion);
     // window.location.href =  item.ubicacion;

     //1.-descargar el archivo.
     this.bajar_un_blob_and_convertirlo_a_cadena( item);
     //2.- setear el recurso
     //this.funcion_que_muestra_la_evidencia(archivo);
     
     //3.-ir al reproductor.
    },
    dblclickRow(){
      alert(" saldus");
    },
    regresarInvestigacion() {

      let id = this.$store.state.investigacion.investigacion_incidenteid;
      console.log("investigacoinid :" + id);
      this.$router.push({
        name: "InvestigacionInterna",
        params: { incidenteId: id },
      });
    },

    agegarEvidencia() {
      let id = this.$route.params.denunciaId;
      console.log("=============");
      console.log(" id : " + id);
      console.log("=============");
      this.$router.push({
        name: "EvidenciasAgregar",
        params: { denunciaId: id },
      });
    },

    initialize() {
      
    },
    poblarGrid() {

      let id = this.$store.state.investigacion.investigacion_id;
      console.log(" --poblarGrid id :" + id );
     // testigos????
      let testigos = apiEvidencias.cargar__todas__las__evidencias_de_una__investigacion(
        id,
        this.$store
      );

      testigos
        .then((response) => {
          this.evidencias = response.data;
          console.log(this.evidencias);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    editItem(item) {
      this.editedIndex = this.evidencias.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      console.log("valor dei en borrar item.id " + item.id);

      var opcion = confirm("¿Estas seguro de eliminar esta evidencia ? ");

      var promesa;
      opcion == true
        ? (promesa = apiEvidencias.Delete__evidencias(item.id, this.$store))
        : this.close();

      promesa
        .then((response) => {
          console.log(response);
          this.poblarGrid();
          this.close();
        })
        .catch((error) => {
          console.log(error);
          alert("La operacion no se ha podido realizar");
        });
    },

    close() {

    },

    save() {
      //console.log("valor del id " + this.editedItem.id);


    },
  },
};
</script>