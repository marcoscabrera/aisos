<template>
  <div>
  

    <v-row  no-gutters justify="center" align="center">
      
      <v-col>
       
       <component v-bind:is="el_componente" v-bind="resetProps"/>


      </v-col>
    </v-row>

    <v-alert :color="color" :type="tipoAlerta" v-if="message" border="left"  dark>
      {{ message }}
    </v-alert>



   

  
  </div>
</template>
<script>
// basado en este .
import UploadService from "./UploadFilesService";
//import UploadServiceAzure from "./uploadFilesAzure.js";
import eventBus from '@/eventBus.js';

import apiDoctos from '@/apialdeas/apiDoctos.js';

import ComponenteDocumentoEnLinea from './ComponenteDocumentoEnLinea.vue';

import { BlobServiceClient } from "@azure/storage-blob";

export default {

  name: "uploadFile4",
 
  components : {
      ComponenteDocumentoEnLinea
  },


 
  

  props : {

    archivoId                 : {type:String , default :'0'},
    incidenteid               : {type:String , default :'0'},
    directorio                : {type:String , default :''},
    nombreArchivo             : {type:String , default :'' },
    action_a_Ejecutar         : {type:String,  default :''},
    modulo                    : {type:String,  default: 'general'},
    campoState                : {type:String},
    datosDelArchivo           : {type:Array},
    HayArchivo                : {type:Boolean},
    mostrarMensajeValidacion  : {Type: Boolean,default :false},
    tipoDeArchivo             : { type:String ,default :'application/pdf'},
    variableContador          : {type : Number, default : 0},
    action_variableContador   : {type : String, default : 'general'},

  },

  computed :{

     resetProps() {

       let x = {};
       
       if( this.archivoId =="0"){
          console.log("valor");
       }else {

          x = { 
                 id                         : this.archivoId,
                 nombre_de_archivo_original : this.nombre_de_archivo_original }

         console.log("valor de x resetprops "+ JSON.stringify(x));
     }

     return x;

   }
  },
  data() {
    return {

      blobSasUrl       : 'https://demorebelbotstorage.blob.core.windows.net/contenedorpdf?sp=racwdl&st=2021-08-05T18:42:30Z&se=2021-12-02T03:42:30Z&sv=2020-08-04&sr=c&sig=k2gd8q5fNmbasodAAs6ygz%2FXUmFKOWK8EjHpJJqtn40%3D',
      sasToken         : 'sp=racwdl&st=2021-08-05T18:42:30Z&se=2021-12-02T03:42:30Z&sv=2020-08-04&sr=c&sig=k2gd8q5fNmbasodAAs6ygz%2FXUmFKOWK8EjHpJJqtn40%3D',
      subiook          : false,
      subionotok       : false,
      loading          : false,
      tipoAlerta       : "info",
      color            : 'Red',
      archivoEnLinea   : false,
      ocultarFileinput : true,
      el_componente    : '',
      
     
      archivoID_por_si_las_dudas  : '',
      MostrarBotonDeSubir         : false,
      largo                       : true,
      recienSubido                : '0',
      sihayarchivo                : false,
      currentFile                 : undefined,
      progress                    : 0,
      message                     : "",
     
      nombre_de_archivo_original  : '',
      elArchivo                   :  '',

      fileInfos                   : [],
      rules                       : [
      files => !files || !files.some(file => file.size > 10_485_760) || 'El archivo debe ser menor a 10 MB!'
    ],
      rules2                     :[
                                    (value) => value.type != 'aplication/pdf' || 'EL formato de archivo no esta permitido'
      ]
    };
  },
  

   mounted() {


      /*  eventBus.$on('cargarArchivo', (archivoid) => {
           try{

         
           console.log(" en envento eventbus.on cargarArchivo ");
           console.log(" valor del parametro archivoid :" + archivoid);
            this.archivoID_por_si_las_dudas = archivoid;
           console.log("solicitando el docto al servidor " + archivoid );
           this.solicitarDocumentoAServidor(archivoid);
       
           }catch(error){
            
             console.log(error);

           }
    });*/

           typeof ComponenteDocumentoEnLinea;

           if (this.archivoId=='0'){

              console.log(" <<< valor de archivoId >>> " + this.archivoId );

           }else{
              
              console.log(" <<< valor de archivoId >>> " +this.archivoId );
              
              this.ocultarFileinput= false;
             // this.archivoEnLinea= true;
              //this.nombre_de_archivo_original =  this.elArchivo;    
             // this.subionotok= true;

            

             this.solicitarDocumentoAServidor( this.archivoId);

           }

            
            eventBus.$on('cargarArchivo_con_id', (id = 0) => {
           try{
           
           console.log("valor de id " + id);
           console.log(" en envento eventbus.on cargarArchivo_con_id ");
           
           console.log(" valor del parametro archivoid :" + this.archivoId);
           if (id == 0){ 
               //typeof id;
                 this.archivoID_por_si_las_dudas = this.archivoId;
           }else {
                 this.archivoID_por_si_las_dudas = id;
           }

          
         
          // console.log("solicitando el docto al servidor " + archivoid );
           this.solicitarDocumentoAServidor( this.archivoID_por_si_las_dudas);
           var event = Event;
           event.stopPropagation;
       
           }catch(error){
             
             console.log("puido haber ocurrido un error");
             console.log(error);

           }
    });

  
  },

  methods: {

    editarArchivo(){
       this.HayArchivo= false;
    },

    mostrarbotonUpload(){
      console.log("mostrar bton upload");
      this.MostrarBotonDeSubir= false;
    },

    /*
     * ocultamos el campo de archivo y palomista
     */

    mostrarFileInput() {

        console.log(" action en ejecucion : " + this.action_a_Ejecutar );
        /*
        https://michaelnthiessen.com/avoid-mutating-prop-directly/
        */
       // this.archivoId=0;
        this.$store.dispatch(this.action_a_Ejecutar,"En espera");
         //this.$store.dispatch(this.action_a_Ejecutar,'0');
         /*  antes borramos el blob en el sevidor */

         this.ocultarFileinput= true;
         this.archivoEnLinea= false;
         this.nombre_de_archivo_original =  "";  
         this.subionotok = false;
       
         this.el_componente="";
        // this.subionotok= true;


    },




     /*
     * Esta funcion solicita
     *
     */
    solicitarDocumentoAServidor(archivoIdABuscar) {

      try {

       
      console.log("solicitando documento en cuestion ");
      let id_sin_comillas = archivoIdABuscar.replaceAll('"', '')
      
     if (id_sin_comillas == '0') return;

       UploadService.getFiles(id_sin_comillas, this.$store.state).then(response => {
      // this.fileInfos = response.data;
        
        console.log("datosxxxx recuperados del archivo en cuestion ");
      
        console.log(JSON.stringify(response.data));
          
          //this.fileInfos=response.data[0];

         // console.log(" fileinfos : " + this.fileInfos);

        this.elArchivo =response.data[0]['nombreOriginal'];
        this.nombre_de_archivo_original = response.data[0]['nombreOriginal'];

         let idElArchvio = JSON.stringify(response.data[0]['id']);

         this.$store.dispatch(this.action_a_Ejecutar,idElArchvio);
        
        //  console.log(">>>>>>>>>>>>>>> ");
         // console.log(">> " + this.$store.state[this.modulo][this.campoState]);
        // console.log(">>>>>>>>>>>>>>> ");

         this.ocultarFileinput= false;
         this.archivoEnLinea= true;
         this.nombre_de_archivo_original =  this.elArchivo;    
         this.subionotok= true;

         this.el_componente = "ComponenteDocumentoEnLinea";

         /****************************************
          * activamos la variable contador
          ****************************************/
          /*if (this.action_variableContador === 'general'){
              console.log("NO hacemos sumatoria");
          }else {
          let contador  = this.variableContador;
          contador = contador + 1;
          //console.log(this.action_variableContador);
          console.log(this.variableContador);
          console.log(contador);
          this.$store.dispatch(this.action_variableContador,contador);
          }*/
         
        /* console.log( this.ocultarFileinput );
          console.log( this.archivoEnLinea );
           console.log( this.nombre_de_archivo_original );

     
         console.log("datos recuperados elArchivo ");
         console.log(this.elArchivo);*/

       //  this.$forceUpdate(); 
        // this.HayArchivo = true;



       // this.elArchivo == '' ? this.sihayarchivo=false :this.sihayarchivo=true;
      
    }).catch(
      error => {
         typeof error;
         console.log("cacheando el error" + error);
         
         this.ocultarFileinput= true;
         this.archivoEnLinea= false;
         this.nombre_de_archivo_original = "";    
        // this.subionotok= true;
      }
    );


      }catch(error) {

        console.log("error en solicitar documento al servidor "  + error);
      }

    },


     /*
     Es funcion se activa cuadno se ha seleccionado un  archivo e inmediatamente despues que se
     el archivo se ha detectado se dispara la funcion para subir el archivo al servidor 

     */
      selectFile(file) {

      this.progress = 0;

      this.currentFile = file;

      this.subir_archivo_a_azure( );
    },


    // [Browsers only] A helper method used to convert a browser Blob into string.
  async  blobToString(blob) {

    const fileReader = new FileReader();

    return new Promise((resolve, reject) => {
      fileReader.onloadend = (ev) => {
        resolve(ev.target.result);
      };
      fileReader.onerror = reject;
      fileReader.readAsText(blob);
     });


  },


  async bajar_un_blob_and_convertirlo_a_cadena() {


    const account = "demorebelbotstorage";
    const sas = this.sasGT
    const containerName = "contenedorpdf";
    const blobName = "acta_nacimiento_marcoscabrera.pdf";

    const blobServiceClient = new BlobServiceClient(`https://${account}.blob.core.windows.net${sas}`);

     const containerClient = blobServiceClient.getContainerClient(containerName);
     const blobClient = containerClient.getBlobClient(blobName);

  // Get blob content from position 0 to the end
  // In browsers, get downloaded data by accessing downloadBlockBlobResponse.blobBody
  const downloadBlockBlobResponse = await blobClient.download();
  const downloaded = await this.blobToString(await downloadBlockBlobResponse.blobBody);
  console.log("Downloaded blob content", downloaded);

  },

  async subir_archivo_a_azure(){
   
   /* Mostramos el boton verde que dice subiendo 
   y activamos la animacion del loader
   */
  /********************
   * 
   */
    this.message = "";
    this.MostrarBotonDeSubir=true;
    this.loading=true;
    /* ------------------------------------*/

     this.subionotok=false;
     this.subiook=false;



  // let   blobSasUrl = this.$store.state.uivars.uivars_parametros[7]["valor"];
   let blobSasUrl  =this.blobSasUrl; //'https://demorebelbotstorage.blob.core.windows.net/?sv=2020-02-10&ss=bfqt&srt=sco&sp=rwdlacuptfx&se=2021-07-03T05:03:51Z&st=2021-06-26T21:03:51Z&spr=https,http&sig=gelyqB%2FBuM6m2vI621zyIDRKbq8GCOOSGJwQGLM6FRA%3D';
     
    let b =this.$store.state.uivars.uivars_parametros[7]["valor"];

    if(b == blobSasUrl) {  console.log("son iguales "); }else { console.log("no son iguales"); }



    //console.log(blobSasUrl);
    //console.log(b);

   let file =  this.currentFile;

    console.log("subiendo un archivo a Azure");
  
      let blobServiceClient = new BlobServiceClient(blobSasUrl);
     
     const containerClient = blobServiceClient.getContainerClient("contenedorpdf");

     //console.log(containerClient);

     //const file2 = document.getElementById("file2").files[0];
     console.log(file);
     const promises = [];

      try{
           
           //console.log(" filename " + file2.name );
           const blockBlobClient = containerClient.getBlockBlobClient(file.name);
           promises.push(blockBlobClient.uploadBrowserData(file));

      }catch(error){
        console.log(error);
        /*ocultar animacion */
         this.MostrarBotonDeSubir=false;
         this.loading=false;
         this.subionotok=true
        return "error";
      }
      
       

       await Promise.all(promises).then(
          response => {
            typeof response;

                   /*Ocultamos las animciones*/
           this.MostrarBotonDeSubir=false;
           this.loading = false;
           this.subiook=true;
           /*--------------------------------------*/
           /* Grabamos el archivo  
                        'incidenteId'    => $datos['incidenteId'],
             'nombreOriginal' => $datos['nombreOriginal'],
             'ext'            => $datos['ext'],
             'fechaCreacion'  => $date,
             'fechaUpdate'    => $date,
             'nombreinterno'  =>  $datos['nombreinterno'],
             'directorio'     =>  $datos['directorio'],
           */
           /*--------------------------------------*/
          
             let t = new Date().getTime();


             console.log("nombre del archivo a grabar enb base dedeats " + file.name );
           
            let parametros = {
                   
                   incidenteId : '0',
                   nombreOriginal :  file.name,
                   nombreinterno : 'docto_' + t.toString(),
                   directorio : 'contenedorpdf',
                   ext : 'pdf'

                   
            };
            
            
            let p =    apiDoctos.nuevo__docto_subido_a_cloud(parametros, this.$store);

            p.then(
              response => {

               typeof response;
               console.log(" valor de response : " +  JSON.stringify(response));

               this.archivoId = response.data.id;
               this.nombre_de_archivo_original  = response.data.nombreOriginal;
               this.archivoEnLinea =true;
               this.ocultarFileinput = false;
               this.subionotok= true;

               this.$store.dispatch(this.action_a_Ejecutar,response.data.id);

                this.subiook=false;
                this.el_componente = "ComponenteDocumentoEnLinea";

               console.log(" Valor de archivoId " +  this.archivoId);

              }
            ).catch(
              error => {

                typeof error;
                  console.log(" valor de error : " +  JSON.stringify(error));
              }
            );
            
          /*----------------------------------------*/

          return "ok";
                

          }
       ).catch( error => { 
          typeof error;
          console.log("- ocurrio un error " );
          console.log(error);
          this.MostrarBotonDeSubir=false;
          this.loading=false;
          this.subionotok=true;
          this.message="Ocurrio un error";
          this.tipoAlerta ="error";
          this.color="Red";
           return "error";
       });

      // console.log("Valor de la promesa ");

      // console.log(promises);
       




   }

  }
}
</script>

