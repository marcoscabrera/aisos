<template>
  <div>
    <v-bottom-navigation v-if="HayArchivo == true" >
                <v-btn value="favorites">
                  <span>{{ nombreArchivo }}</span>

                  <v-icon color="green" :large="largo">mdi-file-document</v-icon>
                </v-btn>
    </v-bottom-navigation>



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

    <v-row v-if="HayArchivo == false" no-gutters justify="center" align="center">
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

   

  
  </div>
</template>
<script>
// basado en este .
import UploadService from "./UploadFilesService";

export default {
  name: "uploadFile2",
  

  props : {

    archivoId         : {type:String ,defautl: '0'},
    incidenteid       : {type: String , default : '0'},
    directorio        : { type: String , default : ''},
    nombreArchivo     : { type :String , default :'' },
    action_a_Ejecutar : { type:String, default :''},
    modulo            : {  type:String},
    campoState        : { type:String},
    datosDelArchivo   : {type:Array},
    HayArchivo        : {Type: Boolean}
    

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
  

   mounted() {
/*
     console.log(">>  >>");
     this.$nextTick(function () {
   
    console.log(">>>>>>>>>>>>>>>>>>");
    console.log(">>MONTANDO  uploadFIle nextTick >>");
    console.log(">>>>>>>>>>>>>>>>");

    console.log("valor de archivoid nextTick " + this.archivoId) ;

      
    const promesa = Promise.resolve( this.archivoId) ;

      promesa.then (  (valor) => {

      console.log(" en la promesa ");

      let pasaber = this.$store.state[this.modulo][this.campoState];

      console.log(pasaber);

      console.log(valor);

      

      this.sihayarchivo = true;
      //this.solicitarDocumentoAServidor(this.$store.state[this.modulo][this.campoState]);
        
        this.solicitarDocumentoAServidor(valor);

    
      });
   

  })
  */
  
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

          let idElArchvio = JSON.stringify(response.data[0]['id']);

         this.$store.dispatch(this.action_a_Ejecutar,idElArchvio);
        
         console.log(">>>>>>>>>>>>>>> ");
         console.log(">> " + this.$store.state[this.modulo][this.campoState]);
         console.log(">>>>>>>>>>>>>>> ");

     
        console.log("datos recuperados elArchivo ");
        console.log(this.elArchivo);

        this.elArchivo == '' ? this.sihayarchivo=false :this.sihayarchivo=true;
      
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
    
      console.log(" valor del this.currentFile " + this.currentFile);
      
      UploadService.upload(this.incidenteid, this.directorio , this.currentFile, (event) => {

        this.progress = Math.round((100 * event.loaded) / event.total);
        
      //  this.progress == 100 ? 


      }, this.$store.state)
        .then((response) => {


          //console.log(" valor de response " + JSON.stringify(response));

          console.log(" valor de response.data.idRegistro >>>> " + JSON.stringify(response.data.idRegistro));
          this.recienSubido =JSON.stringify(response.data.idRegistro);

          this.currentFile =null;

          this.elArchivo = JSON.stringify(response.data.nombreOriginal);

          let varIntermedio = JSON.stringify(response.data.idRegistro);

          this.$store.dispatch(this.action_a_Ejecutar,varIntermedio);

          this.recienSubido =JSON.stringify(response.data.idRegistro);

           
           console.log(">>>>>>>>>>>>>>> ");
           console.log(">> " + this.$store.state[this.modulo][this.campoState]);
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

