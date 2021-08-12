<template>
      <v-list  v-if="this.$store.state.uivars.uivars_vermenuprincipal"
      max-width =  "100%"
      dense
     class="barra">
       <!--- <v-list-item two-line>
          <v-list-item-avatar>
            <img
              src="images/aldeas_logo.png"
              alt=""
            />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title color="white"> Aldeas Infantiles </v-list-item-title>
            <v-list-item-subtitle color="white">
              Sistema de registro de incidentes
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item> -->

        <v-list-item @click="irADashboard" v-if="this.$store.state.uivars.uivars_puedevermenulateral">
          <v-list-item-action>
            <v-icon color="blue"> mdi-view-dashboard-variant </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title color="white"> Dashboard </v-list-item-title>
          </v-list-item-content>
        </v-list-item>



        <v-list-item @click="irAConciencia" v-if="this.$store.state.uivars.uivars_puedevermenulateral">
          <v-list-item-action>
            <v-icon color="blue"> mdi-alarm-panel-outline </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title color="white"> Conciencia </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="irAPrevencion" v-if="this.$store.state.uivars.uivars_puedevermenulateral">
          <v-list-item-action>
            <v-icon color="blue"> mdi-alarm-panel-outline </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title color="white"> Prevencion </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="irAEstadisticas" v-if="this.$store.state.uivars.uivars_puedevermenulateral">
          <v-list-item-action>
            <v-icon color="blue"> mdi-chart-bar </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title color="white"> Estadisticas </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
       
 

        <v-list-item  @click="cerrarSesion">
          <v-list-item-action>
            <v-icon color="blue"> mdi-logout </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title color="white" > .Salir. </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
</template>

<script>
import controlDeSesion   from '@/sesion/controlDeSesion.js';
export default {
 
 props : {
    verRespuesta   : Boolean,
    verSeguimiento : Boolean,
    verInicial     : Boolean,
    verIntegral    : Boolean,
    verCierre      : Boolean
 },
 methods : {

     cerrarSesion(){


        this.$store.dispatch("actions_uivars_vermenuprincipal",false);
    
        controlDeSesion.cerrarSesion(this.$store,this.$router);


    },
    irAconfiguracion() {
      this.$store.dispatch("actions_uivars_vermenuprincipal",false);
      this.$router.push("/configuracion");
    },
    irADashboard() {
       this.$store.dispatch("actions_uivars_vermenuprincipal",false);
    
      this.$router.push("/dashboard");
    },
    irADenuncias() {
       this.$store.dispatch("actions_uivars_vermenuprincipal",false);
    
      this.$router.push("/denuncias");
    },
    irAConciencia() {
       this.$store.dispatch("actions_uivars_vermenuprincipal",false);
    
       this.$store.dispatch('actions_uivars_tipo_conciencia_o_prevencion', 'conciencia');
      this.$router.push({ name : 'Conciencia' , params:{ tipo:'c' }});
    },
    irAPrevencion() {
       this.$store.dispatch("actions_uivars_vermenuprincipal",false);
    
     this.$store.dispatch('actions_uivars_tipo_conciencia_o_prevencion', 'prevencion');
     this.$router.push({ name : 'Prevencion' , params:{ tipo:'p' }});
  
    },
    irAEstadisticas() {
       this.$store.dispatch("actions_uivars_vermenuprincipal",false);
    
      this.$router.push("/estadisticas");
    },

 }


}

</script>