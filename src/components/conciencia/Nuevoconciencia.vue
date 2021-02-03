<template>
<AgregarConcienciaComponente ></AgregarConcienciaComponente>
</template>

<script>

import AgregarConcienciaComponente from '@/components/conciencia/AgregarConcienciaComponente.vue';

    export default {

        name : 'NuevoConciencia',

        components :{ AgregarConcienciaComponente },


        data() {
            return {
                parametro : '',
                AgregarConcienciaComponente
            }
        }
        
    }
</script>

<style scoped>

</style>