<template>
<v-container>
    <v-row>
        <v-col>
     <p>
         <strong>POLÍTICA DE PRIVACIDAD</strong>
          En La Empresa, su privacidad es importante para nosotros. Esta declaración establece las prácticas de privacidad con respecto a la compilación, uso y divulgación de información personal en este sitio web de carreras profesionales.
     </p>
 
<p>
La información personal es aquella información que lo identifica a usted personalmente. La información personal podrá incluir su nombre, dirección de correo electrónico y dirección postal, según sea el caso. Los visitantes del sitio web no podrán solicitar la revelación de ningún dato personal. Sin embargo, en forma voluntaria, podrá usted proporcionarnos y divulgar cualquier información personal, mediante el uso de ciertas características de nuestro sitio tales como la de la sección del seguimiento (Follow us), y de la sección de carreras (Careers) de este sitio.
</p>
 
<p>
Sin su permiso, La Empresa jamás revelará, venderá o arrendará a terceros distintos a los pertenecientes a nuestras subsidiarias, la información personal que usted nos haya proporcionado a través del sitio, a menos que la ley nos obligue a hacerlo.
</p>
 
<p>
 <strong>Acceso  </strong>
Si usted ya ha solicitado ser parte de una lista de correo, podrá cancelar su perfil yendo a la sección en la que creó dicha solicitud, o a través de su contacto con nosotros, utilizando la información suministrada al final de esta declaración de privacidad. Si usted ya nos ha proporcionado su información personal y desea verificar, eliminar o corregir la información existente en nuestros archivos, sírvase contactarnos utilizando la información suministrada al final de esta declaración de privacidad.
</p>
 

     </v-col>
    </v-row>
    <v-row>
        <v-col>
            <v-btn color="red" dark block @click="cancelar">
                No Acepto
            </v-btn>

        </v-col>
         <v-col>
             <v-btn color="green" dark block @click="aceptar">
               Acepto
            </v-btn>
            
        </v-col>
    </v-row>
</v-container>



</template>

<script>
import controlDeSesion from '@/sesion/controlDeSesion.js';
 
    export default {

        methods: {
     mostrarMenuLateral(){

      let usurio = this.$store.state.usuarios.usuarios_usuariologueado;
      console.log(" usurio : " + usurio.id);
      usurio.id == "" ? this.$store.dispatch('actions_uuivars_puedevermenulateral',false) : this.$store.dispatch('actions_uuivars_puedevermenulateral',true);
      
     let tiporol = this.$store.state.usuarios.usuarios_usuariologueado_rol.roles_NOMBREDELROL;
    if (tiporol == "SUPERADMIN"){
        this.$store.dispatch("actions_uuivars_puedever_configuracion",true);
    }
    //this.$store.dispatch("actions_uuivars_puedever_configuracion",true);
   

    },
            cancelar() {
 controlDeSesion.cerrarSesion(this.$store,this.$router);
            },
            aceptar() {
                this.mostrarMenuLateral();
                this.$router.push('Dashboard');
            }
        },
        
    }
</script>

<style scoped>

</style>