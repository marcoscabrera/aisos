<template>
  <div>
    <div v-if="currentFile">
      <div>
        <v-progress-linear
          v-model="progress"
          color="light-blue"
          height="25"
          reactive
        >
          <strong>{{ progress }} %</strong>
        </v-progress-linear>
      </div>
    </div>

    <v-row no-gutters justify="center" align="center">
      <v-col cols="8">
        <v-file-input
          show-size
          label="Adjunta tu documento"
          @change="selectFile"
        ></v-file-input>
      </v-col>

      <v-col cols="4" class="pl-2">
        <v-btn color="success" dark small @click="upload">
          Subir
          <v-icon right dark>mdi-cloud-upload</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <v-alert v-if="message" border="left" color="blue-grey" dark>
      {{ message }}
    </v-alert>

    <v-bottom-navigation v-if="sihayarchivo" >
                <v-btn value="favorites">
                  <span>{{ elArchivo }}</span>

                  <v-icon color="green" :large="largo">mdi-file-document</v-icon>
                </v-btn>
    </v-bottom-navigation>

  
  </div>
</template>
<script>
// basado en este .
import UploadService from "./UploadFilesService";

export default {
  name: "upload-files",
  

  props : {

    archivoId :  {type:String ,defautl: '0'},
    incidenteid : {type: String , default : '0'},
    directorio : { type: String , default : ''},

    nombreArchivo :{ type :String , default :'' }

  },
  data() {
    return {
      largo :true,
      recienSubido : '0',
      sihayarchivo : false,
      currentFile: undefined,
      progress: 0,
      message: "",

      elArchivo :  '',

      fileInfos: []

    };
  },
   beforeUpdate() {
      console.log(">> beforeUpdate >>");
          console.log("valor de archivoid " + this.archivoId)
    this.archivoId=='0' ? this.message="sin asignar"
    :  this.getFile();
   },

   mounted() {

     console.log(">>  >>");
     this.$nextTick(function () {
   
    console.log(">>>>>>>>>>>>>>>>>>");
    console.log(">>MONTANDO  uploadFIle nextTick >>");
    console.log(">>>>>>>>>>>>>>>>");

    console.log("valor de archivoid nextTick " + this.archivoId) ;
      
    const promesa = Promise.resolve( this.archivoId) ;

      promesa.then (  (valor) => {

      console.log(" en la promesa ");

      console.log(this.$store.state.valoracion.etapavaloracion_medidasintegrales);

      console.log(valor);
      this.sihayarchivo = true;
     this.solicitarDocumentoAServidor(this.$store.state.valoracion.etapavaloracion_medidasintegrales);

    
      });
   // this.archivoId=='0' ? this.recuperandoELIncidenteId()
    //:  this.getFile();

  })
  
  
  },

  methods: {

    recuperandoELIncidenteId() {

      let incidenteID = this.$route.params.id;

      console.log("***************");
      console.log("valor del incidente id : " + incidenteID);
      console.log("***************");
        console.log("***************");
      console.log("valor del  archivoid : " + this.archivoId);
      console.log("***************");
      //this.solicitarDocumentoAServidor(archivoIdABuscar);
    },
     
    solicitarDocumentoAServidor(archivoIdABuscar) {

      try {

           UploadService.getFiles(archivoIdABuscar, this.$store.state).then(response => {
      // this.fileInfos = response.data;
        
      console.log("datos recuperados del archivo en cuestion ");
      
      console.log(JSON.stringify(response.data));

      this.elArchivo =response.data[0]['nombreOriginal'];
      let idElArchvio = response.data[0]['id'];

       this.$store.dispatch("action_medidasintegrales",idElArchvio);
      console.log(">>>>>>>>>>>>>>> ");
      console.log(">> " + this.$store.state.valoracion.etapavaloracion_medidasintegrales);
      console.log(">>>>>>>>>>>>>>> ");

     
     console.log("datos recuperados elArchivo ");
      console.log(this.elArchivo);

      this.elArchivo == '' ? this.sihayarchivo=false :this.sihayarchivo=true;
      //console.log("valor del archivo recuperado" + JSON.stringify(response.data));
    })
      }catch(error) {

        console.log("error en solicitar documento al servidor "  + error);
      }

    },

     getFile() {

    console.log("valor de archivoId -props-: " + this.archivoId);
    console.log("valor de recienSubido -local-: " + this.recienSubido);

     let archivoIdABuscar = '0';
     
     this.recienSubido =='0' ? archivoIdABuscar  =  this.archivoId : archivoIdABuscar =this.recienSubido;


     if (archivoIdABuscar == '' ) { return; } else {

    console.log(" ==============================================");
    console.log(" vasrs en getfile despues del if ");
    console.log(" ==============================================");
    console.log("valor de archivoIdABuscar : " + archivoIdABuscar);
    console.log("valor de archivoId : " + this.archivoId);
    console.log("valor de recienSubido : " + this.recienSubido);
    console.log(" ==============================================");

    this.solicitarDocumentoAServidor(archivoIdABuscar);

     }//termina else

     },

      selectFile(file) {
      this.progress = 0;
      this.currentFile = file;
    },


      upload() {
      if (!this.currentFile) {
        this.message = "¡Por Favor seleccione un archivo!";
        return;
      }

      this.message = "";
    
      console.log(" valor del this.file " + this.currentFile);
      
      UploadService.upload(this.incidenteid, this.directorio , this.currentFile, (event) => {

        this.progress = Math.round((100 * event.loaded) / event.total);
        
      //  this.progress == 100 ? 


      }, this.$store.state)
        .then((response) => {


          //console.log(" valor de response " + JSON.stringify(response));

          console.log(" valor de response.data.idRegistro >>>> " + JSON.stringify(response.data.idRegistro));
          this.recienSubido =JSON.stringify(response.data.idRegistro);

          this.currentFile =null;

          this.$store.dispatch("action_medidasintegrales",response.data.idRegistro);

          this.recienSubido =JSON.stringify(response.data.idRegistro);
           
           console.log(">>>>>>>>>>>>>>> ");
           console.log(">> " + this.$store.state.valoracion.etapavaloracion_medidasintegrales);
           console.log(">>>>>>>>>>>>>>> ");

          this.message = response.data.message;

          return UploadService.getFiles(response.data.idRegistro, this.$store.state );
          
        })
        .then((files) => {

          this.fileInfos = files.data;
          
          console.log(" valor de response " + JSON.stringify( this.fileInfos));

          console.log(JSON.stringify(files.data));

        })
        .catch(() => {
          this.progress = 0;
          this.message = "No se ha podido subir el archivo.";
          this.currentFile = undefined;
        });
    },
  }
};
</script>

