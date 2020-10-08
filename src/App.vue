<template>
  <!-- App.vue -->

  <v-app color="indigo">
    <v-navigation-drawer v-model="drawer" app>
      <!-- -->
      <v-list dense>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img
              src="https://www.aldeasinfantiles.org.mx/getmedia/51757cf7-a274-4bdc-b552-4304db77c698/logo-aldeas-mx"
              alt=""
            />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title> Aldeas Infantiles </v-list-item-title>
            <v-list-item-subtitle>
              Sistema de registro de incidentes
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="irADashboard">
          <v-list-item-action>
            <v-icon> mdi-view-dashboard-variant </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title> Dashboard </v-list-item-title>
          </v-list-item-content>
        </v-list-item>


        <v-list-item @click="irADenuncias">
          <v-list-item-action>
            <v-icon> mdi-alert-circle-outline </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title> Incidentes (Eventual) </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        
       

        <v-list-item @click="irAConciencia">
          <v-list-item-action>
            <v-icon> mdi-alarm-panel-outline </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title> Conciencia </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="irAEstadisticas">
          <v-list-item-action>
            <v-icon> mdi-chart-bar </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title> Estadisticas </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="irAconfiguracion">
          <v-list-item-action>
            <v-icon> mdi-application-cog </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title> Configuracion </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-action>
            <v-icon> mdi-logout </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title> Salir </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <!-- -->
      <v-app-bar-nav-icon @click="drawer = !drawer" />
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    drawer: false,
  }),

  methods: {
    irAconfiguracion() {
      this.$router.push("/configuracion");
    },
    irADashboard() {
      this.$router.push("/dashboard");
    },
    irADenuncias() {
      this.$router.push("/denuncias");
    },
    irAConciencia() {
      this.$router.push("/conciencia");
    },
    irAEstadisticas() {
      this.$router.push("/estadisticas");
    },
  },
};
</script>
