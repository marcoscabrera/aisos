<template>
  <div>
   <!-- <label for="baseUrl">
      <div>Provide upload url</div>
      <input type="text" placeholder="Azure upload url" v-model="baseUrl" id="baseUrl">
    </label>
    <br>
    <br>
    <label for="sasToken">
      <div>Provide sasToken</div>
      <input type="text" placeholder="Azure sasToken" id="sasToken" v-model="sasToken">
    </label>
    <br>
    <br>
    <label for="file">
      <div>Select file</div>
      <input id="file" type="file" @change="updateFile">
    </label>
    <br>
    <br>
    <button @click="startUpload">Start upload</button>
        <br>
    <button @click="test2">test</button>

       -->
    <form><input type="file" id="file2" /></form>
<!-- * <button id="upload" @click="uploadww()">Upload</button>-->

  <!-- <v-btn dark color="primary" @click="crearUnObjetoCliente">
     Crear un objeto cliente
   </v-btn> -->

   <v-btn @click="comprobarSiExiste_o_no_un_contenedor" dark color="primary">
     comprobarSiExiste_o_no_un_contenedor
   </v-btn>

   <v-btn @click="listFiles">Listar los archivos</v-btn>

   <uploadFile4></uploadFile4>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a, label {
    color: #42b983;
  }
</style>

<script>

//https://docs.microsoft.com/en-us/azure/storage/blobs/quickstart-blobs-javascript-browser

import Axios from 'axios'
import uploadFile4 from "@/components/manipulacionArchivos/uploadFile4.vue";


import {
  BlockBlobClient,
  AnonymousCredential,
  BlobSASPermissions,
  newPipeline,
  BlobServiceClient 
} from "@azure/storage-blob";

import SasStore from '@/components/azure/SasStore.js';
import SasUpdatePolicyFactory from '@/components/azure/SasUpdatePolicyFactory.js';

export default {
  name: 'Upload',
  data () {
    return {
      blobSasUrl  :'https://demorebelbotstorage.blob.core.windows.net/?sv=2020-08-04&ss=bfqt&srt=sco&sp=rwdlacuptfx&se=2021-08-01T01:51:06Z&st=2021-07-06T17:51:06Z&spr=https,http&sig=nnESarekFSmXul3PehyweM4GHbuXEUa9dNwuj%2F1ZGdw%3D',
      sasToken: '?sv=2020-08-04&ss=bfqt&srt=sco&sp=rwdlacuptfx&se=2021-08-01T01:51:06Z&st=2021-07-06T17:51:06Z&spr=https,http&sig=nnESarekFSmXul3PehyweM4GHbuXEUa9dNwuj%2F1ZGdw%3D',
      
       blobServiceClient : null,
       containerName : null,

      sasCache : {},
      sasStore :null,
      file: null,
     
      baseUrl: 'https://demorebelbotstorage.blob.core.windows.net/asidehuevos',
      baseUrlToken :'https://demorebelbotstorage.blob.core.windows.net/asidehuevos?sp=racwdl&st=2021-06-22T02:20:35Z&se=2021-06-22T10:20:35Z&sv=2020-02-10&sr=c&sig=jazeMfOt1LB%2F%2FdO9OePeDNxEYFN2LqEa7gSgPeW6Bf0%3D'
   }
  },
  components :{
      uploadFile4
  },
  methods: {

    async crearUnObjetoCliente(){
            //   BlobServiceClient
       this.blobServiceClient = new BlobServiceClient(this.blobSasUrl);
     //https://demorebelbotstorage.blob.core.windows.net/contenedorpdf/presentacionnuevosprosesos(1).pptx
      // Create a unique name for the container by 
      // appending the current time to the file name
      this.containerName = "container" + new Date().getTime();

      // Get a container client from the BlobServiceClient
      const containerClient = this.blobServiceClient.getContainerClient(this.containerName);
      typeof containerClient;
      await containerClient.create();
      console.log(`Done.`);
    },

    async listFiles() {
      /*
XHRGEThttps://demorebelbotstorage.blob.core.windows.net/contenedorpdf?sv=2020-02-10&ss=bfqt&srt=sco&sp=rwdlacuptfx&se=2021-07-03T05:03:51Z&st=2021-06-26T21:03:51Z&spr=https,http&sig=gelyqB%2FBuM6m2vI621zyIDRKbq8GCOOSGJwQGLM6FRA%3D&comp=list&restype=container&_=1624837077247
[HTTP/1.1 200 OK 752ms]

1

<?xml version="1.0" encoding="utf-8"?><EnumerationResults ServiceEndpoint="https://demorebelbotstorage.blob.core.windows.net/" ContainerName="contenedorpdf"><Blobs><Blob><Name>DeclaraciondePrincipios2017.pdf</Name><Properties><Creation-Time>Sun, 27 Jun 2021 21:10:14 GMT</Creation-Time><Last-Modified>Sun, 27 Jun 2021 21:34:18 GMT</Last-Modified><Etag>0x8D939B351E33272</Etag><Content-Length>153702</Content-Length><Content-Type>application/octet-stream</Content-Type><Content-Encoding /><Content-Language /><Content-CRC64 /><Content-MD5>oHYC7Ue+j/DzbSkfxQLjeg==</Content-MD5><Cache-Control /><Content-Disposition /><BlobType>BlockBlob</BlobType><AccessTier>Hot</AccessTier><AccessTierInferred>true</AccessTierInferred><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState><ServerEncrypted>true</ServerEncrypted></Properties><OrMetadata /></Blob><Blob><Name>Dotcom_Secrets_eBook_Supplement.pdf</Name><Properties><Creation-Time>Sun, 27 Jun 2021 18:30:52 GMT</Creation-Time><Last-Modified>Sun, 27 Jun 2021 18:30:52 GMT</Last-Modified><Etag>0x8D93999B1A32903</Etag><Content-Length>9061056</Content-Length><Content-Type>application/octet-stream</Content-Type><Content-Encoding /><Content-Language /><Content-CRC64 /><Content-MD5>6iH4lmIGYh1Lo58ld7lkmA==</Content-MD5><Cache-Control /><Content-Disposition /><BlobType>BlockBlob</BlobType><AccessTier>Hot</AccessTier><AccessTierInferred>true</AccessTierInferred><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState><ServerEncrypted>true</ServerEncrypted></Properties><OrMetadata /></Blob><Blob><Name>IMG_20210411_105219374_HDR.jpg</Name><Properties><Creation-Time>Thu, 24 Jun 2021 16:07:49 GMT</Creation-Time><Last-Modified>Thu, 24 Jun 2021 16:07:49 GMT</Last-Modified><Etag>0x8D9372A36AA19AE</Etag><Content-Length>2488682</Content-Length><Content-Type>application/octet-stream</Content-Type><Content-Encoding /><Content-Language /><Content-CRC64 /><Content-MD5>hHGYscRbVQrRyMdVJ/6kTw==</Content-MD5><Cache-Control /><Content-Disposition /><BlobType>BlockBlob</BlobType><AccessTier>Hot</AccessTier><AccessTierInferred>true</AccessTierInferred><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState><ServerEncrypted>true</ServerEncrypted></Properties><OrMetadata /></Blob><Blob><Name>MÉTODO GRÁFICO DE SINGAPUR 2° GRADO (IMPRIMIBLE).pdf</Name><Properties><Creation-Time>Thu, 24 Jun 2021 15:56:53 GMT</Creation-Time><Last-Modified>Thu, 24 Jun 2021 15:56:53 GMT</Last-Modified><Etag>0x8D93728AF64EA05</Etag><Content-Length>143801180</Content-Length><Content-Type>application/octet-stream</Content-Type><Content-Encoding /><Content-Language /><Content-CRC64 /><Content-MD5>XRlB0u+dbUJR9/B/2l1WuA==</Content-MD5><Cache-Control /><Content-Disposition /><BlobType>BlockBlob</BlobType><AccessTier>Hot</AccessTier><AccessTierInferred>true</AccessTierInferred><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState><ServerEncrypted>true</ServerEncrypted></Properties><OrMetadata /></Blob><Blob><Name>PORTAFOLIO SOCIOS EXPOSITORES .pdf</Name><Properties><Creation-Time>Sun, 27 Jun 2021 21:11:16 GMT</Creation-Time><Last-Modified>Sun, 27 Jun 2021 21:41:12 GMT</Last-Modified><Etag>0x8D939B44854BDC6</Etag><Content-Length>35601021</Content-Length><Content-Type>application/octet-stream</Content-Type><Content-Encoding /><Content-Language /><Content-CRC64 /><Content-MD5>+EhFyEo029LufYCtJWjVRQ==</Content-MD5><Cache-Control /><Content-Disposition /><BlobType>BlockBlob</BlobType><AccessTier>Hot</AccessTier><AccessTierInferred>true</AccessTierInferred><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState><ServerEncrypted>true</ServerEncrypted></Properties><OrMetadata /></Blob><Blob><Name>PROCESO_CRUD_ROLES.pdf</Name><Properties><Creation-Time>Sun, 27 Jun 2021 21:57:45 GMT</Creation-Time><Last-Modified>Sun, 27 Jun 2021 21:57:45 GMT</Last-Modified><Etag>0x8D939B698C34140</Etag><Content-Length>28004</Content-Length><Content-Type>application/octet-stream</Content-Type><Content-Encoding /><Content-Language /><Content-CRC64 /><Content-MD5>J/GtXLbcKm/e5ojgmvc1LQ==</Content-MD5><Cache-Control /><Content-Disposition /><BlobType>BlockBlob</BlobType><AccessTier>Hot</AccessTier><AccessTierInferred>true</AccessTierInferred><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState><ServerEncrypted>true</ServerEncrypted></Properties><OrMetadata /></Blob><Blob><Name>ReporteValoracionIntegral(1).pdf</Name><Properties><Creation-Time>Sun, 27 Jun 2021 18:24:45 GMT</Creation-Time><Last-Modified>Sun, 27 Jun 2021 18:24:45 GMT</Last-Modified><Etag>0x8D93998D6CE778E</Etag><Content-Length>65909</Content-Length><Content-Type>application/octet-stream</Content-Type><Content-Encoding /><Content-Language /><Content-CRC64 /><Content-MD5>GFzO1VTGmgBdLnm4V6CkVA==</Content-MD5><Cache-Control /><Content-Disposition /><BlobType>BlockBlob</BlobType><AccessTier>Hot</AccessTier><AccessTierInferred>true</AccessTierInferred><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState><ServerEncrypted>true</ServerEncrypted></Properties><OrMetadata /></Blob><Blob><Name>TheFunnelHackersCookbook(1).pdf</Name><Properties><Creation-Time>Sun, 27 Jun 2021 21:23:50 GMT</Creation-Time><Last-Modified>Sun, 27 Jun 2021 21:23:50 GMT</Last-Modified><Etag>0x8D939B1DBC23524</Etag><Content-Length>50306581</Content-Length><Content-Type>application/octet-stream</Content-Type><Content-Encoding /><Content-Language /><Content-CRC64 /><Content-MD5>regSWJvq8KVaanYoujjwug==</Content-MD5><Cache-Control /><Content-Disposition /><BlobType>BlockBlob</BlobType><AccessTier>Hot</AccessTier><AccessTierInferred>true</AccessTierInferred><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState><ServerEncrypted>true</ServerEncrypted></Properties><OrMetadata /></Blob><Blob><Name>Traction_ How Any Startup Can Achieve Explosive Customer Growth ( PDFDrive )(1).pdf</Name><Properties><Creation-Time>Sun, 27 Jun 2021 23:32:28 GMT</Creation-Time><Last-Modified>Sun, 27 Jun 2021 23:32:28 GMT</Last-Modified><Etag>0x8D939C3D3DA5B89</Etag><Content-Length>1925860</Content-Length><Content-Type>application/octet-stream</Content-Type><Content-Encoding /><Content-Language /><Content-CRC64 /><Content-MD5>TEDQolfaiaH/jD9+WtyMYg==</Content-MD5><Cache-Control /><Content-Disposition /><BlobType>BlockBlob</BlobType><AccessTier>Hot</AccessTier><AccessTierInferred>true</AccessTierInferred><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState><ServerEncrypted>true</ServerEncrypted></Properties><OrMetadata /></Blob><Blob><Name>acta_nacimiento_marcoscabrera.pdf</Name><Properties><Creation-Time>Sun, 27 Jun 2021 18:58:59 GMT</Creation-Time><Last-Modified>Sun, 27 Jun 2021 18:58:59 GMT</Last-Modified><Etag>0x8D9399D9F65322B</Etag><Content-Length>517991</Content-Length><Content-Type>application/octet-stream</Content-Type><Content-Encoding /><Content-Language /><Content-CRC64 /><Content-MD5>NbUjkqf8ZZY0uVQSWE68YQ==</Content-MD5><Cache-Control /><Content-Disposition /><BlobType>BlockBlob</BlobType><AccessTier>Hot</AccessTier><AccessTierInferred>true</AccessTierInferred><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState><ServerEncrypted>true</ServerEncrypted></Properties><OrMetadata /></Blob><Blob><Name>laraoreovideo1.mp4</Name><Properties><Creation-Time>Thu, 24 Jun 2021 16:23:57 GMT</Creation-Time><Last-Modified>Thu, 24 Jun 2021 16:23:57 GMT</Last-Modified><Etag>0x8D9372C77B33B5E</Etag><Content-Length>904475234</Content-Length><Content-Type>application/octet-stream</Content-Type><Content-Encoding /><Content-Language /><Content-CRC64 /><Content-MD5 /><Cache-Control /><Content-Disposition /><BlobType>BlockBlob</BlobType><AccessTier>Hot</AccessTier><AccessTierInferred>true</AccessTierInferred><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState><ServerEncrypted>true</ServerEncrypted></Properties><OrMetadata /></Blob><Blob><Name>nuevosProcesosALDEASmodificados_DENUNCIA.pptx</Name><Properties><Creation-Time>Thu, 24 Jun 2021 15:52:30 GMT</Creation-Time><Last-Modified>Sun, 27 Jun 2021 18:20:17 GMT</Last-Modified><Etag>0x8D9399836FD11A4</Etag><Content-Length>47039</Content-Length><Content-Type>application/octet-stream</Content-Type><Content-Encoding /><Content-Language /><Content-CRC64 /><Content-MD5>dy39Ycw66YTk8MBdPgpCsw==</Content-MD5><Cache-Control /><Content-Disposition /><BlobType>BlockBlob</BlobType><AccessTier>Hot</AccessTier><AccessTierInferred>true</AccessTierInferred><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState><ServerEncrypted>true</ServerEncrypted></Properties><OrMetadata /></Blob><Blob><Name>presentacionnuevosprosesos(1).pptx</Name><Properties><Creation-Time>Sun, 27 Jun 2021 18:16:02 GMT</Creation-Time><Last-Modified>Sun, 27 Jun 2021 18:16:02 GMT</Last-Modified><Etag>0x8D939979F4C1BC4</Etag><Content-Length>80222</Content-Length><Content-Type>application/octet-stream</Content-Type><Content-Encoding /><Content-Language /><Content-CRC64 /><Content-MD5>6jm+R7OdOaw46sySeymvMw==</Content-MD5><Cache-Control /><Content-Disposition /><BlobType>BlockBlob</BlobType><AccessTier>Hot</AccessTier><AccessTierInferred>true</AccessTierInferred><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState><ServerEncrypted>true</ServerEncrypted></Properties><OrMetadata /></Blob><Blob><Name>presentacionnuevosprosesos.pptx</Name><Properties><Creation-Time>Sat, 26 Jun 2021 21:24:18 GMT</Creation-Time><Last-Modified>Sat, 26 Jun 2021 21:24:18 GMT</Last-Modified><Etag>0x8D938E8C1ABB5DB</Etag><Content-Length>80222</Content-Length><Content-Type>application/octet-stream</Content-Type><Content-Encoding /><Content-Language /><Content-CRC64 /><Content-MD5>6jm+R7OdOaw46sySeymvMw==</Content-MD5><Cache-Control /><Content-Disposition /><BlobType>BlockBlob</BlobType><AccessTier>Hot</AccessTier><AccessTierInferred>true</AccessTierInferred><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState><ServerEncrypted>true</ServerEncrypted></Properties><OrMetadata /></Blob></Blobs><NextMarker /></EnumerationResults>




      */
       
       //this.crearUnObjetoCliente();
        
        this.blobServiceClient = new BlobServiceClient(this.blobSasUrl);

         let containerClient = this.blobServiceClient.getContainerClient("contenedorpdf");
    
         console.log(containerClient);

        let iter = containerClient.listBlobsFlat();
        let blobItem = await iter.next();
        while (!blobItem.done) {
            
            console.log(blobItem.value);
            blobItem = await iter.next();
        }
    },

    async comprobarSiExiste_o_no_un_contenedor(){

         console.log("comprobarSiExiste_o_no_un_contenedor");
   
      this.blobServiceClient = new BlobServiceClient(this.blobSasUrl);
      
      const containerClient = this.blobServiceClient.getContainerClient("contenedorpdf");

      //console.log(containerClient);

      const file2 = document.getElementById("file2").files[0];
      console.log(file2);
      const promises = [];

       try{
            
            console.log(" filename " + file2.name );
            const blockBlobClient = containerClient.getBlockBlobClient(file2.name);
            promises.push(blockBlobClient.uploadBrowserData(file2));
       }catch(error){
         console.log(error);
       }
       
        await Promise.all(promises);
        console.log("hecho.");

    },

    async uploadFiles() {

    },

 getBlobSasUri(containerClient, blobName, sharedKeyCredential, storedPolicyName) {
    const sasOptions = {
        containerName: containerClient.containerName,
        blobName: blobName
    };

    if (storedPolicyName == null) {
        sasOptions.startsOn = new Date();
        sasOptions.expiresOn = new Date(new Date().valueOf() + 3600 * 1000);
        sasOptions.permissions = BlobSASPermissions.parse("r");
    } else {
        sasOptions.identifier = storedPolicyName;
    }

   // const sasToken = generateBlobSASQueryParameters(sasOptions, sharedKeyCredential).toString();
   // console.log(`SAS token for blob is: ${sasToken}`);

    //return `${containerClient.getBlockBlobClient(blobName).url}?${sasToken}`;
},



async  uploadww() {
  const sasStore = new SasStore();

  const pipeline = newPipeline(new AnonymousCredential());
  // Inject SAS update policy factory into current pipeline
  pipeline.factories.unshift(new SasUpdatePolicyFactory(sasStore));

  const url = "https://jsv10.blob.core.windows.net/mycontainer/myblob";
  const blockBlobClient = new BlockBlobClient(
    `${url}${await sasStore.getValidSASForBlob(url)}`, // A SAS should start with "?"
    pipeline
  );

  const file = document.getElementById("file").files[0];
  await blockBlobClient.uploadData(file, {
    maxSingleShotSize: 4 * 1024 * 1024
  });
},
  
  //////////////////////////////////

  test2() {
    
    console.log("t");

  } , 

  async  test() {
     const { BlobServiceClient, StorageSharedKeyCredential,newPipeline } = require("@azure/storage-blob");
     typeof BlobServiceClient;
     typeof       StorageSharedKeyCredential;
      typeof       newPipeline;


       const account = "demorebelbotstorage";
      const accountKey =  "TKoZGYw/Ukb4i+8MbHpsPMnTNmvLSpWngB4YhvikBFdYorVLRNJ7D46VS/WuvIMJh8Xv7uvs52XqZYjn2cZPFA==";

  
  // Use StorageSharedKeyCredential with storage account and account key
  // StorageSharedKeyCredential is only available in Node.js runtime, not in browsers
  const sharedKeyCredential = new StorageSharedKeyCredential(account, accountKey);

  // List containers
  const blobServiceClient = new BlobServiceClient(
    `https://${account}.blob.core.windows.net`,
    sharedKeyCredential
  );

  let i = 1;
  for await (const container of blobServiceClient.listContainers()) {
    console.log(`Container ${i++}: ${container.name}`);
  }

  // Create a container
  const containerName = `newcontainer${new Date().getTime()}`;
  const containerClient = blobServiceClient.getContainerClient(containerName);

  const createContainerResponse = await containerClient.create();
  console.log(`Create container ${containerName} successfully`, createContainerResponse.requestId);

  // Delete container
  await containerClient.delete();

  console.log("deleted container");


    },
    updateFile ($event) {
      this.file = $event.target.files[0]
      console.log(this.file)
    },
    onProgress (event) {
      console.log('progress: ', event)
    },
    onComplete (event) {
      window.alert('Upload done!', event)
    },
    error (event) {
      window.alert('Upload error!', event)
    },
    startUpload () {
      if (!this.file || !this.baseUrl) {
        window.alert('Provide proper data first!')
      } else {
        this.$azureUpload({
          baseUrl: this.baseUrl,
          sasToken: this.sasToken,
          file: this.file,
          progress: this.onProgress,
          complete: this.onComplete,
          error: this.onError
          // blockSize
        }, Axios.create())
      }
    }
  }
}

</script>

