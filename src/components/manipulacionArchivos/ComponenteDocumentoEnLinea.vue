<template>
   
         <v-col cols="12" >
             
             <v-row>
               <v-col cols="8">

                     <v-text-field
                            :label="nombre_de_archivo_original"
                            color ="green"
                            filled
                            readonly
                            :value="nombre_de_archivo_original"
                          
                          > 

                           <template v-slot:append>
                               <v-icon color="green">
                                     mdi-check-circle
                                 </v-icon>   
                             </template>
                        </v-text-field>

               </v-col>
               <v-col cols="2">

                        <v-btn small class="vbtAltura"
                               @click="bajar_un_blob_and_convertirlo_a_cadena">
                         
                               <v-icon color="green"> 
                                   mdi-file-pdf
                                 </v-icon>
                        </v-btn>

               </v-col>
               <v-col cols="2">

                        <v-btn small class="vbtAltura"
                               @click="borrar_test">
                         
                               <v-icon color="red"> 
                               mdi-close-circle
                                 </v-icon>
                        </v-btn>

               </v-col>
             </v-row>




       
      </v-col>

</template>
<script>
import { BlobServiceClient} from "@azure/storage-blob";

export default {

  data() {
     
     return {

      blobSasUrl  :'https://demorebelbotstorage.blob.core.windows.net/contenedorpdf?sp=racwdl&st=2021-08-05T18:42:30Z&se=2021-12-02T03:42:30Z&sv=2020-08-04&sr=c&sig=k2gd8q5fNmbasodAAs6ygz%2FXUmFKOWK8EjHpJJqtn40%3D',
      sasToken: 'sp=racwdl&st=2021-08-05T18:42:30Z&se=2021-12-02T03:42:30Z&sv=2020-08-04&sr=c&sig=k2gd8q5fNmbasodAAs6ygz%2FXUmFKOWK8EjHpJJqtn40%3D',
   
     }


  },

props : {
    id                        :String,
    nombre_de_archivo_original:String
},

mounted(){

    typeof this.id;
},
methods : {
  borrar_test() {
    this.$parent.mostrarFileInput();
  },


  
  verPDF(){

     /*
       Existe el id, el nombre del archivo, el nombre del contenedor 

     */
       // this.$store.dispatch("actions_uivars_docto_a_ver",link);
        //this.$store.dispatch("actions_uivars_ir_origen_que_solicito_docto",this.$router.currentRoute.path)
       // console.log("link generado " + link);

        this.$router.push({name: "VisorPDF"});

  },
  
   async bajar_un_blob_and_convertirlo_a_cadena() {


   // const account = "demorebelbotstorage";
   // const sas = this.sasGT
    const containerName = "contenedorpdf";
    const blobName = this.nombre_de_archivo_original;

    const blobServiceClient = new BlobServiceClient(this.blobSasUrl);

     const containerClient = blobServiceClient.getContainerClient(containerName);
     const blobClient = containerClient.getBlobClient(blobName);

  // Get blob content from position 0 to the end
  // In browsers, get downloaded data by accessing downloadBlockBlobResponse.blobBody
  const downloadBlockBlobResponse = await blobClient.download()
  .then( response => {
         console.log(" exito ");
         console.log( JSON.stringify(response._response.request.url));

         this.$store.dispatch("actions_uivars_docto_a_ver",response._response.request.url);
         this.$store.dispatch("actions_uivars_ir_origen_que_solicito_docto",this.$router.currentRoute.path)
        // // console.log("link generado " + link);

        this.$router.push({name: "VisorPDF"});
  }).catch(

    error => {
          
          console.log(" error ");
          console.log( JSON.stringify(error));
    }
  );

  typeof downloadBlockBlobResponse;
/*
  const downloaded = await this.blobToString(await downloadBlockBlobResponse.blobBody)
  .then( response => {
           console.log( response );
  })
  .catch( error => {
          
          console.log(  error );
  });*/
  
  /***
   * XHRGEThttps://demorebelbotstorage.blob.core.windows.net/contenedorpdf/contenedorpdf/cedula de identificacion fiscal.pdf?sp=racwdl&st=2021-08-05T18:42:30Z&se=2021-12-02T03:42:30Z&sv=2020-08-04&sr=c&sig=k2gd8q5fNmbasodAAs6ygz/XUmFKOWK8EjHpJJqtn40=&_=1628964634361
[HTTP/1.1 200 OK 936ms]

 
1

   */
 // console.log("Downloaded blob content", downloaded);

  },
} 

}
</script>
<style>
.vbtAltura{

   height: 59px !important;

}
</style>