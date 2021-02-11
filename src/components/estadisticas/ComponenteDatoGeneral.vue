<template>
  <v-card
    width="100%"
  
  >
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="subheadline">
          
        </v-list-item-title>
        <v-list-item-subtitle>{{titulo}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-text>
      <v-row align="center">
        <v-col
           align="center"
          cols="12"
        >
          Incidentes abiertos #5
        </v-col>

      </v-row>
      <v-row align="center">
        <v-col
           align="center"
          cols="12"
        >
          Incidentes Cerrados #7
        </v-col>

      </v-row>
    </v-card-text>
    <v-divider></v-divider>


  </v-card>
</template>

<script>
    export default {
        props: {
            titulo: {
                type: String,
                default: ''
            },
        },
    }
</script>

<style scoped>

</style>