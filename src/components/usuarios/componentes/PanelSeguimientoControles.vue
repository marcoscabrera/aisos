<template>
        <v-expansion-panels focusable>
            <v-expansion-panel >
              <v-expansion-panel-header>Seguimiento</v-expansion-panel-header>
                <v-expansion-panel-content>

                    <comboPermisoComponente
                        textoDescriptivo= 'Crear Alta  de Seguimiento'
                        :valor ="this.$store.state.roles.roles_ALTADESEGUIMIENTO"
                        nombrePermiso="ALTA DE SEGUIMIENTO"
                        accion_A_ejecutar = "action_ALTADESEGUIMIENTO" 
                    >
                    </comboPermisoComponente>

                    <comboPermisoComponente
                        textoDescriptivo= 'Baja  de Seguimiento'
                        :valor ="this.$store.state.roles.roles_BAJADESEGUIMIENTO"
                        nombrePermiso="BAJA DE SEGUIMIENTO"
                        accion_A_ejecutar = "action_BAJADESEGUIMIENTO" 
                    >
                    </comboPermisoComponente>

                    <comboPermisoComponente
                        textoDescriptivo= 'Modificacion  de Seguimiento'
                        :valor ="this.$store.state.roles.roles_MODIFICACIONDESEGUIMIENTO"
                        nombrePermiso="MODIFICACION DE SEGUIMIENTO"
                        accion_A_ejecutar = "action_MODIFICACIONDESEGUIMIENTO" 
                    >
                    </comboPermisoComponente>

                    <comboPermisoComponente
                        textoDescriptivo= 'Edicion  de Seguimiento'
                        :valor ="this.$store.state.roles.roles_EDITARDESEGUIMIENTO"
                        nombrePermiso="EDICION DE  SEGUIMIENTO"
                        accion_A_ejecutar = "action_EDITARDESEGUIMIENTO" 
                    >
                    </comboPermisoComponente>

                    <comboPermisoComponente
                        textoDescriptivo= 'Impresion  de Seguimiento'
                        :valor ="this.$store.state.roles.roles_IMPRESIONDESEGUIMIENTO"
                        nombrePermiso="IMPRESION DE  SEGUIMIENTO"
                        accion_A_ejecutar = "action_IMPRESIONDESEGUIMIENTO" 
                    >
                    </comboPermisoComponente>

                    <comboPermisoComponente
                        textoDescriptivo= 'Visualizacion  de Seguimiento'
                        :valor ="this.$store.state.roles.roles_VISUALIZACIONDESEGUIMIENTO"
                        nombrePermiso="VISUALIZACION DE  SEGUIMIENTO"
                        accion_A_ejecutar = "action_VISUALIZACIONDESEGUIMIENTO" 
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