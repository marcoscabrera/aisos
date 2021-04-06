<template>
    <!-------------------------------------------------------------- 
       A continuacion se presenta 
       el codigo que generar el avatar a la derecha de la barra 
       de la web app
      ------------------------------------------------------------->


      <v-menu v-if="this.$store.state.uivars.uivars_hayUnUsuarioLogueado"
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>  
              mdi-account-circle
            </v-icon>

          </v-btn>
        </template>

    

          <v-card>
            <v-card-title>
                <v-list-item class="grow">

                    <v-list-item-avatar color="grey darken-3">
                        <v-img
                        class="elevation-6"
                        alt=""
                        src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                        >
                        </v-img>
                  </v-list-item-avatar>
                   <v-list-item-content>
                    <v-list-item-title> {{ this.$store.state.usuarios.usuarios_usuariologueado.nombre}}</v-list-item-title>
                  </v-list-item-content>

                </v-list-item>
              
            </v-card-title>
            <v-card-subtitle>
               {{ this.$store.state.usuarios.usuarios_usuariologueado.email}}
            </v-card-subtitle>
           <!-- <v-card-text>
              {{ this.$store.state.usuarios.usuarios_usuariologueado.programa}}
            </v-card-text>
             -->
    <v-card-actions>
       
                <v-btn
                block
                text
                color="primary"
                dark
                dense
                @click="irAPerfil">
                Mi Perfil

                </v-btn> 



    </v-card-actions>
    <v-card-actions>

                <v-btn
                block
                text
                color="primary"
                dark
                dense
                @click="cerrarSesion">
                Cerrar Sesión

                </v-btn>

    </v-card-actions>
            <!-- -->
  </v-card>

     
</v-menu>
</template>

<script>
import controlDeSesion from '@/sesion/controlDeSesion.js';
    export default {
        methods: {
            irAPerfil(){
              this.$router.push({name : 'PerfilUsuario'});
            },
            cerrarSesion(){
             controlDeSesion.cerrarSesion(this.$store,this.$router);
          },
        },
        
    }
</script>

<style scoped>

</style>