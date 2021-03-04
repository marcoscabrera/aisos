<template>

    <v-container>
        <v-row>
          
            <v-col cols="12" xs="12" sm="4" md="4" lg="4">
                <v-btn color="primary" dark dense block>
                 Actividad
                </v-btn>

            </v-col>

            <v-col cols="12" xs="12" sm="4" md="4" lg="4">
                 <v-btn color="primary" dark dense block
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

    </v-container>

</template>

<script>
import apiPermisosimpresion from '@/apialdeas/apiPermisosimpresion.js';
    export default {

        methods: {
            getSolicitudes() {

                //solicitamos al servidores las peticiones correspondientes
                // let usuarioid = this.$store.state.usuarios.usuario_logueado.id;
                let id =this.$store.state.usuarios.usuarios_usuariologueado.id;
                
                let p = apiPermisosimpresion.cargar__permisosimpresion(id,this.$store);

                 p
                .then( response => { 

                    console.log(JSON.stringify(response.data));

                    let ped = response.data[0];

                    this.pedidos_pendientes = ped.map( function(l){
                        return l.respuesta == 'PENDIENTE';
                    });


                    } )
                .catch( error => { console.log(JSON.stringify(error.data))});

                
            }
        },
        
    }
</script>

<style scoped>

</style>