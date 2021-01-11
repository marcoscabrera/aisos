<template>
        <v-expansion-panels focusable>
            <v-expansion-panel >
              <v-expansion-panel-header> Cierre </v-expansion-panel-header>
                <v-expansion-panel-content>

                    <comboPermisoComponente
                        textoDescriptivo= 'Crear Alta de cierre'
                        :valor ="this.$store.state.roles.roles_ALTADECIERRE"
                        nombrePermiso="ALTA DE CIERRE"
                        accion_A_ejecutar = "action_ALTADECIERRE" 
                    >
                    </comboPermisoComponente>

                    <comboPermisoComponente
                        textoDescriptivo= 'Dar de baja el cierre'
                        :valor ="this.$store.state.roles.roles_BAJADECIERRE"
                        nombrePermiso="BAJA DE CIERRE"
                        accion_A_ejecutar = "action_BAJADECIERRE" 
                    >
                    </comboPermisoComponente>

                    <comboPermisoComponente
                        textoDescriptivo= 'Modificacion de cierre'
                        :valor ="this.$store.state.roles.roles_MODIFICACIONDECIERRE"
                        nombrePermiso="MODIFICACION DE CIERRE"
                        accion_A_ejecutar = "action_MODIFICACIONDECIERRE" 
                    >
                    </comboPermisoComponente>

                    <comboPermisoComponente
                        textoDescriptivo= 'Edicion de cierre'
                        :valor ="this.$store.state.roles.roles_EDICIONDECIERRE"
                        nombrePermiso="EDICION DE CIERRE"
                        accion_A_ejecutar = "action_EDICIONDECIERRE" 
                    >
                    </comboPermisoComponente>

                    <comboPermisoComponente
                        textoDescriptivo= 'Impresion de cierre'
                        :valor ="this.$store.state.roles.roles_IMPRESIONDECIERRE"
                        nombrePermiso="IMPRESION DE CIERRE"
                        accion_A_ejecutar = "action_IMPRESIONDECIERRE" 
                    >
                    </comboPermisoComponente>

                    <comboPermisoComponente
                        textoDescriptivo= 'Visualizacion de cierre'
                        :valor ="this.$store.state.roles.roles_VISUALIZACIONDECIERRE"
                        nombrePermiso="VISUALIZACION DE CIERRE"
                        accion_A_ejecutar = "action_VISUALIZACIONDECIERRE" 
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