<template>
<v-card>
  <v-card-title>
   Solicitud de Impresión
  </v-card-title>
  <v-card-text v-if="TextoIndicacion">
    <p> 
     Para imprimir esta información se necesita solicitar un permiso.
    </p>
    <p>
    ¿ Deseas solicitar permiso para imprimir esta información?
    </p>
  </v-card-text>
    <v-card-text v-if="TextoRespuesta">
    <p> 
     Se ha enviado una solicitud de impresión 
    </p>
    <p>
    En breve revise las notificaciones de su perfil.
    </p>
  </v-card-text>
   <v-card-actions>
     <v-row>
       <v-col>
                 <v-btn 
        color="blue"
         block
        @click="irADashboard"> Dashboard </v-btn>
       </v-col>

       <v-col>
 
          <v-btn   v-if="TextoIndicacion"
            :loading="loading"
            @click="solicitarPermiso" 
            color="primary" block>
              si, quiero un permiso
          </v-btn>
       </v-col>
     </v-row>



   </v-card-actions>


</v-card>

</template>
<script>
//import dashboardVista from '@/components/dashboard/dashboardVista.vue';

import solicitudPermisoImpresion from '@/components/permisosimpresion/solicitudPermisoImpresion.js';

export default {
  name: "permisoDeImpresion",

  data() {
    return {
      //folio:this.$route.params.folio
      loading : false,
      TextoIndicacion : true,
      TextoRespuesta : false,

    };
  },

  mounted () {
    
  },

  methods: {



    solicitarPermiso() {

       this.loading = true ;
       let incidenteid  = this.$store.state.permisosimpresion.permisosimpresion_incidenteid;
       let usuario  = this.$store.state.permisosimpresion.permisosimpresion_usuarioid;
       let etapa = this.$store.state.permisosimpresion.permisosimpresion_etapa;
  
       let s= this.$store;
       solicitudPermisoImpresion.solicitudImpresion(usuario,incidenteid,etapa,s);
       this.loading = false;

       this.TextoRespuesta= true ;
       this.TextoIndicacion= false;

    },

    irADashboard(){

      this.$router.push('/dashboard');
    },

  },


};
</script>

<style scoped>
</style>