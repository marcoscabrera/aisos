<template>
  <v-col cols="12">
    <v-textarea
      filled
      name="input-7-4"
      :label="mensaje"
      :value='this.$store.state.conciencia.conciencia_estatus' 
              
      @input="asignarValor($event)"
      auto-grow
      :error-messages="errores"
    >
    </v-textarea>
  </v-col>
</template>

<script>
export default {
  name: "statusConciencia",

  props: ["texto"],

  methods: {
    asignarValor(evento) {
      console.log(evento);
      this.$store.dispatch('action_conciencia_estatus',evento );
      let cuantos = this.cuentaPalabras(evento);
      let m1 = "HA EXCEDIDO EL NUMERO MAXIMO DE PALABRAS PERMITIDAS =";
      cuantos > 250 ? (this.errores = m1) : (this.errores = "");
    },

    cuentaPalabras(texto) {
      let numeroPalabras = texto.split(" ");
      let cuantos = numeroPalabras.length;

      let m = `ESTATUS CONCIENCIA  PALABRAS #${cuantos}`;

      this.mensaje = m;

      return cuantos;
    },
  },

  data() {
    return {
      medidasproteccion: "",
      mensaje: "ESTATUS CONCIENCIA (250 PALABRAS)",
      errores: "",
      numeroPalabras: 0,
    };
  },
};
</script>