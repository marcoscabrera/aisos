<template>
<v-row>
   
         <v-col cols="12" xm="12" sm="6" md="6" lg="6">
             <ComponenteDatoSuma></ComponenteDatoSuma>
          </v-col>
         <v-col cols="12" xm="12" sm="6" md="6" lg="6">
             <ComponenteDatosSuimaNiveles></ComponenteDatosSuimaNiveles>
          </v-col>
          <v-col cols="12" xm="12" sm="6" md="6" lg="6">
             <ComponenteDatosSumaTipologia></ComponenteDatosSumaTipologia>
          </v-col>
         <v-col cols="12" xm="12" sm="6" md="6" lg="6">
             <ComponenteDatoSumaPorRespuesta></ComponenteDatoSumaPorRespuesta>
          </v-col>
</v-row>
</template>

<script>
import ComponenteDatoSuma from '@/components/estadisticas/ComponenteDatoSuma.vue';
import ComponenteDatosSuimaNiveles from '@/components/estadisticas/ComponenteDatosSuimaNiveles.vue';

import ComponenteDatosSumaTipologia   from '@/components/estadisticas/ComponenteDatosSumaTipologia.vue';

import ComponenteDatoSumaPorRespuesta from  '@/components/estadisticas/ComponenteDatoSumaPorRespuesta.vue';

export default {
        components :{ ComponenteDatoSumaPorRespuesta ,ComponenteDatosSumaTipologia, ComponenteDatoSuma,ComponenteDatosSuimaNiveles}
    }
</script>

<style lang="scss" scoped>

</style>