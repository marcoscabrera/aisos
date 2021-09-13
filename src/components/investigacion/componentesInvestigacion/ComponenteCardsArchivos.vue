<template>

  <v-card
    class="mx-auto"
    max-width="400"
  >


    <v-card-text>
      <v-row align="center">
        <v-col
          class="text-h2"
          cols="6"
        >
         {{numero}}
        </v-col>
        <v-col cols="6">
                <v-btn
                    class="mx-2"
                    fab
                    dark
                    large
                    color="purple"
                >

                <v-icon x-large dark>
                  
                   {{icono}}
                </v-icon>
              </v-btn> 
        </v-col>
      </v-row>
    </v-card-text>
    <v-divider></v-divider>
  </v-card>
</template>
<script>
export default {

    props :{ 
        numero:{type: String},
        icono :{type: String}
    }
}
</script>
    
