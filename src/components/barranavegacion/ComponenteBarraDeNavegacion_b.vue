<template>
    <v-row id="cp1" v-if="this.$store.state.uivars.uivars_vermenuprincipal">

        <v-col col-xs-12 col-sm-12 col-md-3 col-lg-3>

            <v-btn @click="irADashboard" dense block>
                <v-icon color ="blue">
                      mdi-view-dashboard-variant 
                </v-icon>

                Dashboard

            </v-btn>

        </v-col>

        <v-col col-xs-12 col-sm-12 col-md-3 col-lg-3>
          
            <v-btn @click="irAConciencia" dense block>
                <v-icon color ="blue">
                       mdi-alarm-panel-outline
                </v-icon>

                Conciencia

            </v-btn>
        </v-col>



        <v-col col-xs-12 col-sm-12 col-md-3 col-lg-3>
            <v-btn @click="irAPrevencion" dense block>
                <v-icon color ="blue">
                       mdi-alarm-panel-outline
                </v-icon>

                Prevencion

            </v-btn>
        </v-col>



        <v-col col-xs-12 col-sm-12 col-md-3 col-lg-3>
            <v-btn @click="irAEstadisticas" dense block>
                <v-icon color ="blue">
                       mdi-chart-bar
                </v-icon>

                Estadisticas

            </v-btn>

        </v-col>

        <v-col col-xs-12 col-sm-12 col-md-3 col-lg-3>
            <v-btn @click="cerrarSesion" dense block>
                <v-icon color ="blue">
                       mdi-logout
                </v-icon>

                Cerrar Sesion

            </v-btn>
        </v-col>



    </v-row>

    

     
 

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