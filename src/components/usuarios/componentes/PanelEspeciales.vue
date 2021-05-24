<template>
        <v-expansion-panels focusable>
            <v-expansion-panel >
              <v-expansion-panel-header> Especiales </v-expansion-panel-header>
                <v-expansion-panel-content>

                    <ComboPermisoComponenteGenerico
                        textoDescriptivo= 'VISIBILIDAD DE INCIDENTES'
                        :valor ="this.$store.state.roles.roles_VISIBILIDADDEINCIDENTES"
                        nombrePermiso="VISIBILIDAD DE INCIDENTES"

                        accion_A_ejecutar = "action_roles_VISIBILIDADDEINCIDENTES" 
                      v-bind:itemsOpciones = "['TODOS','PROGRAMA','PROPIOS']"
                    >
                    </ComboPermisoComponenteGenerico>


                    <ComboPermisoComponenteGenerico
                        textoDescriptivo= 'AUTORIZACIÓN PARA IMPRESIONES'
                        :valor ="this.$store.state.roles.roles_AUTORIZAIMPRESION"
                        nombrePermiso="AUTORIZACIÓN PARA IMPRESIONES"
                                             
                        accion_A_ejecutar = "action_roles_AUTORIZAIMPRESION" 
                       v-bind:itemsOpciones = "['SI','NO']"
                    >
                    </ComboPermisoComponenteGenerico>

               </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
</template>
<script>

/*  

*/
import ComboPermisoComponenteGenerico from '@/components/usuarios/componentes/ComboPermisoComponenteGenerico.vue';

export default {

components :{

    ComboPermisoComponenteGenerico

},

data() {
    return {
    
      itemsOpciones:["SI","NO"],
      
    }
},

}

</script>