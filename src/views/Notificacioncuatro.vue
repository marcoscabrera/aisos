<template>
  <v-container name="contenedornotificacion">
    <v-row>
      <h2 class="text-center">
        <v-col> Gracias, los datos se han actualizado</v-col>
      </h2>
    </v-row>
    <v-row>
    
      <v-col>
        <p class="text-center" v-if="esIncidente=='SI ES INCIDENTE'">

          Se ha notificado a los miembros del  comite de proteccion infantil 
        </p>
         <p class="text-center"  v-else>

         Se ha notificado a los miembros del comite de proteccion infantil  que 
         este incidente de desproteccion infantil ha sido cerrado.
        </p>      
        <!--<p>
          Reporte # <strong>{{folio}}</strong>
        </p> -->
      </v-col>
      
    </v-row>

    <v-row>
      <v-col>
        <v-btn color="blue" block
        
        @click="irADashboard"> Dashboard </v-btn>
      </v-col>

      <v-col>
        <v-btn @click="irAdenuncia" color="blue" block> ir a Cierre </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
//import dashboardVista from '@/components/dashboard/dashboardVista.vue';
export default {
  name: "Dasboard",

  data() {
    return {
      folio: '',
      esIncidente :''
    };
  },

  mounted(){

    this.recuperarParametros();
  },

  methods: {

    recuperarParametros(){

      this.folio   = this.$route.params.folion;
     //let idRecuperado = this.$route.params.incidenteId;
      //console.log( this.folio + ' -- ' +this.esIncidente)

    },

    irADashboard(){

      this.$router.push('/dashboard');
    },
    irAdenuncia() {
         
         let idRecuperado = this.$route.params.incidenteId;
           this.$router.push({ name: "Cierre", params: { incidenteId: idRecuperado } });
   
    },
    saludo() {
      console.log("saludos estas en Notificacion cuatro");
    },
  },

  updated() {
    this.saludo();
    
  },
};
</script>

<style scoped>
</style> 