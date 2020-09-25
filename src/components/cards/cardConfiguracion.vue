<template>
  <v-col xs-12 sm-6 md-6 lg-4>
    <v-card width="100%">
      <v-card-text class="text--primary">
        <div>{{ titulo }}</div>
      </v-card-text>
      <v-card-actions>
        <v-btn color="orange" block @click="irALaRuta">
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
    ruta: String,
    titulo: String,
  },

  methods: {
    irALaRuta() {
      let rutalocal = "/" + this.ruta;

      this.$router.push(rutalocal);

      // console.log("click");
    },
  },
};
</script>