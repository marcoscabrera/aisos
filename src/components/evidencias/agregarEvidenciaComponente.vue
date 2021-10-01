<template>
<v-container>
    <!--------------------->
  <!-- componentes auxiliares para visualizar las evidencias 
   :downloadFeatureVisible="false"
  -->
  
   <!--  <div id="app" style="width:100%" v-if="verPDf">

    <PDFView
      :src.sync="archivoPdf" 
      ref="pdfView"
     
      sidebarFeatureVisible=false
      dropzoneFeatureVisible=false
      toolbarVisible=false
      scale.sync="scale" 
    > 
    <template slot="left-toolbox">

    </template>
    </PDFView>
    </div> -->
    <!-- 
    <br  v-if="verPDf">
     ================================================
     v-if="verImagen"
      -->
    
    <!--<div  >
      <canvas id="canvasImagen" width="800" height="600"></canvas>
    </div>
    <br v-if="verImagen">

    <div id="video-wrapper" v-if="verVideo">
    <view-js :props="viewJs"></view-js>
    </div>
    <br v-if="verVideo"> -->
    <!-- ================================================ -->
  <v-card>
    <v-card-title>
      <span class="headline">Nueva Evidencia</span>
    </v-card-title>

    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12" xs="12" sm="12" md="12" lg="12">
            <v-text-field
              v-model="nombrePrueba"
              label="Nombre del Documento"
               @change="desactivar"
            ></v-text-field>
          </v-col>

       <!--   <v-col cols="12" xs="12" sm="12" md="6" lg="6">

             <v-roW >

               <v-col cols="12" xs="12" sm="3" md="3" lg="3">

                    <v-btn
                    class="mx-2"
                    fab
                    dark
                    large
                    color="purple"
                    >

                    <v-icon x-large dark>
                      mdi-file-pdf
                    </v-icon>
                  </v-btn> 

               </v-col>
               <v-col cols="12" xs="12" sm="3" md="3" lg="3">
                    <v-btn
                    class="mx-2"
                    fab
                    dark
                    large
                    color="purple"
                    >

                    <v-icon x-large dark>
                      mdi-file-pdf
                    </v-icon>
                  </v-btn>

               </v-col>
               <v-col cols="12" xs="12" sm="3" md="3" lg="3">
                    <v-btn
                    class="mx-2"
                    fab
                    dark
                    large
                    color="purple"
                    >

                    <v-icon x-large dark>
                      mdi-file-pdf
                    </v-icon>
                  </v-btn>

               </v-col>
               <v-col cols="12" xs="12" sm="3" md="3" lg="3">
                    <v-btn
                    class="mx-2"
                    fab
                    dark
                    large
                    color="purple"
                    >

                    <v-icon x-large dark>
                      mdi-file-pdf
                    </v-icon>
                  </v-btn>

               </v-col>
             </v-roW>



           </v-col> -->
        </v-row>
        <v-row>
          <v-col cols="12" xs="12" sm="12" md="12">
            <v-text-field
              v-model="descripcionPrueba"
              label="Descripcion del Documento"
               @change="desactivar"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" xs="12" sm="6" md="4" lg="4">
            <v-select
              :items="tipos"
              label="Tipo de evidencia"
              dense
              filled
              @change="cambiarInput($event)"
            >
            </v-select>
          </v-col>
          <v-col cols="12" xs="12" sm="6" md="8" lg="8" >


            <uploadFile4 v-if="archivo"
                  :archivoId ="archivoId"
                  :tipoPermitido="extensionPermitida"
                  action_a_Ejecutar ="action_ubicacion">
            </uploadFile4> 

            <v-text-field v-else v-model='ubicacion' label="Ubicacion"></v-text-field>
          </v-col>
        </v-row>
        <v-alert  type="info" v-if="mensajeExtensiones"> 
           {{ extensionesPermitidas }}
        </v-alert>
      </v-container>
      <v-alert :type="tipo" v-if="verValidacion">
        {{ errorMsg}}
      </v-alert>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
          <v-row>
              <v-col >

              </v-col>
              <v-col>
                  <v-btn color="red" block dark @click="close"> Regresar a Evidencias </v-btn>
              </v-col>
              <v-col>
                <v-btn v-if="verGuardar"  color="green" block :loading="loading" dark @click.stop.prevent="save">
                  Guardar
                </v-btn>
              </v-col>
          </v-row>
    


    </v-card-actions>
  </v-card>



  </v-container>
</template>

<script>
//https://github.surmon.me/vue-video-player/
import uploadFile4 from "@/components/manipulacionArchivos/uploadFile4.vue";

import apiEvidencias from "@/apialdeas/apiEvidencias.js";
import apiDoctos from '@/apialdeas/apiDoctos.js';
//import {PDFView} from 'vue_pdfjs_viewer';
//import ViewJs from './viewjs.vue';

import { BlobServiceClient} from "@azure/storage-blob";
//https://stackoverflow.com/questions/26212792/convert-an-image-to-canvas-that-is-already-loaded
export default {
  name: "agregarEvidenciaComponente",
    data() {
        return {
               
                /**************************************************
                * Permite ver o no el componente
                * de alerta que muestra las extensiones permitidas
                * 
                ****************************************************/
                mensajeExtensiones : false,
                /**************************************************
                * muestra el texto con las extensiones permitidas
                ****************************************************/
                extensionesPermitidas : '',


                type     : 'warning',
                verVideo :false,
                rutavideo  : '',
                mimetipo   : 'video/mp4',
                viewJs: {
                allowFullScreen: true,
                preload: 'auto',
                sources: [
                    {   id : 1 ,
                        url: this.rutavideo,
                        type: this.mimetipo,
                    }
                ]
            },
          anchoCanvas: 0,
          altoCanvas : 0 ,
          vuecanvas : null,
          verImagen: true,
          nombre_de_archivo_original : '',
          recursoURL : '',
        
          blobSasUrl  :'https://demorebelbotstorage.blob.core.windows.net/contenedorpdf?sp=racwdl&st=2021-08-05T18:42:30Z&se=2021-12-02T03:42:30Z&sv=2020-08-04&sr=c&sig=k2gd8q5fNmbasodAAs6ygz%2FXUmFKOWK8EjHpJJqtn40%3D',
          sasToken: 'sp=racwdl&st=2021-08-05T18:42:30Z&se=2021-12-02T03:42:30Z&sv=2020-08-04&sr=c&sig=k2gd8q5fNmbasodAAs6ygz%2FXUmFKOWK8EjHpJJqtn40%3D',

         
         verPDf: false,
         archivoPdf: '',


          extensionPermitida : 'todos',
          evidenciatipo     : '',
          nombrePrueba      : '',
          descripcionPrueba : '',
          verGuardar        : true,
          errorMsg          : '',
          loading           : false,
          hayArchivo        : false,
          evidencia         :  [],
          tipos             : ["Documento", "Imagen", "Audio", "Video"],
          tipoDocto         : ["pdf"],
          tipoImagen        : ["png","jpg", "gif","svg"],
          tipoVideo         : ["mp4","ogg","webm","egp","3GP"],
          tipoAudio         : ["mp4","ogg","webm","egp","3GP"],
          archivo           :   false,
          incidenteId       : '0',
          archivoId         : '0',
          verValidacion     : false,
          ubicacion         : '',
          estado            : '',
          registroid        : 0,
          scale              : "1.25"
        };
  },

  watch : {
     
        nombre_de_archivo_original : function(newValue){

          this.funcion_que_muestra_la_evidencia(newValue);
        },

    
  },

  components: {
    uploadFile4, 
     //PDFView,
    // ViewJs
  },

  mounted(){

    this.evidencias = null;
    this.$store.dispatch("action_ubicacion",0);

    let a  = document.getElementById('canvasImagen');
    let context = a.getContext("2d");
    console.log("el canvas");
    console.log(a);
    console.log("el contexto");
    console.log(context);
    this.vuecanvas = context;
        console.log("el vuecanvas");
    console.log(this.vuecanvas);

  },
 

  methods: {

    cargarImagenAlCanvas(path) {
    try {


         // this.verImagen= true;

    console.log("dentro de cargar Image nAl Canvas");
    console.log( path );


    let  image = document.createElement('img');
    document.body.appendChild(image);
    //image.setAttribute('style','display:none');
    image.setAttribute('alt','script div');
    image.setAttribute("src", path);

    console.log("valor de imagen antes delc anvas");

    console.log( image );


    
   // var imgCanvas = document.createElement("canvas"),
    //var imgCanvas = document.getElementById("canvasImagen"),
    //this.imgContext = imgCanvas.getContext("2d");

    // Make sure canvas is as big as the picture
    this.vuecanvas.width = image.width;
    this.vuecanvas.height = image.height;
   

    // Draw image into canvas element
    this.vuecanvas.drawImage(image, 100, 100, image.width, image.height);
     console.log( this.vuecanvas);
     console.log(" Draw image into canvas element");
    // Save image as a data URL
   //let imgInfom = imgCanvas.toDataURL("image/png");
    //localStorage.setItem("imgInfo",imgInfom);
    //document.body.removeChild(image);
    }
    catch(error){
   
     console.log(error);

    }


    },

     draw_dos(path) {    

      var ctx = document.getElementById('canvasImagen').getContext('2d');
      var img = new Image();
      img.src = path;

      img.onload = function() {

      var scale = Math.max(800 / img.width, 600 / img.height);
    

    //  this.anchoCanvas = 800;
    //  this.altoCanvas  = 600;
      ctx.drawImage(img, 0, 0, img.width * scale, img.height * scale);
 
     };

 
   },


     draw(path){
       try{

        // this.verImagen= true;

         //var drawing = document.getElementById("canvasImagen");
         
         //var con = drawing.getContext("2d");
         //var goofyPic = document.getElementById("goofyPic");
        // con.drawImage(goofyPic, 0, 0, 50, 50);
         var image2 = new Image();

         image2.src = path;

         //this.vuecanvas.drawImage(image2, 100, 100, 70, 50);  

       }
       catch(error){
         
         console.log(error);
       }

  } ,// end draw

  async  funcion_que_muestra_la_evidencia(newValue){
      

       console.log("en funcion_que_muestra_la_evidencia");
        console.log(newValue);
      /********************************** */
        let nombreDeArchivo  =newValue;
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

            this.recursoURL = response._response.request.url;

             /********************************** */
      
            let tipo =this.evidenciatipo;
            //----------------------------------------
            switch(tipo) {
            case 'Documento':
            console.log("ver imagen");
            this.archivoPdf =this.recursoURL;
            this.verPDf = true;
            break;
            case 'Imagen':

             // this.cargarImagenAlCanvas( this.recursoURL );
              this.draw_dos( this.recursoURL);

            //this.extensionPermitida = "imagen";
            console.log("ver imagen");
            break;
            case 'Audio':
              console.log("ver audio");
            //this.extensionPermitida = "audio";
            break;
            case 'Video':
            this.rutavideo= this.recursoURL;
            this.verVideo = true;
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
  /*********** */
    bajar_un_blob_and_convertirlo_a_cadena(id) {
  console.log("dentroe de bajar_un_blob_and_convertirlo_a_cadena ");

   let recuperar =  apiDoctos.conseguirArchivo(id,this.$store.state);

    recuperar
   .then( response => { 
     
      console.log(JSON.stringify(response.data));
       console.log( response.data[0].nombreOriginal);
        console.log( response.data.nombreOriginal);
         console.log( response.data.nombreOriginal);
     
      /********************************** */
      this.nombre_de_archivo_original = response.data[0].nombreOriginal;
   
   } )
   .catch( error => { console.log(JSON.stringify(error.data))});

  },

    desactivar() {
      this.errorMsg ="";
      this.verValidacion=false;
    },
    cambiarInput(evento) {
      this.errorMsg ="";
      this.verValidacion=false;
      this.evidenciatipo = evento;

      //configuramos el tipo de extension a validar en 
      //el componente uploadFIle4
      //["Documento", "Imagen", "Audio", "Video"],
      this.mensajeExtensiones =true;
      this.extensionesPermitidas= '';
      switch(evento) {
        case 'Documento':
        this.extensionPermitida = "docto";
        this.extensionesPermitidas= 'Solo se permiten documentos PDF con extension .pdf';
        break;
        case 'Imagen':
        this.extensionPermitida = "imagen";
        this.extensionesPermitidas= 'Solo se permiten archivos con extension .png, .jpg, .gif y .svg';
      
      break;
        case 'Audio':
        this.extensionPermitida = "audio";
        this.extensionesPermitidas= 'Solo se permiten archivos con extension .mp3 y .wav';
    
        break;
        case 'Video':
        this.extensionPermitida = "video";
        this.extensionesPermitidas= 'Solo se permiten archivos con extension .mp4, .ogg, .webm, .egp y  .3GP';
    
        break;
        default:
          console.log("no se puede valirda");

      }
      console.log("extesion permitida en uploadfile es :" +  this.extensionPermitida);
      //mostrar componente inputFIle si es un docto  o una imagen 
      //y mostrar componentar de texto si es un audio o video ubicado
      // en otro lugar fuera de la plataforma
      this.incidenteId = this.$store.state.investigacion.investigacion_incidenteid;
      console.log("=================");
      console.log(" incidenteId : " + this.incidenteId);
      console.log("=================");

     
      this.archivo = true ;
  

      

    },
    close() {
      let id = this.$route.params.incidentid;
      this.$router.push({ name: "Evidencias", params: { denunciaId: id } });
    },

    validarEstaCaptura() {
      let r1 = 0;
      this.nombrePrueba.length == 0 ? r1=1 : r1 =0;

      let r2 = 0;
      this.descripcionPrueba.length == 0 ? r2=1 : r2 =0;

      let r3 = 0;
      let ubicacion_a_guardar ='';
      
      ubicacion_a_guardar = this.$store.state.evidencias.evidencias_ubicacion;
      console.log(" valor de ubicacion a guardar " + ubicacion_a_guardar);

      console.log(typeof ubicacion_a_guardar);


      ubicacion_a_guardar == 0 ? r3 = 1 : r3 =0;

      let suma = r1 + r2 + r3;

      let res = false;

      suma == 0 ? res = true : res= false;

      console.table({r1,r2,r3,suma });
      return res;

    },
    save() {
     //ocultamos el mensaje de las extesiones permitidas
    this.mensajeExtensiones =false;
    this.extensionesPermitidas= '';

     
     //inicialiazmoa la animacion del loader del boton.
     this.loading = true;

    if ( this.validarEstaCaptura() == true ){

      console.log(this.evidencia);
      let id = this.$store.state.investigacion.investigacion_id;

      let ubicacion_a_guardar = '';
      console.log(ubicacion_a_guardar);

      this.archivo == false ? ubicacion_a_guardar= this.ubicacion :
      ubicacion_a_guardar = this.$store.state.evidencias.evidencias_ubicacion;

      console.log(" id de la investigacion   ==> " + id);

      let parametros = {
        id    : this.registroid,
        nombre: this.nombrePrueba,
        descripcion: this.descripcionPrueba,
        ubicacion: ubicacion_a_guardar,
        tipo: this.evidenciatipo,
        investigacionid: id,
        activo: 1,
      };
      console.log(" valor de parametros : ");
      console.log(parametros);

     
      if (this.registroid == 0){
          let guardar  = apiEvidencias.nuevo__evidencias(parametros, this.$store);
          guardar
          .then((response) => {
            console.log(JSON.stringify(response.data));
            this.loading = false;
            this.estado ="guardado";
            //this.verGuardar = false;
            this.registroid = response.data.id;

            this.verValidacion = true;
            this.errorMsg ="La evidencia ha sido guardada";
            this.tipo = "success";

            /***************************** */
            //this.bajar_un_blob_and_convertirlo_a_cadena(ubicacion_a_guardar);



          })
          .catch((error) => {
            console.log(JSON.stringify(error.data));
            this.loading = false;
          });

      }else {
         let update = apiEvidencias.update__evidencias(parametros, this.$store);
          update
          .then((response) => {
            console.log(JSON.stringify(response.data));
            this.loading = false;
            this.estado ="guardado";
            //this.verGuardar = false;
            this.registroid = response.data.id;
          })
          .catch((error) => {
            console.log(JSON.stringify(error.data));
            this.loading = false;
          });
      }
      
     




    }else {
      this.verValidacion= true;
      this.errorMsg = "Para capturar esta evidencia todo los campos deben estar bien requisitados";
      this.loading = false;
  }//termina if de validacion
    


    },
  },


};
</script>

<style scoped>
</style>