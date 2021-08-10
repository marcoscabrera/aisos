<template>
   
         <v-col cols="8" >

            <v-text-field
            :label="nombre_de_archivo_original"
            color ="green"
            filled
            readonly
            :value="nombre_de_archivo_original"
          > 

            <template v-slot:append>
              <v-icon color="green">
                   mdi-check-circle
            </v-icon>   
            </template>
          </v-text-field>
       
      </v-col>

</template>
<script>

export default {

props : {
    id                        :String,
    nombre_de_archivo_original:String
},

mounted(){

    typeof this.id;
}

}
</script>