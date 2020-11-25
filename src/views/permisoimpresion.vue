<template>
  <v-container name="contenedornotificacion">
    <v-row>
      <h2 class="text-center">
        <v-col>Solicitud de Impresión.</v-col>
      </h2>
    </v-row>
    <v-row>
      <v-col></v-col>
      <v-col>
        <p class="text-center">

          Se ha notificado de su solicitud a los miembros del  comite de proteccion infantil via correo
        </p>
        <p class="text-center">
          Usuario :<strong>** usuario actual de la sesion **</strong>
        </p>
      </v-col>
      <v-col></v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-btn color="blue" block
        
        @click="irADashboard"> Dashboard </v-btn>
      </v-col>

      <v-col>
        <v-btn @click="irAdenuncia" color="blue" block> Ver Reporte </v-btn>
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
      //folio:this.$route.params.folio
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