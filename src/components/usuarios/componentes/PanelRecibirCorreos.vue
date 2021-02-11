<template>
        <v-expansion-panels focusable>
            <v-expansion-panel >
              <v-expansion-panel-header> Correos </v-expansion-panel-header>
                <v-expansion-panel-content>

                    <comboPermisoComponente
                        textoDescriptivo= 'Recepcion de notificaciones por correo'
                        :valor ="this.$store.state.roles.roles_RECIBECORREOS"
                        nombrePermiso="NOTIFICACIONES POR  CORREOS"
                        accion_A_ejecutar = "action_roles_RECIBECORREOS" 
                    >
                    </comboPermisoComponente>

                    

               </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
</template>
<script>

/*  

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