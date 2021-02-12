<template>
<v-container name="nx">
    <v-row>
        <v-col>
            <h2>Número de Agresores o Agresoras ( personas que cometieron el maltrato)</h2>
        </v-col>
    </v-row>
<v-row>
    <v-col cols="12" xs="12" sm="12" md="4" lg="4"> 
        <ComponentesAgresoresN1>

        </ComponentesAgresoresN1>
    </v-col>
    <v-col cols="12" xs="12" sm="12" md="4" lg="4"> 
        <ComponenteAgresorNN>

        </ComponenteAgresorNN>
    </v-col>
    <v-col cols="12" xs="12" sm="12" md="4" lg="4"> 
        <ComponenteAgresorEP>

        </ComponenteAgresorEP>
    </v-col>
</v-row>
</v-container>

</template>

<script>
import ComponentesAgresoresN1 from '@/components/estadisticas/ComponentesAgresoresN1.vue';
 import ComponenteAgresorNN from '@/components/estadisticas/ComponenteAgresorNN.vue';
 import ComponenteAgresorEP from '@/components/estadisticas/ComponenteAgresorEP.vue';

 export default {

        components :{ ComponentesAgresoresN1,ComponenteAgresorNN,ComponenteAgresorEP }
        
    }
</script>

<style scoped>

</style>