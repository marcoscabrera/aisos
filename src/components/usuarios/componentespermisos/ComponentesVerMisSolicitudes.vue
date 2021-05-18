<template>
    <v-card>
        <v-card-title>
             Mis Solicitudes de permiso de impresion
        </v-card-title>
        <v-card-text>

            <!--  se ocupan banner de vuetify -->
             <v-banner v-for=" solicitud in solicitudes" :key="solicitud.id"
                two-line

               
            >
                <v-icon
                slot="icon"
                color="warning"
                size="36"
                >
                mdi-alarm-light-outline
                </v-icon>
                <span v-if="verTexto">
                Tú solicitud  para imprimir la etapa de  {{solicitud.etapa}}
                del Folio {{solicitud.folio}}
                </span>

                <span v-if="verRespuesta">
                 
                La solicitud ha sido procesada
              
                </span>

                <template v-slot:actions>
                <!--
                    <v-icon v-if="solicitud.respuesta == 'APROBADO'"
                    color="green">
                        mdi-check-circle
                    </v-icon>

                    <v-icon v-if="solicitud.respuesta == 'DECLINADO'"
                    color="red">
                        mdi-close-circle
                    </v-icon>

                   <v-icon v-if="solicitud.respuesta =='PENDIENTE' "
                    color="yellow">
                        mdi-clock-time-nine-outline
                    </v-icon>
                -->
               
                <v-btn v-if="solicitud.respuesta == 'DECLINADO'"
                    color="red"
                    dark
                    dense                    
                >
                   La solicitud fue declinada
                     
                </v-btn>

                <v-btn v-if="solicitud.respuesta =='PENDIENTE'" 
                    color="yellow"
                    dark
                    dense 
                   
                >
                    La solicitud esta pendiente de aprobación
                </v-btn>
               
                <v-btn v-if="solicitud.respuesta =='APROBADO'" 
                    color="green"
                    dark
                    dense 
                    @click="impresionDeEtapa(solicitud)"
                >
                    Ya puedes imprimir haciendo click aqui.
                </v-btn>
                </template>
            </v-banner>

             
        </v-card-text>
    </v-card>
</template>

<script>
    //import impresiones_etapauno from '@/components/etapas/impresiones/impresiones_etapauno.js';
    import apiPermisosimpresion from '@/apialdeas/apiPermisosimpresion.js';
  

    export default {

        data() {
            return {
                verRespuesta: false,
                verTexto :true
            }
        },

        /*
        --DEFINICION DE PROPS --
        -- solicitudes : son todos los permisos en estatus de pendiente
        */
        props : {
            solicitudes : { type : Array}
        },

        methods: {
            /*
            Al hace click en este boton deben de ocurrir las siguiente acciones 
            -- se debe de imprimir el reporte solicitado 
            -- se debe de mover el estado de vigente de SI a NO , para que no pueda
               volverse a utilizar.
               
            */
            impresionDeEtapa(solicitud){

                let incidentid  = solicitud.incidenteid;
                let etapa       = solicitud.etapa;
                console.log("valor de etapa : " + etapa);
                 console.log("valor de incidentid : " + incidentid);
                /*
                this.$store.dispatch('actions_permisosimpresion_incidenteid', incidentid);
                this.$store.dispatch('actions_permisosimpresion_usuarioid', this.$store.state.usuarios.usuarios_usuariologueado.id);
                this.$store.dispatch('action_id_para_imprimir',incidentid);
                */
               
                switch (etapa) {
                case 'Valoracion Integral':
                    console.log('Oranges are $0.59 a pound.');
                    this.$store.dispatch('actions_permisosimpresion_etapa', "Valoracion Integral");
    
                    break;
                case 'Valoracion Inicial':
                    this.impresion_etapaInicial(solicitud.id);
                    break;
                case 'Seguimiento':
                   
                    // expected output: "Mangoes and papayas are $2.79 a pound."
                    break;
                default:
                    console.log(`Sorry, we are out of ${etapa}.`);
                }




                  
            },


            impresion_etapaInicial(solicitudid) {

                   console.log('Hacia la impresion de la valoracion inicial ');
                    /* ---------------------------------------------------------*/
                     
                    //this.$store.dispatch('actions_permisosimpresion_etapa', "Valoracion Inicial");
                   
                   let parametros  = { id:  solicitudid ,tipo : 'autorizacion' };

                   //impresiones_etapauno.obtenerValores(parametros,this.$store);

                    let promesa = apiPermisosimpresion.Post_generarDocumentoDeImpresion(parametros,this.$store);
                     promesa
                    .then( response => { 

                        console.log(JSON.stringify(response.data));
                        console.log(" Nombre del reporte : " + response.data.nombrereporte);
                        
                        let directorio ="/apidatos/reportesetapas/" + response.data.nombrereporte;
                        
                        let link =  this.$store.state.urlServidor + directorio ;
        
                        this.$store.dispatch("actions_uivars_docto_a_ver",link);

                       this.$router.push({
                        name: "VisorPDF"
                        });
                        
                        
                        })
                    .catch( error => { console.log(JSON.stringify(error.data))});
                    
             
          
            
                    //-------------------------------------
                    //redireccionamos a pantalla

                        //    this.$router.push({
                       // name: "ReporteImpresion"
                       // });


            }

        },
        
    }
</script>

<style scoped>

</style>