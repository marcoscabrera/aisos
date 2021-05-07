<template>
    <v-card>
        <v-card-title>
            Solicitudes de permisos para impresion de documentos
        </v-card-title>
        <v-card-text>

            <!--  se ocupan banner de vuetify -->
             <v-banner v-for=" permiso in permisos" :key="permiso.id"
                two-line

               
            >
                <v-icon
                slot="icon"
                color="warning"
                size="36"
                >
                mdi-alarm-light-outline
                </v-icon>
                <span :id="'texto' + permiso.id" >
                El usuario {{permiso.nombre}} solicita permiso para imprimir la etapa de  {{permiso.etapa}}
                del Folio {{permiso.folio}}
                </span>

                <span  :id="'respuesta' + permiso.id" class="d-none">
                 
                    La solicitud ha sido procesada
              
                </span>

                <template v-slot:actions>

                <v-btn :id="'texto_cancelar' + permiso.id"
                    color="red"
                    dark
                    dense
                    @click="cancelarPermiso(permiso.id)"
                >
                    declinar
                     
                </v-btn>

                <v-btn :id="'texto_aprobar' + permiso.id"
                    color="green"
                    dark
                    dense 
                     @click="autorizarPermiso(permiso.id)"
                >
                    Autorizar
                </v-btn>

                </template>
            </v-banner>

             
        </v-card-text>
    </v-card>
</template>

<script>
    //--LIBRERIAS --
     import declinarPermiso from './declinarPermiso.js'
     import autorizaPermiso from './autorizaPermiso.js'
    export default {

        data() {
            return {
                verRespuesta: 0,
                verTexto :true
            }
        },

        /*
        --DEFINICION DE PROPS --
        -- permisos : son todos los permisos en estatus de pendiente
        */
        props : {
            permisos : { type : Array}
        },

        methods: {
            cancelarPermiso(  permisoId   ) {
                /* evento que se dispara al hace click en el boton declinar
                -- se obtiene el id del usuariologueado (del store)
                -- se accede a la libreria de declinarPermiso.js
                */             
                typeof permisoId;
                let usuarioidautorizo = this.$store.state.usuarios.usuarios_usuariologueado.id;
                declinarPermiso.declinarPermiso( permisoId,usuarioidautorizo, this.$store );
                this.verTexto =false;
                this.verRespuesta = true;
            },
            autorizarPermiso(  permisoId   ) {
                /* evento que se dispara al hace click en el boton autorizar
                -- se obtiene el id del usuariologueado (del store)
                -- se accede a la libreria de autorizaPermiso.js
                */
                typeof permisoId;
                let usuarioidautorizo = this.$store.state.usuarios.usuarios_usuariologueado.id;
                autorizaPermiso.autorizarPermiso( permisoId,usuarioidautorizo, this.$store );
                // this.verTexto =false;

                 /* 
                 eliminamos la clase d-none del span con prefijo respuesta y 
                 lo agregamos al span con prefijo texto , de la misma manera se 
                 agrega la clase d-none a los botones para ocultarlos
                 */

                 let v= "respuesta" + permisoId;
                 let x = "texto" + permisoId;
              
                 let t = "texto_cancelar" + permisoId;
                  let a = "texto_aprobar" + permisoId;

                var element = document.getElementById(v);
                element.classList.remove("d-none");

                console.log(" t: " + t);

                var texto3 = document.getElementById(x);
                texto3.classList.add("d-none");

                var texto = document.getElementById(t);
                texto.classList.add("d-none");

                var texto2 = document.getElementById(a);
                texto2.classList.add("d-none");

                //termina modificacion de clases css en <span> de texto y respuesta.
 },
        },
        
    }
</script>

<style scoped>

</style>