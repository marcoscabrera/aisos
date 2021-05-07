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
                <v-btn color="primary" dark dense block
                @click="cargarPerfil">
                 Perfil
                </v-btn>  
            </v-col>

        </v-row>
        <br>
        <!--
            Este componente muestra las peticiones de impresion 
            que se tienen que autorizar o declinar.
            -->
        <ComponentesVerSolicitudes v-if="verSolicitudes"
        :permisos = "permisos">

        </ComponentesVerSolicitudes>

        <!-- 
         Este componente visualiza las solicitudes que el usuario 
         ha realizado
            -->
        <ComponentesVerMisSolicitudes v-if="verSolicitudesUsuario"
        :solicitudes = "solicitudes">

        </ComponentesVerMisSolicitudes>

        <!--
            Este componente muestras los datos del usuario
        -->
        <ConmponenteDatosDelUsuarioActual v-if="verPerfil">

        </ConmponenteDatosDelUsuarioActual>

        <br>
    <v-alert type="info">
     Actualmente esta caracteristica esta en desarrollo.
    </v-alert>
    </v-container>

</template>

<script>
import apiPermisosimpresion from '@/apialdeas/apiPermisosimpresion.js';
import ComponentesVerSolicitudes from '@/components/usuarios/componentespermisos/ComponentesVerSolicitudes.vue';
import ConmponenteDatosDelUsuarioActual from '@/components/usuarios/componentes/ConmponenteDatosDelUsuarioActual.vue';
import ComponentesVerMisSolicitudes from   '@/components/usuarios/componentespermisos/ComponentesVerMisSolicitudes.vue';


export default {

        data() {
            return {
                verPerfil : false,
                verSolicitudes: false,
                verSolicitudesUsuario: false,
                
                loadingSolicitudes : false,
                permisos :[],
                solicitudes :[]
            }
        },


        
        components : {  
            ComponentesVerSolicitudes, 
            ConmponenteDatosDelUsuarioActual,
            ComponentesVerMisSolicitudes
         } ,

        methods: {


            cargarPerfil(){
                /*
                COn esta funcion mostramos el componente 
                que nos muetras los datos del usuarios actual. 
                - Podra cambiar su nombre tal vez
                -- podra cambiar su password --*por el momento ya no
                -- si el usuario tiene permiso de alta de catalogos 
                   podra acceder al area de admninsreaion 
                */
               
               this.verPerfil = true;

           },


            esteusuarioPuedeAutorizar(){

                /*
                 si este usuario puedeautorizar 

                  Este usuario podria presentar tres casos:
                  -- ver todoas las solicitudes de todos los programas
                  -- ver solo las solicitudes del programa al que pertenece
                  -- no ver una sola solicitud.
                
                 */
              
              if (this.$store.state.usuarios.usuarios_usuariologueado_rol.AUTORIZAIMPRESION == 'SI'){
               
                 
                // que visibilidad tiene.

                this.$store.state.usuarios.usuarios_usuariologueado_rol.VISIBILIDADDEINCIDENTES == 'TODOS' 
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

            /*
            Oportunidad para refactorizar esta funcion
            */
            getMisSolicitudes() {

                this.loadingSolicitudes = true;
                this.verSolicitudes= true ;

                //solicitamos al servidores las peticiones correspondientes
                // let usuarioid = this.$store.state.usuarios.usuario_logueado.id;
                let id =this.$store.state.usuarios.usuarios_usuariologueado.id;
                
                console.log("valor del usuarios id "+ id) ;
                let p = apiPermisosimpresion.cargar__permisosimpresion(id,this.$store);

                 p
                .then( response => { 

                    console.log(JSON.stringify(response.data));
                     
                    console.log("visisbilidad " +  this.$store.state.usuarios.usuarios_usuariologueado_rol.VISIBILIDADDEINCIDENTES );
                    this.$store.state.usuarios.usuarios_usuariologueado_rol.VISIBILIDADDEINCIDENTES == 'PROPIOS' ? 
                    this.solicitudes = response.data : 
                    this.permisos =response.data;
                    

                 

                    } )
                .catch( error => { console.log(JSON.stringify(error.data))});
               

                this.loadingSolicitudes = false;

            },
               


            getSolicitudes() {
                
                this.loadingSolicitudes = true;
                this.verSolicitudes= true ;

                //solicitamos al servidores las peticiones correspondientes
                // let usuarioid = this.$store.state.usuarios.usuario_logueado.id;
                let id =this.$store.state.usuarios.usuarios_usuariologueado.id;
                
                console.log("valor del usuarios id "+ id) ;
                let p = apiPermisosimpresion.cargar__permisosimpresion(id,this.$store);

                 p
                .then( response => { 

                    console.log(JSON.stringify(response.data));
                    
                    console.log("visisbilidad " +  this.$store.state.usuarios.usuarios_usuariologueado_rol.VISIBILIDADDEINCIDENTES );
                   
                    this.$store.state.usuarios.usuarios_usuariologueado_rol.VISIBILIDADDEINCIDENTES == 'PROPIOS' ? 
                    this.modificarParaNormal(response.data) : 
                    this.modificarParaAdmins(response.data) ;
          

                    } )
                .catch( error => { console.log(JSON.stringify(error.data))});
               

                this.loadingSolicitudes = false;
                
            },

            modificarParaAdmins(data){

                 this.permisos = data;
                 this.verSolicitudes= true      ;
                 this.verSolicitudesUsuario= false ;

            },

            modificarParaNormal(data){

                 this.solicitudes = data;
                 this.verSolicitudes= false ;
                 this.verSolicitudesUsuario= true ;


            }
        },
        
    }
</script>

<style scoped>

</style>