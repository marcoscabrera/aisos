<template>
        <v-expansion-panels focusable>
            <v-expansion-panel >
              <v-expansion-panel-header> Investigacion </v-expansion-panel-header>
                <v-expansion-panel-content>

                    <comboPermisoComponente
                        textoDescriptivo= 'Crear Alta de Investigacion'
                        :valor ="this.$store.state.roles.roles_ALTAINVESTIGACION"
                        nombrePermiso="ALTA DE INVESTIGACION"
                        accion_A_ejecutar = "action_ALTAINVESTIGACION" 
                    >
                    </comboPermisoComponente>


                    <comboPermisoComponente
                        textoDescriptivo= 'Baja de Investigacion'
                        :valor ="this.$store.state.roles.roles_BAJAINVESTIGACION"
                        nombrePermiso="BAJA DE INVESTIGACION"
                        accion_A_ejecutar = "action_BAJAINVESTIGACION" 
                    >
                    </comboPermisoComponente>
                    
                    <comboPermisoComponente
                        textoDescriptivo= 'Modificacion de Investigacion'
                        :valor ="this.$store.state.roles.roles_MODIFICACIONINVESTIGACION"
                        nombrePermiso="MODIFICACION DE INVESTIGACION"
                        accion_A_ejecutar = "action_MODIFICACIONINVESTIGACION" 
                    >
                    </comboPermisoComponente>

                    <comboPermisoComponente
                        textoDescriptivo= 'Edicion de Investigacion'
                        :valor ="this.$store.state.roles.roles_EDICIONINVESTIGACION"
                        nombrePermiso="EDICION DE INVESTIGACION"
                        accion_A_ejecutar = "action_EDICIONINVESTIGACION" 
                    >
                    </comboPermisoComponente>

                    <comboPermisoComponente
                        textoDescriptivo= 'Visualizacion de Investigacion'
                        :valor ="this.$store.state.roles.roles_VISUALIZACIONINVESTIGACION"
                        nombrePermiso="VISUALIZACION DE INVESTIGACION"
                        accion_A_ejecutar = "action_VISUALIZACIONINVESTIGACION" 
                    >
                    </comboPermisoComponente>


                    <comboPermisoComponente
                        textoDescriptivo= 'Impresion de Investigacion'
                        :valor ="this.$store.state.roles.roles_IMPRESIONINVESTIGACION"
                        nombrePermiso="IMPRESION DE INVESTIGACION"
                        accion_A_ejecutar = "action_IMPRESIONINVESTIGACION" 
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