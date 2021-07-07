import {

    BlobServiceClient 
  } from "@azure/storage-blob";


  export default {

    
    /////////////////////////////////////////////////
    // Estos documentos se podran subir siempre 
    // y cuando este habilitada una cuenta de storage 
    // en Azure y se cree una cadena de conexion 
    // El codigo base que se utilizo para esta funcion 
    // se encuentra en :
    //https://docs.microsoft.com/en-us/azure/storage/blobs/quickstart-blobs-javascript-browser
    ///////////////////////////////////////////////////


    //Parametro : blobSasUrl
    // es la cadena de conexion hacia el contenedor de la cuensta de storage
    // y se encuentra en el parametro "cadenasas"

    //Parametro : file
    //  Es el archivo a  subir 
    // 

    async upload_blobs_a_azure(blobSasUrl, file){

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
        return "error";
      }
      
       await Promise.all(promises);
       
       return "ok";

   }

  }
  