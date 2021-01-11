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
    export default {

         props: {
          files : Object
        },
   

      methods :{


        mostrarLink(link){
            
            //
           // let a = "https://onedrive.live.com/?authkey=%21AhxF5wMG%5FSJ00H0&cid=D1B73E758E4318E6&id=D1B73E758E4318E6%21703&parId=D1B73E758E4318E6%21690&o=OneUp";
                 
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