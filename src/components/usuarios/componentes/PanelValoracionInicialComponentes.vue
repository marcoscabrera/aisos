<template>
        <v-expansion-panels focusable>
            <v-expansion-panel >
              <v-expansion-panel-header>Valoracion Inicial</v-expansion-panel-header>
                <v-expansion-panel-content>

                    <comboPermisoComponente
                        textoDescriptivo= 'Crear reporte de Valoracion Inicial'
                        :valor ="this.$store.state.roles.roles_ALTADEVALORACIONINICIAL"
                        nombrePermiso="ALTA DE ALTADEVALORACIONINICIAL"
                        accion_A_ejecutar = "action_ALTADEVALORACIONINICIAL" 
                    >
                    </comboPermisoComponente>


                    <comboPermisoComponente
                        textoDescriptivo= 'Dar de baja  Valoracion Inicial'
                        :valor ="this.$store.state.roles.roles_BAJAVALORACIONINICIAL"
                        nombrePermiso="BAJA DE VALORACION INICIAL"
                        accion_A_ejecutar = "action_BAJAVALORACIONINICIAL" 
                    >
                    </comboPermisoComponente>

                    <comboPermisoComponente
                        textoDescriptivo= 'Modificar Valoracion inicial'
                        :valor ="this.$store.state.roles.roles_MODIFICACIONREAPERTURAVALORACIONINICIAL"
                        nombrePermiso="MODIFICACION DE VALORACION INICIAL"
                        accion_A_ejecutar = "action_MODIFICACIONREAPERTURAVALORACIONINICIAL" 
                    >
                    </comboPermisoComponente>

                    <comboPermisoComponente
                        textoDescriptivo= ' Edicion de  Valoracion inicial'
                        :valor ="this.$store.state.roles.roles_EDITARANTESDECIERREDELAVALORACIONINICIAL"
                        nombrePermiso="EDICION DE VALORACION INICIAL"
                        accion_A_ejecutar = "action_EDITARANTESDECIERREDELAVALORACIONINICIAL" 
                    >
                    </comboPermisoComponente>


                    <comboPermisoComponente
                        textoDescriptivo= 'Impresion de  Valoracion inicial'
                        :valor ="this.$store.state.roles.roles_IMPRESIONVALORACIONINICIAL"
                        nombrePermiso="IMPRESION  DE VALORACION INICIAL"
                        accion_A_ejecutar = "action_IMPRESIONVALORACIONINICIAL" 
                    >
                    </comboPermisoComponente>


                    <comboPermisoComponente
                        textoDescriptivo= 'Visualizacion de  Valoracion inicial'
                        :valor ="this.$store.state.roles.roles_VISUALIZACIONVALORACIONINICIAL"
                        nombrePermiso="VISUALIZACION  DE VALORACION INICIAL"
                        accion_A_ejecutar = "action_VISUALIZACIONVALORACIONINICIAL" 
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