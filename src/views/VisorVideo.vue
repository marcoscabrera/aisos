<template>
 <v-container name ="visor">

     <v-row>

       <v-col cols="12" xs="12" sm="12" md="4" lg="4">

       </v-col>



       <v-col cols="12" xs="12" sm="12" md="4" lg="4">
         </v-col>




      <v-col cols="12" xs="12" sm="12" md="4" lg="4">
               
            <v-btn id="xx"
                      color="primary"
                      :loading="loading"
                      block
                      @click="regresar"
                      >

              Regresar a la pantalla anterior

          </v-btn>

      

        </v-col>
    </v-row>
    <v-row>
   <!-- <div id="video-wrapper" >
    <view-js :props="viewJsDatos"></view-js>
    </div> -->
        <vue-plyr>
        <video controls
               crossorigin
               playsinline>
            <source
                size = "1080"
                :src="rutavideo"
                type="video/mp4"
            />
           
        </video>
        </vue-plyr>>
    </v-row>
   
   
   

   
   
    

 </v-container>
</template>

<script>

//import ViewJs from '@/components/evidencias/viewjs.vue';
 export default {

        data() {
            return {
                src: '',
                rutavideo  :  '',
                mimetipo   : 'video/mp4',
                videoArray : null,
                viewJsDatos: {
                allowFullScreen: true,
                preload: 'auto',
                sources: [  ],
            },
            }
        },

        components :{
            
          //  ViewJs

        },

        mounted () {
             
             //this.$store.dispatch("action_uivar_verComponenteVuePdfViewer",true);
          this.rutavideo = this.$store.state.uivars.uivars_docto_a_ver;
          console.log(this.$store.state.uivars.uivars_docto_a_ver);
         // this.videoArray = [{ "id" : 1 , "url" : this.rutavideo , "type" : 'video/mp4' }];
    
         // console.log( this.viewJsDatos);

        /*  this.viewJsDatos.sources[0] = {
                        id : 1,
                        url : this.rutavideo,
                        type : 'video/mp4'
                    }; 
        
          console.log( this.viewJsDatos);*/

        },

        methods: {
           regresar (){
       

       /*
       Cambiamos a false el valor de esta variable para ocultar el componente
       ComponenteVuePdfViewer  buscando que la web app sea mas rapida
        */
       this.$store.dispatch("action_uivar_verComponenteVuePdfViewer",false);
      
       let  r = this.$store.state.uivars.regresar_A_despues_de_impresion;
       //let id = this.$store.state.uivars.id_regresar_A_despues_de_impresion;

       console.log(" valor de r  " + r);
       //console.log(" valor de id " + id);

        typeof r ;
       // typeof id;

        this.$router.push(r);
     },
        


        },

         
        
    }
</script>

<style scoped>

</style>