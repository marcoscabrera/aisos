<template>
<AgregarUsuarioComponente></AgregarUsuarioComponente>
</template>

<script>
//import agregarRolComponente from '@/components/usuarios/agregarRolComponente.vue';
import AgregarUsuarioComponente from '../components/usuarios/AgregarUsuarioComponente.vue';

    export default {

        name : 'NuevoUsuario',

        components :{ AgregarUsuarioComponente },

        data() {
            return {

                AgregarUsuarioComponente
            }
        }
        
    }
</script>

<style scoped>

</style>