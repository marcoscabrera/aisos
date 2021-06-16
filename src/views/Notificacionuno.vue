<template>
  <v-container name="contenedornotificacion">
    <v-row>
      <h2 class="text-center">
        <v-col> Gracias, su reporte se ha realizado con exito.</v-col>
      </h2>
    </v-row>
    <v-row>
      <v-col>
        <p class="text-center">

          Se ha notificado a los miembros del  comite de protección infantil 
        </p>
        <p>
          El folio de tu reporte es <strong>{{folio}}</strong>
        </p>
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
      folio:this.$route.params.folio
    };
  },

  methods: {

    irADashboard(){

      this.$router.push('/dashboard');
    },
    irAdenuncia() {
         
         let idRecuperado = this.$route.params.incidenteId;
         this.$router.push({
          name: "DenunciasDetalle",
          params: { id: idRecuperado },
        })
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