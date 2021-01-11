<template>
        <v-expansion-panels focusable>
            <v-expansion-panel >
              <v-expansion-panel-header>Usuarios</v-expansion-panel-header>
                <v-expansion-panel-content>

                    <comboPermisoComponente
                        textoDescriptivo= 'Creacion de un nuevo usuario'
                        :valor ="this.$store.state.roles.roles_ALTADEUSUARIOS"
                        nombrePermiso="ALTA DE USUARIOS"
                        accion_A_ejecutar = "action_ALTADEUSUARIOS" 
                    >
                    </comboPermisoComponente>


                    <comboPermisoComponente
                        textoDescriptivo= 'Dar de baja  Usuarios'
                        :valor ="this.$store.state.roles.roles_BAJADEUSUARIOS"
                        nombrePermiso="BAJA DE USUARIOS"
                        accion_A_ejecutar = "action_BAJADEUSUARIOS" 
                    >
                    </comboPermisoComponente>

                    <comboPermisoComponente
                        textoDescriptivo= 'Modificar los  Usuarios'
                        :valor ="this.$store.state.roles.roles_MODIFICACIONDEUSUARIOS"
                        nombrePermiso="MODIFICACION DE USUARIOS"
                        accion_A_ejecutar = "action_MODIFICACIONDEUSUARIOS" 
                    >
                    </comboPermisoComponente>

               </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
</template>
<script>

/*  

 action_ALTADEUSUARIOS 
 action_BAJADEUSUARIOS 
 action_MODIFICACIONDEUSUARIOS 

*/
import comboPermisoComponente from '@/components/usuarios/componentes/comboPermisoComponente.vue';

export default {

components :{

    comboPermisoComponente

},

data() {
    return {
    
      itemsOpciones:["SI","NO"],
      
    }
},

}

</script>