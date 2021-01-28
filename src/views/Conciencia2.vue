<template>
  <v-container name="container_conciencia">
    <ConcienciaCRUD :tipo="tipo"> </ConcienciaCRUD>
  </v-container>
</template>
<script>
import ConcienciaCRUD from "@/components/conciencia/ConcienciaCRUD.vue";
export default {
  name: "Conciencia",
  data() {
    return {
      parametro: '',
      tipo: ''
    }
  },
   methods: {
        
        recuperarParametro() {
                
                this.parametro = this.$route.params.tipo;
                this.parametro == 'c' ? this.tipo ="Conciencia" :this.tipo ="Prevencion"
                console.log("valor del parametro : " + this.parametro);

            }
        },
        mounted () {
          this.recuperarParametro();
        },
  
  components: {
    ConcienciaCRUD,
  },
};
</script>
<style >
</style>