<template>
        <v-expansion-panels focusable>
            <v-expansion-panel >
              <v-expansion-panel-header>Valoracion Integral</v-expansion-panel-header>
                <v-expansion-panel-content>

                    <comboPermisoComponente
                        textoDescriptivo= 'Crear reporte de Valoracion Integral'
                        :valor ="this.$store.state.roles.roles_ALTADEVALORACIONINTEGRAL"
                        nombrePermiso="ALTA DE VALORACION INTEGRAL"
                        accion_A_ejecutar = "action_ALTADEVALORACIONINTEGRAL" 
                    >
                    </comboPermisoComponente>

                    <comboPermisoComponente
                        textoDescriptivo= 'Modificacion   Valoracion Integral'
                        :valor ="this.$store.state.roles.roles_MODIFICACIONREAPERTURAVALORACIONINTEGRAL"
                        nombrePermiso="VISUALIZACION  DE VALORACION INTEGRAL"
                        accion_A_ejecutar = "action_MODIFICACIONREAPERTURAVALORACIONINTEGRAL" 
                    >
                    </comboPermisoComponente>

                    <comboPermisoComponente
                        textoDescriptivo= 'Editar    Valoracion Integral'
                        :valor ="this.$store.state.roles.roles_EDITARANTESDECIERREDELAVALORACIONINTEGRAL"
                        nombrePermiso="EDITAR   VALORACION INTEGRAL"
                        accion_A_ejecutar = "action_EDITARANTESDECIERREDELAVALORACIONINTEGRAL" 
                    >
                    </comboPermisoComponente>

                    <comboPermisoComponente
                        textoDescriptivo= 'Baja    Valoracion Integral'
                        :valor ="this.$store.state.roles.roles_BAJAVALORACIONINTEGRAL"
                        nombrePermiso="BAJA   VALORACION INTEGRAL"
                        accion_A_ejecutar = "action_BAJAVALORACIONINTEGRAL" 
                    >
                    </comboPermisoComponente>

                    <comboPermisoComponente
                        textoDescriptivo= 'Imprimir     Valoracion Integral'
                        :valor ="this.$store.state.roles.roles_IMPRESIONVALORACIONINTEGRAL"
                        nombrePermiso="IMPRESION   VALORACION INTEGRAL"
                        accion_A_ejecutar = "action_IMPRESIONVALORACIONINTEGRAL" 
                    >
                    </comboPermisoComponente>

                    <comboPermisoComponente
                        textoDescriptivo= 'Visualizar     Valoracion Integral'
                        :valor ="this.$store.state.roles.roles_VISUALIZACIONVALORACIONINTEGRAL"
                        nombrePermiso="VISUALIZACION   VALORACION INTEGRAL"
                        accion_A_ejecutar = "action_VISUALIZACIONVALORACIONINTEGRAL" 
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