<template>

  <v-expansion-panels width="98%"
   >
     


      <v-expansion-panel   >
          <v-expansion-panel-header>
           Documentos de Consulta que sabemos te serán de gran utilidad
          </v-expansion-panel-header>
          
          <v-expansion-panel-content>
        
                <v-list
                  subheader
                  two-line>
                  
                  <v-list-item @click="mostrarLink(file.link)"
                    v-for="file in files"
                    :key="file.nombredocto"
                  >
                    <v-list-item-avatar>
                      <v-icon
                        class="blue"
                        dark
                        
                      > mdi-adobe </v-icon>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title v-text="file.nombredocto"></v-list-item-title>

                      <v-list-item-subtitle v-text="file.descripcion"></v-list-item-subtitle>
                    </v-list-item-content>
                 
                    <!--  <v-list-item-action>
                      <v-btn icon>
                        <v-icon color="grey lighten-1">mdi-information</v-icon>
                      </v-btn>
                    </v-list-item-action> -->
                  </v-list-item>

                </v-list>   

  </v-expansion-panel-content>
  </v-expansion-panel>

  </v-expansion-panels>



</template>

<script>


import apidoctosapoyo from '@/apialdeas/apiDoctosApoyo.js';


import eventBus2 from '@/eventBus.js';

//Este componente nos permite desplegar una lista de documentos
//Dichos documentos asesoran al usuario para que puede llenar adecuadamente
//el formulario en el que se encuentre.
//Se muestra en las pantallas de Valoracion inicial,Valoracion integral etc
    export default {
      name: "BarraDocumentos",
 
         props: {
           //El objeto que alberga la lista de documentos
          files : Array,
          categoria : String
        },


      mounted(){

        try{
         eventBus2.$on('cargarLosDoctos', (cat) => {
                
                console.log("en evento mounted the barra docuementos ");
                this.cargarTodosLosDoctos(cat);

         });
        }catch(error){
           
           console.log("  errore en mounted eventBus2 cargarLosDoctos " +  error);

        }
                    

      },
      
      created(){

         eventBus2.$on('cargarLosDoctos', (cat) => {

           try {
                
                console.log("en evento created cargarLosDoctos");
                this.cargarTodosLosDoctos(cat);
           }catch(error){
             console.log("  error "  + error);
           }

         });
         
         
      },
   

      methods :{

        cargarTodosLosDoctos(categoria){
          
          typeof categoria;
          let promesa = apidoctosapoyo.cargar__todos__los__doctosapoyo(this.$store);

           promesa
          .then( response => { 

               // console.log(JSON.stringify(response.data));
               // let temp  =response.data;
                
                 console.log("antes de entrar al map");

                 this.archivos  = response.data;

               /* this.archivos = temp.map(  function (item){

                     console.log(" categoria ." + categoria);
                     return item.categoria == categoria;

                });

                 console.log(" archivos para mostrar : ");

                console.log(this.archivos);*/

            })
          .catch( error => { console.log(JSON.stringify(error.data))});


        },
        //@vuese
        //Este metodo recibe de parametro una cadena y es
        //usado cuando se da click en el documento
        //@arg Link : String 
        mostrarLink(link){
        //@vuese
        //se ejecuta cuando se hace click en un documento de la lista
              
         window.open(link, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400"); 
        }
      },

      data() {
        return {
          showTip:false,
          archivos : []

        }
      },
        
    }
</script>

<style scoped>

</style>