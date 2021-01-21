<template>
  <v-expansion-panels>
    <v-expansion-panel
     
    >
      <v-expansion-panel-header>
        Documentos de Consulta
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        
    <v-list
      subheader
      two-line
    >
      <v-list-item @click="mostrarLink(file.link)"
        v-for="file in files"
        :key="file.title"
      >
        <v-list-item-avatar>
          <v-icon
            :class="file.color"
            dark
            v-text="file.icon"
          ></v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="file.title"></v-list-item-title>

          <v-list-item-subtitle v-text="file.subtitle"></v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon>
            <v-icon color="grey lighten-1">mdi-information</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>   
       </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>

//Este componente nos permite desplegar una lista de documentos
//Dichos documentos asesoran al usuario para que puede llenar adecuadamente
//el formulario en el que se encuentre.
//Se muestra en las pantallas de Valoracion inicial,Valoracion integral etc
    export default {
      name: "BarraDocumentos",
 
         props: {
           //El objeto que alberga la lista de documentos
          files : Object
        },
   

      methods :{
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

        }
      },
        
    }
</script>

<style scoped>

</style>