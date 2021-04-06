<template>

    <v-container>
        <v-row>
          
            <v-col cols="12" xs="12" sm="4" md="4" lg="4">
                <v-btn color="primary" dark dense block>
                 Actividad
                </v-btn>

            </v-col>

            <v-col cols="12" xs="12" sm="4" md="4" lg="4">
                 <v-btn color="primary"
                 :loading="loadingSolicitudes" 
                 dark dense block
                 @click="getSolicitudes">
                 Solicitudes
                </v-btn>               
            </v-col>


            <v-col cols="12" xs="12" sm="4" md="4" lg="4">
                <v-btn color="primary" dark dense block>
                 Perfil
                </v-btn>  
            </v-col>

        </v-row>
        <br>

        <ComponentesVerSolicitudes v-if="verSolicitudes">

        </ComponentesVerSolicitudes>

        <br>
    <v-alert type="info">
     Actualmente esta caracteristica esta en desarrollo.
    </v-alert>
    </v-container>

</template>

<script>
import apiPermisosimpresion from '@/apialdeas/apiPermisosimpresion.js';
import ComponentesVerSolicitudes from '@/components/usuarios/componentespermisos/ComponentesVerSolicitudes.vue';
    export default {

        data() {
            return {
                verSolicitudes: false,
                loadingSolicitudes : false
            }
        },

        updated () {
            
        },
        
        components : {  ComponentesVerSolicitudes } ,

        methods: {


            esteusuarioPuedeAutorizar(){

                //este usuario puedeautorizar 
              
              if (this.$store.state.usuarios.usuarios_usuariologueado_rol.AUTORIZAIMPRESION == 'SI'){
               
                 
                // que visibilidad tiene.

                this.$store.state.usuarios.usuarios_usuariologueado_rol.VISIBILIDADDEINCIDENTES == 'VISIBILIDADDEINCIDENTES' 
                ? this.cargarTodosLosIncidentesSinAutorizar() 
                : this.$store.state.usuarios.usuarios_usuariologueado_rol.VISIBILIDADDEINCIDENTES == 'PROGRAMA' 
                ? this.cargarTodosLosIncidentesSinAutorizarDeUnPrograma()
                : this.cargatTodasLasSolicitudesDeEsteUsuario();
               

              }else{
                  console.log(" No esta autorizado para ver solicitudes.");
              }



            },

              cargarTodosLosIncidentesSinAutorizar() {

                   this.getSolicitudes();

              },
              cargarTodosLosIncidentesSinAutorizarDeUnPrograma(){

              },
             cargatTodasLasSolicitudesDeEsteUsuario(){

             },
               


            getSolicitudes() {
                
                this.loadingSolicitudes = true;
                this.verSolicitudes= true ;

                //solicitamos al servidores las peticiones correspondientes
                // let usuarioid = this.$store.state.usuarios.usuario_logueado.id;
                let id =this.$store.state.usuarios.usuarios_usuariologueado.id;
                
                let p = apiPermisosimpresion.cargar__permisosimpresion(id,this.$store);

                 p
                .then( response => { 

                    console.log(JSON.stringify(response.data));

                    

                 

                    } )
                .catch( error => { console.log(JSON.stringify(error.data))});
               

                this.loadingSolicitudes = false;
                
            }
        },
        
    }
</script>

<style scoped>

</style>