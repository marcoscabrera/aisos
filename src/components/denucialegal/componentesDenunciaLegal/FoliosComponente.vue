<template>
    <v-row>
      <v-col cols="12" xs="12" md="4">
        <v-label filled> FOLIO # {{  folio  }} </v-label>
      </v-col>

      <v-col cols="12" xs="12" md="4">
        <v-label filled> FOLIO  DENUNCIA # {{ foliodenuncia}} </v-label>
      </v-col>
      <v-col cols="12" xs="12" md="4">
        <v-menu
          v-model="menu2"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              label="Fecha"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
        </v-menu>
      </v-col>
    </v-row>
</template>

<script>
    
    export default {

         name :'FoliosComponente',
         
         props : {
             folio :{ type:String},
              foliodenuncia :{ type:String},
         },

         data () {

             return {

                 menu2: false,

                 date : ''
             }
         }

    }
</script>

<style scoped>

</style>