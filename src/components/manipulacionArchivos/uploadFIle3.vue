<template>
  <div>
    <v-bottom-navigation v-if="HayArchivo == true" >
                <v-btn 
                  @click="verArchivo"
                 >
                  <span>{{ nombre_de_archivo_original }}</span>

                  <v-icon color="green" :large="largo">mdi-file-document</v-icon>
                </v-btn>

                <v-btn 
                  @click="editarArchivo"
                 >
                  <span>Editar</span>

                  <v-icon color="warning" :large="largo">mdi-file-edit-outline</v-icon>
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
          
          accept="application/pdf"
          @change="selectFile"
          @click:clear="mostrarbotonUpload"
        ></v-file-input>
      </v-col>

      <v-col cols="4" class="pl-2">
        <v-btn v-if="MostrarBotonDeSubir" color="success" dark small @click="upload">
          Subir
          <v-icon right dark>mdi-cloud-upload</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <v-alert v-if="message" border="left" color="blue-grey" dark>
      {{ message }}
    </v-alert>

    <v-alert v-if="mostrarMensajeValidacion" type="error">
      Este campo no debe ir vacio
    </v-alert>

   

  
  </div>
</template>
<script>
// basado en este .
import UploadService from "./UploadFilesService";
import eventBus from '@/eventBus.js';



export default {
  name: "uploadFile3",
  

  props : {

    archivoId         : {type:String , default :'0'},
    incidenteid       : {type:String , default :'0'},
    directorio        : {type:String , default :''},
    nombreArchivo     : {type:String , default :'' },
    action_a_Ejecutar : {type:String,  default :''},
    modulo            : {type:String,  default: 'general'},
    campoState        : {type:String},
    datosDelArchivo   : {type:Array},
    HayArchivo        : {type:Boolean},
    mostrarMensajeValidacion : {Type: Boolean,default :false},
    tipoDeArchivo :{ type:String ,default :'application/pdf'}

  },
  data() {
    return {
      MostrarBotonDeSubir :false,
      largo :true,
      recienSubido : '0',
      sihayarchivo : false,
      currentFile: undefined,
      progress: 0,
      message: "",
     
      nombre_de_archivo_original : '',
      elArchivo :  '',

      fileInfos: [],
      rules: [
      files => !files || !files.some(file => file.size > 10_485_760) || 'El archivo debe ser menor a 10 MB!'
    ],
      rules2 :[ (value) => value.type != 'aplication/pdf' || 'EL formato de archivo no esta permitido'
      ]
    };
  },
  

   mounted() {


        eventBus.$on('cargarArchivo', (archivoid) => {
           try{
      

           console.log("solicitando el docto al servidor " +archivoid );

           this.solicitarDocumentoAServidor(archivoid);
         
           }catch(error){
             
             console.log(error);

           }
    });
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

    editarArchivo(){
       this.HayArchivo= false;
    },

    mostrarbotonUpload(){
      console.log("mostrar bton upload");
      this.MostrarBotonDeSubir= false;
    },


    verArchivo(){
      //debemos checar si pueden ver archivos o no . 

     UploadService.getFiles(this.archivoId, this.$store.state)
     .then(
       response => {
       

        let directorio = response.data[0]['directorio'];

        let ni =response.data[0]['nombreinterno'];

        let link =  this.$store.state.urlServidor + directorio + '/'+ ni;
          

        this.$store.dispatch("actions_uivars_docto_a_ver",link);
        this.$store.dispatch("actions_uivars_ir_origen_que_solicito_docto",this.$router.currentRoute.path)
       // console.log("link generado " + link);

        this.$router.push({name: "VisorPDF"});

          
   })
     .catch(
       error => { console.log(error)}
     );
  

    //console.log(" fileinfos : " + this.fileInfos);

      


    },

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
          
          this.fileInfos=response.data[0];

          console.log(" fileinfos : " + this.fileInfos);

          this.elArchivo =response.data[0]['nombreOriginal'];
          this.nombre_de_archivo_original = response.data[0]['nombreOriginal'];

          let idElArchvio = JSON.stringify(response.data[0]['id']);

         this.$store.dispatch(this.action_a_Ejecutar,idElArchvio);
        
          console.log(">>>>>>>>>>>>>>> ");
         // console.log(">> " + this.$store.state[this.modulo][this.campoState]);
         console.log(">>>>>>>>>>>>>>> ");

     
         console.log("datos recuperados elArchivo ");
         console.log(this.elArchivo);
         this.HayArchivo = true;

       // this.elArchivo == '' ? this.sihayarchivo=false :this.sihayarchivo=true;
      
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
      this.upload();
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
          // console.log(">> " + this.$store.state[this.modulo][this.campoState]);
           console.log(">>>>>>>>>>>>>>> ");

          this.message = response.data.message;

          //ocultamos en teoria mensaje de falta campo.
          this.mostrarMensajeValidacion=false;
          this.MostrarBotonDeSubir =false;
         // this.$store.dispatch(,)

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

