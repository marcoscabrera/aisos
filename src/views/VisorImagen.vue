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
   
   
   

      <canvas id="canvasImagen" width="800" height="600"></canvas>
   
    

 </v-container>
</template>

<script>


 export default {

        data() {
            return {
                src: ''
            }
        },

        components :{
            

        },

        mounted () {
             
             //this.$store.dispatch("action_uivar_verComponenteVuePdfViewer",true);
             this.draw_dos();

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
        
        draw_dos() {    

            var ctx = document.getElementById('canvasImagen').getContext('2d');
            var img = new Image();
            img.src = this.$store.state.uivars.uivars_docto_a_ver;

            img.onload = function() {

            var scale = Math.max(800 / img.width, 600 / img.height);

            ctx.drawImage(img, 0, 0, img.width * scale, img.height * scale);
        
            }
            },

            cargarDocto() {
                
                console.log("montnado el contro");
                this.src = this.$store.state.uivars.uivars_docto_a_ver ;
                console.log("================");
                console.log(this.src);
                console.log("================");
            }
        },

         
        
    }
</script>

<style scoped>

</style>