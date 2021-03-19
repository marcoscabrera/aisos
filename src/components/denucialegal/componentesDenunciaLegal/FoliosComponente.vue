<template>
    <v-row>
      <v-col cols="12" xs="12" md="4">
                 <v-text-field
          id="labelFolio"
          class="cssnuevo"
           :value="generarFolio"
            label="FOLIO"
            filled
            disabled
            background-color="#87CEFA"
            
          >
        
          </v-text-field>
      </v-col>

      <v-col cols="12" xs="12" md="4">
            <v-text-field
          id="labelFolio"
          class="cssnuevo"
           :value="generarFolio_docto"
            label="FOLIO"
            filled
            disabled
            background-color="#87CEFA"
            
          >
        
          </v-text-field>
     </v-col>


                   <v-col cols="12" x2="12"  md="4" lg="4"> 
                <v-text-field
                  :value ="date"
                  label="Fecha"
                  prepend-icon="mdi-calendar"
                  readonly

                ></v-text-field>
              </v-col>

    </v-row>
</template>

<script>
    
    export default {

         name :'FoliosComponente',
         
         props : {
           date : {type:String},
             folio :{ type:String},
              foliodenuncia :{ type:String},
              tipofolio : {type : String, default: ''}
         },
         computed: {
           generarFolio() {
             return "FOLIO #" + this.folio
           },
            generarFolio_docto() {
             return "FOLIO " + this.tipofolio + " #" + this.foliodenuncia
           },
         },

         data () {

             return {

                 menu2: false,

                
             }
         }

    }
</script>

<style scoped>

</style>