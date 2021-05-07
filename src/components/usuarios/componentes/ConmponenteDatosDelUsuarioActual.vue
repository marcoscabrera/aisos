<template>
    <v-card>
        <v-card-title>
            Hola  {{this.$store.state.usuarios.usuarios_usuariologueado.nombre}}
        </v-card-title>
        <v-card-text>
            <v-list>
                <v-list-item>
                    Nombre: {{this.$store.state.usuarios.usuarios_usuariologueado.nombre}}
                </v-list-item>
                <v-list-item>
                    Email: {{this.$store.state.usuarios.usuarios_usuariologueado.email}}
                </v-list-item>
                <v-list-item>
                    Programa: {{this.$store.state.usuarios.usuarios_usuariologueado.programa}}
                </v-list-item>
                <v-list-item>
                    Rol: {{this.$store.state.usuarios.usuarios_usuariologueado.rol}}
                </v-list-item>
                 <v-list-item v-if="this.$store.state.usuarios.usuarios_usuariologueado_rol.ALTADECATALOGOS == 'SI' ">
                    <v-btn color ="primary" 
                    dark 
                    dense
                    @click="verAdministracion">
                        Administracion
                    </v-btn>
                </v-list-item>
            </v-list>


             
        </v-card-text>
    </v-card>
</template>

<script>
    //--LIBRERIAS --

     export default {

        data() {
            return {
                verRespuesta: false,
                verTexto :true,
                
            }
        },



        methods: {

            verAdministracion(   ) {

                this.$router.push({name: 'Configuracion'});

            },
            

        },
        
    }
</script>

<style scoped>

</style>