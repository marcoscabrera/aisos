<template>
  <v-card>
    <v-card-title>
      <span class="headline"> Nuevo Rol </span>
    </v-card-title>

    <v-card-text>
      <v-container>
        <NombreRolComponentes></NombreRolComponentes>
        <panelCatalgosComponente></panelCatalgosComponente>
        <PanelUsuariosComponentes></PanelUsuariosComponentes>
        <PanelRolComponentes></PanelRolComponentes>
        <PanelValoracionInicialComponentes></PanelValoracionInicialComponentes>
        <PanelValoracionIntegralComponentes></PanelValoracionIntegralComponentes>
        <PanelSeguimientoControles></PanelSeguimientoControles>
        <PanelCierreComponentes></PanelCierreComponentes>
        <PanelDenunciaComponentes></PanelDenunciaComponentes>
        <PanelInvestigacionComponentes></PanelInvestigacionComponentes>
        <PanelArchivosComponentes></PanelArchivosComponentes>
        <PanelEvidenciaComponentes></PanelEvidenciaComponentes>
        <PanelRecibirCorreos></PanelRecibirCorreos>
        <PanelEspeciales></PanelEspeciales>
        <!-- <v-row>
            <v-col>
                <v-switch
                  :v-model="this.$store.state.roles.roles_ACTIVO=='1' ? true :false"
                  class="mx-2"
                  label="Activo "
                  @change="asignarValorInput($event)"
                ></v-switch>
            </v-col>
        </v-row> -->
      </v-container>
    </v-card-text>

    <v-card-actions>
      <v-row>
        <v-col>
            <v-btn block color="red" dark @click="close">Cancelar </v-btn>
        </v-col>
        <v-col>
            <v-btn block color="green" :loading="loading" dark @click="save">
            Guardar
            </v-btn>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>

import apiRoles from '@/apialdeas/apiRoles.js';
import panelCatalgosComponente from '@/components/usuarios/componentes/panelCatalgosComponentes.vue';
import PanelUsuariosComponentes from '@/components/usuarios/componentes/PanelUsuariosComponentes.vue';
import PanelRolComponentes from '@/components/usuarios/componentes/PanelRolComponentes.vue'
import PanelValoracionInicialComponentes from '@/components/usuarios/componentes/PanelValoracionInicialComponentes.vue'
import PanelValoracionIntegralComponentes        from '@/components/usuarios/componentes/PanelValoracionIntegralComponentes.vue'
import PanelSeguimientoControles from '@/components/usuarios/componentes/PanelSeguimientoControles.vue'
import PanelCierreComponentes from '@/components/usuarios/componentes/PanelCierreComponentes.vue'
import PanelDenunciaComponentes from '@/components/usuarios/componentes/PanelDenunciaComponentes.vue'
import PanelInvestigacionComponentes from  '@/components/usuarios/componentes/PanelInvestigacionComponentes.vue'
import PanelArchivosComponentes from  '@/components/usuarios/componentes/PanelArchivosComponentes.vue'
import NombreRolComponentes from '@/components/usuarios/componentes/NombreRolComponentes.vue'
import PanelEvidenciaComponentes from '@/components/usuarios/componentes/PanelEvidenciaComponentes.vue'
import PanelRecibirCorreos from '@/components/usuarios/componentes/PanelRecibirCorreos.vue'
import PanelEspeciales from '@/components/usuarios/componentes/PanelEspeciales.vue'

//import valoracionIntegralEtapa from '@/components/etapas/valoracionIntegralEtapa.vue';
    

export default {
  name: "agregarEvidenciaComponente",

  components: {

    panelCatalgosComponente,
    PanelUsuariosComponentes,
    PanelRolComponentes,
    PanelValoracionInicialComponentes,
    PanelValoracionIntegralComponentes,
    PanelSeguimientoControles,
    PanelCierreComponentes,
    PanelDenunciaComponentes,
    PanelInvestigacionComponentes,
    PanelArchivosComponentes,
    PanelEvidenciaComponentes,
    NombreRolComponentes,
    PanelRecibirCorreos,
    PanelEspeciales
  
  },

  mounted(){
   
   
   if (this.$store.state.roles.roles_id ==0 ){
      this.iniciaalizarVariables();
      this.nuevo=true;
   }else {
     this.nuevo=false;
   }
  

  },

  methods: {

    asignarValorInput(evento){

     // console.log(" evento del switch " + evento);
      let valor =0;
      evento == true ?  valor =1 : valor =0;
     // console.log("valor :" + valor);

      this.$store.dispatch('action_roles_activo',valor );
      // console.log(" VALOR DESPUES DE ASIGNAR EVENTO  " + this.$store.state.roles.roles_ACTIVO);

    },
    iniciaalizarVariables(){




this.$store.dispatch('action_ALTADECATALOGOS','NO');
this.$store.dispatch('action_BAJADECATALOGOS','NO');
this.$store.dispatch('action_MODIFICACIOnDECATALOGOS','NO');

this.$store.dispatch('action_ALTADEUSUARIOS','NO');
this.$store.dispatch('action_BAJADEUSUARIOS','NO');
this.$store.dispatch('action_MODIFICACIONDEUSUARIOS','NO');

this.$store.dispatch('action_ALTADEROL','NO');
this.$store.dispatch('action_BAJADEROL','NO');
this.$store.dispatch('action_MODIFICACIONDEROL','NO');

this.$store.dispatch('action_ALTADEVALORACIONINICIAL','NO');
this.$store.dispatch('action_MODIFICACIONREAPERTURAVALORACIONINICIAL','NO');
this.$store.dispatch('action_EDITARANTESDECIERREDELAVALORACIONINICIAL','NO');
this.$store.dispatch('action_BAJAVALORACIONINICIAL','NO');
this.$store.dispatch('action_IMPRESIONVALORACIONINICIAL','NO');


this.$store.dispatch('action_VISUALIZACIONVALORACIONINICIAL','NO');
this.$store.dispatch('action_ALTADEVALORACIONINTEGRAL','NO');
this.$store.dispatch('action_MODIFICACIONREAPERTURAVALORACIONINTEGRAL','NO');
this.$store.dispatch('action_EDITARANTESDECIERREDELAVALORACIONINTEGRAL','NO');
this.$store.dispatch('action_BAJAVALORACIONINTEGRAL','NO');
this.$store.dispatch('action_IMPRESIONVALORACIONINTEGRAL','NO');
this.$store.dispatch('action_VISUALIZACIONVALORACIONINTEGRAL','NO');
this.$store.dispatch('action_ALTADESEGUIMIENTO','NO');
this.$store.dispatch('action_MODIFICACIONDESEGUIMIENTO','NO');
this.$store.dispatch('action_EDITARDESEGUIMIENTO','NO');
this.$store.dispatch('action_BAJADESEGUIMIENTO','NO');
this.$store.dispatch('action_IMPRESIONDESEGUIMIENTO','NO');
this.$store.dispatch('action_VISUALIZACIONDESEGUIMIENTO','NO');
this.$store.dispatch('action_ALTADECIERRE','NO');
this.$store.dispatch('action_MODIFICACIONDECIERRE','NO');
this.$store.dispatch('action_EDICIONDECIERRE','NO');
this.$store.dispatch('action_BAJADECIERRE','NO');
this.$store.dispatch('action_IMPRESIONDECIERRE','NO');
this.$store.dispatch('action_VISUALIZACIONDECIERRE','NO');
this.$store.dispatch('action_ALTADENUNCIA','NO');
this.$store.dispatch('action_MODIFCACIONDENUNCIA','NO');
this.$store.dispatch('action_EDICIONDENUNCIA','NO');
this.$store.dispatch('action_BAJADENUNCIA','NO');
this.$store.dispatch('action_IMPRESIONDENUNCIA','NO');
this.$store.dispatch('action_VISUALIZACIONDENUNCIA','NO');
this.$store.dispatch('action_ALTAINVESTIGACION','NO');
this.$store.dispatch('action_MODIFICACIONINVESTIGACION','NO');
this.$store.dispatch('action_EDICIONINVESTIGACION','NO');
this.$store.dispatch('action_BAJAINVESTIGACION','NO');
this.$store.dispatch('action_IMPRESIONINVESTIGACION','NO');
this.$store.dispatch('action_VISUALIZACIONINVESTIGACION','NO');
this.$store.dispatch('action_ALTAEVIDENCIA','NO');
this.$store.dispatch('action_MODIFCACIONEVIDENCIA','NO');
this.$store.dispatch('action_EDICIONEVIDENCIA','NO');
this.$store.dispatch('action_BAJAEVIDENCIA','NO');
this.$store.dispatch('action_IMPRESIONEVIDENCIA','NO');
this.$store.dispatch('action_VISUALIZACIONEVIDENCIA','NO');
this.$store.dispatch('action_ALTADEARCHIVOS','NO');
this.$store.dispatch('action_MODIFICACIONARCHIVOS','NO');
this.$store.dispatch('action_IMPRESIONARCHIVOS','NO');
this.$store.dispatch('action_VISUALIZACIONARCHIVOS','NO');
this.$store.dispatch('action_roles_RECIBECORREOS','NO');
//                    this.$store.state.roles.roles_AUTORIZAIMPRESION
//                    this.$store.state.roles.roles_VISIBILIDADDEINCIDENTES

this.$store.dispatch('action_roles_AUTORIZAIMPRESION','NO');
this.$store.dispatch('action_roles_VISIBILIDADDEINCIDENTES','PROPIO');

this.$store.dispatch('action_roles_activo',true);
},


    asignarValor(event){
      console.log(" event " + event );

    },
    cambiarInput(evento) {
      this.evidencia.tipo = evento;
       

    },
    close() {

      this.$router.push("roles")
     },
    save() {

      this.loading=true;

        
      let parametros = {
        id :  this.$store.state.roles.roles_id,
        NOMBREDELROL:      this.$store.state.roles.roles_NOMBREDELROL,
        ALTADECATALOGOS: this.$store.state.roles.roles_ALTADECATALOGOS,
        BAJADECATALOGOS: this.$store.state.roles.roles_BAJADECATALOGOS,
        MODIFICACIOnDECATALOGOS: this.$store.state.roles.roles_MODIFICACIOnDECATALOGOS,
        ALTADEUSUARIOS: this.$store.state.roles.roles_ALTADEUSUARIOS,
        BAJADEUSUARIOS: this.$store.state.roles.roles_BAJADEUSUARIOS,
        MODIFICACIONDEUSUARIOS: this.$store.state.roles.roles_MODIFICACIONDEUSUARIOS,
        ALTADEROL: this.$store.state.roles.roles_ALTADEROL,
        BAJADEROL: this.$store.state.roles.roles_BAJADEROL,
        MODIFICACIONDEROL: this.$store.state.roles.roles_MODIFICACIONDEROL,
        ALTADEVALORACIONINICIAL: this.$store.state.roles.roles_ALTADEVALORACIONINICIAL,
        MODIFICACIONREAPERTURAVALORACIONINICIAL: this.$store.state.roles.roles_MODIFICACIONREAPERTURAVALORACIONINICIAL,
        EDITARANTESDECIERREDELAVALORACIONINICIAL: this.$store.state.roles.roles_EDITARANTESDECIERREDELAVALORACIONINICIAL,
        BAJAVALORACIONINICIAL: this.$store.state.roles.roles_BAJAVALORACIONINICIAL,
        IMPRESIONVALORACIONINICIAL: this.$store.state.roles.roles_IMPRESIONVALORACIONINICIAL,
        VISUALIZACIONVALORACIONINICIAL: this.$store.state.roles.roles_VISUALIZACIONVALORACIONINICIAL,
        ALTADEVALORACIONINTEGRAL: this.$store.state.roles.roles_ALTADEVALORACIONINTEGRAL,
        MODIFICACIONREAPERTURAVALORACIONINTEGRAL: this.$store.state.roles.roles_MODIFICACIONREAPERTURAVALORACIONINTEGRAL,
        EDITARANTESDECIERREDELAVALORACIONINTEGRAL: this.$store.state.roles.roles_EDITARANTESDECIERREDELAVALORACIONINTEGRAL,
        BAJAVALORACIONINTEGRAL: this.$store.state.roles.roles_BAJAVALORACIONINTEGRAL,
        IMPRESIONVALORACIONINTEGRAL: this.$store.state.roles.roles_IMPRESIONVALORACIONINTEGRAL,
        VISUALIZACIONVALORACIONINTEGRAL: this.$store.state.roles.roles_VISUALIZACIONVALORACIONINTEGRAL,
        ALTADESEGUIMIENTO: this.$store.state.roles.roles_ALTADESEGUIMIENTO,
        MODIFICACIONDESEGUIMIENTO: this.$store.state.roles.roles_MODIFICACIONDESEGUIMIENTO,
        EDITARDESEGUIMIENTO: this.$store.state.roles.roles_EDITARDESEGUIMIENTO,
        BAJADESEGUIMIENTO: this.$store.state.roles.roles_BAJADESEGUIMIENTO,
        IMPRESIONDESEGUIMIENTO: this.$store.state.roles.roles_IMPRESIONDESEGUIMIENTO,
        VISUALIZACIONDESEGUIMIENTO: this.$store.state.roles.roles_VISUALIZACIONDESEGUIMIENTO,
        ALTADECIERRE: this.$store.state.roles.roles_ALTADECIERRE,
        MODIFICACIONDECIERRE: this.$store.state.roles.roles_MODIFICACIONDECIERRE,
        EDICIONDECIERRE: this.$store.state.roles.roles_EDICIONDECIERRE,
        BAJADECIERRE: this.$store.state.roles.roles_BAJADECIERRE,
        IMPRESIONDECIERRE: this.$store.state.roles.roles_IMPRESIONDECIERRE,
        VISUALIZACIONDECIERRE: this.$store.state.roles.roles_VISUALIZACIONDECIERRE,
        ALTADENUNCIA: this.$store.state.roles.roles_ALTADENUNCIA,
        MODIFCACIONDENUNCIA: this.$store.state.roles.roles_MODIFCACIONDENUNCIA,
        EDICIONDENUNCIA: this.$store.state.roles.roles_EDICIONDENUNCIA,
        BAJADENUNCIA: this.$store.state.roles.roles_BAJADENUNCIA,
        IMPRESIONDENUNCIA: this.$store.state.roles.roles_IMPRESIONDENUNCIA,
        VISUALIZACIONDENUNCIA: this.$store.state.roles.roles_VISUALIZACIONDENUNCIA,
        ALTAINVESTIGACION: this.$store.state.roles.roles_ALTAINVESTIGACION,
        MODIFICACIONINVESTIGACION: this.$store.state.roles.roles_MODIFICACIONINVESTIGACION,
        EDICIONINVESTIGACION: this.$store.state.roles.roles_EDICIONINVESTIGACION,
        BAJAINVESTIGACION: this.$store.state.roles.roles_BAJAINVESTIGACION,
        IMPRESIONINVESTIGACION: this.$store.state.roles.roles_IMPRESIONINVESTIGACION,
        VISUALIZACIONINVESTIGACION: this.$store.state.roles.roles_VISUALIZACIONINVESTIGACION ,
        ALTAEVIDENCIA: this.$store.state.roles.roles_ALTAEVIDENCIA,
        MODIFCACIONEVIDENCIA: this.$store.state.roles.roles_MODIFCACIONEVIDENCIA,
        EDICIONEVIDENCIA: this.$store.state.roles.roles_EDICIONEVIDENCIA,
        BAJAEVIDENCIA: this.$store.state.roles.roles_BAJAEVIDENCIA,
        IMPRESIONEVIDENCIA: this.$store.state.roles.roles_IMPRESIONEVIDENCIA,
        VISUALIZACIONEVIDENCIA: this.$store.state.roles.roles_VISUALIZACIONEVIDENCIA,
        ALTADEARCHIVOS: this.$store.state.roles.roles_ALTADEARCHIVOS,
        MODIFICACIONARCHIVOS: this.$store.state.roles.roles_MODIFICACIONARCHIVOS,
        IMPRESIONARCHIVOS: this.$store.state.roles.roles_IMPRESIONARCHIVOS,
        VISUALIZACIONARCHIVOS: this.$store.state.roles.roles_VISUALIZACIONARCHIVOS,
        RECIBECORREOS : this.$store.state.roles.roles_RECIBECORREOS,
        AUTORIZAIMPRESION : this.$store.state.roles.roles_AUTORIZAIMPRESION,
        VISIBILIDADDEINCIDENTES : this.$store.state.roles.roles_VISIBILIDADDEINCIDENTES,
        ACTIVO: this.$store.state.roles.roles_ACTIVO,

      } ;


    //console.log(" cual es el valor del roles_ACTIVO : " +  this.$store.state.roles.roles_ACTIVO);
    let promesa ;

    this.nuevo ==true ? 
    promesa = apiRoles.nuevo__roles(parametros,this.$store) :
    promesa =apiRoles.update__roles(parametros,this.$store) ;


     promesa
    .then( response => { 
      console.log(" valor de nuev o: " +  this.nuevo);
     // console.log(response.data["id"]);
      this.RolId = response.data["id"];
     // console.log(" Valor de RolId : " +  this.RolId);
        this.nuevo = false;
       //actualizando el rol del usuario logueado .
       let idRolCargado = this.$store.state.usuarios.usuarios_usuariologueado_rol.id;
        
       let  rolCargado = apiRoles.cargar__roles(idRolCargado, this.$state);
        rolCargado
       .then( response => {

         typeof response;
        
          // console.log(JSON.stringify(response.data));
          //actualizamos los permisos del rol que tiene el usuario que esta 
          //logueado actualmente
          this.$store.dispatch('action_usuarios_usuariologueado_rol', response.data[0]);
          this.loading= false;
       } )
       .catch( error => { 
          typeof error;
         //console.log(JSON.stringify(error.data));
           this.loading= false;
         });

      } )
    .catch( error => { 
         typeof error;
         //console.log(JSON.stringify(error.data));
           this.loading= false;
      });

   


    },
  },

  data() {
    return {
      RolId  : '0',
      loading: false,
      itemsOpciones:["SI","NO"],
      nombreRol : '',
      nuevo: false,

    };
  },
};
</script>

<style scoped>
</style>