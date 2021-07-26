<template>
    <v-container>
        <h2>
            Mantenimiento a los datos de la plataforma 
        </h2>
        <v-alert type="info">
          
          <p>
              Estas Operaciones se realizaran en caso de ser necesario el borrado fisico de la
              base de datos y de documentos que se generaron o subieron en algun proceso.
          </p>
         
        </v-alert>

         <v-banner v-if="ocultar_info"
                single-line
                @click:icon="alert"
            >
                <v-icon
                slot="icon"
                color="warning"
                size="36"
                >
                mdi-database
                </v-icon>
                Truncar  las tablas en la base de datos  con informacion. Esta operacion no puede ser deshecha
                <ul>
                    <il> Incidentes</il>
                    <il> valoraciones , </il>
                    <il> seguimientos</il>

                </ul>

                <template v-slot:actions>
                <v-btn
                    color="primary"
                    text
                     @click="iniciar_borrado_bdd"
                >
                    Borrar la base de datos
                </v-btn>
                </template>
  </v-banner>
        
 <v-banner      v-if="ocultar_info"
                single-line
                @click:icon="alert"
            >
                <v-icon
                slot="icon"
                color="warning"
                size="36"
                >
                mdi-folder-open
                </v-icon>
               Todos los documentos fisicos generados y almacenados por la plataforma asi como 
               las evidencias en audio, video y otros formatos seran borrados fisicamente y
               no se podran recuperar.
                <ul>
                    
                    <il> Documentos adjuntos relacionados </il>
                    <il> Evidencias</il>
                </ul>

                <template v-slot:actions>
                <v-btn
                    color="primary"
                    text
                     @click="inicializarCarpetas"
                >
                    Borrar documentos
                </v-btn>
                </template>
  </v-banner>
                
    <v-row v-if ="mostrarConfirmacionbdd">

       <v-col cols="12" xs="12" md="6">
              
              <p>
                  Para confirmar el deseo de realizar la operacion 
                  escriba "borrar"
              </p>

             <v-text-field label="DENUNCIANTE" 
                 v-model ="respuesta_bdd"
                 filled
                  >
     
     
            </v-text-field>

            <v-btn dark dense color="red" @click="cancelar">
               cancelar
            </v-btn>

            <v-btn dark dense color="green" @click="borrarbdd">
               Confirmar
            </v-btn>

    


  </v-col>    
        
    </v-row>    
        
        
    <v-alert v-if="confirmacion_operacion"
      prominent
      type ="success">

      <v-row align="center">
        <v-col class="grow">
        La operacion se ha realizado con exito   </v-col>
        <v-col class="shrink">
          <v-btn @click="cancelar"> ok </v-btn>
        </v-col>
      </v-row>
        
    </v-alert>
      

    </v-container>
</template>

<script>
   import apiMantenimiento from '@/apialdeas/apiMantenimiento.js';
    export default {

        data() {
       
           return {
               ocultar_info : true,
               mostrarConfirmacionbdd : false,
               respuesta_bdd  : '',
               confirmacion_operacion : false
                   
                   }

        },

        methods : {


    iniciar_borrado_bdd(){

        this.mostrarConfirmacionbdd = true;
        this.ocultar_info= false;


    },
       cancelar() {
        this.respuesta_bdd = ""; 
        this.mostrarConfirmacionbdd = false;
        this.ocultar_info= true;
        this.confirmacion_operacion= false;

       

       },
       borrarbdd(){
           console.log("valor de : "+ this.respuesta_bdd);
         if(this.respuesta_bdd=='borrar'){
             this.inicializarLaBasedeDatos();
         }else {
             
             //alert("La respuesta no es la adecuada, se cancelo la operacion");
             this.cancelar();

         }


       },

        inicializarLaBasedeDatos() {

               let promesa = apiMantenimiento.borrarBaseDeDatos(this.$store);
               
                promesa
               .then( response => { 
                   
                    console.log(" Respuesta por haber borrado ");
                   console.log(JSON.stringify(response.data));
                    this.mostrarConfirmacionbdd = false;
                    this.confirmacion_operacion= true;
                   
                   } )
               .catch( error => { console.log(JSON.stringify(error.data))});




        }, 

               
         inicializarCarpetas() {

               let promesa = apiMantenimiento.borrarDoctos(this.$store);
               
                promesa
               .then( response => { 
                   
                   console.log(" Respuesta por haber borrado doctos ");
                   console.log(JSON.stringify(response.data));

                    this.confirmacion_operacion= true;
                   
                   } )
               .catch( error => { console.log(JSON.stringify(error.data))});

         }
             
            
        }
        
    }
</script>

<style scoped>

</style>