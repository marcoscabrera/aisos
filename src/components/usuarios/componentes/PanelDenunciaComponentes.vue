<template>
        <v-expansion-panels focusable>
            <v-expansion-panel >
              <v-expansion-panel-header> Denuncias </v-expansion-panel-header>
                <v-expansion-panel-content>

                    <comboPermisoComponente
                        textoDescriptivo= 'Crear Alta de Denuncia'
                        :valor ="this.$store.state.roles.roles_ALTADENUNCIA"
                        nombrePermiso="ALTA DE DENUNCIA"
                        accion_A_ejecutar = "action_ALTADENUNCIA" 
                    >
                    </comboPermisoComponente>

                    <comboPermisoComponente
                        textoDescriptivo= 'Baja de Denuncia'
                        :valor ="this.$store.state.roles.roles_BAJADENUNCIA"
                        nombrePermiso="BAJA DE DENUNCIA"
                        accion_A_ejecutar = "action_BAJADENUNCIA" 
                    >
                    </comboPermisoComponente>

                    <comboPermisoComponente
                        textoDescriptivo= 'Modificacion de Denuncia'
                        :valor ="this.$store.state.roles.roles_MODIFCACIONDENUNCIA"
                        nombrePermiso="MODIFICACION DE DENUNCIA"
                        accion_A_ejecutar = "action_MODIFCACIONDENUNCIA" 
                    >
                    </comboPermisoComponente>

                    <comboPermisoComponente
                        textoDescriptivo= 'Edicion de Denuncia'
                        :valor ="this.$store.state.roles.roles_EDICIONDENUNCIA"
                        nombrePermiso="EDICION DE DENUNCIA"
                        accion_A_ejecutar = "action_EDICIONDENUNCIA" 
                    >
                    </comboPermisoComponente>
                    <comboPermisoComponente
                        textoDescriptivo= 'Impresion de Denuncia'
                        :valor ="this.$store.state.roles.roles_IMPRESIONDENUNCIA"
                        nombrePermiso="IMPRESION DE DENUNCIA"
                        accion_A_ejecutar = "action_IMPRESIONDENUNCIA" 
                    >
                    </comboPermisoComponente>

                    <comboPermisoComponente
                        textoDescriptivo= 'Visualizacion de Denuncia'
                        :valor ="this.$store.state.roles.roles_VISUALIZACIONDENUNCIA"
                        nombrePermiso="Visualizacion DE DENUNCIA"
                        accion_A_ejecutar = "action_VISUALIZACIONDENUNCIA" 
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