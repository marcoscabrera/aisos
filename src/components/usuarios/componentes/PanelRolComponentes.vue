<template>
        <v-expansion-panels focusable>
            <v-expansion-panel >
              <v-expansion-panel-header>Roles</v-expansion-panel-header>
                <v-expansion-panel-content>

                    <comboPermisoComponente
                        textoDescriptivo= 'Crear un nuevo Rol'
                        :valor ="this.$store.state.roles.roles_ALTADEROL"
                        nombrePermiso="ALTA DE ROL"
                        accion_A_ejecutar = "action_ALTADEROL" 
                    >
                    </comboPermisoComponente>


                    <comboPermisoComponente
                        textoDescriptivo= 'Dar de baja  un Rol'
                        :valor ="this.$store.state.roles.roles_BAJADEROL"
                        nombrePermiso="BAJA DE ROL"
                        accion_A_ejecutar = "action_BAJADEROL" 
                    >
                    </comboPermisoComponente>

                    <comboPermisoComponente
                        textoDescriptivo= 'Modificar los  Roles'
                        :valor ="this.$store.state.roles.roles_MODIFICACIONDEROL"
                        nombrePermiso="MODIFICACION DE CATALOGOS"
                        accion_A_ejecutar = "action_MODIFICACIONDEROL" 
                    >
                    </comboPermisoComponente>

               </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
</template>
<script>

/*  

action_ALTADEROL 
 action_BAJADEROL 
 action_MODIFICACIONDEROL 

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