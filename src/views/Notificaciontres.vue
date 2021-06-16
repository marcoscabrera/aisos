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
         este reporte ha sido valorado como <strong>"Incidente".</strong>
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
        <v-btn @click="irAdenuncia" color="blue" block> Regresar a la pantalla anterior </v-btn>
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
      this.esIncidente = this.$route.params.esincidente;

      console.log( this.folio + ' -- ' +this.esIncidente)

    },

    irADashboard(){

      this.$router.push('/dashboard');
    },
    irAdenuncia() {
         
         let idRecuperado = this.$route.params.incidenteId;
           this.$router.push({ name: "ValoracionIntegral", params: { id: idRecuperado } });
   
    },
    saludo() {
      console.log("saludos estas en dasboard");
    },
  },

  updated() {
    this.saludo();
    
  },
};
</script>

<style scoped>
</style> 