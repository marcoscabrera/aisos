<template>
<v-bottom-navigation v-model="value">
    <v-btn value="recent">
      <span>Politicas</span>

      <v-icon>mdi-file-document</v-icon>
    </v-btn>

    <v-btn value="favorites">
      <span>Criterios</span>

      <v-icon>mdi-file-document</v-icon>
    </v-btn>

    <v-btn value="nearby">
      <span>Otros</span>

      <v-icon>mdi-file-document</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
    
}
</script>