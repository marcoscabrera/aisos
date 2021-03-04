//SolicitudesImpresionComponente.vue
<template>

<v-container>
    <ul v-for="permiso in permisos" :key="permiso.id">

        <il>
              <v-banner
                single-line
        
              >

              <template v-slot:actions>
                  <v-btn color="red" dark dense>
                      no
                  </v-btn>
                  <v-btn color="green">
                      si
                  </v-btn>
              </template>
              </v-banner>
        </il>

    </ul>
</v-container>



</template>

<script>
import apiPermisosimpresion from '@/apialdeas/apiPermisosimpresion.js';
    export default {

        name: 'SolicitudesImpresionComponente',

        data() {
            return {
                pedidos: [],
                pedidos_pendientes: [],
                pedidos_resueltas: [],
            }

        },
        mounted () {
            this.cargar_las_peticiones();
        },
         methods : {

            cargar_las_peticiones(){

              // let usuarioid = this.$store.state.usuarios.usuario_logueado.id;
                let programa =this.$store.state.usuarios.usuario_logueado.programa;
                
                let p = apiPermisosimpresion.cargar__permisosimpresion(programa,this.$store);

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
            
        }
        
    }
</script>

<style scoped>

</style>