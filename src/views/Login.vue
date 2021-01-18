<template>
<LoginComponente></LoginComponente>
</template>

<script>

import LoginComponente from '@/components/usuarios/componentes/LoginComponente.vue';
import controlDeSesion from '@/sesion/controlDeSesion.js';
    export default {

        components :{ LoginComponente },
        data() {
            return {
               controlDeSesion
            }
        },

        
    }
</script>

<style scoped>

</style>