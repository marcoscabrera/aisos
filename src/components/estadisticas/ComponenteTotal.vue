<template>
  <v-card
    width="100%"
  
  >
    <!-- <v-list-item two-line>
      <v-list-item-content>
       <v-list-item-title class="subheadline">
         <strong>Total De Incidentes de Desprotección Infantil</strong>
        </v-list-item-title>
        <v-list-item-subtitle><strong></strong></v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>-->

    <v-card-text>
      <v-row align="center">
        <v-col cols="12" xm="6" sm="6" md="6" lg="6"
           align="center"
         
        >
         <p class="text-center">
               <strong>Total De Incidentes de Desprotección Infantil</strong>
         </p>
        </v-col>
        <v-col cols="12"
                xm="6" 
                sm="3" 
                md="3" 
                lg="3"
                align="center"        
        >
        
         <p class="text-center">
          
          Abiertos {{this.datoAbierto}} - {{this.porcentajeAbiertos}}%
         
          
         </p>
        </v-col>
        <v-col
           align="center"
          cols="12" xm="6" sm="3" md="3" lg="3"
        >
         <p class="text-center">
                Cerrados {{this.cerrados}} - {{this.porcentajeCerrados}}%
         </p>
        </v-col>
    

      </v-row>

    </v-card-text>
  </v-card>
</template>

<script>
export default {



  computed : {

      datoAbierto() {

        return this.$store.state.estadisticas.datos_graficas.grafica1.TotalIncidenteAbiertos;

      },

      cerrados() {
          return this.$store.state.estadisticas.datos_graficas.grafica1.TotalIncidenteCerrados;

      },

      porcentajeAbiertos() {
       return this.$store.state.estadisticas.datos_graficas.grafica1.porcentajeAbiertos;

      },

      porcentajeCerrados(){
        return this.$store.state.estadisticas.datos_graficas.grafica1.porcentajeCerrado;

      }


  }



}

</script>