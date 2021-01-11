<template>
        <v-expansion-panels focusable>
            <v-expansion-panel >
              <v-expansion-panel-header>Catalogos</v-expansion-panel-header>
                <v-expansion-panel-content>

                    <comboPermisoComponente
                        textoDescriptivo= 'Acceso a los catalogos'
                        :valor ="this.$store.state.roles.roles_ALTADECATALOGOS"
                        nombrePermiso="ALTA DE CATALOGOS"
                        accion_A_ejecutar = "action_ALTADECATALOGOS" 
                    >
                    </comboPermisoComponente>


                    <comboPermisoComponente
                        textoDescriptivo= 'Dar de baja  catalogos'
                        :valor ="this.$store.state.roles.roles_BAJADECATALOGOS"
                        nombrePermiso="BAJA DE CATALOGOS"
                        accion_A_ejecutar = "action_BAJADECATALOGOS" 
                    >
                    </comboPermisoComponente>

                    <comboPermisoComponente
                        textoDescriptivo= 'Modificar los  catalogos'
                        :valor ="this.$store.state.roles.roles_MODIFICACIOnDECATALOGOS"
                        nombrePermiso="MODIFICACION DE CATALOGOS"
                        accion_A_ejecutar = "action_MODIFICACIOnDECATALOGOS" 
                    >
                    </comboPermisoComponente>

               </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
</template>
<script>

/*  

"ALTADECATALOGOS",
"BAJADECATALOGOS",
"MODIFICACIOnDECATALOGOS",

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