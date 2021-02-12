<template>
<v-container name="nx">
    <v-row>
        <v-col>
            <h2>Número de Victimas</h2>
        </v-col>
    </v-row>
<v-row>
    <v-col cols="12" xs="12" sm="12" md="4" lg="4"> 
        <ComponenteVictimasPorGenero>

        </ComponenteVictimasPorGenero>
    </v-col>
    <v-col cols="12" xs="12" sm="12" md="4" lg="4"> 
        <ComponenteVIctimasSOS>

        </ComponenteVIctimasSOS>
    </v-col>
    <v-col cols="12" xs="12" sm="12" md="4" lg="4"> 
        <ComponenteVictimasSinAPoyo>

        </ComponenteVictimasSinAPoyo>
    </v-col>
</v-row>
</v-container>

</template>

<script>
import ComponenteVictimasPorGenero from '@/components/estadisticas/ComponenteVictimasPorGenero.vue';
 import ComponenteVIctimasSOS from '@/components/estadisticas/ComponenteVIctimasSOS.vue';
 import ComponenteVictimasSinAPoyo from '@/components/estadisticas/ComponenteVictimasSinAPoyo.vue';

 export default {

        components :{ ComponenteVictimasPorGenero,ComponenteVIctimasSOS,ComponenteVictimasSinAPoyo }
        
    }
</script>

<style scoped>

</style>