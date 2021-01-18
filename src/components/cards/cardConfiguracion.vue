<template>
  <v-col xs-12 sm-6 md-6 lg-6>
    <v-card width="100%">
      <v-card-text class="text--primary">
        <div>{{ titulo }}</div>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" block @click="irALaRuta">
          {{ titulo }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
<script>
export default {
  name: "cardConfiguracion",

  props: {
    //Es la ruta a donde se desea navegar
    ruta: String,
    //Nombre que se despliega en el componente
    titulo: String,
  },

  methods: {
    //@vuese
    //se dispara cuando se hace click en el boton
    // y navega a  la ruta que se  tenga en el
    // props ruta.
    irALaRuta() {
      let rutalocal = "/" + this.ruta;

      this.$router.push(rutalocal);

      // console.log("click");
    },
  },
};
</script>