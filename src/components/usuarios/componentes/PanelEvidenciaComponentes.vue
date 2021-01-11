<template>
        <v-expansion-panels focusable>
            <v-expansion-panel >
              <v-expansion-panel-header> Evidencia </v-expansion-panel-header>
                <v-expansion-panel-content>

                    <comboPermisoComponente
                        textoDescriptivo= 'Crear Alta de Evidencia'
                        :valor ="this.$store.state.roles.roles_ALTAEVIDENCIA"
                        nombrePermiso="ALTA DE INVESTIGACION"
                        accion_A_ejecutar = "action_ALTAEVIDENCIA" 
                    >
                    </comboPermisoComponente>


                    <comboPermisoComponente
                        textoDescriptivo= 'Crear Alta de Evidencia'
                        :valor ="this.$store.state.roles.roles_BAJAEVIDENCIA"
                        nombrePermiso="BAJA DE EVIDENCIA"
                        accion_A_ejecutar = "action_BAJAEVIDENCIA" 
                    >
                    </comboPermisoComponente>



                    <comboPermisoComponente
                        textoDescriptivo= 'Modificacion de Evidencia'
                        :valor ="this.$store.state.roles.roles_MODIFCACIONEVIDENCIA"
                        nombrePermiso="MODIFICACION DE EVIDENCIA"
                        accion_A_ejecutar = "action_MODIFCACIONEVIDENCIA" 
                    >
                    </comboPermisoComponente>

                    <comboPermisoComponente
                        textoDescriptivo= 'Edicion de Evidencia'
                        :valor ="this.$store.state.roles.roles_EDICIONEVIDENCIA"
                        nombrePermiso=" EDICION DE EVIDENCIA"
                        accion_A_ejecutar = "action_EDICIONEVIDENCIA" 
                    >
                    </comboPermisoComponente>


                    <comboPermisoComponente
                        textoDescriptivo= 'Impresion de Evidencia'
                        :valor ="this.$store.state.roles.roles_IMPRESIONEVIDENCIA"
                        nombrePermiso=" IMRESION DE EVIDENCIA"
                        accion_A_ejecutar = "action_IMPRESIONEVIDENCIA" 
                    >
                    </comboPermisoComponente>



                    <comboPermisoComponente
                        textoDescriptivo= 'Visualizacion de Evidencia'
                        :valor ="this.$store.state.roles.roles_VISUALIZACIONEVIDENCIA"
                        nombrePermiso=" VISUALIZACION DE EVIDENCIA"
                        accion_A_ejecutar = "action_VISUALIZACIONEVIDENCIA" 
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