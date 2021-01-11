<template>
        <v-expansion-panels focusable>
            <v-expansion-panel >
              <v-expansion-panel-header> Archivos </v-expansion-panel-header>
                <v-expansion-panel-content>

                    <comboPermisoComponente
                        textoDescriptivo= 'Crear Alta de Archivos'
                        :valor ="this.$store.state.roles.roles_ALTADEARCHIVOS"
                        nombrePermiso="ALTA DE ARCHIVOS"
                        accion_A_ejecutar = "action_ALTADEARCHIVOS" 
                    >
                    </comboPermisoComponente>

                    <comboPermisoComponente
                        textoDescriptivo= 'Modificacion de Archivos'
                        :valor ="this.$store.state.roles.roles_MODIFICACIONARCHIVOS"
                        nombrePermiso="ALTA DE ARCHIVOS"
                        accion_A_ejecutar = "action_MODIFICACIONARCHIVOS" 
                    >
                    </comboPermisoComponente>

                    <comboPermisoComponente
                        textoDescriptivo= 'impresionar de Archivos'
                        :valor ="this.$store.state.roles.roles_IMPRESIONARCHIVOS"
                        nombrePermiso="IMPRESION DE ARCHIVOS"
                        accion_A_ejecutar = "action_IMPRESIONARCHIVOS" 
                    >
                    </comboPermisoComponente>        
                    <comboPermisoComponente
                        textoDescriptivo= 'visualizacion de Archivos'
                        :valor ="this.$store.state.roles.roles_VISUALIZACIONARCHIVOS"
                        nombrePermiso="VISUALIZACION DE ARCHIVOS"
                        accion_A_ejecutar = "action_VISUALIZACIONARCHIVOS" 
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