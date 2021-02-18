<template>
  <div id="app">
    <PDFviewer2/>
  </div>
</template>

<script>
import PDFviewer2 from "@/components/manipulacionArchivos/PDFviewer2.vue";

export default {
  name: "App",
  components: {
    PDFviewer2
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: black;
  padding: 50px;
}
</style>